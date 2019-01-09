import { Game } from './../src/game.js';
import { Biker } from './../src/biker.js';
import { World } from './../src/world.js';
import { Package } from './../src/package.js';
const newGame = new Game("test");
const newBiker = new Biker("test", 1, 1);
const newWorld = new World("place");
const newPackage = new Package(1);

describe ('Game', function() {
  it('should contain and display given game name', function() {
    // let string = new Game ("test");
    expect(newGame.name).toEqual("test");
  });
  it('should contain and display given game score', function() {
    expect(newGame.score).toEqual(0);
  })
});

describe ('Biker', function() {
  it('should contain and display given player name', function(){
    expect(newBiker.name).toEqual("test");
  });
  it('should contain and display given player type', function(){
    expect(newBiker.type).toEqual(1);
  });
  it('should contain and display a bike type', function() {
    expect(newBiker.bike).toEqual(1);
  })
});

describe ('World', function() {
  it('should create a bikeable world', function(){
    expect(newWorld.grid).toEqual([1,2,3,4,5]);
  });
  it('should create a bikeable world with a name', function(){
    expect(newWorld.name).toEqual("place");
  });
});

describe ('Package', function() {
  it('should contain package weight', function() {
    expect(newPackage.weight).toEqual(1);
  })
  it('should contain contain a value for deliverd or undelivered', function() {
    expect(newPackage.delivered).toEqual(false);
  })
})
