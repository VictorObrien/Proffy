import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionController from './controllers/ConnectionsController';

const routes = express.Router();
const ClassesControllers = new ClassesController();
const connectionsControllers = new ConnectionController();


routes.get('/classes', ClassesControllers.index);
routes.post('/classes', ClassesControllers.create);

routes.post('/connections', connectionsControllers.create);
routes.get('/connections', connectionsControllers.index);

export default routes;