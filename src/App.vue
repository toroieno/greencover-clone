<template>
  <v-app>
    <v-app-bar fixed flat>
      <Header />
    </v-app-bar>

    <v-main>
      <Body />
    </v-main>
  </v-app>
</template>

<script>
import Header from './views/Header.vue'
import Body from './views/Body.vue'

export default {
    name: "App",
    data: () => ({
    }),

    components: {
      Header,
      Body,
    },

    methods: {
    },  

    async mounted() {
    },
};
</script>

<style scoped>
.v-app-bar {
  width: 100%;
  background-color: #f4effa !important;
  border-bottom: 1px solid #d3d3d3;
}
.v-main {
  padding-top: 64px !important;
}
</style>