import {NextFunction, Request, Response} from 'express';
import jwt from 'jsonwebtoken';
import {promisify} from 'util';
import {redisClient} from '../../app'

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({
    path: '.env.development',
  });
} else {
  require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
  });
}
async function auth(req: Request, res: Response, next: NextFunction) {
  const authHeader:string | undefined = req.header('Authorization');
  const redisGetAsync = await promisify(redisClient.get).bind(redisClient);

  if (!authHeader) {
    return res.status(401).json({ message: 'Token not provided' });
  }

  const token: string = req.header('Authorization') || '';
  const tokenUser: string = req.header('AuthorizationUser') || '';
  console.log('jhonyyyy2')
    // Verificar se o token existe no Redis
    try {
      console.log('jhonyyyy24')
      const reply = await redisClient.get(tokenUser);
      console.log('jhonyyyy245')
      if (!reply) {
        return res.status(401).json({ valid: false });
      }
    } catch (err) {
      return res.status(500).json({ error: 'Erro ao verificar o token.' });
    }
console.log('jhonyyyy')
  const jwtApp = await jwt.sign(
    {
      token: 'Bearer ' + token,
    },
    token
  );
  try {
    const verified = await jwt.verify(
      jwtApp,
      'Bearer ' + process.env.APP_SECRET
    );
    if (verified) {
      next();
    }
  } catch (error) {
    return res.status(401).json({ message: 'Token Invalid', error });
  }
}

export default auth;
