const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // Title is mandatory
    minLength: 1
  },
  author: {
    type: String,
    required: true, // Author is mandatory
    minLength: 1
  },
  url: {
    type: String,
    required: true, // URL is mandatory
    minLength: 1
  },
  likes: {
    type: Number,
    default: 0 // Default value for likes is 0
  },
})

blogSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

module.exports = mongoose.model("Blog", blogSchema)