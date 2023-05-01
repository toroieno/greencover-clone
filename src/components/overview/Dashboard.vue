<template>
  <!-- <v-layout class="fill-height"> -->
    <!-- chart -->
    <D3BarChart
      :config="chart_config"
      :datum="chart_data"
      :title="chart_title"
      :height="250"
    ></D3BarChart>
  <!-- </v-layout> -->
</template>

<script>
import { D3BarChart } from 'vue-d3-charts';

export default {
  name: 'db-chart',
  components: {
    D3BarChart,
  },
  data() {
    return {
      chart_title: 'Your title goes here',
      chart_data: [
        //...
        {hours: 1648, production: 9613, year: '2007'},
        {hours: 2479, production: 6315, year: '2008'},
        {hours: 2479, production: 6315, year: '2009'},
        {hours: 3200, production: 2541, year: '2010'}
      ],
      chart_config: {
        key: 'year',
        currentKey: '2004',
        values: ['hours', 'production'],
        axis: {
          xTicks: 3,
        },
        color: {
          keys: {
            hours: '#333',
            production: '#d3d3d3',
          },
          default: '#222f3e',
          current: '#41B882'
        }
      }
    }
  }
}
</script>
