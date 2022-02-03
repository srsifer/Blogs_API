const { withoutToken } = require('../../err/errorMenssages');
const { verifyToken } = require('../../jsonWebTonken/jsonVerifyToken');
const { User } = require('../../../models');

const getListUserService = async (authorization) => {
    if (!authorization) throw withoutToken;
    verifyToken(authorization);
    const response = await User.findAll();
    return response;
};

module.exports = { getListUserService };