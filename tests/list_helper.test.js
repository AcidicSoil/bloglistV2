// Assuming you have a file that exports your express app as 'app'
// and your Blog model is correctly set up to interact with your database.
const mongoose = require("mongoose")
const supertest = require("supertest")
const app = require("../app") // Update the path according to your project structure
const Blog = require("../models/blog") // Update the path according to your project structure

const api = supertest(app)

// Define initialBlogs here
const initialBlogs = [
  {
    title: "First blog",
    author: "Alice",
    url: "http://example.com/first",
    likes: 10,
  },
  {
    title: "Second blog",
    author: "Bob",
    url: "http://example.com/second",
    likes: 20,
  },
  // More blogs can be added here
]

// If you have predefined blogs for testing, you can insert them into the database in a beforeEach hook.
beforeEach(async () => {
  await Blog.deleteMany({})

  // Add your test blogs to the database before each test.
  const blogObjects = initialBlogs.map(blog => new Blog(blog)) // initialBlogs is an array of blog objects
  const promiseArray = blogObjects.map(blog => blog.save())
  await Promise.all(promiseArray)
})

describe("GET /api/blogs", () => {
  test("correct amount of blog posts returned in JSON format", async () => {
    const response = await api
      .get("/api/blogs")
      .expect(200)
      .expect("Content-Type", /application\/json/)

    // Here, initialBlogs.length is the expected number of blogs.
    expect(response.body).toHaveLength(initialBlogs.length)
  })
})

// Close the database connection after all tests are done
afterAll(() => {
  mongoose.connection.close()
})
