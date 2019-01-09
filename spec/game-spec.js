import { Game } from './../src/game.js';


  describe ('Game', function() {
  it('should display given player name', function() {
    let string = new Game ("test");
    expect(string.name).toEqual("test");
  })
})
