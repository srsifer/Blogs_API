const jwt = require('jsonwebtoken');

require('dotenv').config();

const key = process.env.JWT_SECRET;

const options = {
  algorithm: 'HS256',
  expiresIn: '1h',
};

const jsonWebToken = (obj) => {
  const token = jwt.sign(obj, key, options);
  return token;
};

module.exports = { jsonWebToken };