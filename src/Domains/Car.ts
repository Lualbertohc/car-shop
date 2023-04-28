import ICarDomainParams from '../Interfaces/ICarDomainParams';
  
export default class Car {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;
  protected status: boolean | undefined;
  
  constructor(params: ICarDomainParams) {
    this.id = params.id;
    this.model = params.model;
    this.year = params.year;
    this.color = params.color;
    this.buyValue = params.buyValue;
    this.doorsQty = params.doorsQty;
    this.seatsQty = params.seatsQty;
    this.status = params.status;
  }
}
