const express = require('express');
const { 
  createCategoryController, 
} = require('../controllers/categoriesController/categoriesControler');

const { validateCategory } = require('../validations/validateCategory');
// const { list } = require('../controllers/categories/listget');

const categoryRouter = express.Router({ mergeParams: true });

categoryRouter.post('/', validateCategory, createCategoryController);
// categoryRouter.get('/', list);

module.exports = { categoryRouter };