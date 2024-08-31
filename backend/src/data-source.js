const { DataSource } = require("typeorm");

const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER_NAME,
    password: process.env.DB_USER_PASSWORD,
    database: process.env.DB_NAME,
    entities: [require("../src/entity/User"), require("../src/entity/Home"), require("../src/entity/Interests")],
})

module.exports = { AppDataSource };