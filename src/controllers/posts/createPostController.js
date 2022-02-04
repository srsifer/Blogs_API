const { StatusCodes } = require('http-status-codes');
const { createPostService } = require('../../services/posts/createPostService');

const createPostController = async (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { authorization } = req.headers;
    const response = await createPostService(title, content, categoryIds, authorization);
    res.status(StatusCodes.CREATED).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = { createPostController };