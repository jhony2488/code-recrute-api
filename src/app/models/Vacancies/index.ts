import { DataTypes } from 'sequelize';
import db from '../../../config/database';

require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

const Vacancies = db.define('Vacancies', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  requirement: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  sallary:{
    type: DataTypes.STRING,
    allowNull: true,
  },
  benefits: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  workSchedule: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  model: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

export default Vacancies;
