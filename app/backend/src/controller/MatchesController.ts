import { Request, Response } from 'express';
import MatcheService from '../service/MatchesService';

export default class MatcheController {
  constructor(private matcheService = new MatcheService()) {}

  async getAllMatches(req: Request, res: Response): Promise<Response> {
    if (req.query.inProgress) {
      const matches = await this.matcheService.getMatchesByProgress(
        req.query.inProgress === 'true',
      );
      return res.status(matches.status).json(matches.data);
    }
    const matches = await this.matcheService.getAllMatches();
    return res.status(matches.status).json(matches.data);
  }

  async updateMatchGoals(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    const goals = [homeTeamGoals, awayTeamGoals];
    const match = await this.matcheService.updateMatchGoals(Number(id), goals);
    return res.status(match.status).json(match.data);
  }

  async finishMatch(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const match = await this.matcheService.finishMatch(Number(id));
    return res.status(match.status).json(match.data);
  }

  async createMatch(req: Request, res: Response): Promise<Response> {
    const match = await this.matcheService.createMatch(req.body);
    return res.status(match.status).json(match.data);
  }
}
