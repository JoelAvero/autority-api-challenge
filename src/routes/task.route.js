import taskController from '@/controllers/task.controller';

const { Router } = require('express');

const taskRouter = Router();

taskRouter.get('/', taskController.getTasks);
taskRouter.get('/:id', taskController.getTaskById);
taskRouter.post('/', taskController.createTask);
taskRouter.put('/:id', taskController.updateTask);
taskRouter.delete('/:id', taskController.deleteTask);

export default taskRouter;
