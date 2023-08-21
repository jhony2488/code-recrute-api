
import { Request, Response } from 'express';
import {Users} from '../../../models';

async function DeleteUsers(req: Request, res: Response) {
  const { id } = req.params;
  // #swagger.tags = ['Clients']
  // #swagger.description = 'Endpoint para deletar um cliente'

  /* #swagger.responses[401] = {
               schema: { $ref: "#/definitions/ErrorTokenInvalid" },
               description: 'Quando o token de authenticação não for valido ou quando o token de authenticação não for encontrado'
        } */

  try {
    await Users.destroy({
      where: {
        id
      }
    });

    /* #swagger.responses[200] = {
               schema: { $ref: "#/definitions/MessageDeleteClient" },
               description: 'Cliente deletado'
        } */
    return res.json({
      message: 'Usuario deletado com sucesso',
    });
  } catch (err) {
    /* #swagger.responses[400] = {
               schema: { $ref: "#/definitions/Error400" },
               description: 'Quando houver um erro na requisição'
        } */
    return res.status(400).json({ message: err.message });
  }
}

export default DeleteUsers;
