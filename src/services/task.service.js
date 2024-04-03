import taskRepository from '@/repositories/task.repository';
import createError from 'http-errors';
import { NOT_FOUND } from '@/helpers/constants';

const getTasks = async () => {
  return taskRepository.getTasks();
};

const getTaskById = async (id) => {
  const task = await taskRepository.getTaskById(id);

  if (!task) {
    throw createError(NOT_FOUND, 'Task not found');
  }

  return task;
};

const createTask = async (task) => {
  return taskRepository.createTask(task);
};

const updateTask = async (id, updatedTask) => {
  const [updatedTasks] = await taskRepository.updateTask(id, updatedTask);

  if (updatedTasks === 0) {
    throw createError(NOT_FOUND, 'Task not found');
  }
};

const deleteTask = async (id) => {
  const deletedTask = await taskRepository.deleteTask(id);
  if (deletedTask === 0) {
    throw createError(NOT_FOUND, 'Task not found');
  }
};

export default {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
