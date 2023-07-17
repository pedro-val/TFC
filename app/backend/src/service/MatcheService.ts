import IMatchResponse from '../Interfaces/IMatchResponse';
import MatchesModel from '../database/models/MatchesModel';
import IResponse from '../Interfaces/IResponse';

// const mountFindAllMatchesReturn = (matches: MatchesModel[]):
// IMatchResponse[] => matches.map((match: MatchesModel) => ({
//   id: match.id,
//   homeTeamId: match.homeTeamId,
//   homeTeamGoals: match.homeTeamGoals,
//   awayTeamId: match.awayTeamId,
//   awayTeamGoals: match.awayTeamGoals,
//   inProgress: match.inProgress,
//   homeTeam: {
//     teamName: match.home_team.teamName,
//   },
//   awayTeam: {
//     teamName: match.away_team.teamName,
//   },
// }));

export default class MatcheService {
  constructor(private matchesModel = MatchesModel) {}
  async getAllMatches(): Promise<IResponse> {
    const matches = await this.matchesModel.findAll({
      include: ['home_team', 'away_team'],
    });
    // const response = mountFindAllMatchesReturn(matches);
    return {
      status: 200,
      data: matches,
    };
  }
}
