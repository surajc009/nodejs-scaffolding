const PersonService = require("../services/person-service")
const personService = new PersonService()
exports.create = async (req, res) => {
  try {
    const result = await personService.create(req.body)
    res.send(result)
  } catch (err) {
    res.status(400).send({ error: err })
  }
}
