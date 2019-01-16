export class Earth {
  constructor() {
    this.lat = 0;
    this.long = 0;
  }

  initialLatLong(lat,long) {
    this.lat = lat;
    this.long = long;
  }

  updateLatLong(direction) {
    if (direction == "up") {
      this.lat = parseFloat((this.lat + 0.0250).toFixed(4));
    }
    if (direction == "down") {
      this.lat = parseFloat((this.lat - 0.0250).toFixed(4));
    }
    if (direction == "left") {
      this.long = parseFloat((this.long - 0.0250).toFixed(4));
    }
    if (direction == "right") {
      this.long = parseFloat((this.long + 0.0250).toFixed(4));
    }

  }

  getMap(lat, long) {
    return new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    let url = `https://api.nasa.gov/planetary/earth/imagery/?lon=${long}&lat=${lat}&cloud_score=False&api_key=${process.env.ctc_nasa_key}`;
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
  }

}
