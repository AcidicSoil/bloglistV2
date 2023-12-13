// tests/list_helper.test.js
const listHelper = require("../utils/list_helper")

// Define the blogs array in a global scope
const blogs = [
  { _id: "5a422a851b54a676234d17f7", title: "React Patterns", author: "Michael Chan", url: "https://reactpatterns.com/", likes: 7, __v: 0 },
  { _id: "5a422aa71b54a676234d17f8", title: "Go To Statement Considered Harmful", author: "Edsger W. Dijkstra", url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html", likes: 5, __v: 0 },
  { _id: "5a422b3a1b54a676234d17f9", title: "Canonical String Reduction", author: "Edsger W. Dijkstra", url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html", likes: 12, __v: 0 },
  // ... more blogs ...
]

describe("dummy", () => {
  test("returns one", () => {
    const result = listHelper.dummy(blogs)
    expect(result).toBe(1)
  })
})

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

  test("of empty list is zero", () => {
    expect(listHelper.totalLikes([])).toBe(0)
  })

  test("when list has only one blog, equals the likes of that blog", () => {
    expect(listHelper.totalLikes(listWithOneBlog)).toBe(5)
  })

  test("of a bigger list is calculated right", () => {
    expect(listHelper.totalLikes(blogs)).toBe(24) // Adjust this value based on your blogs array
  })
})

describe("favorite blog", () => {
  // Use the same blogs array as in 'total likes'
  test("finds the blog with the most likes", () => {
    const expected = {
      title: "Canonical String Reduction",
      author: "Edsger W. Dijkstra",
      likes: 12
    }
    expect(listHelper.favoriteBlog(blogs)).toEqual(expected)
  })
})

describe("most blogs", () => {
  // Use the same blogs array as in 'total likes'
  test("finds the author with the most blogs", () => {
    const expected = {
      author: "Edsger W. Dijkstra",
      blogs: 2 // Adjust this value based on your blogs array
    }
    expect(listHelper.mostBlogs(blogs)).toEqual(expected)
  })
})

describe("most likes", () => {
  // Use the same blogs array as in 'total likes'
  test("finds the author with the most likes", () => {
    const expected = {
      author: "Edsger W. Dijkstra",
      likes: 17 // Adjust this value based on your blogs array
    }
    expect(listHelper.mostLikes(blogs)).toEqual(expected)
  })
})
