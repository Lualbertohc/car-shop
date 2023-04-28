export default class Vehicle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected buyValue: number;
  protected status: boolean | undefined;
    
  constructor(
    id: string | undefined,
    model: string,
    year: number,
    color: string,
    buyValue: number,
    status: boolean | undefined,
  ) {
    this.id = id;
    this.model = model;
    this.year = year;
    this.color = color;
    this.buyValue = buyValue;
    this.status = status;
  }
}