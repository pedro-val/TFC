import { Router } from 'express';
import UserController from '../controller/UserController';

const userRouter = Router();

// const userController = new TeamController();

userRouter.get(
  '/',
  (req, res) => UserController.getAllUsers(req, res),
);

export default userRouter;
