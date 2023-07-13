import { Request, Response } from 'express';
import TeamService from '../service/TeamService';

export default class TeamController {
  // constructor(private teamService = new TeamService()) {}

  static async getAllTeams(req: Request, res: Response): Promise<Response> {
    const teams = await TeamService.getAllTeams();
    return res.status(200).json(teams);
  }
}
