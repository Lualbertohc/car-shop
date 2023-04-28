import { Router } from 'express';
import CarController from '../Controllers/CarConroller';

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

export default routes;