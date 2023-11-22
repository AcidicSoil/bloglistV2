// index.js
const { PORT } = require("./utils/config")
const app = require("./app") // Assuming you've moved express setup to app.js
const connectToDatabase = require("./utils/database") // Assuming you've created this function

connectToDatabase() // Establish database connection

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
