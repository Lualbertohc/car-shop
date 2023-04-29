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

  public async getAllMotorcycles() {
    const motorcycles = await this.service.getAllMotorcycles();
    return this.res.status(200).json(motorcycles);
  }

  public async getById() {
    const { id } = this.req.params;
    const { type, message } = await this.service.getById(id);
    if (type) return this.res.status(type).json({ message });
    return this.res.status(200).json(message);
  }
}