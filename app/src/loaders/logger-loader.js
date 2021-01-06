const { createLogger, format, transports } = require("winston")
require("winston-daily-rotate-file")

const config = require("../config/config")

const level = process.env.LOG_LEVEL || "info"
const logPathDirectory = config.logPathDirectory

function formatParams(options) {
  const { timestamp, level, message, ...args } = options
  const ts = timestamp.slice(0, 19)

  return `${ts} ${level}: ${message} ${
    Object.keys(args).length ? JSON.stringify(args, "", "") : ""
  }`
}

const developmentFormat = format.combine(
  format.colorize(),
  format.timestamp(),
  format.align(),
  format.splat(),
  format.printf(formatParams)
)

const productionFormat = format.combine(
  format.timestamp(),
  format.align(),
  format.splat(),
  format.printf(formatParams)
)

const transport = new transports.DailyRotateFile({
  dirname      : logPathDirectory,
  filename     : "PlaceholderProjectName-%DATE%.log",
  datePattern  : "YYYY-MM-DD-HH",
  zippedArchive: true
})

let logger = createLogger({
  level     : level,
  format    : developmentFormat,
  transports: [new transports.Console()]
})

if (process.env.NODE_ENV === "production") {
  logger = createLogger({
    exitOnError: false,
    level      : level,
    format     : productionFormat,
    transports : [transport]
  })
}

module.exports = logger
