import Vehicle from './Vehicle';

interface IParams {
  id?: string | undefined,
  model: string,
  year: number,
  color: string,
  buyValue: number,
  status?: boolean | undefined,
  category: string,
  engineCapacity: number,
}

export default class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(params: IParams) {
    super(
      params.id,
      params.model,
      params.year,
      params.color,
      params.buyValue,
      params.status,
    );
    this.category = params.category;
    this.engineCapacity = params.engineCapacity;
  }
}