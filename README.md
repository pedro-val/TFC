# TFC - Informative Football Website ⚽️

TFC is an informative website about football matches and standings!

## Technologies Used

In this project, the following technologies and tools were used:

- **Node.js**: Used as the server runtime environment.
- **Express.js**: Node.js framework for creating routes and API endpoints.
- **Sequelize**: ORM (Object-Relational Mapping) for interacting with the database.
- **Docker**: Used to containerize the applications and the database.
- **PostgreSQL**: Relational database used to store the project data.
- **JWT (JSON Web Tokens)**: Used for user authentication.
- **TDD (Test-Driven Development)**: Development methodology that involves creating tests before implementing features.

## Learnings

During the development of this project, I gained valuable knowledge and experience, including:

- Developing APIs in Node.js with Express.
- Integrating applications with PostgreSQL databases using Sequelize.
- Using Docker containers to manage applications and databases.
- Implementing authentication and authorization using JSON Web Tokens (JWT).
- Practicing Test-Driven Development (TDD) to ensure code quality.
- Creating endpoints for different flows of an application, such as football matches, standings, and user authentication.

These learnings were crucial for the success of this project and will contribute to the development of future projects.

## Project Description

In the TFC development team, our squad was responsible for developing an API (using the TDD method) and also integrating the applications via docker-compose to make them work with a database.

In this project, a dockerized backend was developed using data modeling through Sequelize. The development followed the business rules provided in the project, and the API was able to be consumed by a front-end already provided in this project.

To add a match, a token was required, meaning the user needed to be logged in to make changes. There was a relationship between the teams and matches tables to update the matches.

The backend implemented business rules to properly populate the table available on the front-end, which was displayed to the system user.

## Project Composition

This project was composed of 4 main flows:

### Teams

**Introduction**
The following requirements considered consuming the `/teams` route to return the names of teams associated with a match in the front-end rendering.

1. A migration and model were developed in `/app/backend/src/database` in the corresponding folders for the teams table.
2. (TDD) Tests were developed covering at least 5% of the files in `/app/backend/src`, with a minimum of 7 lines covered.
3. The `/teams` endpoint was developed on the backend to return all teams correctly.
4. (TDD) Tests were developed covering at least 10% of the files in `/app/backend/src`, with a minimum of 19 lines covered.
5. The `/teams/:id` endpoint was developed on the backend to return data for a specific team.

### Users and Login

**Introduction**
The route used was `/login`;

The route received the email and password fields, and these fields were validated in the database:

6. A migration and model were developed in `/app/backend/src/database` in the corresponding folders for the users table.
7. (TDD) Tests were developed covering at least 15% of the files in `/app/backend/src`, with a minimum of 25 lines covered.
8. The `/login` endpoint was developed on the backend to allow access with valid data in the front-end.
9. (TDD) Tests were developed covering at least 20% of the files in `/app/backend/src`, with a minimum of 35 lines covered.
10. The `/login` endpoint was developed on the backend to prevent access with an unregistered email or incorrect password in the front-end.
11. (TDD) A validation middleware for the token was developed, checking if it was valid, and the `/login/role` endpoint was developed on the backend to return data correctly in the front-end.

### Matches

**Introduction**
For the match creation requirements, it was necessary to implement the model and some routes related to the Match entity.

12. A migration and model were developed in `/app/backend/src/database` in the corresponding folders for the matches table.
13. (TDD) Tests were developed covering at least 45% of the files in `/app/backend/src`, with a minimum of 70 lines covered.
14. The `/matches` endpoint was developed so that the data would appear correctly on the front-end match screen.
15. The `/matches` endpoint was developed to allow filtering only ongoing matches and only completed matches on the front-end match screen.
16. The `/matches/:id/finish` endpoint was developed so that a match could be finished in the database.
17. The `/matches/:id` endpoint was developed so that ongoing matches could be updated.
18. (TDD) Tests were developed covering at least 60% of the files in `/app/backend/src`, with a minimum of 80 lines covered.
19. The `/matches` endpoint was developed to allow adding a new ongoing match to the database.
20. The `/matches` endpoint was developed to prevent adding a match with the same teams or a team that does not exist in the teams table.

### Leaderboards

**Introduction**
To build the team standings, the specified business rules were followed.

21. (Bonus; TDD) Tests were developed covering at least 80% of the files in `/app/backend/src`, with a minimum of 100 lines covered.
22. The `/leaderboard/home` endpoint was developed to return the home team's performance information.
23. The `/leaderboard/home` endpoint was developed to allow filtering the home team standings on the front-end leaderboard screen and updating the table when inserting the match Corinthians 2 X 1 Internacional.
24. The `/leaderboard/home` endpoint was developed to allow filtering the home team standings on the front-end leaderboard screen, including the `goalsBalance` and `efficiency` properties, in addition to the previous properties.
25. The `/leaderboard/away` endpoint was developed to return the away team's performance information.

## Leaderboards

26. The `/leaderboard/away` endpoint was developed to allow filtering the away team standings on the front-end leaderboard screen.
27. The `/leaderboard/away` endpoint was developed to allow filtering the away team standings on the front-end leaderboard screen, including the `goalsBalance` and `efficiency` properties, in addition to the previous properties.
28. The `/leaderboard/:team` endpoint was developed to allow searching for a specific team's performance on the leaderboard screen.
29. (Bonus; TDD) The `/leaderboard/` endpoint was developed to return the performance of all teams on the leaderboard screen.
30. The `/leaderboard/` endpoint was developed to allow searching for the performance of all teams on the leaderboard screen, including the `goalsBalance` and `efficiency` properties, in addition to the previous properties.
