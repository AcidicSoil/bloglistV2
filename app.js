// app.js
const express = require('express')
const cors = require('cors')
const blogsRouter = require('./controllers/blogs') // This assumes you've moved your blog routes to a separate module

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/blogs', blogsRouter) // This is using the router from your blogs controller

module.exports = app
