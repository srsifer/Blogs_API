const { BlogPosts } = require('../../models');
const { User } = require('../../models');
const { Categories } = require('../../models');

const formatPostResponse = async (id) => {
  const existId = id ? { where: { id } } : {};
  const response = await BlogPosts
    .findAll(
      { 
        ...existId,
        include: 
        [
          { model: User, as: 'user', attributes: { exclude: ['password'] } }, 
          { model: Categories, as: 'categories', through: { attributes: [] } },
        ],
      },
);
  return response;
};

module.exports = { formatPostResponse };