require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const { Pool } = require("pg");

const config = {
  user: DB_USER,
  host: DB_HOST,
  password: DB_PASSWORD,
  database: DB_NAME,
  port: 5432,
};
const newPool = new Pool(config);

module.exports = newPool;
