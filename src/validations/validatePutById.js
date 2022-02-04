const joi = require('joi');

const joiSchema = joi.object({
  title: joi
    .string()
    .required(),
  content: joi
    .string()
    .required(),
  categoryIds: joi
    .array(),
});

const validatePutById = (req, _res, next) => {
  const { error } = joiSchema.validate(req.body);
  return error ? next(error) : next();
};

module.exports = { validatePutById };