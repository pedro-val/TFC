import { Router } from 'express';
import LeaderboardController from '../controller/LeaderboardController';

const leaderboardRouter = Router();

const leaderboardController = new LeaderboardController();

leaderboardRouter.get(
  '/away',
  (req, res) => leaderboardController.getTeamStatistics(req, res),
);
leaderboardRouter.get(
  '/home',
  (req, res) => leaderboardController.getTeamStatistics(req, res),
);
leaderboardRouter.get(
  '/',
  (req, res) => leaderboardController.getAallLeaderboard(req, res),
);

export default leaderboardRouter;
