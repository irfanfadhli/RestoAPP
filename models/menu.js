const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Menu = sequelize.define('Menu', {
  name:        { type: DataTypes.STRING,  allowNull: false },
  description: { type: DataTypes.TEXT },
  price:       { type: DataTypes.DECIMAL(10,2), allowNull: false },
  category:    { type: DataTypes.STRING },
  imageUrl:    { type: DataTypes.STRING },
  label:       { type: DataTypes.STRING } // 'SEASONAL', 'NEW', etc
});
module.exports = Menu;
