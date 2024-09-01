require("reflect-metadata")
require("dotenv").config()
const PORT = process.env.PORT
const app = require("./src/app")
const { AppDataSource } = require("./src/data-source")

async function init() {
    try {
        await AppDataSource.initialize()
        console.log("Data Source has been initialized!");
        app.listen(PORT, () => console.log(`Express server running on port ${PORT}.`))
    } catch (err) {
        console.error("Error during Data Source initialization: Restarting service please wait.");
    }
}
init()

