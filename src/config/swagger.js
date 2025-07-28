// swaggerOptions.js
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
      description: 'Auto-generated Swagger doc for Express routes',
    },
  },
  apis: ["./src/routes/*.js", "./src/controllers/*.js"], // Path to your route/controller files
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
