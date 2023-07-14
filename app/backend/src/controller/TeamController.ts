import { Request, Response } from 'express';
import TeamService from '../service/TeamService';

export default class TeamController {
  constructor(private teamService = new TeamService()) {}

  async getAllTeams(req: Request, res: Response): Promise<Response> {
    const teams = await this.teamService.getAllTeams();
    return res.status(teams.status).json(teams.data);
  }

  async getTeamById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const team = await this.teamService.getTeamById(id);
    return res.status(team.status).json(team.data);
  }
}
