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

const updateTask = async (id) => {
  return `update task ${id}`;
};

const deleteTask = async (id) => {
  return `delete task ${id}`;
};

export default {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
