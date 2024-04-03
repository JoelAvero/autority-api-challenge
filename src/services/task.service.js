import taskRepository from '@/repositories/task.repository';

const getTasks = async () => {
  return taskRepository.getTasks();
};

const getTaskById = async (id) => {
  return taskRepository.getTaskById(id);
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
