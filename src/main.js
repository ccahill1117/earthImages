import './styles.css';
import { Game } from './game.js';
import $ from 'jquery';


$(document).ready(function(){
  $("#inputForm").submit(function(event){
    event.preventDefault();

    let userString = $("#inputText").val();
    let string = new Game(userString);
    $(".resultDiv").empty();
    $(".resultDiv").text(string.string);

  });
});
