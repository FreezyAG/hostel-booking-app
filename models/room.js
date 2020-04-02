const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Room = sequelize.define('room', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    roomType: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    numOfBed: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    availableRoom: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
});

module.exports = Room;