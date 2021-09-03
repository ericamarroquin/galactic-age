import { Age } from './../src/galactic-age.js';

describe('Age', () => {
  let age = new Age(25);

  test('should create an Age object with an Earth age', () => {
    expect(age.earthage).toEqual(25);
  });
})