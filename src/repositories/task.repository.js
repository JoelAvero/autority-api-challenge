const getTasks = async () => {
  return 'all tasks repo';
};

const getTaskById = async (id) => {
  return `get task ${id}`;
};

const createTask = async () => {
  return 'create task';
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
