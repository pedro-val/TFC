import IMatchResponse from '../Interfaces/IMatchResponse';
import MatchesModel from '../database/models/MatchesModel';
import IResponse from '../Interfaces/IResponse';

export default class MatcheService {
  constructor(private matchesModel = MatchesModel) {}
  async getAllMatches(): Promise<IResponse> {
    const matches = await this.matchesModel.findAll({
      include: ['homeTeam', 'awayTeam'],
    });
    const response = matches.map((match) => {
      const eachMatchResponse = match.toJSON() as IMatchResponse;
      return {
        ...eachMatchResponse,
        homeTeam: { teamName: eachMatchResponse.homeTeam.teamName },
        awayTeam: { teamName: eachMatchResponse.awayTeam.teamName },
      };
    });
    return {
      status: 200,
      data: response,
    };
  }

  // async getMatchesByProgress(inProgress: boolean): Promise<IResponse> {}
}
