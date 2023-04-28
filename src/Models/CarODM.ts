import { Schema } from 'mongoose';
import AbstractODM from './AbstractODM';
import ICar from '../Interfaces/ICar';

export default class CarODM extends AbstractODM<ICar> {
  constructor() {
    const schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
      status: { type: Boolean },
    });
    super(schema, 'cars');
  }

  public async createNewCar(car: ICar): Promise<ICar | null> {
    return this.model.create(car);
  }

  public async getAllCars(): Promise<ICar[]> {
    return this.model.find();
  }

  public async getById(carId: string): Promise<ICar | null> {
    return this.model.findOne({ _id: carId });
  }
}