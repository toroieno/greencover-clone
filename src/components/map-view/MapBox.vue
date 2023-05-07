<template>
  <div style="height: 100%; width: 100%;">
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
    map.addControl(new mapboxgl.NavigationControl());
  }
}
</script>
<style>
  
</style>