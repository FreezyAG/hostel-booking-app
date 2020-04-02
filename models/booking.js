const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Booking = sequelize.define('booking', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    room: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    checkIn: {
        type: Sequelize.DATE,
        allowNull: false
    },
    checkOut: {
        type: Sequelize.DATE,
        allowNull: false,
    },
});

module.exports = Booking;