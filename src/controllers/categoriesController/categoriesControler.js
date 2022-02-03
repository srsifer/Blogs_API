const { StatusCodes } = require('http-status-codes');
const { createCategories } = require('../../services/categoriesservice/createCategories');

const createCategoryController = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const { name } = req.body;
    const response = await createCategories(authorization, name);
    res.status(StatusCodes.CREATED).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = { createCategoryController };