// → Architecture & Build by DocSynapse
// Intelligent by Design. Crafted for Humanity.

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import 'express-async-errors';
import { errorHandler } from './middleware/errorHandler.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { swaggerSetup } from './config/swagger.js';
import authRoutes from './routes/auth.routes.js';
import itemsRoutes from './routes/items.routes.js';

dotenv.config();

const app: express.Application = express();
const PORT = process.env.PORT || 3001;

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Documentation
swaggerSetup(app);

// Health check
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/items', itemsRoutes);

// Error handling
app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📚 API docs available at http://localhost:${PORT}/api-docs`);
});

export default app;

