export default interface ICreateTeam {
  id?: number;
  homeTeamId: number;
  awayTeamId: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
  inProgress?: boolean;
}
