import { Router } from 'express';
import CarController from '../Controllers/CarController';

const routes = Router();

routes.get(
  '/cars/:id',
  (req, res) => new CarController(req, res).getById(),
);

routes.get(
  '/cars',
  (req, res) => new CarController(req, res).getAllCars(),
);

routes.post(
  '/cars',
  (req, res) => new CarController(req, res).createNewCar(),
);

routes.put(
  '/cars/:id',
  (req, res) => new CarController(req, res).updateById(),
);

export default routes;