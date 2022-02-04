const { BlogPosts } = require('../../models');
const { Categories } = require('../../models');

const formatPostUpdate = async (inputs, id) => {
  const { title, content } = inputs;
  await BlogPosts.update({ title, content }, { where: { id } });
  const response = await (await BlogPosts
    .findOne(
      { 
        where: { id },
        attributes: {
          exclude: ['id', 'published', 'updated'],
        },
        include: [{ model: Categories, as: 'categories', through: { attributes: [] } }] },
      ));
  return response;
};

module.exports = { formatPostUpdate };