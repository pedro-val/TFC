import { Request, Response, NextFunction } from 'express';
import joi from './joiSchemas';

const validateLogin = async (req: Request, res: Response, next: NextFunction):
Promise<Response | void> => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  const { error } = joi.loginSchema.validate(req.body);
  if (error) {
    return res.status(401).json({ message: error.message });
  }
  next();
};

export default validateLogin;
