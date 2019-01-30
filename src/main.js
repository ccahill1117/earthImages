import { Map } from './map';
import { Earth } from './earth.js';
import { Keys } from './key'
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
const loadGoogleMapsApi = require('load-google-maps-api');

$(document).ready(function() {

  const earth = new Earth();

  let gridCounter = 0;

  earth.map.forEach(function(line) {
    $("#grid").append("<tr>");
      line.forEach(function(element) {
        gridCounter = gridCounter + 1;
        if (element == 0) {
          $("#grid").append(`<td class="gridCells" id=${gridCounter}></td>`)
        }
        $("#grid").append("</tr>");
      });
 });

  $("#userCoords").submit(function(event) {
    event.preventDefault();
    let userLat = parseFloat($("#userLat").val());
    let userLong = parseFloat($("#userLong").val());
    APICall(userLat, userLong, 4, 4);

    let mapElement = document.getElementById('map');
    let loadPromise = Map.loadMap();
    loadPromise.then(function(googleMaps) {
      let map = Map.createMap(googleMaps, mapElement, userLat, userLong);
    });

    $("table#grid").show();
    $("#map").show();
    $("h2#warning").show();
    $("h3#warning").show();
    $("#userCoords").hide();

  });

  function APICall(lat, long, x, y) {
    $("#latSpan").text(lat);
    $("#longSpan").text(long);

    let promise = earth.getMap(lat, long);

    promise.then(function(response) {
      let body = JSON.parse(response);
      earth.initialLatLong(lat,long);
      console.log(body);
      const id = (x+((y)*9))
      $(`td#${id}`).html(`<img src='${body.url}'>`)
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
