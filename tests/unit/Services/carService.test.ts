// import { expect } from 'chai';
// import sinon from 'sinon';
// import CarService from '../../../src/Services/CarService';
// import CarODM from '../../../src/Models/CarODM';

// describe('CarService', function () {
//   describe('createNewCar', function () {
//     it('deve chamar createNewCar com status false se car.status for false', async function () {
//       const createNewCarStub = sinon.stub(CarODM.prototype, 'createNewCar').resolves({});
//       const service = new CarService();

//       await service.createNewCar({
//         model: 'Gol',
//         year: 2020,
//         color: 'Blue',
//         buyValue: 50000,
//         doorsQty: 4,
//         seatsQty: 5,
//         status: false,
//       });

//       expect(createNewCarStub.calledWith(sinon.match({ status: false }))).to.be.true;

//       createNewCarStub.restore();
//     });

//     it('deve chamar createNewCar com o mesmo carro se car.status for true', async function () {
//       const createNewCarStub = sinon.stub(CarODM.prototype, 'createNewCar').resolves({});
//       const service = new CarService();

//       await service.createNewCar({
//         model: 'Gol',
//         year: 2020,
//         color: 'Blue',
//         buyValue: 50000,
//         doorsQty: 4,
//         seatsQty: 5,
//         status: true,
//       });

//       expect(createNewCarStub.calledWith(sinon.match({ status: true }))).to.be.true;

//       createNewCarStub.restore();
//     });
//   });

//   describe('getAllCars', function () {
//     it('deve chamar getAllCars e retornar um array de objetos Car', async function () {
//       const getAllCarsStub = sinon.stub(CarODM.prototype, 'getAllCars').resolves([
//         {
//           _id: '123',
//           model: 'Gol',
//           year: 2020,
//           color: 'Blue',
//           buyValue: 50000,
//           doorsQty: 4,
//           seatsQty: 5,
//           status: true,
//         },
//       ]);
//       const service = new CarService();

//       const result = await service.getAllCars();

//       expect(getAllCarsStub.calledOnce).to.be.true;
//       expect(result).to.be.an('array').and.have.lengthOf(1);
//       expect(result[0]).to.have.property('model').equal('Gol');
//       expect(result[0]).to.have.property('year').equal(2020);
//       expect(result[0]).to.have.property('color').equal('Blue');
//       expect(result[0]).to.have.property('buyValue').equal(50000);
//       expect(result[0]).to.have.property('doorsQty').equal(4);
//       expect(result[0]).to.have.property('seatsQty').equal(5);
//       expect(result[0]).to.have.property('status').equal(true);

//       getAllCarsStub.restore();
//     });
//   });

//   describe('getById', function () {
//     it('deve retornar um objeto com tipo 422 se carId for inválido', async function () {
//       const service = new CarService();
//       const result = await service.getById('invalidId');
//       expect(result).to.have.property('type').equal(422);
//       expect(result).to.have.property('message').equal('Invalid mongo id');
//     });
//   });
// });