const dotenv = require('dotenv')
const path = require('path')

if (!process.env.HOST) {
  dotenv.config({
    path: path.join(__dirname, '..', '.env'),
  })
}

module.exports = {
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT,
  database: process.env.DATABASE_NAME,
  dialect: process.env.DATABASE_DIALECT,
}
