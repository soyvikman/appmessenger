const { Model, DataTypes } = require('sequelize');
const sequelize = require('./../database/db');

module.exports = sequelize.define('Message', {
    message_id: {
        type:DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    message_body: {
        type:DataTypes.STRING,
        allowNull: false
    },
    message_user_id: {
        type:DataTypes.INTEGER,
        allowNull: false
    },
    message_date: {
        type: DataTypes.DATE,
        allowNull: false
    }
})

