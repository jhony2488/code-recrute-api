import express from 'express';
import * as redis from 'redis';
import {useExpressApp} from './useApp';
import {connectionDB} from './database/index';

require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

export const app = express();

export const redisClient = redis.createClient({
  socket: {
    host: process.env.REDIS_HOST || 'localhost',
    port: 6379,
},
});

function connectRedis(){
  redisClient.on('connect', () => {
    console.log('Conexão com o Redis estabelecida');
  });

  redisClient.on('error', (err) => {
    console.error('Erro ao conectar com o Redis:', err);
  });
}

export function server() {
  useExpressApp(app);
  connectionDB();

  connectRedis();

  app.listen(80, () => {
    console.log('servidor rodando');
  });
}
