/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';
exports.__esModule = true;
exports.down = exports.up = void 0;
var sequelize_1 = require('sequelize');
function up (queryInterface) {
  return queryInterface.createTable('Progress', {
    id: {
      type: sequelize_1.DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: sequelize_1.DataTypes.STRING,
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
  return queryInterface.dropTable('Progress');
}
exports.down = down;
