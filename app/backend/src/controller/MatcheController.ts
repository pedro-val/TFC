import { Request, Response } from 'express';
import MatcheService from '../service/MatcheService';

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
}
