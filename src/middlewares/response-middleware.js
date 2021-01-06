const _ = require("lodash")

const responseConfig = require("./../config/messages")
const logger = require("./../loaders/logger-loader")

const appResponse = (req, resp, next) => {
  const send = resp.send
  resp.send = (body) => {
    const response = {}
    //  Set meta property on response
    // response.meta = []
    //  Set action property on response
    // response.action = {}
    constructResponse(resp, body, response)
    logResponse(req, body)

    resp.send = send
    resp.send(response)
  }
  next()
}

const constructResponse = (resp, body, response) => {
  const statusCode = resp.statusCode || 200
  const { positiveCodes, negativeCodes } = getStatusCodes()

  if (positiveCodes.includes(statusCode)) {
    setSuccessResponse(response, body)
  } else if (negativeCodes.includes(statusCode)) {
    setErrorResponse(response, body, statusCode)
  }
}

const setSuccessResponse = (response, body) => {
  response.message = responseConfig.apiResponse.success

  if (body && body.metaData) {
    response.meta = body.metaData
    response.data = body.rows.rows
    response.pagination = body.rows.pagination
  } else {
    response.data = body
  }
}

const setErrorResponse = (response, body, statusCode) => {
  response.error = {
    message:
      body.error.message || body.error || responseConfig.apiResponse.error,
    error_code: statusCode,
    errors    : []
  }
}

const getStatusCodes = () => {
  const positiveCodes = _.range(200, 300)
  const negativeCodes = _.range(400, 600)
  return { positiveCodes, negativeCodes }
}

const logResponse = (req, body) => {
  logger.info(req.uuid + " Method: %s - URL: %s", req.method, req.originalUrl)
  logger.info(req.uuid + " Body: %s", JSON.stringify(req.body))

  if (body && body.error) {
    logger.error(
      req.uuid + " ERROR: %s",
      JSON.stringify(body.error.message || body.error)
    )
    logger.error(req.uuid + " ERROR STACK: %s", body.error.stack)
  }
}

module.exports = appResponse
