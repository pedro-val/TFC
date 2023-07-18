import { Router } from 'express';
import LeaderboardController from '../controller/LeaderboardController';

const leaderboardRouter = Router();

const leaderboardController = new LeaderboardController();
leaderboardRouter.get(
  '/home',
  (req, res) => leaderboardController.getHomeTeamStatistics(req, res),
);

export default leaderboardRouter;
