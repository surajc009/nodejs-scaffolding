module.exports = {
  roots              : ["./src/test"],
  collectCoverageFrom: [
    "**/*.js",
    "!**/*.config.js",
    // "!**/node_modules/**",
    // "!**/coverage/**",
    "!**/app.js/**"
    // "!**/test/**"
  ],
  collectCoverage     : true,
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  coverageThreshold   : {
    global: {
      branches  : 90,
      functions : 90,
      lines     : 90,
      statements: 90
    }
  },
  testEnvironment  : "node",
  coverageReporters: ["json", "lcov", "text", "clover"]
}
