const mongoose = require("mongoose")

if (process.argv.length < 3) {
  console.log("Please provide the password as an argument")
  process.exit(1)
}

const password = process.argv[2]
const dbname = "blogApp" // Replace with your database name

const url =
  `mongodb+srv://fullstack:${password}@cluster0.o1opl.mongodb.net/${dbname}?retryWrites=true&w=majority`

mongoose.set("strictQuery", false)
mongoose.connect(url)

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
})

const Blog = mongoose.model("Blog", blogSchema)

// Uncomment below code to add a new blog
/*
const blog = new Blog({
  title: 'Mongoose makes things easy',
  author: 'John Doe',
  url: 'http://example.com',
  likes: 5,
});

blog.save().then(result => {
  console.log('blog saved!');
  mongoose.connection.close();
});
*/

// Fetching all blogs from the database
Blog.find({}).then(result => {
  result.forEach(blog => {
    console.log(blog)
  })
  mongoose.connection.close()
})
