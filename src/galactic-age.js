export class Age {
  constructor(age) {
    this.earthAge = age;
  }

  toMercury() {
    this.mercuryAge = this.earthAge * 0.24;
  }

  toVenus() {
    this.venusAge = this.earthAge * 0.62;
  }

  toMars() {
    
  }

}