import Sequelize from 'sequelize';
import { config } from './Config.js';
//created in seperate file for future use also 

const sequelize = new Sequelize({
    host: config.HOST,
    dialect: 'mysql',
    database: config.DATABASE,
    username: config.USERNAME,
    password: config.PASSWORD
});
export default sequelize;