//colors to be used

let lemon = "#F5D367";
let aqua = "#5BD6FF";
let flamingo = "#EF7C9B";
let mint = "#A2D39B";
let lavender = "#D593FF";


let viz = d3.select("#container")
  .append("svg")
    .attr("width", 800)
    .attr("height", 1200)
    .style("background-color", lemon)
;

viz.append("rect")
  .attr("x", 50)
  .attr("y", 50)
  .attr("opacity", .75)
  .attr("height", 1100)
  .attr("width", 700)
  .attr("fill", "white")
;

viz.append("image")
  .attr("link:href", "JY-Logo.png")
  .attr("x", 250)
  .attr("y", 750)
  .attr("width", 300)
  .attr("height", 300)
;

viz.append("text")
.text("Jinyang")
.attr("font-family", "Candara")
.attr("font-size", 150)
.attr("fill", lavender)
.attr("x", 180)
.attr("y", 250)
;

viz.append("text")
.text("Memory")
.attr("font-family", "Candara")
.attr("font-size", 150)
.attr("fill", lavender)
.attr("x", 150)
.attr("y", 375)
;
viz.append("text")
.text("Book")
.attr("font-family", "Candara")
.attr("font-size", 150)
.attr("fill", lavender)
.attr("x", 250)
.attr("y", 500)
;
// viz.append("text")
// .text("Book")
// .attr("font-size", 150)
// .attr("fill", lavender)
// .attr("x", 200)
// .attr("y", 900)
// ;
viz.append("text")
.text("Spring 2021")
.attr("font-family", "Candara")
.attr("font-size", 60)
.attr("fill", lavender)
.attr("x", 260)
.attr("y", 600)
;

//
//
