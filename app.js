// app.js
const express = require("express")
const app = express()
const { requestLogger, unknownEndpoint, errorHandler } = require("./utils/middleware")
const blogRouter = require("./controllers/blogs")

app.use(express.json())
app.use(requestLogger)

app.use("/api/blogs", blogRouter)

app.use(unknownEndpoint)
app.use(errorHandler)

module.exports = app
