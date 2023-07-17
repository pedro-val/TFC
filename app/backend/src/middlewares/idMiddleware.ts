import { Request, Response, NextFunction } from 'express';
import joi from './joiSchemas';

async function idValidator(req: Request, res: Response, next: NextFunction) {
  const { error } = joi.idSquema.validate(req.params);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
}

export default idValidator;
