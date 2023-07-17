import { Request, Response, NextFunction } from 'express';
import joi from './joiSchemas';

export default function createMatchMiddleware(req: Request, res: Response, next: NextFunction) {
  const { error } = joi.createMatchSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
}
