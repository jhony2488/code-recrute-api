
import { Request, Response } from 'express';
import { generateToken } from '../../../utils/generateToken';
import { redisClient } from '../../../../app';
import { Users } from '../../../models';
import {compareHashPassword} from '../../../utils/hashPassword';

async function Login(req: Request, res: Response) {
  const { email, password } = req.body;
  const token = generateToken() || '';
  // #swagger.tags = ['Clients']
  // #swagger.description = 'Endpoint para obter dados de  clientes'

  /* #swagger.responses[401] = {
             schema: { $ref: "#/definitions/ErrorTokenInvalid" },
             description: 'Quando o token de authenticação não for valido ou quando o token de authenticação não for encontrado'
      } */

  try {
    const result: any = await Users.findOne({
      where: { email, password }
    });
    console.log(result,email, password )
    if (result) {
              console.log('jhonyyy778')
        redisClient.set(token, token, { EX: 60 * 60 * 48 });
        console.log('jhonyyy55')
        return res.json({
          token
        });
    }

    return res.json({
      message: "Email ou senha incorreto"
    });

    /* #swagger.responses[200] = {
             schema: { $ref: "#/definitions/SendMailResponse" },
             description: 'Obtido os usuarios'
      } */

  } catch (err) {
    /* #swagger.responses[400] = {
             schema: { $ref: "#/definitions/Error400" },
             description: 'Quando houver um erro na requisição'
      } */
    return res.status(400).json({ message: err.message });
  }
}

export default Login;
