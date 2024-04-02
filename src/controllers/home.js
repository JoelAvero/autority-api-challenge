import db from '@/database';

/**
 * GET /
 * Home page
 */
const index = (req, res) => res.send('Hello World!');

/**
 * GET /health
 * Health check
 */
const healthCheck = async (req, res) => {
  const todos = await db.models.todo.findAll();
  return res.json({ success: true, data: todos });
};

export default {
  index,
  healthCheck,
};
