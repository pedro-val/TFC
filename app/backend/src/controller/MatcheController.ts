import { Request, Response } from 'express';
import MatcheService from '../service/MatcheService';

export default class MatcheController {
  constructor(private matcheService = new MatcheService()) {}

  async getAllMatches(req: Request, res: Response): Promise<Response> {
    const matches = await this.matcheService.getAllMatches();
    return res.status(matches.status).json(matches.data);
  }
}
