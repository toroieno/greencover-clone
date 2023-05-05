<template>
  <D3BarChart :config="chart_config" :datum="chartData"></D3BarChart>
</template>
<script>
import { D3BarChart } from 'vue-d3-charts';

export default {
  components: {
    D3BarChart,
  },
  prop: {
    chartData:{
      type: Array
    }
  },
  name: 'DashboardName',
  data() {
    return {
      
      // chart_data: [
      //   //...
      //   {lorem: 1648, ipsum: 9613, dolor: 1390, sit: 9130, year: '2007'},
      //   {lorem: 2479, ipsum: 6315, dolor: 1560, sit: 6150, year: '2008'},
      //   {lorem: 3200, ipsum: 12541, dolor: 5421, sit: 2541, year: '2009'},
      // ],
      // chart_config: {
      //   key: 'year',
      //   values: ['lorem', 'ipsum', 'dolor', 'sit'],
      //   axis: {
      //     yTicks: 4
      //   },
      //   color: {
      //     keys: {
      //       lorem: '#F98B3B',
      //       ipsum: '#F26643',
      //       dolor: '#FF463D',
      //       sit: '#C92C39',
      //     },
      //   },
      // },
    };
  },
}
</script>
<style>
  
</style>