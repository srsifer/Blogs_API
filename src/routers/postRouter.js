const express = require('express');
const { createPostController } = require('../controllers/posts/createPostController');
const { validatePost } = require('../validations/validatePost'); 
const { getAllPostController } = require('../controllers/posts/getAllPostControler');
const { getByIdPostController } = require('../controllers/posts/getByIdPostController');

const postRouter = express.Router({ mergeParams: true });
postRouter.post('/', validatePost, createPostController);
postRouter.get('/', getAllPostController);
postRouter.get('/:id', getByIdPostController);

module.exports = { postRouter };
