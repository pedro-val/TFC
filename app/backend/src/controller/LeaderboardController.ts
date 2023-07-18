import { Request, Response } from 'express';
import LeaderboardService from '../service/LeaderboardService';
import TeamModel from '../database/models/TeamModel';
import MatchesModel from '../database/models/MatchesModel';

export default class LeaderboardController {
  constructor(
    private leaderboardService = new LeaderboardService(TeamModel, MatchesModel),
  ) {}

  async getHomeTeamStatistics(req: Request, res: Response): Promise<Response> {
    const homeLeaderboard = await this.leaderboardService.getHomeTeamStatistics();
    return res.status(homeLeaderboard.status).json(homeLeaderboard.data);
  }
}
