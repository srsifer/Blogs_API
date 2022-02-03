const { StatusCodes } = require('http-status-codes');
const { createUser } = require('../../services/usersServices/createUserService');

const create = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;
    const token = await createUser(displayName, email, password, image);
    res.status(StatusCodes.CREATED).json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = { create };