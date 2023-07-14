import { Router } from 'express';
import LoginController from '../controller/LoginController';
import validateLogin from '../middlewares/loginMiddleware';
import authMiddleware from '../middlewares/tokenValidator';

const loginRouter = Router();

const loginController = new LoginController();
loginRouter.get(
  '/role',
  authMiddleware,
  (req, res) => loginController.getRole(req, res),
);
loginRouter.post(
  '/',
  validateLogin,
  (req, res) => loginController.login(req, res),
);

export default loginRouter;
