const Router = require("express").Router()
const userControllers = require("../controllers/user")


Router.get("/find-all", userControllers.findAll)
Router.get("/find-by-home", userControllers.findByHome)


module.exports = Router