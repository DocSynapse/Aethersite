// → Architecture & Build by DocSynapse
// Intelligent by Design. Crafted for Humanity.

import pool from '../config/database.js';

export interface User {
  id: string;
  email: string;
  password_hash: string;
  created_at: Date;
  updated_at: Date;
}

export const createUser = async (
  email: string,
  passwordHash: string
): Promise<User> => {
  const result = await pool.query(
    `INSERT INTO users (email, password_hash) 
     VALUES ($1, $2) 
     RETURNING id, email, password_hash, created_at, updated_at`,
    [email, passwordHash]
  );
  return result.rows[0];
};

export const findUserByEmail = async (email: string): Promise<User | null> => {
  const result = await pool.query(
    'SELECT * FROM users WHERE email = $1',
    [email]
  );
  return result.rows[0] || null;
};

export const findUserById = async (id: string): Promise<User | null> => {
  const result = await pool.query(
    'SELECT * FROM users WHERE id = $1',
    [id]
  );
  return result.rows[0] || null;
};

