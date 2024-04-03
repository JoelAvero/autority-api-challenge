import { response } from '../helpers';
import taskService from '../services/task.service';

/**
 * GET /
 * Home page
 */
const index = (req, res) => {
  response(res, 'Hello World');
};

/**
 * GET /health
 * Health check
 */
const healthCheck = async (req, res) => {
  const tasks = await taskService.getTasks();
  response(res, tasks);
};

export default {
  index,
  healthCheck,
};
