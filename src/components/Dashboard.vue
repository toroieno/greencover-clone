<template>
  <div>
    <div id="my_dataviz" v-if="getData"></div>
  </div>
</template>
<script>
import * as d3 from "d3"
export default {
  name:'DashboardDB',
  props: ['dataJP'],
  data() {
    return {
      getData: {}
    }
  },
  computed: {
    dataCol() {
      let tempData = []
      let plant_health = this.getData.plant_health.reduce((obj, val) => {
        obj[val.label] = val.value
        return obj
      }, {})
      let compare_plant_health = this.getData.compare_plant_health.reduce((obj, val) => {
        obj[val.label] = val.value
        return obj
      }, {})
      compare_plant_health['group'] = '2023-01'
      plant_health['group'] = '2023-02'
      tempData.push(plant_health)
      tempData.push(compare_plant_health)
      return tempData
    }
  },
  watch: {
    dataJP: {
      immediate:true,
      handler(newData) {
        this.getData = newData
        console.log('new',this.getData)
      }
    }
  },
  mounted() {
    const data = this.dataCol
    console.log('data',this.dataCol)
    console.log(this.color)
    
   //set the dimensions and margins of the graph
   const margin = {top: 10, right: 30, bottom: 20, left: 50};
   var width = 460;
   var height = 400;
   var innerWidth = width - margin.left - margin.right;
   var innerHeight = height - margin.top - margin.bottom;

    const groups = data.map(d => d.group)
    
    const getLb = data.map(item => {
      const keys = Object.keys(item)
      keys.splice(-1,1)
      return keys
    })
    console.log('lbs',getLb)

    //Mau
    var color = d3.scaleOrdinal()
      .domain(getLb)
      .range(["#FF9800","#FFEB3B","#8BC34A","#4CAF50"])
    
    //Truc x,y
    var x = d3.scaleBand()
    .domain(groups)
    .range([0, innerWidth])
    .padding([0.2])

    var y = d3.scaleLinear()
    .domain([0, 50])
    .range([ innerHeight, 0 ]);

    //Bien lưu trữ
    var xAxis = d3.axisBottom(x)
    .tickSizeOuter(0)
    
    var yAxis = d3.axisLeft(y)

    //tao bieu do

    var svg = d3.select("#my_dataviz")
    .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    
      var g = svg.append("g")
        .attr("transform","translate(" + margin.left + "," + margin.top + ")");

    g.append("g")
      .attr("class","axis axis--x")
      .attr("transform", "translate(0," + innerHeight + ")")
      .call(xAxis)
      
    g.append("g")
      .attr("class", "axis axis--y")
      .call(yAxis)
      .append("text")
      .attr("transform","rotate(-90)")
      .attr("y",6)
      .attr("dy","0.71em")
      .attr("text-anchor","end")
      .text("Percentage")

    var stack = d3.stack()
      .keys(["Stressed","Slightly Stressed","Healthy","Very Healthy"])
      .order(d3.stackOrderNone)
      .offset(d3.stackOffsetNone)

    var layers = stack(data);

      // ----------------
      // Create a tooltip
      // ----------------
      const tooltip = d3.select("#my_dataviz")
        .append("div")
        .style("opacity", 0)
        .style("position", "absolute")
        .attr("class", "tooltip")
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "1px")
        .style("border-radius", "5px")
        .style("padding", "10px")
      // Three function that change the tooltip when user hover / move / leave a cell
      const mouseover = function(event, d) {
        const subgroupName = d3.select(this.parentNode).datum().key;
        const subgroupValue = d.data[subgroupName];
        tooltip
            .html("subgroup: " + subgroupName + "<br>" + "Value: " + subgroupValue)
            .style("opacity", 1)
      }
      const mousemove = function(event) {
        tooltip.style("transform","translateY(-55%)")
              .style("left",(event.x)/3+"px")
              .style("top",(event.y)/2-30+"px")
      }
      const mouseleave = function() {
        tooltip
          .style("opacity", 0)
      }

    g.selectAll(".layer")
      .data(layers)
      .enter().append("g")
      .attr("class","layer")
      .style("fill", d => color(d.key))
      .selectAll("rect")
      .data(d => d)
      .join("rect")
        .attr("x", d =>  x(d.data.group))
        .attr("y", d => y(d[1]))
        .attr("height", function(d) {return y(d[0]) - y(d[1]) } )
        .attr("width",x.bandwidth())
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave)



    // // set the dimensions and margins of the graph
    // var margin = {top: 10, right: 30, bottom: 20, left: 50},
    // width = 460 - margin.left - margin.right,
    // height = 400 - margin.top - margin.bottom;
    // // append the svg object to the body of the page
    // const svg = d3.select("#my_dataviz")
    //   .append("svg")
    //     .attr("width", width + margin.left + margin.right)
    //     .attr("height", height + margin.top + margin.bottom)
    //   .append("g")
    //     .attr("transform",`translate(${margin.left},${margin.top})`);

    

    

    // // Add X axis
    // const x = d3.scaleBand()
    //       .domain(groups)
    //       .range([0, width])
    //       .padding([0.2])
    //   svg.append("g")
    //     .attr("transform", `translate(0, ${height})`)
    //     .call(d3.axisBottom(x).tickSizeOuter(0));
    //   // Add Y axis
    //   const y = d3.scaleLinear()
    //     .domain([0, 60])
    //     .range([ height, 0 ]);
    //   svg.append("g")
    //     .call(d3.axisLeft(y));

    //   var stackedData = d3.stack()
    //   .keys(["Stressed","Slightly Stressed","Healthy","Very Healthy"])
    //   .order(d3.stackOrderNone)
    //   .offset(d3.stackOffsetNone)

    //   // ----------------
    //   // Create a tooltip
    //   // ----------------
    //   const tooltip = d3.select("#my_dataviz")
    //     .append("div")
    //     .style("opacity", 0)
    //     .style("position", "absolute")
    //     .attr("class", "tooltip")
    //     .style("background-color", "white")
    //     .style("border", "solid")
    //     .style("border-width", "1px")
    //     .style("border-radius", "5px")
    //     .style("padding", "10px")
    //   // Three function that change the tooltip when user hover / move / leave a cell
    //   const mouseover = function(event, d) {
    //     const subgroupName = d3.select(this.parentNode).datum().key;
    //     const subgroupValue = d.data[subgroupName];
    //     tooltip
    //         .html("subgroup: " + subgroupName + "<br>" + "Value: " + subgroupValue)
    //         .style("opacity", 1)
    //   }
    //   const mousemove = function(event) {
    //     tooltip.style("transform","translateY(-55%)")
    //           .style("left",(event.x)/2+"px")
    //           .style("top",(event.y)/2-30+"px")
    //   }
    //   const mouseleave = function() {
    //     tooltip
    //       .style("opacity", 0)
    //   }
    //   // Show the bars
    //   svg.append("g")
    //     .selectAll("g")
    //     .data(stackedData)
    //     .join("g")
    //       .attr("fill", d => color(d.key))
    //       .selectAll("rect")
    //       // enter a second time = loop subgroup per subgroup to add all rectangles
    //       .data(d => d)
    //       .join("rect")
    //         .attr("x", d =>  x(d.data.group))
    //         .attr("y", d => y(d[1]))
    //         .attr("height", d => y(d[0]) - y(d[1]))
    //         .attr("width",x.bandwidth())
    //         .attr("stroke", "grey")
          // .on("mouseover", mouseover)
          // .on("mousemove", mousemove)
          // .on("mouseleave", mouseleave)
    

  },
}
</script>