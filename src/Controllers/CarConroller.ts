import { Request, Response } from 'express';
import CarService from '../Services/CarService';
import ICar from '../Interfaces/ICar';

export default class CarController {
  private req: Request;
  private res: Response;
  //   private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response) {
    this.req = req;
    this.res = res;
    // this.next = next;
    this.service = new CarService();
  }

  public async create() {
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
}