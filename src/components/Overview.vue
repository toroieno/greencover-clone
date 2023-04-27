<template>
  <v-card>
    <v-tabs
      color="deep-purple accent-4"
    >
      <v-tab>
        Landscape
      </v-tab>
      
      <v-tab>
        City
      </v-tab>
      <v-tab>
        Abstract
      </v-tab>


      <v-tab-item>
        <h1>Green Cover</h1>
        <v-row>

        </v-row>
        <v-row>
          <v-col>
            <v-card></v-card>
          </v-col>
          <v-col></v-col>
        </v-row>
        <v-row></v-row>
      </v-tab-item>
      <v-tab-item>City</v-tab-item>
      <v-tab-item>Abstract</v-tab-item>


    </v-tabs>
  </v-card>
</template>

<script>
export default {
  name: 'OverviewDB'
}
</script>