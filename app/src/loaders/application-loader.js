const express = require("express")
const bodyParser = require("body-parser")
const fs = require("fs")

const logger = require("./logger-loader")
const config = require("./../config/config")
const responseConfig = require("./../config/messages")
const routes = require("./../routes/routes")
const { connectMongoDb } = require("./database-loader")
const errMiddleware = require("./../middlewares/error-middleware")
const addUniqueRequestId = require("../middlewares/uuid-middleware")
const appResponse = require("./../middlewares/response-middleware")
const {
  startProfile,
  endProfile
} = require("./../middlewares/profiling-middleware")

const app = express()
class ApplicationLoader {
  async bootApplication() {
    this.registerMiddleware()
    this.registerRoutes()
    await this.bootServer()
  }

  registerMiddleware() {
    app.use(addUniqueRequestId)
    app.use(startProfile)
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(errMiddleware)
    app.use(appResponse)
    app.get("/app-health-check", this.healthCheck)
    app.use(endProfile)
  }

  healthCheck(req, resp, next) {
    resp.send({
      statusCode: 200,
      message   : "Application is running..!!",
      uuid      : req.uuid
    })
    next()
  }

  registerRoutes() {
    app.use("/new", routes)
  }

  async bootServer() {
    try {
      await connectMongoDb()
      await this.checkLogDirectoryExists()
      app.listen(config.port, () => {
        logger.info(responseConfig.applicationMessages.appStarted + config.port)
      })
    } catch (error) {
      logger.error(error.message || error)
    }
  }

  async checkLogDirectoryExists() {
    if (!config.loggingEnabled) return
    if (!fs.existsSync(config.logPathDirectory)) {
      throw new Error(
        responseConfig.applicationMessages.logDirError,
        config.logPathDirectory
      )
    }
  }
}

module.exports = {
  ApplicationLoader,
  app
}
