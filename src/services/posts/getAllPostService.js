const { withoutToken, postNotFound } = require('../../err/errorMenssages');
const { formatPostResponse } = require('../../helpers/formatPostResponse');
const { verifyToken } = require('../../jsonWebTonken/jsonVerifyToken');

const getAllPostService = async (authorization, id) => {
  if (!authorization) throw withoutToken;
  verifyToken(authorization);
  const response = await formatPostResponse(id);
  if (!response) throw postNotFound;
  return response;
};

module.exports = { getAllPostService };