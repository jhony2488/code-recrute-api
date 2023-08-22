import express from 'express';

import authentication from './app/middlewares/auth';
import authenticationWithTokenLogin from './app/middlewares/authWithLogin';

import DefaultControllers from './app/controllers/DefaultControllers';
import { LoginUser,GetUsers, SetUsers, UpdatedUsers, DeleteUsers } from './app/controllers/Users';

import {
  GetVacancies,
  SetVacancies,
  UpdatedVacancies,
  DeleteVacancies
} from './app/controllers/Vacancies';

const router = express.Router();

//default
router.get('/', authentication, DefaultControllers);

//users
router.get('/users', authentication, GetUsers);
router.post('/users', authentication, SetUsers);
router.put('/users/:id', authentication,  UpdatedUsers);
router.patch('/users/:id', authentication,  UpdatedUsers);
router.delete('/users/:id', authentication, DeleteUsers);

//login
router.post('/login', authentication, LoginUser);

//Vacancies
router.get('/vacancies', authentication, GetVacancies);
router.post('/vacancies', authentication, SetVacancies);
router.put('/vacancies/:id', authentication,UpdatedVacancies);
router.patch('/vacancies/:id',authentication,UpdatedVacancies);
router.delete('/vacancies/:id', authentication, DeleteVacancies);


export default router;
