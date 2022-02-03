const jwt = require('jsonwebtoken');
const { invalidToken } = require('../err/errorMenssages');

const verifyToken = (token) => {
const result = jwt.verify(token, process.env.JWT_SECRET, (err, encoded) => {
    if (err) {
      throw invalidToken;
    }
    return encoded;
  });
  return result;
};

module.exports = { verifyToken };