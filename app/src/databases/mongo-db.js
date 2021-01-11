const mongoose = require("mongoose")
const config = require("../config/config")

exports.connectMongo = () => {
  return mongoose.connect(config.mongodb.connectionUri, {
    useNewUrlParser   : true,
    useUnifiedTopology: true,
    autoIndex         : false,
    autoCreate        : false
  }).then(res => console.log("DB Connected!"))
}

exports.closeDatabase = async () => {
  await mongoose.connection.dropDatabase()
  await mongoose.connection.close()
}

exports.clearDatabase = async () => {
  const collections = mongoose.connection.collections
  for (const key in collections) {
    const collection = collections[key]
    await collection.deleteMany()
  }
}
