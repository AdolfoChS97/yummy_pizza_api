let {
    Sequelize
} = require("sequelize");

let sequelize = new Sequelize("yummy", "postgres", "postgres", {
    host: "172.17.0.2",
    dialect: "postgres",
    pool: {
        max: 10,
        min: 0,
        idle: 10000,
    },
});

sequelize
    .authenticate()
    .then((err) => {
        console.log("Connection has been established successfully.");
    })
    .catch((err) => {
        console.log("Unable to connect to the database:", err);
    });

module.exports = sequelize;