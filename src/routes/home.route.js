import homeController from '@/controllers/home';

const { Router } = require('express');

const homeRouter = Router();

homeRouter.get('/', homeController.index);
homeRouter.get('/health', homeController.healthCheck);

export default homeRouter;
