import './styles.css';
import { Game } from './game.js'
// import { Game } from './game.js';
import $ from 'jquery';



$(document).ready(function(){
  let newGame = new Game("test");
  $(document).keydown(function(e) {
    switch (e.keyCode) {
      case 37:
        $(".resultDiv").append('left');
        console.log(newGame.findPlayer(newGame.playerLocation));
        break;
      case 38:
        $(".resultDiv").append('up');
        break;
      case 39:
        $(".resultDiv").append('right');
        break;
      case 40:
        $(".resultDiv").append('down');
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

})
