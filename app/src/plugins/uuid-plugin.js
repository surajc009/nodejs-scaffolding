const { v4: uuid } = require("uuid")

exports.uuid = () => {
  return uuid()
}
