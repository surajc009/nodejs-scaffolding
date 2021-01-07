// Require Mongoose
const mongoose = require("mongoose")
// Define a schema
const Schema = mongoose.Schema
const person = new Schema({
  name: String,
  age : Number
})
const Person = mongoose.model("Person", person)
module.exports = Person
