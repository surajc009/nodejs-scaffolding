class DataService {
  constructor(Model) {
    this.model = Model
  }

  create(body) {
    return this.model.create(body)
  }
}
module.exports = DataService
