import { Age } from './../src/galactic-age.js';

describe('Age', () => {
  const age = new Age(25);
  const oldAge = new Age(85);

  test('should create an Age object with an Earth age property', () => {
    expect(age.earthAge).toEqual(25);
  });

  test('should return a users age in Mercury years', () => {
    age.toMercury();
    expect(age.mercuryAge).toEqual(6);
  });

  test('should return a users age in Venus years', () => {
    age.toVenus();
    expect(age.venusAge).toEqual(15.5);
  });

  test('should return a users age in Mars years', () => {
    age.toMars();
    expect(age.marsAge).toEqual(47);
  });

  test('should return a users age in Jupiter years', () => {
    age.toJupiter();
    expect(age.jupiterAge).toEqual(296.5);
  })

  test('should return average life expectancy property', () => {
    expect(age.avgLifeExpectancy).toEqual(78);
  })

  test('should return lifetime remaining on Mercury', () => {
    expect(age.toMercury()).toEqual(13);
  });

  test('should return lifetime remaining on Venus', () => {
    expect(age.toVenus()).toEqual(33);
  });

  test('should return lifetime remaining on Mars', () => {
    expect(age.toMars()).toEqual(100);
  });

  test('should return lifetime remaining on Jupiter', () => {
    expect(age.toJupiter()).toEqual(629);
  });

  test('should return number of years past life expectancy on Mercury', () => {
    expect(oldAge.mercuryYearsLeft()).toEqual(1);
  });

})