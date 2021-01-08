module.exports = {
  async up(db, client) {
    await db.createCollection("Person", {
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: ["phone", "email"]
        }
      }
    })
  },

  async down(db, client) {
    await db.collection("Person").drop()
  }
}
