const { ApplicationLoader } = require("./src/loaders/application-loader")

const bootApplication = async () => {
  await (new ApplicationLoader()).bootApplication()
}
bootApplication()
