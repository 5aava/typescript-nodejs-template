/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';
exports.__esModule = true;
exports.down = exports.up = void 0;
var sequelize_1 = require('sequelize');
function up (queryInterface) {
  return queryInterface.createTable('Students', {
    id: {
      type: sequelize_1.DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstname: {
      type: sequelize_1.DataTypes.STRING,
    },
    lastname: {
      type: sequelize_1.DataTypes.STRING,
    },
    progressId: {
      type: sequelize_1.DataTypes.SMALLINT,
      references: {
        model: 'Progress',
        key: 'id',
      },
    },
    createdAt: {
      allowNull: false,
      type: sequelize_1.DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: sequelize_1.DataTypes.DATE,
    },
  });
}
exports.up = up;
function down (queryInterface) {
  return queryInterface.dropTable('Students');
}
exports.down = down;
