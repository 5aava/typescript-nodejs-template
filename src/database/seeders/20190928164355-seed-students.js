"use strict";
exports.__esModule = true;
exports.down = exports.up = void 0;
var faker = require("faker");
faker.locale = 'en';
var StudentsArray = [];
for (var i = 1; i <= 10; i++) {
    StudentsArray.push({
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        progressId: faker.random.number({ min: 1, max: 4 }),
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString()
    });
}
function up(queryInterface) {
    return queryInterface.bulkInsert('Students', StudentsArray, {});
}
exports.up = up;
function down(queryInterface) {
    return queryInterface.bulkDelete('Students', {});
}
exports.down = down;
