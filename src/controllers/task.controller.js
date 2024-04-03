import { asyncHandler, response } from '@/helpers/index';
import taskService from '@/services/task.service';
import { CREATED } from '@/helpers/constants';

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
  const task = req.body;
  const newTask = await taskService.createTask(task);

  response(res, newTask, CREATED);
};

/*
 * PUT /tasks/:id
 * Update task
 */
const updateTask = async (req, res) => {
  const updatedTask = req.body;
  const { id } = req.params;
  await taskService.updateTask(id, updatedTask);

  response(res, 'task updated');
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
  getTasks: asyncHandler(getTasks),
  getTaskById: asyncHandler(getTaskById),
  createTask: asyncHandler(createTask),
  updateTask: asyncHandler(updateTask),
  deleteTask: asyncHandler(deleteTask),
};
