import db from '@/database/index';

const { Todo } = db.models;

const getTasks = async () => {
  return Todo.findAll();
};

const getTaskById = async (id) => {
  return Todo.findByPk(id);
};

const createTask = async (task) => {
  return Todo.create(task);
};

const updateTask = async (id, updatedTask) => {
  return Todo.update(updatedTask, { where: { id } });
};

const deleteTask = async (id) => {
  return Todo.destroy({ where: { id } });
};

export default {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
