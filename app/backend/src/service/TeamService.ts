import TeamModel from '../database/models/TeamModel';
import IResponse from '../Interfaces/IResponse';

export default class TeamService {
  constructor(private teamModel = TeamModel) {}

  async getAllTeams(): Promise<IResponse> {
    const teams = await this.teamModel.findAll();
    return {
      status: 200,
      data: teams,
    };
  }

  async getTeamById(id: string): Promise<IResponse> {
    const team = await this.teamModel.findByPk(id);
    if (team) {
      return {
        status: 200,
        data: team,
      };
    }
    return {
      status: 404,
      data: { message: 'Team not found' },
    };
  }
}
