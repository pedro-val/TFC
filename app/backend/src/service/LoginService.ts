import bcrypt = require('bcryptjs');
import jwt from '../Utils/jwt';
import UserModel from '../database/models/UserModel';
import IResponse from '../Interfaces/IResponse';

export default class LoginService {
  constructor(private userModel = UserModel) {}

  async login(email: string, password: string): Promise<IResponse> {
    const user = await this.userModel.findOne({ where: { email } });
    if (user) {
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (isPasswordCorrect) {
        const token = jwt.sign({ id: user.id, email: user.email });
        return { status: 200, data: { token } };
      }
      return { status: 401, data: { message: 'Invalid email or password' } };
    }
    return { status: 404, data: { message: 'Invalid email or password' } };
  }

  async getRole(id: number): Promise<IResponse> {
    const user = await this.userModel.findByPk(id);
    if (user) {
      return {
        status: 200,
        data: { role: user.role },
      };
    }
    return {
      status: 404,
      data: { message: 'User not found' },
    };
  }
}
