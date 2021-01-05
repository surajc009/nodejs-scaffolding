const { uuid } = require("../plugins/uuid-plugin")

const addUniqueRequestId = (req, res, next) => {
  req.uuid = uuid()
  next()
}
module.exports = addUniqueRequestId
