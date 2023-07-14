import { Request, Response } from 'express';
import LoginService from '../service/LoginService';

export default class LoginController {
  constructor(private loginService = new LoginService()) {}
  async login(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    const token = await this.loginService.login(email, password);
    return res.status(token.status).json(token.data);
  }

  async getRole(req: Request, res: Response): Promise<Response> {
    const { id } = res.locals.user;
    const role = await this.loginService.getRole(id);
    return res.status(role.status).json(role.data);
  }
}
