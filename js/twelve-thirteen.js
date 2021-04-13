let lemon = "#F5D367";
let aqua = "#84D7DF";
let flamingo = "#EF7C9B";
let mint = "#A2D39B";
let lavender = "#D593FF";
let column1 = 75;
let column2 = 250;
let column3 = 425;
let column4 = 600;
let right = 800;

let viz = d3.select("#container")
  .append("svg")
    .attr("width", 1600)
    .attr("height", 1200)
    .style("background-color", lemon)
;

viz.append("text")
.text("Events")
.attr("font-family", "Candara")
.attr("font-size", 200)
.attr("fill", flamingo)
.attr("x", 100)
.attr("y", 200)
;
// //left page, row 1
// viz.append("rect")
//   .attr("x", column1)
//   .attr("y", 100)
//   .attr("height", 150)
//   .attr("width", 150)
//   .attr("fill", "white")
// ;
// viz.append("rect")
//   .attr("x", column2)
//   .attr("y", 100)
//   .attr("height", 150)
//   .attr("width", 150)
//   .attr("fill", "white")
// ;
// viz.append("rect")
//   .attr("x", column3)
//   .attr("y", 100)
//   .attr("height", 150)
//   .attr("width", 150)
//   .attr("fill", "white")
// ;
// viz.append("rect")
//   .attr("x", column4)
//   .attr("y", 100)
//   .attr("height", 150)
//   .attr("width", 150)
//   .attr("fill", "white")
// ;
// //left page, row 2
// viz.append("rect")
//   .attr("x", column1)
//   .attr("y", 450)
//   .attr("height", 150)
//   .attr("width", 150)
//   .attr("fill", "white")
// ;
// viz.append("rect")
//   .attr("x", column2)
//   .attr("y", 450)
//   .attr("height", 150)
//   .attr("width", 150)
//   .attr("fill", "white")
// ;
// viz.append("rect")
//   .attr("x", column3)
//   .attr("y", 450)
//   .attr("height", 150)
//   .attr("width", 150)
//   .attr("fill", "white")
// ;
// viz.append("rect")
//   .attr("x", column4)
//   .attr("y", 450)
//   .attr("height", 150)
//   .attr("width", 150)
//   .attr("fill", "white")
// ;
// //left page row 3
// viz.append("rect")
//   .attr("x", column1)
//   .attr("y", 800)
//   .attr("height", 150)
//   .attr("width", 150)
//   .attr("fill", "white")
// ;
// viz.append("rect")
//   .attr("x", column2)
//   .attr("y", 800)
//   .attr("height", 150)
//   .attr("width", 150)
//   .attr("fill", "white")
// ;
// viz.append("rect")
//   .attr("x", column3)
//   .attr("y", 800)
//   .attr("height", 150)
//   .attr("width", 150)
//   .attr("fill", "white")
// ;
// viz.append("rect")
//   .attr("x", column4)
//   .attr("y", 800)
//   .attr("height", 150)
//   .attr("width", 150)
//   .attr("fill", "white")
// ;
//
// //right page, row 1
// viz.append("rect")
//   .attr("x", 875)
//   .attr("y", 100)
//   .attr("height", 150)
//   .attr("width", 150)
//   .attr("fill", "white")
// ;
// viz.append("rect")
//   .attr("x", column2+right)
//   .attr("y", 100)
//   .attr("height", 150)
//   .attr("width", 150)
//   .attr("fill", "white")
// ;
// viz.append("rect")
//   .attr("x", column3+right)
//   .attr("y", 100)
//   .attr("height", 150)
//   .attr("width", 150)
//   .attr("fill", "white")
// ;
// viz.append("rect")
//   .attr("x", column4+right)
//   .attr("y", 100)
//   .attr("height", 150)
//   .attr("width", 150)
//   .attr("fill", "white")
// ;
// //right page, row 2
// viz.append("rect")
//   .attr("x", column1+right)
//   .attr("y", 450)
//   .attr("height", 150)
//   .attr("width", 150)
//   .attr("fill", "white")
// ;
// viz.append("rect")
//   .attr("x", column2+right)
//   .attr("y", 450)
//   .attr("height", 150)
//   .attr("width", 150)
//   .attr("fill", "white")
// ;
// viz.append("rect")
//   .attr("x", column3+right)
//   .attr("y", 450)
//   .attr("height", 150)
//   .attr("width", 150)
//   .attr("fill", "white")
// ;
// viz.append("rect")
//   .attr("x", column4+right)
//   .attr("y", 450)
//   .attr("height", 150)
//   .attr("width", 150)
//   .attr("fill", "white")
// ;
// //right page row 3
// viz.append("rect")
//   .attr("x", column1+right)
//   .attr("y", 800)
//   .attr("height", 150)
//   .attr("width", 150)
//   .attr("fill", "white")
// ;
// viz.append("rect")
//   .attr("x", column2+right)
//   .attr("y", 800)
//   .attr("height", 150)
//   .attr("width", 150)
//   .attr("fill", "white")
// ;
// viz.append("rect")
//   .attr("x", column3+right)
//   .attr("y", 800)
//   .attr("height", 150)
//   .attr("width", 150)
//   .attr("fill", "white")
// ;
// viz.append("rect")
//   .attr("x", column4+right)
//   .attr("y", 800)
//   .attr("height", 150)
//   .attr("width", 150)
//   .attr("fill", "white")
// ;

//page numbers
//left
viz.append("text")
.text("12 | Jinyang Memory Book")
.attr("font-size", 30)
.attr("fill", flamingo)
.attr("x", 50)
.attr("y", 1150)
;
//right
viz.append("text")
.text("Jinyang Memory Book | 13")
.attr("font-size", 30)
.attr("fill", flamingo)
.attr("x", 1225)
.attr("y", 1150)
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
