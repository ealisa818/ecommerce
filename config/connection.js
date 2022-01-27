const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW
    {
        host: 'localhost',
        dialect: 'mysql',
        // this must be 3306 for mysql
        port: 3306,
    }
);

module.exports = sequelize;