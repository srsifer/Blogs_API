const { withoutToken, userNotFound } = require('../../err/errorMenssages');
const { verifyToken } = require('../../jsonWebTonken/jsonVerifyToken');
const { User } = require('../../../models');

const getUserByIdService = async (id, authorization) => {
  if (!authorization) throw withoutToken;
  verifyToken(authorization);
  const [response] = await User.findAll({ where: { id } });
  if (!response) throw userNotFound;
  return response;
};

module.exports = { getUserByIdService };