<template>
  <!-- Create a div where the graph will take place -->
  <div id="my_dataviz"></div>
</template>

<script>
import * as d3 from 'd3'

export default {
  name: 'db-chart',
  components: {
  },
  props: {
    dataDB: Object,
  },
  data() {
    return {
    }
  },
  mounted() {
    // set the dimensions and margins of the graph
    const margin = {top: 10, right: 30, bottom: 20, left: 50},
        width = 500 - margin.left - margin.right,
        height = 340 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    const svg = d3.select("#my_dataviz")
      .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform",`translate(${margin.left},${margin.top})`);

    // Parse the Data
    d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_stacked.csv").then( function(data) {
      console.log('dataMap', data);
      // List of subgroups = header of the csv files = soil condition here
      const subgroups = data.columns.slice(1)

      // List of groups = species here = value of the first column called group -> I show them on the X axis
      const groups = data.map(d => d.group)

      // Add X axis
      const x = d3.scaleBand()
          .domain(groups)
          .range([0, width])
          .padding([0.2])
      svg.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(d3.axisBottom(x).tickSizeOuter(0));

      // Add Y axis
      const y = d3.scaleLinear()
        .domain([0, 60])
        .range([ height, 0 ]);
      svg.append("g")
        .call(d3.axisLeft(y));

      // color palette = one color per subgroup
      const color = d3.scaleOrdinal()
        .domain(subgroups)
        .range(['#C7EFCF','#FE5F55','#EEF5DB'])

      //stack the data? --> stack per subgroup
      const stackedData = d3.stack()
        .keys(subgroups)(data)
      // ----------------
      // Create a tooltip
      // ----------------
      const tooltip = d3.select("#my_dataviz")
        .append("div")
        .style("opacity", 0)
        .attr("class", "tooltip")
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "1px")
        .style("border-radius", "5px")
        .style("padding", "10px")

      // Three function that change the tooltip when user hover / move / leave a cell
      const mouseover = function(d) {
        const subgroupName = d3.select(this.parentNode).datum().key;
        const subgroupValue = d.data[subgroupName];
        tooltip
            .html("subgroup: " + subgroupName + "<br>" + "Value: " + subgroupValue)
            .style("opacity", 1)

      }
      const mousemove = function(event) {
        tooltip.style("transform","translateY(-55%)")
              .style("left",(event.x)/2+"px")
              .style("top",(event.y)/2-30+"px")
      }
      const mouseleave = function() {
        tooltip
          .style("opacity", 0)
      }

      // Show the bars
      svg.append("g")
        .selectAll("g")
        // Enter in the stack data = loop key per key = group per group
        .data(stackedData)
        .join("g")
          .attr("fill", d => color(d.key))
          .selectAll("rect")
          // enter a second time = loop subgroup per subgroup to add all rectangles
          .data(d => d)
          .join("rect")
            .attr("x", d =>  x(d.data.group))
            .attr("y", d => y(d[1]))
            .attr("height", d => y(d[0]) - y(d[1]))
            .attr("width",x.bandwidth())
            .attr("stroke", "grey")
          .on("mouseover", mouseover)
          .on("mousemove", mousemove)
          .on("mouseleave", mouseleave)

    })
  }
}
</script>
