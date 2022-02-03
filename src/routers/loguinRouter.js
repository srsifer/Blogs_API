const express = require('express');
const { validateLogin } = require('../validations/validateLogin');
const { loguin } = require('../controllers/user/loginController');

const loguinRouter = express.Router({ mergeParams: true });
loguinRouter.post('/', validateLogin, loguin);

module.exports = { loguinRouter };