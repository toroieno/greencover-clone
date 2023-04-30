<template>
  <v-app>
    <Header />
    <v-main style="background-color: #f4ecfd;">
      <Layout />
      <Overview />
      <!-- <button class="color-red">hello</button>
      <v-btn outlined="false"></v-btn> -->
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header.vue'
import Layout from './components/LayoutDB.vue'
import Overview from './components/Overview.vue'

export default {
    name: "App",
    data: () => ({
    }),

    components: {
      Header,
      Layout,
      Overview
    },

    methods: {
    },  

    async mounted() {
    },
};
</script>
<style>
html {
  overflow: hidden;
}
</style>

