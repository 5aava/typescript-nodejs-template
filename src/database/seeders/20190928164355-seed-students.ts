import { QueryInterface } from 'sequelize';

import faker = require('faker');
faker.locale = 'en';


const StudentsArray: {
  firstname: string,
  lastname: string,
  progressId: number,

  createdAt: string,
  updatedAt: string,
}[] = [];

for (let i = 1;i <= 10;i++) {
  StudentsArray.push({
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    progressId: faker.random.number({min: 1, max:4}),

    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString(),
  });
}


export function up (queryInterface: QueryInterface) {
  return queryInterface.bulkInsert('Students', StudentsArray, {});
}

export function down (queryInterface: QueryInterface) {
  return queryInterface.bulkDelete('Students', {});
}
