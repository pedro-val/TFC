import IMatchResponse from './IMatchResponse';
import ITeamStatistics from './ITeamStatistics';

export default interface IResponse {
  status: number;
  data: IMatchResponse[] | ITeamStatistics[] | string | object;
}
