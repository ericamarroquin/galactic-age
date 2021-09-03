export class Age {
  constructor(age) {
    this.earthAge = age;
    this.avgLifeExpectancy = 78;
  }

  toMercury() {
    this.mercuryAge = this.earthAge * 0.24;
    let mercuryLifeExpect = this.avgLifeExpectancy * 0.24;
    return Math.ceil(mercuryLifeExpect - this.mercuryAge);
  }

  toVenus() {
    this.venusAge = this.earthAge * 0.62;
    let venusLifeExpect = this.avgLifeExpectancy * 0.62;
    return Math.ceil(venusLifeExpect - this.venusAge);
  }

  toMars() {
    this.marsAge = this.earthAge * 1.88;
    let marsLifeExpect = this.avgLifeExpectancy * 1.88;
    return Math.ceil(marsLifeExpect - this.marsAge);
  }

  toJupiter() {
    this.jupiterAge = this.earthAge * 11.86;
    let jupiterLifeExpect = this.avgLifeExpectancy * 11.86;
    return Math.ceil(jupiterLifeExpect - this.jupiterAge);
  }

  mercuryYearsLeft() {
    if (this.toMercury() < 0) {
      return Math.abs(this.toMercury());
    } else {
      return this.toMercury();
    }
  }

  venusYearsLeft() {
    if(this.toVenus() < 0) {
      return Math.abs(this.toVenus());
    } else {
      return this.toVenus();
    }
  }

}