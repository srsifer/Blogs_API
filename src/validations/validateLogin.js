const joi = require('joi');

const joiSchema = joi.object({
  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
  password: joi
    .string()
    .min(6)
    .message('"password" length must be 6 characters long')
    .required(),
});

const validateLogin = (req, _res, next) => {
  const { error } = joiSchema.validate(req.body);
  return error ? next(error) : next();
};

module.exports = { validateLogin };