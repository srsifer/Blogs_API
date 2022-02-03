const { jsonWebToken } = require('../jsonWebTonken/jsonWebToken');
const { invalidEntriesErro } = require('../err/errorMenssages');

const validatePasswordInDB = (tryPassword, passwordDB) => {
  if (tryPassword !== passwordDB) throw invalidEntriesErro;
  return true;
};

const validatePassword = (user, password) => {
  validatePasswordInDB(password, user.password);
  const dataWithoutPassword = { ...user.dataValues, password: '' };
  const token = jsonWebToken(dataWithoutPassword);
  return token;
};

module.exports = { validatePassword };