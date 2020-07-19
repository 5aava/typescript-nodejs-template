import { QueryInterface, DataTypes } from 'sequelize';

export function up (queryInterface: QueryInterface): Promise<void> {
  return queryInterface.createTable('Progress', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
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
  return queryInterface.dropTable('Progress');
}

