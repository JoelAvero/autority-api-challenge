import taskController from '@/controllers/task.controller';
import { validateId, validateTask } from '@/helpers';
import { validate } from '@/middlewares';

const { Router } = require('express');

const taskRouter = Router();

taskRouter.get('/', taskController.getTasks);
taskRouter.get('/:id', validate(validateId), taskController.getTaskById);
taskRouter.post('/', validate(validateTask), taskController.createTask);
taskRouter.put('/:id', taskController.updateTask);
taskRouter.delete('/:id', taskController.deleteTask);

export default taskRouter;
