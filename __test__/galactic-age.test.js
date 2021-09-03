import { Age } from './../src/galactic-age.js';

describe('Age', () => {
  const age = new Age(25);

  test('should create an Age object with an Earth age property', () => {
    expect(age.earthAge).toEqual(25);
  });
})