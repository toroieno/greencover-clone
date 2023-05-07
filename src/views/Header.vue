<template>
  <div class="container">
    <v-toolbar class="main-header" flat>
      <img alt="logo" src="/assets/imgs/logo.png" width="85" height="50" class="ml-2" />
      <div class="pr-8 pl-4">
        <h3 class="db primary--text">DASHBOARD</h3>
      </div>
    </v-toolbar>
  </div>
</template>
<script>
export default {
  name: "header-db",
}
</script>
<style scoped>
.container {
  width: 100%;
  margin: 0;
}
.v-toolbar {
  background-color: #f4effa !important;
  height: 64px;
  border-bottom: 1px solid #d3d3d3;
}
.db {
  cursor: pointer;
}
</style>