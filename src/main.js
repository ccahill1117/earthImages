import { Earth } from './earth.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';



$(document).ready(function(){
  $("#userCoords").submit(function(event) {
    event.preventDefault();

    let userLat = $("#userLat").val();
    let userLong = $("#userLong").val();

    $("#latSpan").text(userLat);
    $("#longSpan").text(userLong);

  })

})
