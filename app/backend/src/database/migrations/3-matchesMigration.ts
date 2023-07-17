import { Model, QueryInterface, DataTypes } from 'sequelize';

export default {
    up: async (queryInterface: QueryInterface) => {
        await queryInterface.createTable('matches', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            homeTeamId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: 'home_team_id',
                references: {
                    model: 'teams',
                    key: 'id',
                },
            },
            homeTeamGoals: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: 'home_team_goals',
            },
            awayTeamId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: 'away_team_id',
                references: {
                    model: 'teams',
                    key: 'id',
                },
            },
            awayTeamGoals: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: 'away_team_goals',
            },
            inProgress: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                field: 'in_progress',
            },
        }), {
            timestamps: false,
            underscored: true,
        };
    },
    
    down: async (queryInterface: QueryInterface) => {
        await queryInterface.dropTable('matches');
      },
}