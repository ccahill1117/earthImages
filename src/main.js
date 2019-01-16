import { Earth } from './earth.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';



$(document).ready(function(){

  function gridIDFinder(x,y) {
    const result =  x + ((y-1)*11);
    return result;
  }

  const earth = new Earth();
  let gridCounter = 0;
  earth.map.forEach(function(line) {
   line.forEach(function(element) {
     gridCounter = gridCounter + 1;
     if (element == 0) {
       $("#grid").append(`<span class="gridTest" id=${gridCounter}>lil box</span>`)
     }
     if (element == "mid") {
       $("#grid").append("MIDDLE")
     }
   });
   $("#grid").append("<br>");
 });


  $("#userCoords").submit(function(event) {
    event.preventDefault();

    let userLat = parseFloat($("#userLat").val());
    let userLong = parseFloat($("#userLong").val());
    APICall(userLat, userLong, 5, 5);
  });

  function APICall(lat, long, x, y) {
    $("#latSpan").text(lat);
    $("#longSpan").text(long);
    let promise = earth.getMap(lat, long);

    promise.then(function(response) {
      let body = JSON.parse(response);
      earth.initialLatLong(lat,long);
      console.log(body);
      $(".imageDiv").prepend(`<img src='${body.url}'>`);
      const id = (x+((y)*11))
      $(`span#${id}`).html(`<img src='${body.url}'>`)
      $("#errorDiv").text("");
    },

    function(error) {
      $('#errorDiv').text(`There was an error processing your request`);
    });

  }



  $(document).keydown(function(e) {
    switch (e.keyCode) {
      case 37:
        earth.updateLatLong("left");
        console.log(`left, ${earth.lat}, ${earth.long}, ${earth.x}, ${earth.y}`)
        APICall(earth.lat, earth.long, earth.x, earth.y);
        break;
      case 38:
        earth.updateLatLong("up");
        console.log(`up, ${earth.lat}, ${earth.long}, ${earth.x}, ${earth.y}`)
        APICall(earth.lat, earth.long, earth.x, earth.y);
        break;
      case 39:
        earth.updateLatLong("right");
        console.log(`right, ${earth.lat}, ${earth.long}, ${earth.x}, ${earth.y}`)
        APICall(earth.lat, earth.long, earth.x, earth.y);
        break;
      case 40:
        earth.updateLatLong("down");
        console.log(`down, ${earth.lat}, ${earth.long}, ${earth.x}, ${earth.y}`)
        APICall(earth.lat, earth.long, earth.x, earth.y);
        break;
      }
  });

})
