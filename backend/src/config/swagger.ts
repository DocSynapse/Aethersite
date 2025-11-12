// → Architecture & Build by DocSynapse
// Intelligent by Design. Crafted for Humanity.

import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import express from 'express';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Aether API',
      version: '1.0.0',
      description: 'API documentation for Aether backend',
      contact: {
        name: 'Dr. Ferdi Sentra',
        email: 'dr.ferdi.sentra@sentra-aether.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:3001',
        description: 'Development server',
      },
      {
        url: process.env.API_URL || 'https://api.example.com',
        description: 'Production server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./src/routes/*.ts', './src/models/*.ts'],
};

const swaggerSpec = swaggerJsdoc(options);

export const swaggerSetup = (app: express.Application): void => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

