import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RestaurantController from './app/controllers/RestaurantController';
import DishController from './app/controllers/DishController';

import authMiddleware from './app/middlewares/auth';


const routes = new Router();

//register
routes.post('/users', UserController.store);
//login
routes.post('/session', SessionController.store);
//new restaurant
routes.post('/restaurant', RestaurantController.store);
routes.post('/dish', DishController.store);


routes.get('/restaurant', RestaurantController.index);
routes.get('/dish/:restaurantId', DishController.index);

routes.use(authMiddleware);
//auth routes

export default routes;