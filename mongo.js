const mongoose = require("mongoose")

const password = process.argv[2]

const url = `mongodb+srv://admin:${password}@cluster0.dbtyi.mongodb.net/phonebook-app?retryWrites=true&w=majority`

mongoose.connect(url)

if (process.argv.length === 3) {
  console.log("phonebook:")
  Person.find({}).then((result) => {
    result.forEach((person) => {
      console.log(`${person.name} ${person.number}`)
    })
    mongoose.connection.close()
  })
} else {
  const person = new Person({
    name: process.argv[3],
    number: process.argv[4],
  })

  person.save().then((result) => {
    console.log(
      `added ${process.argv[3]} number ${process.argv[4]} to phonebook`
    )
    mongoose.connection.close()
  })
}
