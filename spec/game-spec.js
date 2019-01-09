import { Game } from './../src/game.js';
import { Biker } from './../src/biker.js';
import { World } from './../src/biker.js';
const newGame = new Game("test");
const newBiker = new Biker("test", 1);
const newWorld = new World("test")

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
});

describe ('World', function() {
  it('should create a bikeable world', function(){
    expect(newWorld.size).toEqual([1,2,3,4,5]);
  });
});
