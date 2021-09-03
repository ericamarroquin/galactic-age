export class Age {
  constructor(age) {
    this.earthAge = age;
  }

  toMercury() {
    this.mercuryAge = this.earthAge * 0.24;
  }

  toVenus() {
    
  }

}