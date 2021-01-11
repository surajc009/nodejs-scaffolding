const { connectMongo, closeDatabase, clearDatabase } = require("./../databases/mongo-db")
const responseConfig = require("./../config/messages")

const connectMongoDb = () => {
  try {
    return connectMongo()
  } catch (error) {
    throw new Error(responseConfig.applicationMessages.dbConnectionError)
  }
}

const closeMongoDB = () => {
  try {
    return closeDatabase()
  } catch (error) {
    throw new Error(responseConfig.applicationMessages.dbCloseConnectionError)
  }
}

const clearMongoDB = () => {
  try {
    return clearDatabase()
  } catch (error) {
    throw new Error(responseConfig.applicationMessages.deleteCollectionError)
  }
}

module.exports = {
  connectMongoDb,
  closeMongoDB,
  clearMongoDB
}
