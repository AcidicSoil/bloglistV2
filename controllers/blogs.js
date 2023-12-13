const blogsRouter = require("express").Router()
const Blog = require("../models/blog")

blogsRouter.get("/", async (request, response) => {
  try {
    const blogs = await Blog.find({})
    response.json(blogs)
  } catch (error) {
    response.status(500).json({ error: "something went wrong" })
  }
})

blogsRouter.get("/:id", async (request, response, next) => {
  try {
    const blog = await Blog.findById(request.params.id)
    if (blog) {
      response.json(blog)
    } else {
      response.status(404).end()
    }
  } catch (error) {
    next(error)
  }
})

blogsRouter.post("/", async (request, response) => {
  try {
    const body = request.body
    const blog = new Blog({
      title: body.title,
      author: body.author,
      url: body.url,
      likes: body.likes || 0 // Default to 0 if not provided
    })
    const savedBlog = await blog.save()
    response.status(201).json(savedBlog)
  } catch (error) {
    response.status(400).json({ error: error.message })
  }
})

blogsRouter.delete("/:id", async (request, response) => {
  try {
    await Blog.findByIdAndDelete(request.params.id)
    response.status(204).end()
  } catch (error) {
    response.status(400).json({ error: error.message })
  }
})

blogsRouter.put("/:id", async (request, response) => {
  const { title, author, url, likes } = request.body

  const updatedBlog = {
    title,
    author,
    url,
    likes
  }

  try {
    const blog = await Blog.findByIdAndUpdate(request.params.id, updatedBlog, { new: true, runValidators: true, context: "query" })
    response.json(blog)
  } catch (error) {
    response.status(400).json({ error: error.message })
  }
})

module.exports = blogsRouter
