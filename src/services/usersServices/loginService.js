const { StatusCodes } = require('http-status-codes');
const { User } = require('../../../models');
const { validatePassword } = require('../../helpers/validatePassword');

const invalidEntriesErro = {
  message: 'Invalid fields',
  code: StatusCodes.BAD_REQUEST,
};

const loginService = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user) throw invalidEntriesErro;
  return validatePassword(user, password);
};

module.exports = { loginService };