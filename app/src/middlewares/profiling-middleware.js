const logger = require("./../loaders/logger-loader")

let profiler
exports.startProfile = (req, resp, next) => {
  profiler = logger.startTimer()
  logger.info(`${req.uuid} ${req.ip} ${req.get("User-Agent")}`)
  next()
}

exports.endProfile = (req, resp, next) => {
  profiler.done({
    message: `${req.uuid} ${req.method} ${req.originalUrl} ${resp.statusCode}`
  })
  next()
}
