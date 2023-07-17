import { Model, QueryInterface, DataTypes } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('teams', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      teamName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'team_name',
      },
    }), {
      timestamps: false,
      underscored: true,
    };
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('teams');
  },
};