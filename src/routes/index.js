import { Router } from 'express';
import homeRouter from '@/routes/home.route';
import taskRouter from '@/routes/task.route';

const router = Router();

router.use('/', homeRouter);
router.use('/tasks', taskRouter);

export default router;
