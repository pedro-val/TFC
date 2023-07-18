import TeamModel from '../database/models/TeamModel';
import ICreateTeam from '../Interfaces/ICreateTeam';
import IMatchResponse from '../Interfaces/IMatchResponse';
import MatchesModel from '../database/models/MatchesModel';
import IResponse from '../Interfaces/IResponse';

export default class MatcheService {
  constructor(private matchesModel = MatchesModel) {}

  static mappingResponse(matches: MatchesModel[]) {
    return matches.map((match) => {
      const eachMatchResponse = match.toJSON() as IMatchResponse;
      if (eachMatchResponse.homeTeam && eachMatchResponse.awayTeam) {
        return {
          ...eachMatchResponse,
          homeTeam: { teamName: eachMatchResponse.homeTeam.teamName },
          awayTeam: { teamName: eachMatchResponse.awayTeam.teamName },
        };
      }
      return eachMatchResponse;
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

  private static async checkTeamExists(homeTeamId: number, awayTeamId: number):
  Promise<IResponse | void> {
    const check1 = await TeamModel.findByPk(homeTeamId);
    const check2 = await TeamModel.findByPk(awayTeamId);
    if (!check1 || !check2) {
      return { status: 404, data: { message: 'There is no team with such id!' } };
    }
  }

  async creatingTheMatchOnly(body: ICreateTeam): Promise<IResponse> {
    const { homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals } = body;
    const match = await this.matchesModel.create({
      id: 0,
      homeTeamId,
      homeTeamGoals,
      awayTeamId,
      awayTeamGoals,
      inProgress: true,
    });
    return {
      status: 201,
      data: match,
    };
  }

  async createMatch(body: ICreateTeam): Promise<IResponse> {
    const { homeTeamId, awayTeamId } = body;
    if (homeTeamId === awayTeamId) {
      return { status: 422,
        data: { message: 'It is not possible to create a match with two equal teams' } };
    }
    const check = await MatcheService.checkTeamExists(homeTeamId, awayTeamId);
    if (check) {
      return check;
    }
    const response = await this.creatingTheMatchOnly(body);
    return response;
  }
}
