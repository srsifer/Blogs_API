const { StatusCodes } = require('http-status-codes');

 const invalidEntriesErro = {
  message: 'Invalid fields',
  code: StatusCodes.BAD_REQUEST,
};
 const alreadyExistEmail = {
  message: 'User already registered',
  code: StatusCodes.CONFLICT,
};

const categorieNotFound = {
  message: '"categoryIds" not found',
  code: StatusCodes.BAD_REQUEST,
};

const withoutToken = {
  message: 'Token not found',
  code: StatusCodes.UNAUTHORIZED,
};
const invalidToken = {
  message: 'Expired or invalid token',
  code: StatusCodes.UNAUTHORIZED,
};

const userNotFound = {
  message: 'User does not exist',
  code: StatusCodes.NOT_FOUND,
};

const postNotFound = {
  message: 'Post does not exist',
  code: StatusCodes.NOT_FOUND,
};
const notEditCategory = {
  message: 'Categories cannot be edited',
  code: StatusCodes.BAD_REQUEST,
};

const notOwner = {
  message: 'Unauthorized user',
  code: StatusCodes.UNAUTHORIZED,
};

module.exports = {
  invalidEntriesErro,
  alreadyExistEmail,
  withoutToken,
  invalidToken,
  userNotFound,
  categorieNotFound,
  postNotFound,
  notEditCategory,
  notOwner,
};