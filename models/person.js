const mongoose = require("mongoose")
const uniqueValidator = require("mongoose-unique-validator")
require("dotenv").config()

const url = process.env.MONGODB_URI
console.log("Connecting to MongoDB")

mongoose
  .connect(url)
  .then((res) => {
    console.log("Connected to MongoDB")
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB: ", error.message)
  })

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
  },
  number: {
    type: String,
    required: true,
    minLength: 8,
  },
})
personSchema.plugin(uniqueValidator)

// transform the id to a string
personSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

module.exports = mongoose.model("Person", personSchema)

// else if (nameDuplicate(body.name).length > 0) {
//   return res.status(409).json({
//     error: "name must be unique",
//   })
// }
