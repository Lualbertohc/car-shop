import { Request, Response } from 'express';
import CarService from '../Services/CarService';
import ICar from '../Interfaces/ICar';

export default class CarController {
  private req: Request;
  private res: Response;
  private service: CarService;

  constructor(req: Request, res: Response) {
    this.req = req;
    this.res = res;
    this.service = new CarService();
  }

  public async createNewCar() {
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
      status: this.req.body.status,
    };

    const newCar = await this.service.createNewCar(car);
    return this.res.status(201).json(newCar);
  }

  public async getAllCars() {
    const cars = await this.service.getAllCars();
    return this.res.status(200).json(cars);
  }

  public async getById() {
    const { id } = this.req.params;
    const { type, message } = await this.service.getById(id);
    if (type) return this.res.status(type).json({ message });
    return this.res.status(200).json(message);
  }

  public async updateById() {
    const { id } = this.req.params;
    const carProps = this.req.body;
    const { type, message } = await this.service.updateById(id, carProps);
    if (type) return this.res.status(type).json({ message });
    return this.res.status(200).json(message);
  }
}