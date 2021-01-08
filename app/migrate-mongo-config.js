// In this file you can configure migrate-mongo
const path = require("path")
const applicationConfig = require("./src/config/config")
const config = {
  mongodb: {
    // TODO Change (or review) the url to your MongoDB:
    url: applicationConfig.mongodb.connectionUri,

    // TODO Change this to your database name:
    databaseName: applicationConfig.mongodb.mongoDatabase || "PlaceholderProjectName",

    options: {
      useNewUrlParser   : true, // removes a deprecation warning when connecting
      useUnifiedTopology: true // removes a deprecating warning when connecting
      //   connectTimeoutMS: 3600000, // increase connection timeout to 1 hour
      //   socketTimeoutMS: 3600000, // increase socket timeout to 1 hour
    }
  },
  // The migrations dir, can be an relative or absolute path. Only edit this when really necessary.
  migrationsDir: path.join(process.cwd(), "/src/migrations"),

  // The mongodb collection where the applied changes are stored. Only edit this when really necessary.
  changelogCollectionName: "changelog",

  // The file extension to create migrations and search for in migration dir
  migrationFileExtension: ".js"
}

// Return the config as a promise
module.exports = config
