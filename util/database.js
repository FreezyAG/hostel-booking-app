const Sequelize = require('sequelize');
require('dot-env')

const user = process.env.POSTGRES_USER;
const password = process.env.POSTGRES_PASSWORD;
const postgresDb = process.env.POSTGRES_DB;

const sequelize = new Sequelize(postgresDb, user, password, {
    dialect: 'postgres', 
    host: 'localhost'
});

module.exports = sequelize;