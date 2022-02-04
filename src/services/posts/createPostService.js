const { withoutToken } = require('../../err/errorMenssages');
const { validateAllCategories } = require('../../helpers/validateCategoriesAll');
const { verifyToken } = require('../../jsonWebTonken/jsonVerifyToken');
const { BlogPosts } = require('../../../models');

const createPostService = async (title, content, categoryIds, authorization) => {
  await validateAllCategories(categoryIds);
  if (!authorization) throw withoutToken;
  const decode = verifyToken(authorization);
  const response = await BlogPosts.create({ title, content, userId: decode.id });

  await response.addCategories(categoryIds);
  return response;
};

module.exports = { createPostService };
