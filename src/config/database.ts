import { Sequelize } from "sequelize";

require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});


const sequelize = new Sequelize(`${process.env.DB_NAME}`, `${process.env.DB_USER}`, `${process.env.DB_PASS}`, {
  host: process.env.DB_HOST || 'db',
  port: parseInt(process.env.DB_PORT || '5432'),
  dialect: 'postgres',
});


export default sequelize;
