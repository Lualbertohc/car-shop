export default interface ICarDomainParams {
  id?: string | undefined;
  model: string;
  year: number;
  color: string;
  buyValue: number;
  doorsQty: number;
  seatsQty: number;
  status?: boolean;
}