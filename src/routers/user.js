const express = require('express');
const { create } = require('../controllers/user/createUserController');
const { validateUser } = require('../validations/validateUser');
const { getlistUsersController } = require('../controllers/user/getListUsersController');
const { getUserByIdController } = require('../controllers/user/getUserByIdController');

const userRouter = express.Router({ mergeParams: true });

userRouter.post('/', validateUser, create);
userRouter.get('/', getlistUsersController);
userRouter.get('/:id', getUserByIdController);

module.exports = { userRouter };