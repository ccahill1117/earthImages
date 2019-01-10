import './styles.css';
import { Game } from './game.js'
// import { Game } from './game.js';
import $ from 'jquery';



$(document).ready(function(){
  let newGame = new Game("test");
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
  updateGame();
  $(document).keydown(function(e) {
    switch (e.keyCode) {
      case 37:
        $(".resultDiv").text('left');
        newGame.updatePlayer("left");
        updateGame();
        break;
      case 38:
        $(".resultDiv").text('up');
        newGame.updatePlayer("up");
        updateGame();
        break;
      case 39:
        $(".resultDiv").text('right');
        newGame.updatePlayer("right");
        updateGame();
        break;
      case 40:
        $(".resultDiv").text('down');
        newGame.updatePlayer("down");
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
      }
    });
    $("#grid").append("<br>");
  });


})
