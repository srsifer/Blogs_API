const express = require('express');
const { 
  createCategoryController, 
} = require('../controllers/categoriesController/categoriesControler');

const { validateCategory } = require('../validations/validateCategory');
const { 
  getCategorieslist,
} = require('../controllers/categoriesController/getCategorieslistController');

const categoryRouter = express.Router({ mergeParams: true });

categoryRouter.post('/', validateCategory, createCategoryController);
categoryRouter.get('/', getCategorieslist);

module.exports = { categoryRouter };