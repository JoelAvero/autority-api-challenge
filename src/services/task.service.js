import taskRepository from '@/repositories/task.repository';
import createError from 'http-errors';

const getTasks = async () => {
  return taskRepository.getTasks();
};

const getTaskById = async (id) => {
  const task = await taskRepository.getTaskById(id);

  if (!task) {
    throw createError(404, 'Task not found');
  }

  return task;
};

const createTask = async () => {
  return taskRepository.createTask();
};

const updateTask = async (id) => {
  return taskRepository.updateTask(id);
};

const deleteTask = async (id) => {
  return taskRepository.deleteTask(id);
};

export default {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
