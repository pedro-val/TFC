import { Request, Response } from 'express';
import UserModel from '../database/models/UserModel';

export default class UserController {
  static async getAllUsers(req: Request, res: Response) {
    const users = await UserModel.findAll();
    return res.status(200).json(users);
  }
}
