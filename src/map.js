const loadGoogleMapsApi = require('load-google-maps-api');
import { Key } from './key.js'

const key = new Key();

export class Map {
  constructor() {
    this.markers = [];
    console.log(this.markers);
  }
  static loadMap() {
    return loadGoogleMapsApi({ key: `${key.googlemaps}` });
  }


  static createMap(googleMaps, mapElement, userLat, userLong) {
    return new googleMaps.Map(mapElement, {
      center: {
        lat: userLat,
        lng: userLong
      },
      zoom: 13
    });
  }
}
