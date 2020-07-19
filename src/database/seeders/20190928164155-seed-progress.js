"use strict";
exports.__esModule = true;
exports.down = exports.up = void 0;
var wordsArray = ['bad', 'norm', 'good', 'exellent'];
var ProgressArray = [];
wordsArray.forEach(function (word) {
    ProgressArray.push({
        name: word,
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString()
    });
});
function up(queryInterface) {
    return queryInterface.bulkInsert('Progress', ProgressArray, {});
}
exports.up = up;
function down(queryInterface) {
    return queryInterface.bulkDelete('Progress', {});
}
exports.down = down;
