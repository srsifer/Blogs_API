const express = require('express');
const { createPostController } = require('../controllers/posts/createPostController');
const { validatePost } = require('../validations/validatePost'); 

const postRouter = express.Router({ mergeParams: true });
postRouter.post('/', validatePost, createPostController);

module.exports = { postRouter };
