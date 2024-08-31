require("reflect-metadata")
require("dotenv").config()
const PORT = process.env.PORT
const app = require("./src/app")

app.listen(PORT, () => console.log(`Express server running on port ${PORT}.`))