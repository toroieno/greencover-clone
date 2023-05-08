<template>
  <v-card class="fill-height scroll-container" style="background-color: #f7f3f8; height: 100%;">
    <v-card-title class="pt-5 pb-5">
      <span style="font-size: 36px; font-weight: 600; line-height: 100px;">Plant Health</span>
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
          <v-card class="rounded-lg elevation-2" style="min-height: 230px;">
            <div class="content-sqkm pl-2 pr-2 pt-10">
              <v-layout class="title justify-space-between primary--text mb-4">
                <span style="font-size: 36px; font-weight: 400;"><i>Plant Health</i></span>
                <span style="font-size: 16px;"><i>sqkm</i></span>
              </v-layout>
              <v-layout class="align-center">
                <v-row>
                  <v-col cols="12" md="5">
                    <span><b>Stressed</b></span>
                  </v-col>
                  <v-col cols="12" md="5" class="pt-5">
                    <!-- <div style="height: 10px; max-width: 15vw; background-color: rgb(255, 152, 0); padding: 0;"></div> -->
                    <div :style="{height: '10px', maxWidth: '15vw', backgroundColor: 'rgb(255, 152, 0)', padding: 0}"></div>
                    
                  </v-col>
                  <v-col cols="12" md="2">
                    <v-layout class="justify-end green--text">
                      <span>3</span>
                    </v-layout>
                  </v-col>
                </v-row>
              </v-layout>
              <v-layout class="align-center">
                <v-row>
                  <v-col cols="12" md="5">
                    <span><b>Slightly Stressed</b></span>
                  </v-col>
                  <v-col cols="12" md="5" class="pt-5">
                    <div style="height: 10px; max-width: 15vw; background-color: rgb(255, 152, 0); padding: 0;"></div>
                  </v-col>
                  <v-col cols="12" md="2">
                    <v-layout class="justify-end green--text">
                      <span>3</span>
                    </v-layout>
                  </v-col>
                </v-row>
              </v-layout>
              <v-layout class="align-center">
                <v-row>
                  <v-col cols="12" md="5">
                    <span><b>Healthy</b></span>
                  </v-col>
                  <v-col cols="12" md="5" class="pt-5">
                    <div style="height: 10px; max-width: 15vw; background-color: rgb(255, 152, 0); padding: 0;"></div>
                  </v-col>
                  <v-col cols="12" md="2">
                    <v-layout class="justify-end green--text">
                      <span>3</span>
                    </v-layout>
                  </v-col>
                </v-row>
              </v-layout>
              <v-layout class="align-center">
                <v-row>
                  <v-col cols="12" md="5">
                    <span><b>Very Healthy</b></span>
                  </v-col>
                  <v-col cols="12" md="5" class="pt-5">
                    <div style="height: 10px; max-width: 15vw; background-color: rgb(255, 152, 0); padding: 0;"></div>
                  </v-col>
                  <v-col cols="12" md="2">
                    <v-layout class="justify-end green--text">
                      <span>3</span>
                    </v-layout>
                  </v-col>
                </v-row>
              </v-layout>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card class="rounded-lg elevation-2" style="min-height: 230px;">
            <div class="content-sqkm pl-2 pr-2 pt-10">
              <v-layout class="title justify-space-between primary--text mb-4">
                <span style="font-size: 36px; font-weight: 400;"><i>Plant Health</i></span>
                <span style="font-size: 16px;"><i>sqkm</i></span>
              </v-layout>
              <v-layout class="align-center">
                <v-row>
                  <v-col cols="12" md="5">
                    <span><b>Stressed</b></span>
                  </v-col>
                  <v-col cols="12" md="5" class="pt-5">
                    <!-- <div style="height: 10px; max-width: 15vw; background-color: rgb(255, 152, 0); padding: 0;"></div> -->
                    <div :style="{height: '10px', maxWidth: '15vw', backgroundColor: 'rgb(255, 152, 0)', padding: 0}"></div>
                    
                  </v-col>
                  <v-col cols="12" md="2">
                    <v-layout class="justify-end green--text">
                      <span>3</span>
                    </v-layout>
                  </v-col>
                </v-row>
              </v-layout>
              <v-layout class="align-center">
                <v-row>
                  <v-col cols="12" md="5">
                    <span><b>Slightly Stressed</b></span>
                  </v-col>
                  <v-col cols="12" md="5" class="pt-5">
                    <div style="height: 10px; max-width: 15vw; background-color: rgb(255, 152, 0); padding: 0;"></div>
                  </v-col>
                  <v-col cols="12" md="2">
                    <v-layout class="justify-end green--text">
                      <span>3</span>
                    </v-layout>
                  </v-col>
                </v-row>
              </v-layout>
              <v-layout class="align-center">
                <v-row>
                  <v-col cols="12" md="5">
                    <span><b>Healthy</b></span>
                  </v-col>
                  <v-col cols="12" md="5" class="pt-5">
                    <div style="height: 10px; max-width: 15vw; background-color: rgb(255, 152, 0); padding: 0;"></div>
                  </v-col>
                  <v-col cols="12" md="2">
                    <v-layout class="justify-end green--text">
                      <span>3</span>
                    </v-layout>
                  </v-col>
                </v-row>
              </v-layout>
              <v-layout class="align-center">
                <v-row>
                  <v-col cols="12" md="5">
                    <span><b>Very Healthy</b></span>
                  </v-col>
                  <v-col cols="12" md="5" class="pt-5">
                    <div style="height: 10px; max-width: 15vw; background-color: rgb(255, 152, 0); padding: 0;"></div>
                  </v-col>
                  <v-col cols="12" md="2">
                    <v-layout class="justify-end green--text">
                      <span>3</span>
                    </v-layout>
                  </v-col>
                </v-row>
              </v-layout>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <!-- 1 data card -->
      <v-row>
        <v-col cols="12" md="12">
          <v-card class="rounded-lg elevation-2" style="min-height: 230px;">
            <v-layout>
              content
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

</style>