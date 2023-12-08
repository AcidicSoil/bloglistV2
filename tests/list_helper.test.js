// tests/list_helper.test.js
const listHelper = require("../utils/list_helper")

// Example blog data
const blogs = [
  { title: "React Patterns", author: "Michael Chan", likes: 7 },
  { title: "Go To Statement Considered Harmful", author: "Edsger W. Dijkstra", likes: 5 },
  { title: "Canonical String Reduction", author: "Edsger W. Dijkstra", likes: 12 },
  { title: "First class tests", author: "Robert C. Martin", likes: 10 },
  { title: "TDD harms architecture", author: "Robert C. Martin", likes: 0 },
  { title: "Type wars", author: "Robert C. Martin", likes: 2 }
]

test("dummy returns one", () => {
  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})

test("total likes", () => {
  const result = listHelper.totalLikes(blogs)
  expect(result).toBe(36) // Total likes of all blogs
})

test("favorite blog", () => {
  const result = listHelper.favoriteBlog(blogs)
  const expectedFavoriteBlog = {
    title: "Canonical String Reduction",
    author: "Edsger W. Dijkstra",
    likes: 12
  }
  expect(result).toEqual(expectedFavoriteBlog)
})

test("author with most blogs", () => {
  const result = listHelper.mostBlogs(blogs)
  const expectedMostBlogs = {
    author: "Robert C. Martin",
    blogs: 3 // Number of blogs by Robert C. Martin
  }
  expect(result).toEqual(expectedMostBlogs)
})

test("author with most likes", () => {
  const result = listHelper.mostLikes(blogs)
  const expectedMostLikes = {
    author: "Edsger W. Dijkstra",
    likes: 17 // Total likes of Edsger W. Dijkstra's blogs
  }
  expect(result).toEqual(expectedMostLikes)
})
