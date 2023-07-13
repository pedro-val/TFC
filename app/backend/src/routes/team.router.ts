import { Router } from 'express';
import TeamController from '../controller/TeamControler';

const teamRouter = Router();

// const teamController = new TeamController();

teamRouter.get(
  '/',
  (req, res) => TeamController.getAllTeams(req, res),
);

export default teamRouter;
