// app.js
const config = require('./utils/config')
const express = require('express')
require('express-async-errors')
const app = express()
const cors = require('cors')
const blogsRouter = require('./controllers/blogs')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

logger.info('connecting to', config.MONGODB_URI)

const { requestLogger, unknownEndpoint, errorHandler } = require("./utils/middleware")



app.use(cors())
app.use(express.static('dist'))
app.use(express.json())
app.use(requestLogger)

app.use("/api/blogs", blogsRouter)

app.use(unknownEndpoint)
app.use(errorHandler)

module.exports = app

