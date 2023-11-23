// utils/list_helper.js

const _ = require("lodash")

const dummy = () => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce((sum, blog) => sum + blog.likes, 0)
}

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) {
    return null
  }

  const maxLikes = Math.max(...blogs.map((blog) => blog.likes))
  const favorite = blogs.find((blog) => blog.likes === maxLikes)

  return {
    title: favorite.title,
    author: favorite.author,
    likes: favorite.likes,
  }
}

const mostBlogs = (blogs) => {
  if (blogs.length === 0) {
    return null
  }

  const authorCounts = _.countBy(blogs, "author")
  const maxAuthor = _.maxBy(Object.keys(authorCounts), (author) => authorCounts[author])

  return {
    author: maxAuthor,
    blogs: authorCounts[maxAuthor],
  }
}

const mostLikes = (blogs) => {
  if (blogs.length === 0) {
    return null
  }

  const authorLikes = blogs.reduce((acc, blog) => {
    acc[blog.author] = (acc[blog.author] || 0) + blog.likes
    return acc
  }, {})

  let maxLikes = 0
  let maxAuthor = ""

  Object.entries(authorLikes).forEach(([author, likes]) => {
    if (likes > maxLikes) {
      maxLikes = likes
      maxAuthor = author
    }
  })

  return {
    author: maxAuthor,
    likes: maxLikes
  }
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
}

