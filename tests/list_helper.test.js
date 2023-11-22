// tests/list_helper.test.js

const listHelper = require("../utils/list_helper")

describe("total likes", () => {
  const listWithOneBlog = [
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 5,
      __v: 0
    }
  ]

  // Test case for a list with one blog
  test("when list has only one blog, equals the likes of that", () => {
    const result = listHelper.totalLikes(listWithOneBlog)
    expect(result).toBe(5)
  })

  // Additional test cases
  // Test case for an empty list
  test("when list is empty, equals zero", () => {
    const emptyList = []
    const result = listHelper.totalLikes(emptyList)
    expect(result).toBe(0)
  })

  // Test case for a bigger list of blogs
  test("when list has multiple blogs, equals the sum of likes", () => {
    const multipleBlogs = [
      { likes: 2 },
      { likes: 3 },
      { likes: 1 }
    ]
    const result = listHelper.totalLikes(multipleBlogs)
    expect(result).toBe(6)
  })
})

describe("favorite blog", () => {
  const blogs = [
    { title: "Blog A", author: "Author 1", likes: 12 },
    { title: "Blog B", author: "Author 2", likes: 10 },
    { title: "Blog C", author: "Author 3", likes: 12 },
  ]

  test("finds the blog with the most likes", () => {
    const result = listHelper.favoriteBlog(blogs)
    expect(result).toEqual({
      title: "Blog A",
      author: "Author 1",
      likes: 12
    })
  })

  test("when list is empty, returns null", () => {
    const result = listHelper.favoriteBlog([])
    expect(result).toBeNull()
  })

  test("when list has only one blog, returns that blog", () => {
    const listWithOneBlog = [{ title: "Blog D", author: "Author 4", likes: 5 }]
    const result = listHelper.favoriteBlog(listWithOneBlog)
    expect(result).toEqual({
      title: "Blog D",
      author: "Author 4",
      likes: 5
    })
  })
})

describe("most blogs", () => {
  const blogs = [
    { author: "Author 1", title: "Blog A" },
    { author: "Author 2", title: "Blog B" },
    { author: "Author 1", title: "Blog C" },
    { author: "Author 3", title: "Blog D" },
    { author: "Author 1", title: "Blog E" },
    // Add more blogs as needed for testing
  ]

  test("finds the author with the most blogs", () => {
    const result = listHelper.mostBlogs(blogs)
    expect(result).toEqual({
      author: "Author 1",
      blogs: 3
    })
  })

  // Additional test cases:
  test("when list is empty, returns null", () => {
    const result = listHelper.mostBlogs([])
    expect(result).toBeNull()
  })

  test("when all authors have the same number of blogs", () => {
    const evenBlogs = [
      { author: "Author 1", title: "Blog A" },
      { author: "Author 2", title: "Blog B" }
      // Ensure each author has the same number of blogs
    ]
    const result = listHelper.mostBlogs(evenBlogs)
    expect(result.blogs).toBe(1)
  })
})