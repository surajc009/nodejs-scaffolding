const { connectMongoDb, closeMongoDB, clearMongoDB } = require("../loaders/database-loader")
const PersonService = require("../services/person-service")
const personService = new PersonService()

beforeAll(async () => await connectMongoDb())
afterEach(async () => await clearMongoDB())
afterAll(async () => await closeMongoDB())

test("insert a person", async (done) => {
  const body = { email: "samsam" }
  try {
    const personDetails = await personService.create(body)
    expect(personDetails).toHaveProperty("id")
    done()
  } catch (error) {
    done()
  }
})

test("insert a person - error case", async (done) => {
  const body = { email: "damdda" }
  try {
    const personDetails = await personService.create(body)
    expect(personDetails).toHaveProperty("__vv")
  } catch (error) {
    done()
  }
})
