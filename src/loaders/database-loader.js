const { connectMongo } = require("./../databases/mongo-db")
const responseConfig = require("./../config/messages")

const connectMongoDb = () => {
  try {
    return connectMongo()
  } catch (error) {
    throw new Error(responseConfig.applicationMessages.dbConnectionError)
  }
}

module.exports = {
  connectMongoDb
}
