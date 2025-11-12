// → Architecture & Build by DocSynapse
// Intelligent by Design. Crafted for Humanity.

import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { z } from 'zod';
import { createUser, findUserByEmail, findUserById } from '../models/user.model.js';
import { authenticateToken, AuthRequest } from '../middleware/auth.middleware.js';

const router: Router = Router();
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

/**
 * @swagger
 * /api/auth/signup:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *                 minLength: 8
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Validation error
 */
router.post('/signup', async (req, res) => {
  const validated = signupSchema.parse(req.body);
  const { email, password } = validated;

  // Check if user exists
  const existingUser = await findUserByEmail(email);
  if (existingUser) {
    res.status(400).json({ error: 'User already exists' });
    return;
  }

  // Hash password
  const passwordHash = await bcrypt.hash(password, 10);

  // Create user
  const user = await createUser(email, passwordHash);

  // Generate token
  const token = jwt.sign(
    { userId: user.id, email: user.email },
    JWT_SECRET,
    { expiresIn: '7d' }
  );

  res.status(201).json({
    message: 'User created successfully',
    token,
    user: {
      id: user.id,
      email: user.email,
    },
  });
});

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 *       401:
 *         description: Invalid credentials
 */
router.post('/login', async (req, res) => {
  const validated = loginSchema.parse(req.body);
  const { email, password } = validated;

  // Find user
  const user = await findUserByEmail(email);
  if (!user) {
    res.status(401).json({ error: 'Invalid credentials' });
    return;
  }

  // Verify password
  const isValid = await bcrypt.compare(password, user.password_hash);
  if (!isValid) {
    res.status(401).json({ error: 'Invalid credentials' });
    return;
  }

  // Generate token
  const token = jwt.sign(
    { userId: user.id, email: user.email },
    JWT_SECRET,
    { expiresIn: '7d' }
  );

  res.json({
    message: 'Login successful',
    token,
    user: {
      id: user.id,
      email: user.email,
    },
  });
});

/**
 * @swagger
 * /api/auth/me:
 *   get:
 *     summary: Get current user
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Current user info
 *       401:
 *         description: Unauthorized
 */
router.get('/me', authenticateToken, async (req, res) => {
  const authReq = req as AuthRequest;
  const user = await findUserById(authReq.userId!);
  
  if (!user) {
    res.status(404).json({ error: 'User not found' });
    return;
  }

  res.json({
    user: {
      id: user.id,
      email: user.email,
    },
  });
});

export default router;

