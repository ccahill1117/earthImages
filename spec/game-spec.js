import { Game } from './../src/game.js';
const newGame = new Game ("test");
// beforeEach(function() {
// })
describe ('Game', function() {
  it('should contain and display given player name', function() {
    // let string = new Game ("test");
    expect(newGame.name).toEqual("test");
  });
  it('should contain and display given player score', function() {
    expect(newGame.score).toEqual(0);
  })
})
