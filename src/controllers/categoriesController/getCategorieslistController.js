const { StatusCodes } = require('http-status-codes');
const listService = require('../../services/categoriesservice/listService');

const getCategorieslist = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const response = await listService.list(authorization);
    res.status(StatusCodes.OK).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = { getCategorieslist };