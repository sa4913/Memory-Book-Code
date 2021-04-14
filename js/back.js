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

viz.append("text")
.text("Congratulations")
.attr("font-family", "Candara")
.attr("font-size", 100)
.attr("fill", lavender)
.attr("x", 45)
.attr("y", 100)
;

viz.append("text")
.text("to the")
.attr("font-family", "Candara")
.attr("font-size", 90)
.attr("fill", lavender)
.attr("x", 255)
.attr("y", 175)
;

viz.append("text")
.text("Seniors Graduating!")
.attr("font-family", "Candara")
.attr("font-size", 90)
.attr("fill", lavender)
.attr("x", 15)
.attr("y", 250)
;

viz.append("text")
.text("Isaac Schlager")
.attr("font-family", "Candara")
.attr("font-size", 50)
.attr("fill", lavender)
.attr("x", 250)
.attr("y", 500)
;

viz.append("text")
.text("Nia Thomas")
.attr("font-family", "Candara")
.attr("font-size", 50)
.attr("fill", lavender)
.attr("x", 250)
.attr("y", 550)
;

viz.append("text")
.text("Sinead Alexander")
.attr("font-family", "Candara")
.attr("font-size", 50)
.attr("fill", lavender)
.attr("x", 250)
.attr("y", 600)
;
