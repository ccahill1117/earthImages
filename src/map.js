const loadGoogleMapsApi = require('load-google-maps-api');
const googleKey = `${process.env.ctc_google_maps}`;

export class Map {
  constructor() {
    this.markers = [];
    console.log(this.markers);
  }
  static loadMap() {
    return loadGoogleMapsApi({ key: `${googleKey}` });
  }

  static createMap(googleMaps, mapElement, userLat, userLong) {
    return new googleMaps.Map(mapElement, {
      center: {
        lat: userLat,
        lng: userLong
      },
      zoom: 12
    });
  }
}
