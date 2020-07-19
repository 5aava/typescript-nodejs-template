import { resolve } from 'path';
import { config } from 'dotenv';
import { Sequelize } from 'sequelize';

config({ path: resolve(process.cwd(), '.env')});


const sequelize = new Sequelize(
    <string>process.env.DB_DATABASE,
    <string>process.env.DB_USERNAME,
    <string>process.env.DB_PASSWORD,
    {
      dialect: 'postgres',
      define: {
        charset: 'utf8',
        collate: 'utf8_general_ci',
      },
      dialectOptions: {
        timezone: 'Etc/GMT+3',
      },
      logging: console.log,
    }
);


export default sequelize;
