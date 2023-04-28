import { isValidObjectId } from 'mongoose';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car({
        id: car.id,
        model: car.model,
        year: car.year,
        color: car.color,
        buyValue: car.buyValue,
        doorsQty: car.doorsQty,
        seatsQty: car.seatsQty,
        status: car.status,
      });
    }
    return null;
  }

  public async createNewCar(car: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.createNewCar(!car.status ? { ...car, status: false } : car);
    return this.createCarDomain(newCar);
  }

  public async getAllCars() {
    const carODM = new CarODM();
    const cars = await carODM.getAllCars();
    const carArray = cars.map((car) => this.createCarDomain(car));
    return carArray;
  }

  public async getById(carId: string) {
    if (!isValidObjectId(carId)) return { type: 422, message: 'Invalid mongo id' };
    const carODM = new CarODM();
    const car = await carODM.getById(carId);
    if (!car) return { type: 404, message: 'Car not found' };
    return { type: null, message: this.createCarDomain(car) };
  }

  public async updateById(carId: string, carProps: Partial<ICar>) {
    if (!isValidObjectId(carId)) return { type: 422, message: 'Invalid mongo id' };
    const carODM = new CarODM();
    const updatedCar = await carODM.updateById(carId, carProps);
    if (!updatedCar) return { type: 404, message: 'Car not found' };
    return { type: null, message: this.createCarDomain(updatedCar) };
  }
}