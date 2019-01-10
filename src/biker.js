export class Biker {
  constructor(name, type, bike) {
    this.name = name;
    this.type = type;
    this.bike = bike;
    this.energy = "100";
    this.inventory = [];
  }

  loseEnergy() {
    this.energy = this.energy - 1;
  }

}
