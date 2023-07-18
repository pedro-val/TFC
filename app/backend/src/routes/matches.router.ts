import { Router } from 'express';
import MatcheController from '../controller/MatchesController';
import idValidator from '../middlewares/idMiddleware';
import authMiddleware from '../middlewares/tokenValidator';
import createMatchMiddleware from '../middlewares/createMatchMiddleware';
import updateGoalsMiddleware from '../middlewares/goalsUpdateMiddleware';

const matcheRouter = Router();

const matcheController = new MatcheController();

matcheRouter.patch(
  '/:id/finish',
  idValidator,
  authMiddleware,
  (req, res) => matcheController.finishMatch(req, res),
);

matcheRouter.patch(
  '/:id',
  authMiddleware,
  idValidator,
  updateGoalsMiddleware,
  (req, res) => matcheController.updateMatchGoals(req, res),
);

matcheRouter.post(
  '/',
  authMiddleware,
  createMatchMiddleware,
  (req, res) => matcheController.createMatch(req, res),
);

matcheRouter.get(
  '/',
  (req, res) => matcheController.getAllMatches(req, res),
);

export default matcheRouter;
