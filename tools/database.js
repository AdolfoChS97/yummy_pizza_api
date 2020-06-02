require('dotenv').config();
const {
    HOST_DB,
    NAME_DB,
    USER_DB,
    PASSWORD_DB
} = process.env;
let {
    Sequelize
} = require("sequelize");

let sequelize = new Sequelize(NAME_DB, USER_DB, PASSWORD_DB, {
    host: HOST_DB,
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