module.exports = async () => {
  await new Promise(resolve => setTimeout(() => resolve(), 1000)) // Waits 1 second before exiting
  process.exit(0)
}
