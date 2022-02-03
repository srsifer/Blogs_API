const Joi = require('joi');

const joiSchema = Joi.object({
  displayName: Joi
    .string()
    .min(8)
    .required(),

  email: Joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),

  password: Joi
    .string()
    .min(6)
    .message('"password" length must be 6 characters long')
    .required(),
  image: Joi
    .string()
    .required(),
});

const validateUser = (req, _res, next) => {
  const { error } = joiSchema.validate(req.body);
  return error ? next(error) : next();
};

module.exports = { validateUser };