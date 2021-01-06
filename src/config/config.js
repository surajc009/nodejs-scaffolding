const dotenv = require("dotenv")

process.env.NODE_ENV = process.env.NODE_ENV || "development"

const envFound = dotenv.config()
if (envFound.error) {
  throw new Error("Couldn't find .env file at root directory")
}

module.exports = {
  port: process.env.PORT || 3000,
  api : {
    prefix: "/api"
  },
  mongodb: {
    mongoDatabaseHost: process.env.DB_MONGO_HOST_URL,
    mongoDatabase    : process.env.DB_MONGO_DATABASE,
    connectionUri    :
      process.env.DB_MONGO_HOST_URL + "/" + process.env.DB_MONGO_DATABASE
  },
  logPathDirectory: process.env.LOG_PATH_DIR + "/",
  loggingEnabled  : true
}
