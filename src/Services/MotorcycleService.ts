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
}