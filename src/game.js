export class Game {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.map = [
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [1,0,5,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,1],
      [1,0,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,1],
      [1,0,0,5,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,5,0,0,0,1],
      [1,0,0,5,0,0,0,0,1,1,1,1,1,0,0,0,0,0,5,5,0,0,0,1],
      [1,0,0,5,5,5,5,5,0,0,1,1,1,1,1,1,0,0,5,0,0,0,0,1],
      [1,0,0,0,0,0,0,5,0,0,0,0,1,1,0,0,0,5,5,0,0,0,0,1],
      [1,0,0,0,1,1,0,5,6,0,0,0,0,0,0,0,0,5,0,0,0,0,0,1],
      [1,0,1,1,1,1,1,5,5,5,5,5,5,0,0,0,5,5,0,0,1,1,1,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,5,1,1,1,1,1,1,1],
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
    let upMove = playerCoords[1] - 1;
    let upTile = [playerCoords[0],upMove];
    let downMove = playerCoords[1] + 1;
    let downTile = [playerCoords[0],downMove];
    let leftMove = playerCoords[0] - 1;
    let leftTile = [leftMove,playerCoords[1]];
    let rightMove = playerCoords[0] + 1;
    let rightTile = [rightMove,playerCoords[1]];
    moves.push(upTile,downTile,leftTile,rightTile);
    return moves;
  }

  checkTile(tile) {
    if ((tile == 1) || (tile == 4)) {
     return  "no"
    } else if (tile == 0) {
      return "ok"
    } else if (tile == 6) {
      return "ok"
    }
  }

  movePlayer(direction) {
    let currentCoordinates = this.findPlayer(this.playerLocation);
    let availableMoves = this.moveChecker(currentCoordinates);
    let nextLocation;

    let up = this.checkTile(this.findLocation(availableMoves[0]));
    let down = this.checkTile(this.findLocation(availableMoves[1]));
    let left = this.checkTile(this.findLocation(availableMoves[2]));
    let right = this.checkTile(this.findLocation(availableMoves[3]));

    if (direction == "up") {
      if (up == "no") {
        nextLocation = currentCoordinates;
      } else if (up == "ok") {
        nextLocation = availableMoves[0]
      }
    }
    else if (direction == "down") {
      if (down == "no") {
        nextLocation = currentCoordinates;
      } else {
        nextLocation = availableMoves[1]
      }
    }
    else if (direction == "left") {
      if (left == "no") {
        nextLocation = currentCoordinates;
      } else {
        nextLocation = availableMoves[2]
      }
    }
    else if (direction == "right") {
      if (right == "no") {
        nextLocation = currentCoordinates;
      } else {
        nextLocation = availableMoves[3]
      }
    }
    return nextLocation;
  }


  updatePlayer(userInput) {
    let currentLocation = this.findPlayer(this.playerLocation);
    let x = currentLocation[0];
    let y = currentLocation[1];

    let nextMove = this.movePlayer(userInput);
    let playerY = nextMove[0];
    let playerX = nextMove[1];

    this.playerLocation[y][x] = 0;
    this.playerLocation[nextMove[1]][nextMove[0]] = "player";
  }
}
