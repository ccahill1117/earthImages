export class Biker {
  constructor(name, type, bike) {
    this.name = name;
    this.type = type;
    this.bike = bike;
    this.energy = 30;
    this.inventory = [];
  }

  loseEnergy() {
    this.energy = this.energy - 1;
  }
  pickupFood1() {
    this.energy = this.energy + 20;
  }
  
}
