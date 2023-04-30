<template>
  <v-layout class="fill-height d-flex fill-width" style="background-color: #f4ecfd;">
    <v-layout>
      <v-tabs
        background-color="#f4ecfd"
        color="primary"
        hide-slider
      >
        <v-tab>
          1. SENTINEL (10M)
        </v-tab>

        <v-tab-item>
          <Overview />
        </v-tab-item>
      </v-tabs>
    </v-layout>
    <v-layout class="justify-end" >
      <v-card style="height:30px;">
        <v-item-group>
          <v-item>
            <v-btn>OVERVIEW</v-btn>
          </v-item>
          <v-item>
            <v-btn>MAP VIEW</v-btn>
          </v-item>
        </v-item-group>
      </v-card>
    </v-layout>
  </v-layout>
</template>

<script>
import Overview from '@/components/Overview'
export default {
  name: 'Body-db',
  component: {
    Overview
  },
}
</script>

<style scoped>
.v-tab {
  border-top: 2px solid #893ff2;
  border-bottom: none !important;
}
</style>