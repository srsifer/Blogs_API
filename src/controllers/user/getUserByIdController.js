const { StatusCodes } = require('http-status-codes');
const { getUserByIdService } = require('../../services/usersServices/getUserByIdService');

const getUserByIdController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { authorization } = req.headers;
    const response = await getUserByIdService(id, authorization);
    res.status(StatusCodes.OK).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = { getUserByIdController };