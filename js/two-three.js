let lemon = "F5D367";
let aqua = "84D7DF";
let flamingo = "EF7C9B";
let mint = "A2D39B";
let lavender = "D593FF";


let viz = d3.select("#container")
  .append("svg")
    .attr("width", 1600)
    .attr("height", 1200)
    .style("background-color", lavender)

;

viz.append("rect")
  .attr("x", 100)
  .attr("y", 100)
  .attr("height", 100)
  .attr("width", 100)
  .attr("fill", "white")
;
// viz.append("rectangle")
//   .attr("width", 800)
//   .attr("height", 1200)
//   .attr("x", 800)
//   .attr("y", 0)
//   .style("fill", aqua)
// ;

// let photos = d3.select("#rectangle")
//   .append("rectangle")
//     .attr("x", 200)
//     .attr("y", 200)
//     .attr("width", 100)
//     .attr("height", 100)
//     .attr("fill", "white")
// ;
