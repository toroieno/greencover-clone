<template>
  <v-layout class="fill-height d-flex fill-width" style="background-color: #f4ecfd;">
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
                  <v-btn class="active btn-choose mr-1" x-small elevation="0" tile>OVERVIEW</v-btn>
                </v-item>
                <v-item>
                  <v-btn class="btn-choose ml-1" x-small elevation="0" tile>MAP VIEW</v-btn>
                </v-item>
              </v-container>
            </v-item-group>
          </v-layout>
        </v-card>
      </v-layout>
    </v-layout>
  </v-layout>
</template>

<script>
// import Overview from '@/components/Overview'

export default {
  name: 'Body-db',
  components: {
    // Overview
  },
}
</script>

<style scoped>
.option {
  height: 66px;
}
.tab {
  width: 240px;
}
.tab-1 {
  border-top: 2px solid #893ff2;
  background-color: transparent;
  width: 240px;
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