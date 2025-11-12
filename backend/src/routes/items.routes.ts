// → Architecture & Build by DocSynapse
// Intelligent by Design. Crafted for Humanity.

import { Router } from 'express';
import { z } from 'zod';
import { authenticateToken, AuthRequest } from '../middleware/auth.middleware.js';
import {
  createItem,
  findItemsByUserId,
  findItemById,
  updateItem,
  deleteItem,
} from '../models/item.model.js';

const router: Router = Router();

// All routes require authentication
router.use(authenticateToken);

const createItemSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().max(1000).optional(),
});

const updateItemSchema = z.object({
  title: z.string().min(1).max(255).optional(),
  description: z.string().max(1000).optional(),
});

/**
 * @swagger
 * /api/items:
 *   get:
 *     summary: Get all items for current user
 *     tags: [Items]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of items
 */
router.get('/', async (req, res) => {
  const authReq = req as AuthRequest;
  const items = await findItemsByUserId(authReq.userId!);
  res.json({ items });
});

/**
 * @swagger
 * /api/items:
 *   post:
 *     summary: Create a new item
 *     tags: [Items]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Item created successfully
 */
router.post('/', async (req, res) => {
  const authReq = req as AuthRequest;
  const validated = createItemSchema.parse(req.body);
  const item = await createItem(authReq.userId!, validated);
  res.status(201).json({ item });
});

/**
 * @swagger
 * /api/items/{id}:
 *   get:
 *     summary: Get item by ID
 *     tags: [Items]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Item details
 *       404:
 *         description: Item not found
 */
router.get('/:id', async (req, res) => {
  const authReq = req as AuthRequest;
  const { id } = req.params;
  const item = await findItemById(id, authReq.userId!);

  if (!item) {
    res.status(404).json({ error: 'Item not found' });
    return;
  }

  res.json({ item });
});

/**
 * @swagger
 * /api/items/{id}:
 *   put:
 *     summary: Update item
 *     tags: [Items]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Item updated successfully
 *       404:
 *         description: Item not found
 */
router.put('/:id', async (req, res) => {
  const authReq = req as AuthRequest;
  const { id } = req.params;
  const validated = updateItemSchema.parse(req.body);
  const item = await updateItem(id, authReq.userId!, validated);

  if (!item) {
    res.status(404).json({ error: 'Item not found' });
    return;
  }

  res.json({ item });
});

/**
 * @swagger
 * /api/items/{id}:
 *   delete:
 *     summary: Delete item
 *     tags: [Items]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Item deleted successfully
 *       404:
 *         description: Item not found
 */
router.delete('/:id', async (req, res) => {
  const authReq = req as AuthRequest;
  const { id } = req.params;
  const deleted = await deleteItem(id, authReq.userId!);

  if (!deleted) {
    res.status(404).json({ error: 'Item not found' });
    return;
  }

  res.json({ message: 'Item deleted successfully' });
});

export default router;

