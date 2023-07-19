import ITeamStatistics from '../Interfaces/ITeamStatistics';
import IResponse from '../Interfaces/IResponse';
import TeamModel from '../database/models/TeamModel';
import MatchesModel from '../database/models/MatchesModel';
import MatcheService from './MatchesService';
import IMatchResponse from '../Interfaces/IMatchResponse';

export default class LeaderboardService {
  constructor(
    private teamModel: typeof TeamModel,
    private matchesModel: typeof MatchesModel,
  ) {}

  static awayTeamData(m: IMatchResponse[], tD: ITeamStatistics, t: TeamModel): ITeamStatistics[] {
    let response: ITeamStatistics[] = [];
    m.forEach((match) => {
      const data = tD;
      data.totalGames += 1;
      data.goalsFavor += match.awayTeamId === t.id ? match.awayTeamGoals : match.homeTeamGoals;
      data.goalsOwn += match.awayTeamId === t.id ? match.homeTeamGoals : match.awayTeamGoals;
      if (match.awayTeamGoals > match.homeTeamGoals) {
        data.totalPoints += 3;
        data.totalVictories += 1;
      } else if (match.awayTeamGoals < match.homeTeamGoals) {
        data.totalLosses += 1;
      } else {
        data.totalPoints += 1;
        data.totalDraws += 1;
      }
      response = [...response, data];
    });
    return response;
  }

  static homeTeamData(m: IMatchResponse[], tD: ITeamStatistics, t: TeamModel): ITeamStatistics[] {
    let response: ITeamStatistics[] = [];
    m.forEach((match) => {
      const data = tD;
      data.totalGames += 1;
      data.goalsFavor += match.homeTeamId === t.id ? match.homeTeamGoals : match.awayTeamGoals;
      data.goalsOwn += match.homeTeamId === t.id ? match.awayTeamGoals : match.homeTeamGoals;
      if (match.homeTeamGoals > match.awayTeamGoals) {
        data.totalPoints += 3;
        data.totalVictories += 1;
      } else if (match.homeTeamGoals < match.awayTeamGoals) {
        data.totalLosses += 1;
      } else {
        data.totalPoints += 1;
        data.totalDraws += 1;
      }
      response = [...response, data];
    });
    return response;
  }

  static awayReturn(teams: TeamModel[], separatedMatches: IMatchResponse[][]): ITeamStatistics[] {
    let teamData: ITeamStatistics[] = [];
    for (let i = 0; i < teams.length; i += 1) {
      const team = teams[i];
      const matches: IMatchResponse[] = separatedMatches[i];
      const data: ITeamStatistics = {
        name: team.teamName,
        totalPoints: 0,
        totalGames: 0,
        totalVictories: 0,
        totalDraws: 0,
        totalLosses: 0,
        goalsFavor: 0,
        goalsOwn: 0,
      };
      const [newData]: ITeamStatistics[] = LeaderboardService.awayTeamData(matches, data, team);
      teamData = [...teamData, newData];
    }
    return teamData;
  }

  static homeReturn(teams: TeamModel[], separatedMatches: IMatchResponse[][]): ITeamStatistics[] {
    let teamData: ITeamStatistics[] = [];
    for (let i = 0; i < teams.length; i += 1) {
      const team = teams[i];
      const matches: IMatchResponse[] = separatedMatches[i];
      const data: ITeamStatistics = {
        name: team.teamName,
        totalPoints: 0,
        totalGames: 0,
        totalVictories: 0,
        totalDraws: 0,
        totalLosses: 0,
        goalsFavor: 0,
        goalsOwn: 0,
      };
      const [newData]: ITeamStatistics[] = LeaderboardService.homeTeamData(matches, data, team);
      teamData = [...teamData, newData];
    }
    return teamData;
  }

  static orderTeams(teamData: ITeamStatistics[]): ITeamStatistics[] {
    return teamData.sort((a, b) => {
      const goalsBalanceA = a.goalsBalance || 0;
      const goalsBalanceB = b.goalsBalance || 0;
      return (b.totalPoints - a.totalPoints)
             || (goalsBalanceB - goalsBalanceA)
             || (b.goalsFavor - a.goalsFavor);
    });
  }

  static addGoalsBalanceAndEfficiency(teamData: ITeamStatistics[]): ITeamStatistics[] {
    const firstResult = teamData.map((team) => {
      const data = team;
      data.goalsBalance = data.goalsFavor - data.goalsOwn;
      data.efficiency = Number(((data.totalPoints / (data.totalGames * 3)) * 100).toFixed(2));
      return data;
    });
    const response = LeaderboardService.orderTeams(firstResult);

    return response;
  }

  private async getAllMatches(): Promise<IMatchResponse[]> {
    const mountResponse = await this.matchesModel.findAll({
      where: { inProgress: false },
    });
    const response = MatcheService.mappingResponse(mountResponse);

    return response;
  }

  async getTeamStatistics(reqPath: string): Promise<IResponse> {
    const teams = await this.teamModel.findAll();
    const allMatches = await this.getAllMatches();
    const allTeams = teams.map((team) => team.toJSON()) as TeamModel[];
    const separatedMatches: IMatchResponse[][] = allTeams.map((team) => {
      const matches = allMatches.filter((match) => match[reqPath as
        keyof typeof match] === team.id);
      return matches;
    });
    const response = reqPath === 'homeTeamId'
      ? LeaderboardService.homeReturn(allTeams, separatedMatches)
      : LeaderboardService.awayReturn(allTeams, separatedMatches);
    return { status: 200, data: LeaderboardService.addGoalsBalanceAndEfficiency(response) };
  }
}
