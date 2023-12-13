// utils/list_helper.js

const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce((sum, blog) => sum + blog.likes, 0)
}

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) {
    return null
  }

  const maxLikes = Math.max(...blogs.map(blog => blog.likes))
  const favorite = blogs.find(blog => blog.likes === maxLikes)

  return {
    title: favorite.title,
    author: favorite.author,
    likes: favorite.likes
  }
}

const _ = require("lodash")

const mostBlogs = (blogs) => {
  if (blogs.length === 0) {
    return null
  }

  const authorCounts = _.countBy(blogs, "author")
  const maxAuthor = _.maxBy(Object.keys(authorCounts), (author) => authorCounts[author])

  return {
    author: maxAuthor,
    blogs: authorCounts[maxAuthor]
  }
}

const mostLikes = (blogs) => {
  if (blogs.length === 0) {
    return null
  }

  const authorLikes = _(blogs)
    .groupBy("author")
    .map((blogs, author) => ({
      author,
      likes: _.sumBy(blogs, "likes")
    }))
    .maxBy("likes")

  return authorLikes || null
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
}
