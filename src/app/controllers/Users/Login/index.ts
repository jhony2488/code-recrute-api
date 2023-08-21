
import { Request, Response } from 'express';
import { generateToken } from '../../../utils/generateToken';
import { redisClient } from '../../../../app';
import bcrypt from 'bcrypt';
import { Users } from '../../../models';

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
      where: { email }
    });

    if (result) {
      const passwordHashCompare = bcrypt.compare(password, result.password, (err, result:boolean) => {
        if(err){
          return err;
        }
        return result;
      });

      if (passwordHashCompare) {
        redisClient.set(token, token, { EX: 60 * 60 * 48 });
      }
      return res.json({
        token
      });
    }

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
