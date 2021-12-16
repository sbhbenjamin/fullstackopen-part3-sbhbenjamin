const express = require("express")
const app = express()
const morgan = require("morgan")
const cors = require("cors")

app.use(cors())
app.use(express.json())

morgan.token("body", (req) => {
  return JSON.stringify(req.body)
})
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
)

let entries = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
]

app.get("/info", (req, res) => {
  res.send(
    `<p>Phonebook has info for ${entries.length} people</p><p>${new Date()}</p>`
  )
})

app.get("/api/persons", (req, res) => {
  res.json(entries)
})

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id)
  const person = entries.find((person) => person.id === id)

  if (person) {
    res.json(person)
  } else {
    res.status(404).end()
  }
})

app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id)
  entries = entries.filter((person) => person.id !== id)
  res.status(204).end()
})

const generateId = () => {
  const maxId = entries.length > 0 ? Math.max(...entries.map((p) => p.id)) : 0
  return Math.random() * Number.MAX_VALUE
}

const nameDuplicate = (name) => {
  return entries.filter((person) => person.name === name)
}

app.post("/api/persons", (req, res) => {
  const body = req.body
  if (body.constructor === Object && Object.keys(body).length === 0) {
    return res.status(400).json({
      error: "content missing",
    })
  } else if (!Object.keys(body).find((key) => key === "name")) {
    return res.status(400).json({
      error: "name missing",
    })
  } else if (!Object.keys(body).find((key) => key === "number")) {
    return res.status(400).json({
      error: "number missing",
    })
  } else if (nameDuplicate(body.name).length > 0) {
    return res.status(409).json({
      error: "name must be unique",
    })
  }

  const person = {
    id: generateId(),
    name: body.name,
    number: body.number,
  }

  entries = entries.concat(person)
  res.json(person)
})

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: "unknown endpoint" })
}

app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`)
})
