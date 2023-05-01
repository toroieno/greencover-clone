<template>
  <v-card class="overview">
    <v-card-text class="no-padding">
      <div class="content">
        <v-layout class="card-header align-center">
          <v-layout class="aoi align-center px-5">
            <span><b>Overview of Changes in</b></span>
            <div class="pl-3 select-input">
              <v-select
                class="select-aoi"
                v-model="select"
                :items="items"
                :menu-props="{ top: false, offsetY: true }"
                label="Label"
                solo
                dense
              ></v-select>
            </div>
          </v-layout>
          <div class="times d-inline-flex">
            <v-layout class="month align-center">
              <span><b>Compare Month</b></span>
              <div class="pl-3 select-input">
                <v-select
                  class="select-time"
                  v-model="select"
                  :items="items"
                  :menu-props="{ top: false, offsetY: true }"
                  label="Label"
                  solo
                  dense
                ></v-select>
              </div>
            </v-layout>
            <v-layout class="month align-center ml-3 mr-3">
              <span><b>VS Month</b></span>
              <div class="pl-3 select-input">
                <v-select
                  class="select-time"
                  v-model="select"
                  :items="items"
                  :menu-props="{ top: false, offsetY: true }"
                  label="Label"
                  solo
                  dense
                ></v-select>
              </div>
            </v-layout>
          </div>
        </v-layout>
        <div class="card-content">
          dashboard
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'OverviewDB',
  data() {
    return {
      select: '1',
      items: ['1', '2', '3']
    }
  }
}
</script>

<style scoped>
.overview {
  border-radius: 10px;
  margin: 0px 36px 16px;
  width: 100%;
}
.no-padding {
  padding: 0;
}
.content {
  width: 100%;
}
.card-header {
  height: 70px;
  background-color: #efefef;
  padding: 0;
  margin: 0;
  box-shadow: rgba(0, 0, 0, 0.22) 0px 0px 4px inset;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}
.month {
  width: auto;
}
.select-input {
  height: 38px;
}
.select-aoi {
  width: 288px;
}
.select-time {
  width: 180px;
}
</style>