const Router = require("express").Router()
const homeControllers = require("../controllers/home")


Router.get("/find-by-user", homeControllers.findByUser)
Router.patch("/update-users", homeControllers.updateUsers)


module.exports = Router