const { notOwner } = require('../err/errorMenssages');
const { verifyToken } = require('../jsonWebTonken/jsonVerifyToken');
const { BlogPosts } = require('../../models');

const verifyPost = async (id) => {
  const result = await (await BlogPosts
      .findAll({ where: { id } }))
      .map(((post) => post.dataValues.userId));
  return Promise.all(result);
};

const verifyOwner = async (authorization, idPost) => {
  const { id } = verifyToken(authorization);
  const ownerPost = await verifyPost(idPost);
  if (!ownerPost.includes(id)) throw notOwner;
};

module.exports = { verifyOwner };