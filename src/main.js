import './styles.css';
import { Game } from './game.js';
import { Biker } from './biker.js';
// import { Game } from './game.js';
import $ from 'jquery';



$(document).ready(function(){
  let newGame = new Game("test");
  let newBiker = new Biker("Chris","coolguy","real fast")


  var updateGame = function() {
    $("#player-location").empty();
    newGame.playerLocation.forEach(function(line) {
      line.forEach(function(element) {
        if (element == "player") {
          $("#player-location").append("🚴‍♀️")
        } else if (element == 0) {
          $("#player-location").append("<span class='clear'>💩</span>")
        }
        else if (element == 1) {
          $("#player-location").append("<span class='edge'>🌱</span>")
        }
      });
      $("#player-location").append("<br>");
    });
  }

  var everyKey = function() {
    newBiker.loseEnergy();
    $("#energyAmount").text(newBiker.energy);
  }

  updateGame();
  $("#energyAmount").text(newBiker.energy);

  $(document).keydown(function(e) {
    switch (e.keyCode) {
      case 37:
        $(".resultDiv").text('left');
        newGame.updatePlayer("left");
        everyKey();
        updateGame();
        break;
      case 38:
        $(".resultDiv").text('up');
        newGame.updatePlayer("up");
        everyKey();
        updateGame();
        break;
      case 39:
        $(".resultDiv").text('right');
        newGame.updatePlayer("right");
        everyKey();
        updateGame();
        break;
      case 40:
        $(".resultDiv").text('down');
        newGame.updatePlayer("down");
        everyKey();
        updateGame();
        break;
      }
  });


  newGame.map.forEach(function(line) {
    line.forEach(function(element) {
      if (element == 1) {
        $("#grid").append("🌱")
      } else if (element == 0) {
        $("#grid").append("💩")
      } else if (element == 4) {
        $("#grid").append("🏠")
      } else if (element == 5) {
        $("#grid").append("⬜")
      } else if (element == 6) {
        $("#grid").append("💩")
      }
    });
    $("#grid").append("<br>");
  });


})
