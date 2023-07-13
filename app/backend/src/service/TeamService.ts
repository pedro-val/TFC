// import { ModelStatic } from 'sequelize';
import TeamModel from '../database/models/TeamModel';

export default class TeamService {
  // constructor(private teamModel : ModelStatic<TeamModel> = TeamModel) {}

  static async getAllTeams(): Promise<TeamModel[]> {
    const teams = await TeamModel.findAll();
    return teams;
  }
}
