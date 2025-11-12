// → Architecture & Build by DocSynapse
// Intelligent by Design. Crafted for Humanity.

import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { z } from 'zod';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

const tokenSchema = z.string().min(1);

export interface AuthRequest extends Request {
  userId?: string;
  userEmail?: string;
}

export const authenticateToken = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): void => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      res.status(401).json({ error: 'Access token required' });
      return;
    }

    const validatedToken = tokenSchema.parse(token);
    const decoded = jwt.verify(validatedToken, JWT_SECRET) as {
      userId: string;
      email: string;
    };

    req.userId = decoded.userId;
    req.userEmail = decoded.email;
    next();
  } catch (error) {
    res.status(403).json({ error: 'Invalid or expired token' });
  }
};

