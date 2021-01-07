const Person = require("../models/person")
const DataService = require("./data-service")
const dataService = new DataService(Person)
class PersonService {
  async create(body) {
    try {
      return await dataService.create(body)
    } catch (err) {
      throw err.errors || err
    }
  }
}
module.exports = PersonService
