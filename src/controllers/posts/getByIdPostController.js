const { StatusCodes } = require('http-status-codes');
const { getByIdService } = require('../../services/posts/getByIdPostService');

const getByIdPostController = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const { id } = req.params;
    const response = await getByIdService(authorization, id);
    res.status(StatusCodes.OK).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = { getByIdPostController };