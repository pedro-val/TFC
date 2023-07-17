import { Router } from 'express';
import MatcheController from '../controller/MatcheController';
import idValidator from '../middlewares/idMiddleware';
import authMiddleware from '../middlewares/tokenValidator';
import updateGoalsMiddleware from '../middlewares/goalsUpdateMiddleware';

const matcheRouter = Router();

const matcheController = new MatcheController();
matcheRouter.patch(
  '/:id',
  authMiddleware,
  idValidator,
  updateGoalsMiddleware,
  matcheController.updateMatchGoals,
);
matcheRouter.patch(
  '/:id/finish',
  idValidator,
  authMiddleware,
  (req, res) => matcheController.finishMatch(req, res),
);
matcheRouter.get(
  '/',
  (req, res) => matcheController.getAllMatches(req, res),
);

export default matcheRouter;
