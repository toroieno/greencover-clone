<template>
  <v-card class="fill-height scroll-container" style="background-color: #f7f3f8; height: 100%;">
    <v-card-title class="pt-5 pb-5">
      <span style="font-size: 36px; font-weight: 600; line-height: 100px;">Green Cover</span>
    </v-card-title>
    <v-card-text>
      <!-- date -->
      <v-row>
        <v-col cols="12" md="6">
          <span><b>Date of the month of </b></span>
          <span>Date ??</span>
        </v-col>
        <v-col cols="12" md="6">
          <span><b>Date of the month of </b></span>
          <span>Date ??</span>
        </v-col>
      </v-row>

      <!-- 2 data card -->
      <v-row>
        <v-col cols="12" md="6">
          <v-card class="rounded-lg elevation-2 pa-5" style="min-height: 230px;">
            <!-- <v-card-text class="content-card"> -->
              <v-layout class="align-center justify-center fill-height" style="position: relative; margin-top: 25px;">
                <div class="border"></div>
                <div class="sqkm">
                  <span class="number">319.25</span>
                  <span class="label">sqkm</span>
                </div>
                <div class="detail">
                  <p>- Non Green Area: 391.81 sqkm</p>
                  <p>- Water Area: 72.68 sqkm</p>
                </div>
              </v-layout>
            <!-- </v-card-text> -->
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card class="rounded-lg elevation-2" style="min-height: 230px;">
            
          </v-card>
        </v-col>
      </v-row>

      <!-- 1 data card -->
      <v-row style="height: 100%;">
        <v-col cols="12" md="12">
          <v-card class="rounded-lg elevation-2" style="min-height: 230px;">
            <v-layout class="align-center fill-height" style="min-height: 230px;">
              <div class="content" style="width: 100%; margin-left: 20px; align-items: center; width: 100%;">
                <span style="font-size: 46px; font-weight: 500; width: 10%;">%</span>
                <v-icon color="green" style="width: 5%; padding-bottom: 50px;">mdi-triangle</v-icon>
                <div class="text" style="width: 80%; display: inline-block;">
                  <span style="font-size: 24px; font-weight: 500;">CHANGE IN GREEN COVER AREA</span>
                  <br/>
                  <span>
                    <span class="red--text">0 sqkm</span>
                     in Green Cover area compared to <span class="primary--text">Aug</span> records.
                  </span>
                </div>
              </div>
            </v-layout>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.content-card {
  height: 100%;
  padding: 20px;
}
.border {
  position: relative;
  border: 1px solid #893ff2;
  height: 115px;
  width: 100%;
}
.sqkm {
  height: 80%;
  color: #893ff2;
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
}
.sqkm > .number {
  font-size: 50px;
  font-weight: 500;
}
.detail {
  width: 70%;
  height: 30%;
  position: absolute;
  left: 0;
  padding-left: 5px;
  bottom: -10px;
  background-color: white;
}
.detail > p {
  margin-bottom: 0;
}
</style>