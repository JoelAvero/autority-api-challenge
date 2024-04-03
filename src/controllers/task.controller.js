import { asyncHandler, response } from '@/helpers/index';
import taskService from '@/services/task.service';

/**
 * GET /tasks
 * get all tasks
 */
const getTasks = async (req, res) => {
  const tasks = await taskService.getTasks();
  response(res, tasks);
};

/**
 * GET /tasks/:id
 * Get task by id
 */
const getTaskById = async (req, res) => {
  const { id } = req.params;
  const task = await taskService.getTaskById(id);
  response(res, task);
};

/**
 * POST /tasks
 * Create task
 */
const createTask = async (req, res) => {
  await taskService.createTask();
  response(res, 'task created');
};

/*
 * PUT /tasks/:id
 * Update task
 */
// TODO: review me
const updateTask = async (req, res) => {
  const { id } = req.params;
  const task = await taskService.updateTask(id);
  response(res, task);
};

/*
 * DELETE /tasks/:id
 * Delete task
 */
const deleteTask = async (req, res) => {
  const { id } = req.params;
  await taskService.deleteTask(id);
  response(res, 'task deleted');
};

export default {
  getTasks,
  getTaskById: asyncHandler(getTaskById),
  createTask: asyncHandler(createTask),
  updateTask: asyncHandler(updateTask),
  deleteTask: asyncHandler(deleteTask),
};
