const Joi = require("joi");

exports.createUserSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

exports.updateUser = Joi.object({
  username: Joi.string().required(),
});
