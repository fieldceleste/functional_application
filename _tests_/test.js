import {feed,hydrate} from '../src/plant_application.js';
// import { TestScheduler } from 'jest';

describe('blueFood', () => {
   
   test('Should add 5 levels of blueFood', () => {
     const plant = {}
     const newPlant = feed(5)(plant);
     expect(newPlant.soil).toEqual(5);
   });
});

describe('goodWater', () => {
  test('Should add 10 levels of goodWater', () => {
    const plant = {};
    const newPlant = hydrate(10)(plant);
    expect(newPlant.water).toEqual(10);
  });
});