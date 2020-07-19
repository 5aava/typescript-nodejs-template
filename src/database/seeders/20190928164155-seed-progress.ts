import { QueryInterface } from 'sequelize';


const wordsArray: string[] = ['bad', 'norm', 'good', 'exellent'];

const ProgressArray: {
  name: string,

  createdAt: string,
  updatedAt: string,
}[] = [];

wordsArray.forEach(word=>{
  ProgressArray.push({
    name: word,
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString(),
  });
});


export function up (queryInterface: QueryInterface) {
  return queryInterface.bulkInsert('Progress', ProgressArray, {});
}

export function down (queryInterface: QueryInterface) {
  return queryInterface.bulkDelete('Progress', {});
}
