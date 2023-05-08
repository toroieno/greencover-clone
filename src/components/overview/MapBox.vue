<template>
  <div style="height: 100%; position: relative;">
    <v-layout
      class="elevation-2 align-center"
      style="height: 45px; background-color: rgb(244, 243, 246)"
    >
      <span class="pl-6"><b>Map Overview</b></span>
    </v-layout>
    <div id="map" style="width: 100%; height: calc(100% - 45px)"></div>

    <div class="download-image">
      <v-icon style="margin: auto; width: 40px; height: 40px;" @click="downloadMapImage">mdi-camera</v-icon>
    </div>

    <div class="info-map">
      <!-- coordinates -->
      <v-chip class="coordinates" color="primary" outlined dark>
        <v-icon>mdi-crosshairs-gps</v-icon>
        <span id="coordinates">{{lng + " " + lat}}</span>
        <v-icon>mdi-magnify</v-icon>
        <span id="zoom">{{zoom}}</span>
      </v-chip>
  
      <!-- get scale km -->
      <v-chip class="scale" outlined color="primary">{{'km'}}</v-chip>
    </div>

    <v-layout class="layers">
      <v-btn fab outlined v-if="!layer" class="btn-layer" @click="layer=!layer">
        <v-icon class="icon-layer white--text" large>mdi-layers</v-icon>
      </v-btn>
      <v-card v-else class="layer" rounded>
        <v-card-text>
          <v-layout class="header-layer justify-space-between">
            <span><b>Layers</b></span>
            <v-btn class="btn-close-layer" rounded outlined color="primary" min-width="18px" @click="layer=!layer">
              <v-icon>mdi-menu-left</v-icon>
            </v-btn>
          </v-layout>
          <v-divider></v-divider>
          <v-layout class="content-layer">
            <v-radio-group v-model="choose">
              <v-chip class="option-layer" outlined>
                <v-icon>mdi-drag</v-icon>
                <span>2023_02_green_cover_change</span>
                <v-radio value="green_cover_change"></v-radio>
              </v-chip>
              <v-chip class="option-layer" outlined>
                <v-icon>mdi-drag</v-icon>
                <span>2023_02_green_cover_change</span>
                <v-radio value="green_change"></v-radio>
              </v-chip>
              <v-chip class="option-layer" outlined>
                <v-icon>mdi-drag</v-icon>
                <span>2023_02_green_cover_change</span>
                <v-radio value="cover_change"></v-radio>
              </v-chip>
              <v-chip class="option-layer" outlined>
                <v-icon>mdi-drag</v-icon>
                <span>2023_02_green_cover_change</span>
                <v-radio value="green_cover"></v-radio>
              </v-chip>
            </v-radio-group>
          </v-layout>
          <v-divider></v-divider>
          <v-switch v-model="street" label="Street layer" color="primary"></v-switch>
        </v-card-text>
      </v-card>
    </v-layout>
  </div>
</template>
<script>
import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"
import * as turf from "@turf/turf";

export default {
  data() {
    return {
      scale: undefined,
      street: true,
      choose1: '',
      choose: '',
      layer: false,
      map: undefined,
      lng: undefined,
      lat: undefined,
      zoom: undefined
    };
  },
  props: {
    data: Object,
  },
  watch: {
    data(newValue) {
      console.log("change data map", newValue);

      // set center to map
      const center = turf.center(newValue.features[0]);
      this.lng = center.geometry.coordinates[0].toFixed(4);
      this.lat = center.geometry.coordinates[1].toFixed(4);
      this.map.setCenter(center.geometry.coordinates);

      this.map.on("load", () => {
        // Add a data source containing GeoJSON data.
        this.map.addSource("maine", {
          type: "geojson",
          data: newValue.features[0],
        });

        // // Add a new layer to visualize the polygon.
        // this.map.addLayer({
        //   id: "maine",
        //   type: "fill",
        //   source: "maine", // reference the data source
        //   layout: {},
        //   paint: {
        //     "fill-color": "#0080ff", // blue color fill
        //     "fill-opacity": 0.5,
        //   },
        // });
        // Add a black outline around the polygon.
        this.map.addLayer({
          id: "outline",
          type: "line",
          source: "maine",
          layout: {},
          paint: {
            "line-color": "#893ff2",
            "line-width": 1,
          },
        });
      });
    },
  },
  methods: {
    getScale(zoom) {
      const tileSize = 512;
      const worldSize = tileSize * Math.pow(2, zoom);
      const metersPerPixel = 40075016.686 * Math.abs(Math.cos(0) / worldSize);
      const kilometersPerPixel = metersPerPixel / 1000;
      return kilometersPerPixel;
    },
    downloadMapImage() {
      const _this = this
      this.map.once('render', function() {
        const canvas = _this.map.getCanvas();
        canvas.toBlob(function(blob) {
          const link = document.createElement('a');
          link.download = 'map.png';
          link.href = URL.createObjectURL(blob);
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(link.href);
        }, 'image/png');
      });
      this.map.resize();
      this.map.setCenter(this.map.getCenter()); // fix this
    }
  },

  mounted() {
    const _this = this
    // TO MAKE THE MAP APPEAR YOU MUST
    // ADD YOUR ACCESS TOKEN FROM
    // https://account.mapbox.com
    mapboxgl.accessToken =
      "pk.eyJ1IjoidHJpZW5uZ3V5ZW4iLCJhIjoiY2xoNHV0cG1xMDI1NDNlczgxMnV1bWZqNyJ9.GcTfYm213EVxVNHWRU3Z_g";
    this.map = new mapboxgl.Map({
      // eslint-disable-line
      container: "map", // container ID
      style: "mapbox://styles/mapbox/streets-v12", // style URL
      center: [-9, 9], // starting position [lng, lat]
      zoom: 10, // starting zoom
    });
    this.zoom = this.map.getZoom();

    // add control zoom
    this.map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    // add get coordinates
    this.map.on("mousemove", (e) => {
      document.getElementById("coordinates").innerHTML =
        e.lngLat.lng.toFixed(4) + " " + e.lngLat.lat.toFixed(4)
    });

    this.map.on('zoom', function() {
      const zoom = _this.map.getZoom();
      _this.zoom = zoom.toFixed(2)
      const scale = _this.getScale(zoom);
      console.log('Current zoom level:', zoom);
      _this.scale = scale
      console.log('Current scale:', scale);
    });
  },
};
</script>
<style scoped>
.info-map {
  position: absolute;
  bottom: 5px;
  right: 10px;
}
.scale {
  min-width: 30px;
  margin-left: 10px;
}
.download-image {
  cursor: pointer;
  display: flex;
  position: absolute;
  top: 50px;
  right: 10px;
  background-color: white;
  border-radius: 50%;
  height: 40px;
  width: 40px;
}
.layers {
  cursor: pointer;
  position: absolute;
  left: 5px;
  bottom: 10px;
}
.btn-layer {
  border: 1px solid #bf99f5;
  background-color: #bf99f5;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  display: flex;
}
.icon-layer {
  margin: auto;
  color: white;
}
.btn-close-layer {
  width: 18px !important;
  height: 18px !important;
  padding: 0 !important;
}
.option-layer {
  margin-bottom: 10px;
}
</style>
