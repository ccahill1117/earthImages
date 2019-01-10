export class Game {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.map = [
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ];

    this.playerLocation = [

      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,"player",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

    ];
  };


  findPlayer(array) {
    let xResult;
    let yResult;
    let coordResult = [];
    array.forEach(function(line) {
      if ((line.includes("player")) == true ) {
        console.log("position" + line.indexOf("player"));
        console.log("line" + array.indexOf(line));
        xResult = (line.indexOf("player"));
        yResult = (array.indexOf(line));
        coordResult.push(xResult);
        coordResult.push(yResult);
      }
    })
    return coordResult;
  }

  findLocation(coords) {
    let row = this.map[coords[1]];
    let col = row[coords[0]];
    return col;
  }

  moveChecker(playerCoords) {
    let moves = [];
    let currentLocation = this.findPlayer(this.playerLocation);
    let upMove = currentLocation[1] - 1;
    let upTile = [currentLocation[0],upMove];
    let downMove = currentLocation[1] + 1;
    let downTile = [currentLocation[0],downMove];
    let leftMove = currentLocation[0] - 1;
    let leftTile = [leftMove,currentLocation[1]];
    let rightMove = currentLocation[0] + 1;
    let rightTile = [rightMove,currentLocation[1]];
    moves.push(upTile,downTile,leftTile,rightTile);
    return moves;
  }

  movePlayer(direction) {
    let currentLocation = this.findPlayer(this.playerLocation);
    if (direction == "up") {
      if (this.findLocation(currentLocation)) {

      }

    }
    else if (direction == "down") {
      currentLocation[1] = currentLocation[1] + 1;
    }
    else if (direction == "left") {
      currentLocation[0] = currentLocation[0] - 1;
    }
    else if (direction == "right") {
      currentLocation[0] = currentLocation[0] + 1;

    }

  }
}
