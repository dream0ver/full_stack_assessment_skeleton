const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
    name: "Interests",
    tableName: "interests",
    columns: {
        user_id: {
            type: "int",
            primary: true,
        },
        home_id: {
            type: "int",
            primary: true,
        },
    },
});
