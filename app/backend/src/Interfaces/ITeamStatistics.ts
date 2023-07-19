export default interface ITeamStatistics {
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  homeTeam?: {
    teamName: string;
  }
  goalsBalance?: number;
  efficiency?: number;
}
