import { Router } from 'express';
import MatcheController from '../controller/MatcheController';

const matcheRouter = Router();

const matcheController = new MatcheController();

matcheRouter.get(
  '/',
  (req, res) => matcheController.getAllMatches(req, res),
);

export default matcheRouter;
