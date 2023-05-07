<template>
  <v-layout class="fill-height d-flex flex-column" style="background-color: #f4ecfd;">
    <v-layout class="option flex-row">
      <!-- tab -->
      <div class="tab">
        <button class="tab-1">
          <span class="btn-text primary--text">1. SENTINEL (10M)</span>
        </button>
      </div>

      <!-- choose view -->
      <v-layout class="flex-column">
        <v-card class="btn-view align-self-end">
          <v-layout class="fill-height align-center justify-center">
            <v-item-group>
              <v-container>
                <v-item>
                  <v-btn class="btn-choose mr-1" :class="{active: view === 'overview'}" x-small elevation="0" tile @click="view = 'overview'">OVERVIEW</v-btn>
                </v-item>
                <v-item>
                  <v-btn class="btn-choose ml-1" :class="{active: view === 'map-view'}" x-small elevation="0" tile @click="view = 'map-view'">MAP VIEW</v-btn>
                </v-item>
              </v-container>
            </v-item-group>
          </v-layout>
        </v-card>
      </v-layout>
    </v-layout>
    <v-layout class="fill-height" style="position: relative;">
      <v-overlay absolute :value="isLoading">
        <v-progress-circular
          indeterminate
          size="64"
        ></v-progress-circular>
      </v-overlay>
      <Overview v-if="view === 'overview'" :isLoading="isLoading" @update:isLoading="updateLoading"/>
      <MapView v-if="view === 'map-view'"/>
    </v-layout>
  </v-layout>
</template>

<script>
import Overview from '@/components/Overview'
import MapView from '@/components/MapView'

export default {
  name: 'Body-db',
  data() {
    return {
      view: 'overview',
      isLoading: false,
    }
  },
  methods: {
    updateLoading(status) {
      this.isLoading = status
    }
  },
  components: {
    Overview,
    MapView
  },
}
</script>

<style scoped>
.option {
  height: 66px;
}
.tab-1 {
  border-top: 2px solid #893ff2;
  background-color: transparent;
  width: 260px;
  height: 36px;
}
.tab-1:hover {
  background-color: #ecdffc;
}
.btn-text {
  margin: 30px;
}
.btn-view {
  height: 30px;
  width: 200px;
  margin-top: 10px;
}
.btn-choose {
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
</style>