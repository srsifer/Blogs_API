const { StatusCodes } = require('http-status-codes');
const { getListUserService } = require('../../services/usersServices/getListUserService');

const getlistUsersController = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const response = await getListUserService(authorization); 
    res.status(StatusCodes.OK).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = { getlistUsersController };