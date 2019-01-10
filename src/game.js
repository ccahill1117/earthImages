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
    if (tile == 1) {
     return  "no"
    }
    else if (tile != 1) {
      return "ok"
    }
  }

  movePlayer(direction) {
    let currentCoordinates = this.findPlayer(this.playerLocation);
    let availableMoves = this.moveChecker(currentCoordinates);
    let nextLocation;
    if (direction == "up") {
      if (this.checkTile(this.findLocation(availableMoves[0])) == "no") {
        nextLocation = currentCoordinates;
      } else {
        nextLocation = availableMoves[0]
      }
    }
    else if (direction == "down") {
      if (this.checkTile(availableMoves[1]) == "no") {
        nextLocation = currentCoordinates;
      } else {
        nextLocation = availableMoves[1]
      }
    }
    else if (direction == "left") {
      if (this.checkTile(availableMoves[2]) == "no") {
        nextLocation = currentCoordinates;
      } else {
        nextLocation = availableMoves[2]
      }
    }
    else if (direction == "right") {
      if (this.checkTile(availableMoves[3]) == "no") {
        nextLocation = currentCoordinates;
      } else {
        nextLocation = availableMoves[3]
      }
    }
    return nextLocation;
  }
}
