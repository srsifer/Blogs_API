const { withoutToken } = require('../../err/errorMenssages');
const { verifyToken } = require('../../jsonWebTonken/jsonVerifyToken');
const { Categories } = require('../../../models');

const createCategories = (authorization, name) => {
  if (!authorization) throw withoutToken;
  verifyToken(authorization);
  const response = Categories.create({ name });
  return response;
};

module.exports = { createCategories };