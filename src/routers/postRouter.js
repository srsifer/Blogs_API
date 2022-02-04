const express = require('express');
const { createPostController } = require('../controllers/posts/createPostController');
const { validatePost } = require('../validations/validatePost'); 
const { getAllPostController } = require('../controllers/posts/getAllPostControler');
const { getByIdPostController } = require('../controllers/posts/getByIdPostController');
const { updateByidControler } = require('../controllers/posts/putPostByIdController');
const { validatePutById } = require('../validations/validatePutById');

const postRouter = express.Router({ mergeParams: true });
postRouter.post('/', validatePost, createPostController);
postRouter.get('/', getAllPostController);
postRouter.get('/:id', getByIdPostController);
postRouter.put('/:id', validatePutById, updateByidControler);

module.exports = { postRouter };
