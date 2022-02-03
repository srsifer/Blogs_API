const { withoutToken } = require('../../err/errorMenssages');
const { verifyToken } = require('../../jsonWebTonken/jsonVerifyToken');
const { Categories } = require('../../../models');

const list = async (authorization) => {
  if (!authorization) throw withoutToken;
  verifyToken(authorization);
  const response = await Categories.findAll();
  return response;
};

module.exports = { list };