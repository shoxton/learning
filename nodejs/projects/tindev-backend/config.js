const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    login: process.env.ACCESS_USERNAME,
    pass: process.env.ACCESS_PASSWORD,
    host: process.env.HOST,
    db: process.env.DB_NAME,
};