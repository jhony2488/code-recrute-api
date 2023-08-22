import { Request, Response } from 'express';
import { Users } from '../../../models';
import {PropsUsersUpdated} from '../../../interfaces/users';

async function SetUsers(req: Request, res: Response) {
  const {
    email,
    password,
  }: PropsUsersUpdated = req.body;

  const { id } = req.params;

  // #swagger.tags = ['Clients']
  // #swagger.description = 'Endpoint para criar um novo usuario'
  /*    #swagger.parameters['body'] = {
                in: 'body',
                description: "Dado necessario para criar cliente",
                required: true,
                schema: { $ref: "#/definitions/SetClient" }
        } */

  /* #swagger.responses[401] = {
               schema: { $ref: "#/definitions/ErrorTokenInvalid" },
               description: 'Quando o token de authenticação não for valido ou quando o token de authenticação não for encontrado'
        } */

  try {
    if (email && password) {
      await Users.update(
        {
          email,
          password
        },
        {
          where: {
            id,
          },
        },
      );
    } else if (email && !password) {
      await Users.update(
        {
          email,
        },
        {
          where: {
            id,
          },
        },
      );
    } else if (!email && password) {
      await Users.update(
        {
          password,
        },
        {
          where: {
            id,
          },
        },
      );
    } else {
      return res.json({
        message: 'Usuario não encontrado',
        email,
      });
    }

    /* #swagger.responses[200] = {
               schema: { $ref: "#/definitions/MessageSetClient" },
               description: 'Cliente criado'
        } */
    return res.json({
      message: 'Usuario atualizado com sucesso',
      email,
    });
  } catch (err) {
    /* #swagger.responses[400] = {
               schema: { $ref: "#/definitions/Error400" },
               description: 'Quando houver um erro na requisição'
        } */
    return res.status(400).json({ message: err.message });
  }
}

export default SetUsers;
