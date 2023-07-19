import { Request, Response } from 'express';
import LeaderboardService from '../service/LeaderboardService';
import TeamModel from '../database/models/TeamModel';
import MatchesModel from '../database/models/MatchesModel';

export default class LeaderboardController {
  constructor(
    private leaderboardService = new LeaderboardService(TeamModel, MatchesModel),
  ) {}

  async getTeamStatistics(req: Request, res: Response): Promise<Response> {
    if (req.path) {
      let reqPath;
      if (req.path === '/home') {
        reqPath = 'homeTeamId';
        const homeLeaderboard = await this.leaderboardService.getTeamStatistics(reqPath);
        return res.status(homeLeaderboard.status).json(homeLeaderboard.data);
      }
      if (req.path === '/away') {
        reqPath = 'awayTeamId';
        const homeLeaderboard = await this.leaderboardService.getTeamStatistics(reqPath);
        return res.status(homeLeaderboard.status).json(homeLeaderboard.data);
      }
    }
    return res.status(404).json({ message: 'Not found' });
  }
}
