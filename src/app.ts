import express from 'express';
import routes from './Routes/CarRoutes';
import motorcycleRoutes from './Routes/MotorcycleRouter';

const app = express();
app.use(express.json());
app.use(routes);
app.use(motorcycleRoutes);

export default app;
