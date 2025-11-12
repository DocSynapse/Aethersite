// → Architecture & Build by DocSynapse
// Intelligent by Design. Crafted for Humanity.

import pool from '../config/database.js';

export interface Item {
  id: string;
  user_id: string;
  title: string;
  description: string | null;
  created_at: Date;
  updated_at: Date;
}

export interface CreateItemInput {
  title: string;
  description?: string;
}

export interface UpdateItemInput {
  title?: string;
  description?: string;
}

export const createItem = async (
  userId: string,
  input: CreateItemInput
): Promise<Item> => {
  const result = await pool.query(
    `INSERT INTO items (user_id, title, description) 
     VALUES ($1, $2, $3) 
     RETURNING id, user_id, title, description, created_at, updated_at`,
    [userId, input.title, input.description || null]
  );
  return result.rows[0];
};

export const findItemsByUserId = async (userId: string): Promise<Item[]> => {
  const result = await pool.query(
    'SELECT * FROM items WHERE user_id = $1 ORDER BY created_at DESC',
    [userId]
  );
  return result.rows;
};

export const findItemById = async (
  id: string,
  userId: string
): Promise<Item | null> => {
  const result = await pool.query(
    'SELECT * FROM items WHERE id = $1 AND user_id = $2',
    [id, userId]
  );
  return result.rows[0] || null;
};

export const updateItem = async (
  id: string,
  userId: string,
  input: UpdateItemInput
): Promise<Item | null> => {
  const updates: string[] = [];
  const values: unknown[] = [];
  let paramCount = 1;

  if (input.title !== undefined) {
    updates.push(`title = $${paramCount++}`);
    values.push(input.title);
  }
  if (input.description !== undefined) {
    updates.push(`description = $${paramCount++}`);
    values.push(input.description);
  }

  if (updates.length === 0) {
    return findItemById(id, userId);
  }

  updates.push(`updated_at = NOW()`);
  values.push(id, userId);

  const result = await pool.query(
    `UPDATE items 
     SET ${updates.join(', ')} 
     WHERE id = $${paramCount} AND user_id = $${paramCount + 1}
     RETURNING id, user_id, title, description, created_at, updated_at`,
    values
  );

  return result.rows[0] || null;
};

export const deleteItem = async (
  id: string,
  userId: string
): Promise<boolean> => {
  const result = await pool.query(
    'DELETE FROM items WHERE id = $1 AND user_id = $2',
    [id, userId]
  );
  return result.rowCount !== null && result.rowCount > 0;
};

