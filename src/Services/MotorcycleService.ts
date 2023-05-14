import { isValidObjectId } from 'mongoose';
import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

export default class MotorcycleService {
  private createMotorcycleDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle({
        id: motorcycle.id,
        model: motorcycle.model,
        year: motorcycle.year,
        color: motorcycle.color,
        buyValue: motorcycle.buyValue,
        category: motorcycle.category,
        engineCapacity: motorcycle.engineCapacity,
        status: motorcycle.status,
      });
    }
    return null;
  }

  public async createNewMotorcycles(motorcycle: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const newMotorcycle = await motorcycleODM
      .createNewMotorcycles(!motorcycle.status ? { ...motorcycle, status: false } : motorcycle);
    return this.createMotorcycleDomain(newMotorcycle);
  }

  public async getAllMotorcycles() {
    const motorcycleODM = new MotorcycleODM();
    const motorcycles = await motorcycleODM.getAllMotorcycles();
    const motorcyclesArray = motorcycles
      .map((motorcycle) => this.createMotorcycleDomain(motorcycle));
    return motorcyclesArray;
  }

  public async getById(motorcyrcleId: string) {
    if (!isValidObjectId(motorcyrcleId)) return { type: 422, message: 'Invalid mongo id' };
    const motorcycleODM = new MotorcycleODM(); 
    const motorcyrcle = await motorcycleODM.getById(motorcyrcleId);
    if (!motorcyrcle) return { type: 404, message: 'Motorcycle not found' };
    return { type: null, message: this.createMotorcycleDomain(motorcyrcle) };
  }

  public async updateById(motorId: string, motorProps: Partial<IMotorcycle>) {
    if (!isValidObjectId(motorId)) return { type: 422, message: 'Invalid mongo id' };
    const carODM = new MotorcycleODM();
    const updatedCar = await carODM.updateById(motorId, motorProps);
    if (!updatedCar) return { type: 404, message: 'Motorcycle not found' };
    return { type: null, message: this.createMotorcycleDomain(updatedCar) };
  }
}