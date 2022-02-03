const { StatusCodes } = require('http-status-codes');

const errorHandler = (err, req, res, _next) => {
  res.status(err.code || StatusCodes.BAD_REQUEST).json({ message: err.message });
};

module.exports = { errorHandler };

// peguei esse handle request no pr do lucas santos https://github.com/tryber/sd-012-project-blogs-api/pull/84/commits/4cc2c769c2e3fc9e12f63dfe0bc5b5b68f282efd