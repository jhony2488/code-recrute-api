import { Request, Response } from 'express';
import { Users } from '../../../models';

async function getCLients(req: Request, res: Response) {
  const { id } = req.query;
  // #swagger.tags = ['Clients']
  // #swagger.description = 'Endpoint para obter dados de  clientes'

  /* #swagger.responses[401] = {
             schema: { $ref: "#/definitions/ErrorTokenInvalid" },
             description: 'Quando o token de authenticação não for valido ou quando o token de authenticação não for encontrado'
      } */

  try {
    const result = id
      ? await Users.findOne({
          where: { id },
        })
      : await Users.findAll();
    /* #swagger.responses[200] = {
             schema: { $ref: "#/definitions/SendMailResponse" },
             description: 'Obtido os usuarios'
      } */
    return res.json({
      result,
    });
  } catch (err) {
    /* #swagger.responses[400] = {
             schema: { $ref: "#/definitions/Error400" },
             description: 'Quando houver um erro na requisição'
      } */
    return res.status(400).json({ message: err.message });
  }
}

export default getCLients;
