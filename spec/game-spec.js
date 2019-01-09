import { Game } from './../src/game.js';
import { Biker } from './../src/biker.js';
import { World } from './../src/world.js';
import { Package } from './../src/package.js';

let newGame;
let newBiker;
let newWorld;
let newPackage;

describe ('Game', function() {
  beforeEach(function() {
    newGame = new Game("test");
  });
  it('should contain and display given game name', function() {
    // let string = new Game ("test");
    expect(newGame.name).toEqual("test");
  });
  it('should contain and display given game score', function() {
    expect(newGame.score).toEqual(0);
  })
});

describe ('Biker', function() {
  beforeEach(function() {
    newBiker = new Biker("test", 1, 1);
  });
  it('should contain and display given player name', function(){
    expect(newBiker.name).toEqual("test");
  });
  it('should contain and display given player type', function(){
    expect(newBiker.type).toEqual(1);
  });
  it('should contain and display a bike type', function() {
    expect(newBiker.bike).toEqual(1);
  });
  it('should contain and display an energy value', function(){
    expect(newBiker.energy).toEqual(100);
  });
  it('should contain and display an inventory', function() {
    expect(newBiker.inventory).toEqual([])
  })
});

describe ('World', function() {
  beforeEach(function() {
    newWorld = new World("place");
  });
  it('should create a bikeable world', function(){
    expect(newWorld.grid).toEqual([1,2,3,4,5]);
  });
  it('should create a bikeable world with a name', function(){
    expect(newWorld.name).toEqual("place");
  });
});

describe ('Package', function() {
  beforeEach(function() {
    newPackage = new Package(1);
  });
  it('should contain package weight', function() {
    expect(newPackage.weight).toEqual(1);
  })
  it('should contain contain a value for deliverd or undelivered', function() {
    expect(newPackage.delivered).toEqual(false);
  })
})
