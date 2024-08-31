const userRoutes = require("./routes/user")
const homeRoutes = require("./routes/home")

const express = require("express")
const app = express()

app.use(express.json())
app.use("/user", userRoutes)
app.use("/home", homeRoutes)

module.exports = app