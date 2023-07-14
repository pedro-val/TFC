import * as Joi from 'joi';

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
}).messages({
  'string.email': 'Invalid email or password',
  'string.min': 'Invalid email or password',
  'any.required': 'All fields must be filled',
});

export default {
  loginSchema,
};
