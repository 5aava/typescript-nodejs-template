import { QueryInterface, DataTypes } from 'sequelize';

export function up (queryInterface: QueryInterface): Promise<void> {
  return queryInterface.createTable('Students', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstname: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    },
    progressId: {
      type: DataTypes.SMALLINT,
      references: {
        model: 'Progress',
        key: 'id',
      },
    },

    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  });
}

export function down (queryInterface: QueryInterface): Promise<void> {
  return queryInterface.dropTable('Students');
}

