const { StatusCodes } = require('http-status-codes');
const { loginService } = require('../../services/usersServices/loginService');

const loguin = async (req, res, next) => {
  try {
  const { email, password } = req.body;
  const token = await loginService(email, password);
  res.status(StatusCodes.OK).json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = { loguin };