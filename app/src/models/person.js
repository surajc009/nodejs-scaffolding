// Require Mongoose
const mongoose = require("mongoose")

// Define a schema
const Schema = mongoose.Schema

const person = new Schema({
  email: String,
  phone: Number
})

const Person = mongoose.model("Person", person, "Person")

module.exports = Person
