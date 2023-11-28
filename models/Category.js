const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    category_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING
    },

    
    
  },
  {
    sequelize,
    timestamps: false,
    //prevent sequelize from renaming the table
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
