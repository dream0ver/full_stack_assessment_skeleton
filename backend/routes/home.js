const Router = require("express").Router()
const homeControllers = require("../controllers/home")


Router.get("/find-by-user", homeControllers.findByUser)
Router.post("/update-users", homeControllers.updateUsers)


module.exports = Router