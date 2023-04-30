<template>
  <v-app>
    <v-header>
      <Header />
    </v-header>
    <v-main>
      <!-- <Body /> -->
      <Chart />
    </v-main>
  </v-app>
</template>

<script>
import Header from './views/Header.vue'
// import Body from './views/Body.vue'
import Chart from '@/components/Dashboard.vue'

export default {
    name: "App",
    data: () => ({
    }),

    components: {
      Header,
      // Body,
      Chart
    },

    methods: {
    },  

    async mounted() {
    },
};
</script>
