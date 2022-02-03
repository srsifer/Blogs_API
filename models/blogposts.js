const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class BlogPosts extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'userId', as: 'user',
      });
    }
  }
  BlogPosts.init({
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'BlogPosts',
    timestamps: false,
  });
  return BlogPosts;
};