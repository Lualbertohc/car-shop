import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/CarService';
import ICar from '../../../src/Interfaces/ICar';
import CarODM from '../../../src/Models/CarODM';
import Motorcycle from '../../../src/Domains/Motorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleODM from '../../../src/Models/MotorcycleODM';

describe('CarService', function () {
  describe('createNewCar', function () {
    it('Deveria criar um carro com sucesso', async function () {
      const carInput: ICar = {
        model: 'Jeep',
        year: 2020,
        color: 'Black',
        buyValue: 50.00,
        doorsQty: 4,
        seatsQty: 5,
        status: true,
      };
      const outputCar: Car = new Car({
        id: '644c0dbc0c986e64e0ce8bdb',
        model: 'Jeep',
        year: 2020,
        color: 'Black',
        buyValue: 50.00,
        doorsQty: 4,
        seatsQty: 5,
        status: true,
      });
      sinon.stub(Model, 'create').resolves(outputCar);
      const service = new CarService();
      const result = await service.createNewCar(carInput);
  
      expect(result).to.be.deep.equal(outputCar);
    });
  });

  describe('getAllCars', function () {
    it('Deveria retornar uma matriz de instâncias de Car', async function () {
      const outputCar: Car = new Car({
        id: '644c0dbc0c986e64e0ce8bdb',
        model: 'Jeep',
        year: 2020,
        color: 'Black',
        buyValue: 50.00,
        doorsQty: 4,
        seatsQty: 5,
        status: true,
      });

      sinon.stub(Model, 'find').resolves([outputCar]);
      const service = new CarService();
      const result = await service.getAllCars();

      expect(result).to.be.deep.equal([outputCar]);
    });

    it('deve retornar uma matriz vazia se não houver carros', async function () {
      sinon.stub(CarODM.prototype, 'getAllCars').resolves([]);
      const service = new CarService();
      const result = await service.getAllCars();

      expect(result).to.be.deep.equal([]);
    });
  });

  describe('getById', function () {
    it('Deveria retornar um carro por id', async function () {
      const outputCar: Car = new Car({
        id: '644c0dbc0c986e64e0ce8bdb',
        model: 'Jeep',
        year: 2020,
        color: 'Black',
        buyValue: 50.00,
        doorsQty: 4,
        seatsQty: 5,
        status: true,
      });

      sinon.stub(Model, 'findOne').resolves(outputCar);
      const service = new CarService();
      const result = await service.getById('644c0dbc0c986e64e0ce8bdb');

      expect(result).to.be.deep.equal({ type: null, message: outputCar });
    });

    it('deve retornar uma mensagem de erro se o id do mongo for inválido', async function () {
      sinon.stub(CarODM.prototype, 'getById').resolves(null);
      const service = new CarService();
      const result = await service.getById('invalid-id');

      expect(result).to.be.deep.equal({ type: 422, message: 'Invalid mongo id' });
    });

    it('deve retornar uma mensagem de erro se o carro não for encontrado', async function () {
      sinon.stub(CarODM.prototype, 'getById').resolves(null);
      const service = new CarService();
      const result = await service.getById('644c0dbc0c986e64e0ce8bdb');

      expect(result).to.be.deep.equal({ type: 404, message: 'Car not found' });
    });
  });

  describe('updateById', function () {
    it('Deveria atualizar um carro com sucesso', async function () {
      const carInput: ICar = {
        model: 'Jeep',
        year: 2020,
        color: 'Black',
        buyValue: 50.00,
        doorsQty: 4,
        seatsQty: 5,
        status: true,
      };
      const outputCar: Car = new Car({
        id: '644c0dbc0c986e64e0ce8bdb',
        model: 'Jeep',
        year: 2020,
        color: 'Black',
        buyValue: 50.00,
        doorsQty: 4,
        seatsQty: 5,
        status: true,
      });

      sinon.stub(Model, 'findByIdAndUpdate').resolves(outputCar);
      const service = new CarService();
      const result = await service.updateById('644c0dbc0c986e64e0ce8bdb', carInput);

      expect(result).to.be.deep.equal({ type: null, message: outputCar });
    });

    it('deve retornar uma mensagem de erro se o id do mongo for inválido', async function () {
      sinon.stub(CarODM.prototype, 'updateById').resolves(null);

      const service = new CarService();
      const result = await service.updateById('123', { model: 'Ferrari' });

      expect(result).to.be.deep.equal({ type: 422, message: 'Invalid mongo id' });
    });

    it('Deveria retornar erro 404 quando o carro não é encontrado', async function () {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(null);
      const service = new CarService();
      const result = await service.updateById('644c0dbc0c986e64e0ce8bdb', {});
  
      expect(result).to.be.deep.equal({ type: 404, message: 'Car not found' });
    });
  });

  describe('MotorcycleService', function () {
    describe('createNewMotorcycles', function () {
      it('Deveria criar uma moto com sucesso', async function () {
        const inputMotorcycle: IMotorcycle = {
          model: 'Ninja',
          year: 2022,
          color: 'Green',
          buyValue: 50000.00,
          category: 'Street',
          engineCapacity: 1000,
        };

        const outputMotorcycle: Motorcycle = new Motorcycle({
          id: '123',
          model: inputMotorcycle.model,
          year: inputMotorcycle.year,
          color: inputMotorcycle.color,
          buyValue: inputMotorcycle.buyValue,
          category: inputMotorcycle.category,
          engineCapacity: inputMotorcycle.engineCapacity,
          status: false,
        });

        sinon.stub(Model, 'create').resolves(outputMotorcycle);
        const service = new MotorcycleService();
        const result = await service.createNewMotorcycles(inputMotorcycle);
    
        expect(result).to.be.deep.equal(outputMotorcycle);
      });
    });

    describe('getAllMotorcycle', function () {
      it('Deveria retornar uma matriz de instâncias de Motorcycle', async function () {
        const outputMotorcycle: Motorcycle = new Motorcycle({
          id: '644c0dbc0c986e64e0ce8bdb',
          model: 'Ninja',
          year: 2022,
          color: 'Green',
          buyValue: 50000.00,
          category: 'Street',
          engineCapacity: 1000,
        });
  
        sinon.stub(Model, 'find').resolves([outputMotorcycle]);
        const service = new MotorcycleService();
        const result = await service.getAllMotorcycles();
  
        expect(result).to.be.deep.equal([outputMotorcycle]);
      });
  
      it('deve retornar uma matriz vazia se não houver motos', async function () {
        sinon.stub(MotorcycleODM.prototype, 'getAllMotorcycles').resolves([]);
        const service = new MotorcycleService();
        const result = await service.getAllMotorcycles();
  
        expect(result).to.be.deep.equal([]);
      });
    }); 
    
    describe('getById', function () {
      it('Deveria retornar uma moto por id', async function () {
        const outputMotorcycle: Motorcycle = new Motorcycle({
          id: '644c0dbc0c986e64e0ce8bdb',
          model: 'Ninja',
          year: 2022,
          color: 'Green',
          buyValue: 50000.00,
          category: 'Street',
          engineCapacity: 1000,
        });
  
        sinon.stub(Model, 'findOne').resolves(outputMotorcycle);
        const service = new MotorcycleService();
        const result = await service.getById('644c0dbc0c986e64e0ce8bdb');
  
        expect(result).to.be.deep.equal({ type: null, message: outputMotorcycle });
      });
    });
  });

  afterEach(function () {
    sinon.restore();
  });
});
