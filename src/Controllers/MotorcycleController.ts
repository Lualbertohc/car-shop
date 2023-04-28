import { Request, Response } from 'express';
import MotorcycleService from '../Services/MotorcycleService';
import IMotorcycle from '../Interfaces/IMotorcycle';

export default class CarController {
  private req: Request;
  private res: Response;
  private service: MotorcycleService;

  constructor(req: Request, res: Response) {
    this.req = req;
    this.res = res;
    this.service = new MotorcycleService();
  }

  public async createNewMotorcycles() {
    const motorcycles: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
      status: this.req.body.status,
    };

    const newMotorcycles = await this.service.createNewMotorcycles(motorcycles);
    return this.res.status(201).json(newMotorcycles);
  }
}