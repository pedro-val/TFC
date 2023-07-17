import { Request, Response, NextFunction } from 'express';
import joi from './joiSchemas';

const updateGoalsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { error } = joi.updateGoalsSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};

export default updateGoalsMiddleware;
