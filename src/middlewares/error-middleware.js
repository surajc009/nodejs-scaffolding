const errMiddleware = (req, resp, next, err) => {
  console.log("custom error middleware logged")
  console.log(err)
}
module.exports = errMiddleware
