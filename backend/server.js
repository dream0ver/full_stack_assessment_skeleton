require("reflect-metadata")
require("dotenv").config()
const PORT = process.env.PORT
const app = require("./src/app")
const { AppDataSource } = require("./src/data-source")

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err);
    });

app.listen(PORT, () => console.log(`Express server running on port ${PORT}.`))