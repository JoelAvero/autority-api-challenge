import taskController from '@/controllers/task.controller';
import { createTask, updateTask, validateId } from '@/helpers';
import { validate } from '@/middlewares';

const { Router } = require('express');

const taskRouter = Router();

taskRouter.get('/', taskController.getTasks);
taskRouter.get('/:id', validate(validateId), taskController.getTaskById);
taskRouter.post('/', validate(createTask), taskController.createTask);
taskRouter.put('/:id', validate([...validateId, ...updateTask]), taskController.updateTask);
taskRouter.delete('/:id', validate(validateId), taskController.deleteTask);

export default taskRouter;
