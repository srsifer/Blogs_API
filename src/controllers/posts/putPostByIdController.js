const { StatusCodes } = require('http-status-codes');
const { updatebyIdService } = require('../../services/posts/updateByIdService');

const updateByidControler = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const { id } = req.params;
    const { title, content, categoryIds } = req.body;
    const response = await updatebyIdService(authorization, id, { title, content, categoryIds });
    res.status(StatusCodes.OK).json(response);
  } catch (error) {
    next(error);
  }
};
module.exports = { updateByidControler };