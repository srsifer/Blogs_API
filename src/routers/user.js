const express = require('express');
const { create } = require('../controllers/user/createUserController');
const { validateUser } = require('../validations/validateUser');

const userRouter = express.Router({ mergeParams: true });

userRouter.post('/', validateUser, create);

module.exports = { userRouter };