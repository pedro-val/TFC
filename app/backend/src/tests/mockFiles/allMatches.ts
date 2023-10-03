const matchesMock = [{
      id: 1,
      homeTeamId: 16,
      homeTeamGoals: 1,
      awayTeamId: 8,
      awayTeamGoals: 1,
      inProgress: false,
      homeTeam: { id: 16, teamName: 'São Paulo' },
      awayTeam: { id: 8, teamName: 'Grêmio' }
    },
    {
      id: 2,
      homeTeamId: 9,
      homeTeamGoals: 1,
      awayTeamId: 14,
      awayTeamGoals: 1,
      inProgress: false,
      homeTeam: { id: 9, teamName: 'Internacional' },
      awayTeam: { id: 14, teamName: 'Santos' }
    },
    {
      id: 3,
      homeTeamId: 4,
      homeTeamGoals: 3,
      awayTeamId: 11,
      awayTeamGoals: 0,
      inProgress: false,
      homeTeam: { id: 4, teamName: 'Corinthians' },
      awayTeam: { id: 11, teamName: 'Napoli-SC' }
    }];

    const matchesMockTrue = [{
        id: 1,
        homeTeamId: 16,
        homeTeamGoals: 1,
        awayTeamId: 8,
        awayTeamGoals: 1,
        inProgress: true,
        homeTeam: { id: 16, teamName: 'São Paulo' },
        awayTeam: { id: 8, teamName: 'Grêmio' }
      },
      {
        id: 2,
        homeTeamId: 9,
        homeTeamGoals: 1,
        awayTeamId: 14,
        awayTeamGoals: 1,
        inProgress: true,
        homeTeam: { id: 9, teamName: 'Internacional' },
        awayTeam: { id: 14, teamName: 'Santos' }
      },
      {
        id: 3,
        homeTeamId: 4,
        homeTeamGoals: 3,
        awayTeamId: 11,
        awayTeamGoals: 0,
        inProgress: true,
        homeTeam: { id: 4, teamName: 'Corinthians' },
        awayTeam: { id: 11, teamName: 'Napoli-SC' }
      }];
   
const responseMock = [
    {
      "id": 1,
      "homeTeamId": 16,
      "homeTeamGoals": 1,
      "awayTeamId": 8,
      "awayTeamGoals": 1,
      "inProgress": false,
      "homeTeam": {
        "teamName": "São Paulo"
      },
      "awayTeam": {
        "teamName": "Grêmio"
      }
    },
    {
      "id": 2,
      "homeTeamId": 9,
      "homeTeamGoals": 1,
      "awayTeamId": 14,
      "awayTeamGoals": 1,
      "inProgress": false,
      "homeTeam": {
        "teamName": "Internacional"
      },
      "awayTeam": {
        "teamName": "Santos"
      }
    },
    {
      "id": 3,
      "homeTeamId": 4,
      "homeTeamGoals": 3,
      "awayTeamId": 11,
      "awayTeamGoals": 0,
      "inProgress": false,
      "homeTeam": {
        "teamName": "Corinthians"
      },
      "awayTeam": {
        "teamName": "Napoli-SC"
      }
    },
  ]

  const responseMockTrue = [
    {
      "id": 1,
      "homeTeamId": 16,
      "homeTeamGoals": 1,
      "awayTeamId": 8,
      "awayTeamGoals": 1,
      "inProgress": true,
      "homeTeam": {
        "teamName": "São Paulo"
      },
      "awayTeam": {
        "teamName": "Grêmio"
      }
    },
    {
      "id": 2,
      "homeTeamId": 9,
      "homeTeamGoals": 1,
      "awayTeamId": 14,
      "awayTeamGoals": 1,
      "inProgress": true,
      "homeTeam": {
        "teamName": "Internacional"
      },
      "awayTeam": {
        "teamName": "Santos"
      }
    },
    {
      "id": 3,
      "homeTeamId": 4,
      "homeTeamGoals": 3,
      "awayTeamId": 11,
      "awayTeamGoals": 0,
      "inProgress": true,
      "homeTeam": {
        "teamName": "Corinthians"
      },
      "awayTeam": {
        "teamName": "Napoli-SC"
      }
    },
  ]

  export default {
    matchesMock,
    responseMock,
    matchesMockTrue,
    responseMockTrue,
};