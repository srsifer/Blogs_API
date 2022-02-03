const {
  Model,
} = require('sequelize');

module.exports = (sequelize, _DataTypes) => {
  class PostsCategories extends Model {
    static associate(models) {
      models.BlogPosts
        .belongsToMany(models.Categories, {
          as: 'categories', through: PostsCategories, foreignKey: 'postId', otherKey: 'categoryId',
        });
      models.Categories
        .belongsToMany(models.BlogPosts, {
          as: 'blogposts', through: PostsCategories, foreignKey: 'categoryId', otherKey: 'postId',
        });
    }
}
  PostsCategories.init({}, {
    sequelize,
    modelName: 'PostsCategories',
    timestamps: false,
  });
  return PostsCategories;
};