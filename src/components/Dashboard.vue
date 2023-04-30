<template>
  <div>
    <!-- chart -->
    <D3BarChart
      :config="chart_config"
      :datum="chartData"
      :title="chart_title"
    ></D3BarChart>
  </div>
</template>
<script>
import { D3BarChart } from 'vue-d3-charts';

export default {
  name: 'dashboard-d3',
  components: {
    D3BarChart,
  },
  props: {
    chartData: Array,
  },
  data() {
    return {
      chart_title: 'Your title goes here',
      chart_config: {
        key: 'year',
        values: ['data'],
        currentKey: '2004',
        axis: {
          yTicks: 3
        },
        color: {
          default: '#222f3e',
          current: '#41B882'
        }
      }
    }
  }
}
</script>
<style>
  
</style>