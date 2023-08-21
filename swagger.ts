const doc = require('./doc');
const swaggerAutogen = require('swagger-autogen')();

require('dotenv').config({
  path: '.env',
});

const outputFile = 'swagger_output.json';
const endpointsFiles = [`./${process.env.ORIGIN_SEQUELIZE}/routes${process.env.EXTENSION_FILES_ROUTER}`];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require(`./${process.env.ORIGIN_SEQUELIZE}/server${process.env.EXTENSION_FILES_ROUTER}`);
});
