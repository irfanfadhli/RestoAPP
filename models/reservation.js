const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Reservation = sequelize.define('Reservation', {
  name:         { type: DataTypes.STRING,  allowNull: false },
  phone:        { type: DataTypes.STRING,  allowNull: false },
  personCount:  { type: DataTypes.INTEGER, allowNull: false },
  date:         { type: DataTypes.DATEONLY,allowNull: false },
  time:         { type: DataTypes.STRING,  allowNull: false },
  message:      { type: DataTypes.TEXT }
});
module.exports = Reservation;
