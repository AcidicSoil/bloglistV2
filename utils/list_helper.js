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

const mostBlogs = (blogs) => {
  if (blogs.length === 0) {
    return null
  }

  const authorCounts = blogs.reduce((acc, blog) => {
    acc[blog.author] = (acc[blog.author] || 0) + 1
    return acc
  }, {})

  let maxBlogs = 0
  let maxAuthor = ""
  Object.entries(authorCounts).forEach(([author, blogs]) => {
    if (blogs > maxBlogs) {
      maxBlogs = blogs
      maxAuthor = author
    }
  })

  return {
    author: maxAuthor,
    blogs: maxBlogs
  }
}

const mostLikes = (blogs) => {
  const likesPerAuthor = blogs.reduce((acc, blog) => {
    acc[blog.author] = (acc[blog.author] || 0) + blog.likes
    return acc
  }, {})

  let mostLikedAuthor = { author: "", likes: 0 }

  for (const author in likesPerAuthor) {
    if (likesPerAuthor[author] > mostLikedAuthor.likes) {
      mostLikedAuthor = {
        author: author,
        likes: likesPerAuthor[author]
      }
    }
  }

  return mostLikedAuthor.likes === 0 ? null : mostLikedAuthor
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
}
