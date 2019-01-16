import { Earth } from './earth.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function(){
  const earth = new Earth();
  $("#userCoords").submit(function(event) {
    event.preventDefault();

    let userLat = $("#userLat").val();
    let userLong = $("#userLong").val();

    $("#latSpan").text(userLat);
    $("#longSpan").text(userLong);

    let promise = earth.getMap(userLat, userLong);

    promise.then(function(response) {
      let body = JSON.parse(response);
      earth.initialLatLong(userLat,userLong);
      console.log(body);
      $(".imageDiv").prepend(`<img src='${body.url}'>`);
    },

    function(error) {
      $('#errorDiv').text(`There was an error processing your request`);
    });



  })

  $(document).keydown(function(e) {
    switch (e.keyCode) {
      case 37:
        earth.updateLatLong("left");
        console.log("left")
        console.log(earth.lat)
        console.log(earth.long)
        break;
      case 38:
        earth.updateLatLong("up");
        console.log("up")
        console.log(earth.lat)
        console.log(earth.long)
        break;
      case 39:
        earth.updateLatLong("right");
        console.log("right")
        console.log(earth.lat)
        console.log(earth.long)
        break;
      case 40:
        earth.updateLatLong("down");
        console.log("down")
        console.log(earth.lat)
        console.log(earth.long)
        break;
      }
  });

})
