<template>
  <v-app>
    <v-main>
      <Header />
      <Overview />
      <!-- <button class="color-red">hello</button>
      <v-btn outlined="false"></v-btn> -->
    </v-main>
  </v-app>
</template>

<script>
import Header from './views/HomePage.vue'
import Overview from './components/Overview.vue'

export default {
    name: "App",
    data: () => ({
    }),

    components: {
      Header,
      Overview
    },

    methods: {
    },  

    async mounted() {
    },
};
</script>
