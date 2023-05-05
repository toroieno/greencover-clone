<template>
  <div style="height: 100%;">
    <v-layout class="elevation-2 align-center" style="height: 45px; background-color: rgb(244, 243, 246);">
      <span class="pl-6"><b>Map Overview</b></span>
    </v-layout>
    <div id='map' style='width: 100%; height: calc(100% - 45px);'></div>
  </div>
</template>
<script>
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

export default {
  mounted() {
    // TO MAKE THE MAP APPEAR YOU MUST
    // ADD YOUR ACCESS TOKEN FROM
    // https://account.mapbox.com
    mapboxgl.accessToken = 'pk.eyJ1IjoidHJpZW5uZ3V5ZW4iLCJhIjoiY2xoNHV0cG1xMDI1NDNlczgxMnV1bWZqNyJ9.GcTfYm213EVxVNHWRU3Z_g';
    const map = new mapboxgl.Map({ // eslint-disable-line
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [106.1698566, 20.039661], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
    map.addControl(new mapboxgl.FullscreenControl({container: document.querySelector('#map')}));
    // map.addControl(new mapboxgl.GeolocateControl({
    //   positionOptions: {
    //   enableHighAccuracy: true
    //   },
    //   trackUserLocation: true,
    //   showUserHeading: true
    //   }));
    map.addControl(new mapboxgl.NavigationControl());
    map.addControl(new mapboxgl.GeolocateControl());
    map.addControl(new mapboxgl.Marker());
    let marker = new mapboxgl.Marker(); 
    const lngLat = marker.getLngLat();
// Print the marker's longitude and latitude values in the console
console.log(`Longitude: ${lngLat.lng}, Latitude: ${lngLat.lat}`);
    map.addControl(new mapboxgl.ScaleControl());
    map.addControl(new mapboxgl.LngLat(-123.9749, 40.7736));
    const sw = new mapboxgl.LngLat(-73.9876, 40.7661);
    const ne = new mapboxgl.LngLat(-73.9397, 40.8002);
    const llb = new mapboxgl.LngLatBounds(sw, ne); // eslint-disable-line
  }
}
</script>
<style>
  
</style>