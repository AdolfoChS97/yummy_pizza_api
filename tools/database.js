const { Client } = require("pg");
require("dotenv").config();

if ((process.env.NODE_ENV || "").trim() !== "production") {
  const client = new Client({
    user: process.env.USER_DB,
    host: process.env.HOST_DB,
    database: process.env.NAME_DB,
    password: process.env.PASSWORD_DB,
    port: 5432,
  });
} else {
  const client = new Client({
    user: "hmqoueoyukzmbk",
    host: "ec2-52-7-39-178.compute-1.amazonaws.com",
    database: "d8aiqpt67ji0ji",
    password:
      "58c9bfd6598f1995759fd9cef4eba34f101215f31cd8af4236bc253034573dec",
    port: 5432,
  });
}

module.exports = client;
