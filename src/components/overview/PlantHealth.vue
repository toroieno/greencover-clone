<template>
  <v-card class="fill-height" style="background-color: #f7f3f8;">
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
          <v-card>
            <v-layout>
              content
            </v-layout>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card>
            <v-layout>
              content
            </v-layout>
          </v-card>
        </v-col>
      </v-row>

      <!-- 1 data card -->
      <v-row>
        <v-col cols="12" md="12">
          <v-card>
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
<style>
  
</style>