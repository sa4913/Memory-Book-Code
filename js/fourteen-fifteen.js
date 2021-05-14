let lemon = "#F5D367";
let aqua = "#5BD6FF";
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
    .style("background-color", lavender)
;

viz.append("rect")
.attr("x", 0)
.attr("y", 0)
.attr("height", 1200)
.attr("width", 1600)
.attr("opacity", .75)
.attr("fill", "white")
;

viz.append("text")
.text("Our Lovely Jinyang")
.attr("font-family", "Impact")
.attr("font-size", 175)
.attr("fill", aqua)
.attr("x", 45)
.attr("y", 200)
;

viz.append("rect")
  .attr("x", 100)
  .attr("y", 300)
  .attr("height", 300)
  .attr("width", 300)
  .attr("opacity", 1)
  .attr("fill", "purple")
;

viz.append("rect")
  .attr("x", 110)
  .attr("y", 310)
  .attr("height", 280)
  .attr("width", 280)
  .attr("opacity", 1)
  .attr("fill", "white")
;

viz.append("rect")
  .attr("x", 450)
  .attr("y", 700)
  .attr("height", 300)
  .attr("width", 300)
  .attr("opacity", 1)
  .attr("fill", "purple")
;

viz.append("rect")
  .attr("x", 460)
  .attr("y", 710)
  .attr("height", 280)
  .attr("width", 280)
  .attr("opacity", 1)
  .attr("fill", "white")
;

viz.append("rect")
  .attr("x", 900)
  .attr("y", 250)
  .attr("height", 300)
  .attr("width", 300)
  .attr("opacity", 1)
  .attr("fill", "purple")
;

viz.append("rect")
  .attr("x", 910)
  .attr("y", 260)
  .attr("height", 280)
  .attr("width", 280)
  .attr("opacity", 1)
  .attr("fill", "white")
;

viz.append("rect")
  .attr("x", 1250)
  .attr("y", 500)
  .attr("height", 300)
  .attr("width", 300)
  .attr("opacity", 1)
  .attr("fill", "purple")
;

viz.append("rect")
  .attr("x", 1260)
  .attr("y", 510)
  .attr("height", 280)
  .attr("width", 280)
  .attr("opacity", 1)
  .attr("fill", "white")
;

viz.append("rect")
  .attr("x", 900)
  .attr("y", 750)
  .attr("height", 300)
  .attr("width", 300)
  .attr("opacity", 1)
  .attr("fill", "purple")
;

viz.append("rect")
  .attr("x", 910)
  .attr("y", 760)
  .attr("height", 280)
  .attr("width", 280)
  .attr("opacity", 1)
  .attr("fill", "white")
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
.text("6 | Jinyang Memory Book")
.attr("font-size", 30)
.attr("fill", aqua)
.attr("x", 50)
.attr("y", 1150)
.attr("font-family", "Impact")
;
//right
viz.append("text")
.text("Jinyang Memory Book | 7")
.attr("font-size", 30)
.attr("fill", aqua)
.attr("x", 1225)
.attr("y", 1150)
.attr("font-family", "Impact")
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
