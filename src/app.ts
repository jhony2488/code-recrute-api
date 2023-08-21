import express from 'express';
import redis from 'redis';
import {useExpressApp} from './useApp';
import {connectionDB} from './database/index';

export const app = express();

export const redisClient = redis.createClient({
  socket: {
    host: 'localhost',
    port: 6379,
    tls: true,
},
});

async function connectRedis(){
  await redisClient.connect();

  redisClient.on('connect', () => {
    console.log('Conexão com o Redis estabelecida.');
  });
}

export function server() {
  useExpressApp(app);
  connectionDB();

  connectRedis()

  app.listen(80, () => {
    console.log('servidor rodando');
  });
}
