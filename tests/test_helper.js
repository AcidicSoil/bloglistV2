const Blog = require("../models/blog") // Adjust the path to your Blog model

// Initial blogs for populating the test database
const initialBlogs = [
  {
    title: "First Blog",
    author: "John Doe",
    url: "http://example.com/first",
    likes: 10
  },
  {
    title: "Second Blog",
    author: "Jane Doe",
    url: "http://example.com/second",
    likes: 5
  }
  // Add more blogs if needed
]

// Function to insert initial blogs into the test database
const populateBlogs = async () => {
  await Blog.deleteMany({})
  let blogObject = new Blog(initialBlogs[0])
  await blogObject.save()
  blogObject = new Blog(initialBlogs[1])
  await blogObject.save()
  // Continue for other blogs
}

// Function to retrieve all blogs from the test database
const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

// Function to retrieve a specific blog by id
const blogInDb = async (id) => {
  const blog = await Blog.findById(id)
  return blog.toJSON()
}

module.exports = {
  initialBlogs, populateBlogs, blogsInDb, blogInDb
}
