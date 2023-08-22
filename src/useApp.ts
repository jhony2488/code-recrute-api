import express,{} from 'express';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import routes from './routes';

const swaggerFile = require('../swagger_output.json');

export function useExpressApp(app){
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(cors());
    app.use(routes);
    app.use(
      '/documentation',
      swaggerUi.serve,
      swaggerUi.setup(swaggerFile)
    );
}
