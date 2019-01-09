import { Game } from './../src/game.js';
import { Biker } from './../src/biker.js';
const newGame = new Game ("test");
const newBiker = new Biker("test", 1);
// beforeEach(function() {
// })
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
  })
})
