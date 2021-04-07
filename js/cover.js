//colors to be used

let lemon = "F5D367";
let aqua = "84D7DF";
let flamingo = "EF7C9B";
let mint = "A2D39B";
let lavender = "D593FF";


let viz = d3.select("#container")
  .append("svg")
    .attr("width", 800)
    .attr("height", 1200)
    .style("background-color", lemon)

;

viz.append("rect")
  .attr("x", 100)
  .attr("y", 100)
  .attr("height", 1000)
  .attr("width", 600)
  .attr("fill", "white")
;

viz.append("image")
  .attr("xlink:href", "JY-Logo.png")
  .attr("x", 250)
  .attr("y", 450)
  .attr("width", 300)
  .attr("height", 300)
;
