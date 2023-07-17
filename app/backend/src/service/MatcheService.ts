import IMatchResponse from '../Interfaces/IMatchResponse';
import MatchesModel from '../database/models/MatchesModel';
import IResponse from '../Interfaces/IResponse';

export default class MatcheService {
  constructor(private matchesModel = MatchesModel) {}

  private static mappingResponse(matches: MatchesModel[]) {
    return matches.map((match) => {
      const eachMatchResponse = match.toJSON() as IMatchResponse;
      return {
        ...eachMatchResponse,
        homeTeam: { teamName: eachMatchResponse.homeTeam.teamName },
        awayTeam: { teamName: eachMatchResponse.awayTeam.teamName },
      };
    });
  }

  async getAllMatches(): Promise<IResponse> {
    const matches = await this.matchesModel.findAll({
      include: ['homeTeam', 'awayTeam'],
    });

    return {
      status: 200,
      data: MatcheService.mappingResponse(matches),
    };
  }

  async getMatchesByProgress(inProgress: boolean): Promise<IResponse> {
    const matches = await this.matchesModel.findAll({
      where: { inProgress },
      include: ['homeTeam', 'awayTeam'],
    });
    return {
      status: 200,
      data: MatcheService.mappingResponse(matches),
    };
  }

  async finishMatch(matchId: number): Promise<IResponse> {
    const match = await this.matchesModel.findByPk(matchId);
    if (!match) {
      return {
        status: 404,
        data: { message: 'Match not found' },
      };
    }
    await match.update({ inProgress: false });
    return {
      status: 200,
      data: { message: 'Finished' },
    };
  }

  async updateMatchGoals(id: number, goals: number[]): Promise<IResponse> {
    const match = await this.matchesModel.findByPk(id);
    if (!match) {
      return {
        status: 404,
        data: { message: 'Match not found' },
      };
    }
    await match.update({ homeTeamGoals: goals[0], awayTeamGoals: goals[1] });
    return {
      status: 200,
      data: { message: 'Goals updated' },
    };
  }
}
