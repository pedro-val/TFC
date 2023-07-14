import { NextFunction, Request, Response } from 'express';
import jwt from '../Utils/jwt';
import IUser from '../Interfaces/IUser';

async function authMiddleware(req: Request, res: Response, next: NextFunction)
  : Promise<Response | void> {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const { authorization } = req.headers;
  const token = authorization?.split(' ') || [];
  if (!token[1]) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
  try {
    const decoded = jwt.verify(token[1]) as unknown as IUser;
    res.locals.user = { id: decoded.id };
    next();
  } catch (e) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
}

export default authMiddleware;
