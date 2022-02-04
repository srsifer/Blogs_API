const { StatusCodes } = require('http-status-codes');
const { getAllPostService } = require('../../services/posts/getAllPostService');

const getAllPostController = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const { id } = req.params;
    const response = await getAllPostService(authorization, id);
    res.status(StatusCodes.OK).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllPostController };