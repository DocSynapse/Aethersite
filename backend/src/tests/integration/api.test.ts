// → Architecture & Build by DocSynapse
// Intelligent by Design. Crafted for Humanity.

import { describe, it, expect } from 'vitest';
import supertest from 'supertest';
import app from '../../server.js';

const request = supertest(app);

describe('API Integration Tests', () => {
  describe('Health Check', () => {
    it('should return 200 for health endpoint', async () => {
      const response = await request.get('/health');
      expect(response.status).toBe(200);
      expect(response.body.status).toBe('ok');
    });
  });

  describe('Auth Endpoints', () => {
    it('should return 400 for invalid signup data', async () => {
      const response = await request
        .post('/api/auth/signup')
        .send({ email: 'invalid-email' });

      expect(response.status).toBeGreaterThanOrEqual(400);
    });

    it('should return 401 for invalid login credentials', async () => {
      const response = await request
        .post('/api/auth/login')
        .send({ email: 'nonexistent@example.com', password: 'wrong' });

      expect(response.status).toBe(401);
    });
  });

  describe('Items Endpoints', () => {
    it('should return 401 for unauthenticated requests', async () => {
      const response = await request.get('/api/items');
      expect(response.status).toBe(401);
    });
  });
});

