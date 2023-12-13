const mongoose = require("mongoose")
const supertest = require("supertest")
const app = require("../app")

const api = supertest(app)

const Blog = require("../models/blog")
const helper = require("./test_helper") // Adjust the path and methods as needed

beforeEach(async () => {
  await Blog.deleteMany({})
  await Blog.insertMany(helper.initialBlogs) // Assuming you have initialBlogs in your test_helper
})

describe("GET /api/blogs", () => {
  test("returns the correct amount of blog posts in JSON format", async () => {
    const response = await api.get("/api/blogs")
      .expect(200)
      .expect("Content-Type", /application\/json/)

    expect(response.body).toHaveLength(helper.initialBlogs.length)
  })

  test("unique identifier property of the blog posts is named id", async () => {
    const response = await api.get("/api/blogs")

    if (response.body.length > 0) {
      expect(response.body[0].id).toBeDefined()
    } else {
      console.log("No blogs found in the test environment")
      expect(response.body.length).toBe(0)
    }
  })
})

describe("POST /api/blogs", () => {
  test("defaults the 'likes' property to 0 if it is missing", async () => {
    const newBlogWithoutLikes = {
      title: "Blog Without Likes",
      author: "Test Author",
      url: "http://testurl.com"
    }

    await api
      .post("/api/blogs")
      .send(newBlogWithoutLikes)
      .expect(201)
      .expect("Content-Type", /application\/json/)

    const response = await api.get("/api/blogs")
    expect(response.body[response.body.length - 1].likes).toBe(0)
  })

  test("responds with status code 400 if title is missing", async () => {
    const newBlogWithoutTitle = {
      author: "Test Author",
      url: "http://testurl.com",
      likes: 5
    }

    await api
      .post("/api/blogs")
      .send(newBlogWithoutTitle)
      .expect(400)
  })

  test("responds with status code 400 if url is missing", async () => {
    const newBlogWithoutUrl = {
      title: "Blog Without URL",
      author: "Test Author",
      likes: 5
    }

    await api
      .post("/api/blogs")
      .send(newBlogWithoutUrl)
      .expect(400)
  })
})

afterAll(async () => {
  await mongoose.connection.close()
})
