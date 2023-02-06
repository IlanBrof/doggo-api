const dotenv = require("dotenv").config();

const {
  PORT = 3002,
  DB_ADDRESS = 'mongodb://localhost:27017/doggo-db',
  JWT_DEV_SECRET = 'secret',
} = process.env;

module.exports = {
  PORT, DB_ADDRESS, JWT_DEV_SECRET,
};