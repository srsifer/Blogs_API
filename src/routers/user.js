const express = require('express');
const { create } = require('../controllers/user/createUserController');
const { validateUser } = require('../validations/validateUser');
const { getlistUsersController } = require('../controllers/user/getListUsersController');

const userRouter = express.Router({ mergeParams: true });

userRouter.post('/', validateUser, create);
userRouter.get('/', getlistUsersController);

module.exports = { userRouter };