// config/swagger.js
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Smart Campus API",
      version: "1.0.0",
      description: "API documentation for Smart Campus system",
    },
    servers: [
      {
        url: "http://localhost:3000", // Change if needed
      },
    ],
  },
  apis: ["./src/routes/*.js", "./src/controllers/*.js"], // Path to your route/controller files
};

const specs = swaggerJsdoc(options);

module.exports = {
  swaggerUi,
  specs,
};
