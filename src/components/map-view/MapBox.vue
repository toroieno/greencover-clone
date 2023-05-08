<template>
  <div style="height: 100%; position: relative">
    <div v-show="view === 'overlay'" id="map" style="width: 100%; height: 100%; position: relative;"></div>
    <div v-show="view === 'slide'" id="comparison-container" style="width: 100%; height: 100%; position: relative;">
      <div id="before" class="map"></div>
      <div id="after" class="map"></div>
    </div>
    <div v-show="view === 'sync'" class="container-map" style="width: 100%; height: 100%; position: relative;">
      <div id='map1' class='map-divider'></div>
      <div class="divider"></div>
      <div id='map2' class='map-divider'></div>
    </div>
    <!-- <div v-if="view === 'overlay'" id="map" style="width: 100%; height: 100%"></div>
    <div v-else-if="view === 'slide'" id="comparison-container">
      <div id="before" class="map"></div>
      <div id="after" class="map"></div>
    </div>
    <div v-else class="container-map">
      <div id='map1' class='map-divider'></div>
      <div class="divider"></div>
      <div id='map2' class='map-divider'></div>
    </div> -->

    <div class="right-side-bar">
      <div class="title">
        <span class="title-text">SATELLITE MAPVIEW</span>
      </div>
      <div class="options">
        <!-- choose view -->
        <v-layout class="flex-column">
          <v-card rounded class="tab-views align-self-end">
            <v-layout class="fill-height align-center justify-center">
              <v-item-group>
                <v-container>
                  <v-item>
                    <v-btn
                      id="overlay"
                      class="btn-choose mr-1"
                      :class="{ active: view === 'overlay' }"
                      small
                      elevation="0"
                      tile
                      @click="changeViewMap('overlay')"
                      >OVERLAY</v-btn
                    >
                  </v-item>
                  <v-item>
                    <v-btn
                      class="btn-choose ml-1"
                      :class="{ active: view === 'slide' }"
                      small
                      elevation="0"
                      tile
                      @click="changeViewMap('slide')"
                      >SLIDE</v-btn
                    >
                  </v-item>
                  <v-item>
                    <v-btn
                      class="btn-choose ml-1"
                      :class="{ active: view === 'sync' }"
                      small
                      elevation="0"
                      tile
                      @click="changeViewMap('sync')"
                      >SYNC</v-btn
                    >
                  </v-item>
                </v-container>
              </v-item-group>
            </v-layout>
          </v-card>
        </v-layout>
      </div>

      <div class="layers">
        <v-card v-if="layer" class="layer" rounded>
          <v-card-text style="height: 100%">
            <div class="header-layer">
              <v-layout class="header-title-layer justify-space-between">
                <div class="title-layer">
                  <v-icon color="primary">mdi-layers</v-icon>
                  <span class="text-layer"><b>LAYER MANAGER</b></span>
                </div>
                <v-btn
                  fab
                  class="btn-close-layer"
                  rounded
                  outlined
                  color="primary"
                  min-width="18px"
                  @click="layer = !layer"
                >
                  <v-icon>mdi-menu-left</v-icon>
                </v-btn>
              </v-layout>
              <v-divider></v-divider>
            </div>
            <div class="content-layer"></div>
            <div class="footer-layer">
              <v-divider></v-divider>
              <v-switch
                v-model="street"
                label="Street layer"
                color="primary"
              ></v-switch>
            </div>
          </v-card-text>
        </v-card>
        <v-btn outlined fab class="btn btn-layer" @click="layer = !layer">
          <v-icon class="white--text icon-layer" large>mdi-layers</v-icon>
        </v-btn>
      </div>

      <div class="tools">
        <v-btn fab class="btn-tool btn-download">
          <v-icon @click="downloadMapImage">mdi-camera</v-icon>
        </v-btn>

        <v-btn fab class="btn-tool btn-ruler">
          <v-icon>mdi-ruler</v-icon>
        </v-btn>
        <v-btn fab class="btn-tool btn-polygon">
          <v-icon>mdi-shape-polygon-plus</v-icon>
        </v-btn>

        <div class="info-map">
          <!-- coordinates -->
          <v-chip class="coordinates" color="primary" outlined dark>
            <v-icon>mdi-crosshairs-gps</v-icon>
            <span id="coordinates">{{ lng + " " + lat }}</span>
            <v-icon>mdi-magnify</v-icon>
            <span id="zoom">{{ zoom }}</span>
          </v-chip>

          <!-- get scale km -->
          <v-chip class="scale" outlined color="primary">{{ "km" }}</v-chip>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"
import * as turf from "@turf/turf";
import 'mapbox-gl/dist/mapbox-gl.css';
import 'mapbox-gl-compare/dist/mapbox-gl-compare.css';
import MapboxCompare from 'mapbox-gl-compare';

import api from '@/api/Api'

export default {
  data() {
    return {
      view: 'overlay',
      scale: undefined,
      street: true,
      choose1: "",
      choose: "",
      layer: true,
      map: undefined,
      map1: undefined,
      map2: undefined,
      lng: undefined,
      lat: undefined,
      zoom: undefined,
      dataMap: [],
      dataJaipur: {},
      center: [0, 0],
    };
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
    getCenter(geometry) {
      const center = turf.center(geometry);
      return center.geometry.coordinates
    },
    removeMap() {
      if (this.map) {
        this.map.remove()
        this.map = null
      }
      if (this.map1) {
        this.map1.remove()
        this.map1 = null
      }
      if (this.map2) {
        this.map2.remove()
        this.map2 = null
      }
    },
    async changeViewMap(view) {
      this.view = view
      await this.removeMap()
      switch (view) {
        case 'overlay':
          this.initOverlayMap()
          break
        case 'slide':
          this.initSlideMap()
          break
        case 'sync':
          this.initSyncMap()
          break
        default: 
          console.log('other');
      }
      this.initTools()
    },
    initOverlayMap() {
      const overlay = document.getElementById("map")
      console.log('overlay', overlay);
      this.map = new mapboxgl.Map({
        // eslint-disable-line
        container: "map", // container ID
        style: "mapbox://styles/mapbox/streets-v12", // style URL
        center: this.center, // starting position [lng, lat]
        zoom: 10, // starting zoom
      });
      // overlay.click()
    },
    initSlideMap() {
      console.log('center', this.center);
      this.map1 = new mapboxgl.Map({
        container: 'before',
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/mapbox/light-v11',
        center: this.center,
        zoom: 10
      });
      
      this.map2 = new mapboxgl.Map({
        container: 'after',
        style: 'mapbox://styles/mapbox/dark-v11',
        center: this.center,
        zoom: 10
      });
      
      // A selector or reference to HTML element
      const container = '#comparison-container';
      
      this.map = new MapboxCompare(this.map1, this.map2, container, {
        // Set this to enable comparing two maps by mouse movement:
        // mousemove: true
      });

      const divider = document.querySelector('.mapboxgl-compare');
      divider.style.backgroundColor = '#893ff2';
    },
    initSyncMap() {
      // Initialize the maps
      this.map1 = new mapboxgl.Map({
        container: 'map1',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: this.center,
        zoom: 10
      });

      this.map2 = new mapboxgl.Map({
        container: 'map2',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: this.center,
        zoom: 10
      });

      var disable = false;
      const _this = this;
      this.map1.on("move", function() {
        if (!disable) {
          var center = _this.map1.getCenter();
          var zoom = _this.map1.getZoom();
          // var pitch = _this.map1.getPitch();
          // var bearing = _this.map1.getBearing();

          disable = true;
          _this.map2.setCenter(center);
          _this.map2.setZoom(zoom);
          // _this.map2.setPitch(pitch);
          // _this.map2.setBearing(bearing);
          disable = false;
        }
      })

      this.map2.on("move", function() {
        if (!disable) {
          var center = _this.map2.getCenter();
          var zoom = _this.map2.getZoom();
          // var pitch = _this.map2.getPitch();
          // var bearing = _this.map2.getBearing();

          disable = true;
          _this.map1.setCenter(center);
          _this.map1.setZoom(zoom);
          // _this.map1.setPitch(pitch);
          // _this.map1.setBearing(bearing);
          disable = false;
        }
      })
    },
    initTools() {
      const _this = this;
      this.zoom = this.map.getZoom();

      // add control zoom
      this.map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

      // add get coordinates
      this.map.on("mousemove", (e) => {
        document.getElementById("coordinates").innerHTML =
          e.lngLat.lng.toFixed(4) + " " + e.lngLat.lat.toFixed(4);
      });

      this.map.on("zoom", function () {
        const zoom = _this.map.getZoom();
        _this.zoom = zoom.toFixed(2);
        const scale = _this.getScale(zoom);
        console.log("Current zoom level:", zoom);
        _this.scale = scale;
        console.log("Current scale:", scale);
      });
    },
    getScale(zoom) {
      const tileSize = 512;
      const worldSize = tileSize * Math.pow(2, zoom);
      const metersPerPixel = 40075016.686 * Math.abs(Math.cos(0) / worldSize);
      const kilometersPerPixel = metersPerPixel / 1000;
      return kilometersPerPixel;
    },
    downloadMapImage() {
      const _this = this;
      this.map.once("render", function () {
        const canvas = _this.map.getCanvas();
        canvas.toBlob(function (blob) {
          const link = document.createElement("a");
          link.download = "map.png";
          link.href = URL.createObjectURL(blob);
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(link.href);
        }, "image/png");
      });
      this.map.resize();
      this.map.setCenter(this.map.getCenter()); // fix this
    },
  },

  async mounted() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoidHJpZW5uZ3V5ZW4iLCJhIjoiY2xoNHV0cG1xMDI1NDNlczgxMnV1bWZqNyJ9.GcTfYm213EVxVNHWRU3Z_g";
      
    // lam the nay sai vl - goi api 1 lan thoi
    const resultAoi = await api.getAoi()
    this.dataMap = resultAoi.data.data
    this.dataJaipur = this.dataMap.find((val) => val.name === "Jaipur")
    this.center = this.getCenter(this.dataJaipur.geometry.features[0])
    this.lng = this.center[0].toFixed(4);
    this.lat = this.center[1].toFixed(4);
    console.log(this.dataJaipur);

    this.initOverlayMap()
    this.initTools()
    },
};
</script>
<style scoped>

body {
  overflow: hidden;
  }
   
body * {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
 
.map {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}
.mapboxgl-compare {
  background-color: red !important;
}
.map-divider {
  height: 100%;
  width: 50%;
  float: left;
}
.container-map {
  width: 100%;
  height: 100%;
  position: relative;
}
.divider {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 50%;
  height: 100%;
  width: 2px;
  background-color: blueviolet;
}

.right-side-bar {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 25%;
  margin-right: 10px;
}
.title {
  height: 5%;
  width: 100%;
  text-align: center;
  padding-top: 5px;
}
.options {
  margin-bottom: 10px;
}
.btn-choose {
}
.tab-views {
  width: 100%;
  height: 36px;
}
.title-text {
  color: white;
  font-size: 38px;
}
.btn-choose {
  height: 22px !important;
  width: 82px;
  background-color: transparent !important;
  border: none !important;
}
.btn-choose.active {
  border: 1px solid #893ff2 !important;
  border-radius: 5px;
  background-color: #f4ecfd !important;
  color: #893ff2;
}
.tools {
  position: absolute;
  bottom: 20px;
  right: 20px;
}
.info-map {
  margin-right: 20px;
}
.coordinates {
  margin-right: 10px;
}
.layers {
  position: relative;
  width: 100%;
  height: 70%;
}
.layer {
  width: 100%;
  height: 90%;
}
.btn {
  background-color: #893ff2;
  height: 40px;
  width: 40px;
}
.header-title-layer {
  margin-bottom: 10px;
}
.text-layer {
  margin-left: 10px;
  color: #893ff2;
  font-size: 20px;
  font-weight: 300;
}
.btn-close-layer {
  height: 20px;
  width: 20px;
}
.content-layer {
  height: 85%;
  overflow-y: auto;
}
.btn-layer {
  position: absolute;
  bottom: 0;
  right: 0;
}
.btn-tool {
  height: 36px;
  width: 36px;
  margin: 5px;
}
.icon-layer {
}
</style>
