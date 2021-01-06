const mongoose = require("mongoose")
const config = require("../config/config")

exports.connectMongo = () => {
  return mongoose.connect(config.mongodb.connectionUri, {
    useNewUrlParser   : true,
    useUnifiedTopology: true
  })
}
