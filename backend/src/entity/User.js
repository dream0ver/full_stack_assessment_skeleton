const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
    name: "User",
    tableName: "user",
    columns: {
        user_id: {
            primary: true,
            type: "int",
            generated: true,
        },
        username: {
            type: "varchar",
        },
        email: {
            type: "varchar",
        },
    },
});
