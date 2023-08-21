import { Request, Response } from 'express';
import {PropsVacancies} from '../../../interfaces/vacancies';
import {  Vacancies } from '../../../models';

async function SetVacancies(req: Request, res: Response) {
  const {
    title,
    description,
    requirement,
    sallary,
    benefits,
    workSchedule,
    amount,
    model,
  }: PropsVacancies = req.body;
  // #swagger.tags = ['NotesAndCoins']
  // #swagger.description = 'Endpoint para criar uma nova moeda ou nota(cedula)'
  /*    #swagger.parameters['body'] = {
                in: 'body',
                description: "Dado necessario para criar moeda e nota(cedula)",
                required: true,
                schema: { $ref: "#/definitions/setMoney" }
        } */

  /* #swagger.responses[401] = {
               schema: { $ref: "#/definitions/ErrorTokenInvalid" },
               description: 'Quando o token de authenticação não for valido ou quando o token de authenticação não for encontrado'
        } */

  try {
    await Vacancies.upsert({
      title,
      description,
      requirement: requirement ? requirement : null,
      sallary: sallary ? sallary : null,
      benefits: benefits ? benefits : null,
      workSchedule: workSchedule ? workSchedule : null,
      amount,
      model: model ? model : null,
    });
    /* #swagger.responses[200] = {
               schema: { $ref: "#/definitions/MessageSetMoney" },
               description: 'Moeda/nota criada'
        } */
    return res.json({
      message: 'Vaga criada com sucesso',
    });
  } catch (err) {
    /* #swagger.responses[400] = {
               schema: { $ref: "#/definitions/Error400" },
               description: 'Quando houver um erro na requisição'
        } */
    return res.status(400).json({ message: err.message });
  }
}

export default SetVacancies;
