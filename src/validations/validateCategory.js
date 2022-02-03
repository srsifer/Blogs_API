const joi = require('joi');

const joiSchema = joi.object({
  name: joi
    .string()
    .required(),
});

const validateCategory = (req, _res, next) => {
  const { error } = joiSchema.validate(req.body);
  return error ? next(error) : next();
};

module.exports = { validateCategory };