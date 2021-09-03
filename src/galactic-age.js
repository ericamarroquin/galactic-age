export class Age {
  constructor(age) {
    this.earthAge = age;
    this.avgLifeExpectancy = 78;
  }

  toMercury() {
    this.mercuryAge = this.earthAge * 0.24;
  }

  toVenus() {
    this.venusAge = this.earthAge * 0.62;
  }

  toMars() {
    this.marsAge = this.earthAge * 1.88;
  }

  toJupiter() {
    this.jupiterAge = this.earthAge * 11.86;
  }

  galacticYearsLeft() {
    
  }

}