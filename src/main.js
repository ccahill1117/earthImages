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


    let promise = new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    let url = `https://api.nasa.gov/planetary/earth/imagery/?lon=${userLong}&lat=${userLat}&cloud_score=False&api_key=${process.env.ctc_nasa_key}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });

    promise.then(function(response) {
      let body = JSON.parse(response);
      console.log(body);
      $(".imageDiv").prepend(`<img src=${body.url}>`);
    },

    function(error) {
      $('#errorDiv').text(`There was an error processing your request`);
    });


  })

})
