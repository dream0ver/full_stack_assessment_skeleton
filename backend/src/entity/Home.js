const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
    name: "Home",
    tableName: "home",
    columns: {
        home_id: {
            primary: true,
            type: "int",
            generated: true,
        },
        street_address: {
            type: "varchar",
        },
        state: {
            type: "varchar",
        },
        zip: {
            type: "varchar",
        },
        sqft: {
            type: "float",
        },
        beds: {
            type: "int",
        },
        baths: {
            type: "int",
        },
        list_price: {
            type: "float",
        },

    },
});
