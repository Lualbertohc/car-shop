import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const motorcycleRoutes = Router();

motorcycleRoutes.get(
  '/motorcycles/:id',
  (req, res) => new MotorcycleController(req, res).getById(),
);

motorcycleRoutes.get(
  '/motorcycles',
  (req, res) => new MotorcycleController(req, res).getAllMotorcycles(),
);

motorcycleRoutes.post(
  '/motorcycles',
  (req, res) => new MotorcycleController(req, res).createNewMotorcycles(),
);

export default motorcycleRoutes;