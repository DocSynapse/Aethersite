// → Architecture & Build by DocSynapse
// Intelligent by Design. Crafted for Humanity.

import { Request, Response } from 'express';

export const notFoundHandler = (req: Request, res: Response): void => {
  res.status(404).json({
    error: {
      message: `Route ${req.method} ${req.path} not found`,
    },
  });
};

