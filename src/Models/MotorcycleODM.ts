import { Schema } from 'mongoose';
import AbstractODM from './AbstractODM';
import IMotorcycle from '../Interfaces/IMotorcycle';

export default class MotorcycleODM extends AbstractODM<IMotorcycle> {
  constructor() {
    const schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
      status: { type: Boolean },
    });
    super(schema, 'motorcycles');
  }

  public async createNewMotorcycles(motorcycle: IMotorcycle): Promise<IMotorcycle | null> {
    return this.model.create(motorcycle);
  }

  public async getAllMotorcycles(): Promise<IMotorcycle[]> {
    return this.model.find();
  }

  public async getById(motorcyrcleId: string): Promise<IMotorcycle | null> {
    return this.model.findOne({ _id: motorcyrcleId });
  }

  public async updateById(
    motorId: string,
    motorProps: Partial<IMotorcycle>,
  ): Promise<IMotorcycle | null> {
    const updatedCar = await this.model.findByIdAndUpdate(
      { _id: motorId },
      { ...motorProps },
      { new: true },
    );
    return updatedCar;
  }
}