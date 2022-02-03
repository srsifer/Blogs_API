const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {static associate(_models) {}}
  Categories.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Categories',
    timestamps: false,
  });
  return Categories;
};