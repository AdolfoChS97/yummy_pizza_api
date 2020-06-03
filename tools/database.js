const {
  Client
} = require("pg");
require("dotenv").config();

const client = new Client({
  user: process.env.USER_DB,
  host: process.env.HOST_DB,
  database: process.env.NAME_DB,
  password: process.env.PASSWORD_DB,
  port: 5432,
});

client.connect();

module.exports = client;