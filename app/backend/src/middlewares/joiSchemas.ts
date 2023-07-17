import * as Joi from 'joi';

const allFilesMustBeFilled = 'All fields must be filled';

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
}).messages({
  'string.email': 'Invalid email or password',
  'string.min': 'Invalid email or password',
  'any.required': allFilesMustBeFilled,
});

const idSquema = Joi.object({
  id: Joi.number().integer().positive().required(),
}).messages({
  'any.required': '{#label} is required',
});

const updateGoalsSchema = Joi.object({
  homeTeamGoals: Joi.number().integer().min(0).required(),
  awayTeamGoals: Joi.number().integer().min(0).required(),
}).messages({
  'number.integer': 'Goals must be an integer',
  'number.min': 'Goals must be greater than or equal to 0',
  'any.required': allFilesMustBeFilled,
});

const createMatchSchema = Joi.object({
  homeTeamId: Joi.number().integer().positive().required(),
  awayTeamId: Joi.number().integer().positive().required(),
  homeTeamGoals: Joi.number().integer().min(0).required(),
  awayTeamGoals: Joi.number().integer().min(0).required(),
}).messages({
  'number.integer': 'Goals must be an integer',
  'number.min': 'Goals must be greater than or equal to 0',
  'any.required': allFilesMustBeFilled,
});

export default {
  loginSchema,
  idSquema,
  updateGoalsSchema,
  createMatchSchema,
};
