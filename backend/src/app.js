const userRoutes = require("./routes/user")
const homeRoutes = require("./routes/home")

const cors = require('cors')
const express = require("express")
const app = express()
app.use(cors())
app.use(express.json())
app.use("/user", userRoutes)
app.use("/home", homeRoutes)

module.exports = app