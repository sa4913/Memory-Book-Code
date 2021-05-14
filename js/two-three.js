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
let fontsName = "Tahoma";
let fontsPage = "Impact";

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
.text("An Eventful Semester!")
.attr("font-family", "Impact")
.attr("font-size", 165)
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

viz.append("image")
  .attr("link:href", "StudentPhotos/Frosty.jpg")
  .attr("x", 110)
  .attr("y", 310)
  .attr("width", 280)
  .attr("height", 280)
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

viz.append("image")
  .attr("link:href", "StudentPhotos/Latte.jpg")
  .attr("x", 460)
  .attr("y", 710)
  .attr("width", 280)
  .attr("height", 280)
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

viz.append("image")
  .attr("link:href", "StudentPhotos/Mahjong.jpg")
  .attr("x", 910)
  .attr("y", 260)
  .attr("width", 280)
  .attr("height", 280)
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

viz.append("image")
  .attr("link:href", "StudentPhotos/TieDye.jpg")
  .attr("x", 1260)
  .attr("y", 510)
  .attr("width", 280)
  .attr("height", 280)
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

viz.append("image")
  .attr("link:href", "StudentPhotos/Yicen.JPG")
  .attr("x", 910)
  .attr("y", 760)
  .attr("width", 280)
  .attr("height", 280)
;


//
//
// // purple outllines
// viz.append("rect")
//   .attr("x", column1-5)
//   .attr("y", 100-5)
//   .attr("height", 160)
//   .attr("width", 160)
//   .attr("opacity", 1)
//   .attr("fill", "purple")
// ;
// viz.append("rect")
// .attr("x", column2-5)
// .attr("y", 100-5)
// .attr("height", 160)
// .attr("width", 160)
// .attr("fill", "purple")
// ;
// viz.append("rect")
// .attr("x", column3-5)
// .attr("y", 100-5)
// .attr("height", 160)
// .attr("width", 160)
// .attr("fill", "purple")
// ;
// viz.append("rect")
// .attr("x", column4-5)
// .attr("y", 100-5)
// .attr("height", 160)
// .attr("width", 160)
// .attr("fill", "purple")
// ;
// //left page, row 2
// viz.append("rect")
// .attr("x", column1-5)
// .attr("y", 450-5)
// .attr("height", 160)
// .attr("width", 160)
// .attr("fill", "purple")
// ;
// viz.append("rect")
// .attr("x", column2-5)
// .attr("y", 450-5)
// .attr("height", 160)
// .attr("width", 160)
// .attr("fill", "purple")
// ;
// viz.append("rect")
// .attr("x", column3-5)
// .attr("y", 450-5)
// .attr("height", 160)
// .attr("width", 160)
// .attr("fill", "purple")
// ;
// viz.append("rect")
// .attr("x", column4-5)
// .attr("y", 450-5)
// .attr("height", 160)
// .attr("width", 160)
// .attr("fill", "purple")
// ;
// //left page row 3
// viz.append("rect")
// .attr("x", column1-5)
// .attr("y", 800-5)
// .attr("height", 160)
// .attr("width", 160)
// .attr("fill", "purple")
// ;
// viz.append("rect")
// .attr("x", column2-5)
// .attr("y", 800-5)
// .attr("height", 160)
// .attr("width", 160)
// .attr("fill", "purple")
// ;
// viz.append("rect")
// .attr("x", column3-5)
// .attr("y", 800-5)
// .attr("height", 160)
// .attr("width", 160)
// .attr("fill", "purple")
// ;
// viz.append("rect")
// .attr("x", column4-5)
// .attr("y", 800-5)
// .attr("height", 160)
// .attr("width", 160)
// .attr("fill", "purple")
// ;
//
// //right page, row 1
// viz.append("rect")
// .attr("x", column1+right-5)
// .attr("y", 100-5)
// .attr("height", 160)
// .attr("width", 160)
// .attr("fill", "purple")
// ;
// viz.append("rect")
// .attr("x", column2+right-5)
// .attr("y", 100-5)
// .attr("height", 160)
// .attr("width", 160)
// .attr("fill", "purple")
// ;
// viz.append("rect")
// .attr("x", column3+right-5)
// .attr("y", 100-5)
// .attr("height", 160)
// .attr("width", 160)
// .attr("fill", "purple")
// ;
// viz.append("rect")
// .attr("x", column4+right-5)
// .attr("y", 100-5)
// .attr("height", 160)
// .attr("width", 160)
// .attr("fill", "purple")
// ;
// //right page, row 2
// viz.append("rect")
// .attr("x", column1+right-5)
// .attr("y", 450-5)
// .attr("height", 160)
// .attr("width", 160)
// .attr("fill", "purple")
// ;
// viz.append("rect")
// .attr("x", column2+right-5)
// .attr("y", 450-5)
// .attr("height", 160)
// .attr("width", 160)
// .attr("fill", "purple")
// ;
// viz.append("rect")
// .attr("x", column3+right-5)
// .attr("y", 450-5)
// .attr("height", 160)
// .attr("width", 160)
// .attr("fill", "purple")
// ;
// viz.append("rect")
//   .attr("x", column4+right-5)
//   .attr("y", 450-5)
//   .attr("height", 160)
//   .attr("width", 160)
//   .attr("fill", "purple")
// ;
// //right page row 3
// viz.append("rect")
// .attr("x", column1+right-5)
// .attr("y", 800-5)
// .attr("height", 160)
// .attr("width", 160)
// .attr("fill", "purple")
// ;
// viz.append("rect")
// .attr("x", column2+right-5)
// .attr("y", 800-5)
// .attr("height", 160)
// .attr("width", 160)
// .attr("fill", "purple")
// ;
// viz.append("rect")
//   .attr("x", column3+right-5)
//   .attr("y", 800-5)
//   .attr("height", 160)
//   .attr("width", 160)
//   .attr("fill", "purple")
// ;
// viz.append("rect")
//   .attr("x", column4+right-5)
//   .attr("y", 800-5)
//   .attr("height", 160)
//   .attr("width", 160)
//   .attr("fill", "purple")
// ;
//
//
// //left page, row 1
// viz.append("rect")
//   .attr("x", column1)
//   .attr("y", 100)
//   .attr("height", 150)
//   .attr("width", 150)
//   .attr("fill", "white")
// ;
// // viz.append("text")
// // .text("First Last")
// // .attr("font-size", 40)
// // .attr("fill", aqua)
// // .attr("x", column4)
// // .attr("y", 300)
// // ;
//
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
// viz.append("image")
//   .attr("link:href", "StudentPhotos/2-3/PhyllisYang205.jpg")
//   .attr("x", column3)
//   .attr("y", 100)
//   .attr("width", 150)
//   .attr("height", 150)
// ;
//
// viz.append("text")
// .text("Phyllis Yang")
// .attr("font-size", 40)
// .attr("fill", aqua)
// .attr("x", column3)
// .attr("y", 300)
// .attr("font-family", fontsName)
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
//
//page numbers
//left
viz.append("text")
.text("2 | Jinyang Memory Book")
.attr("font-size", 30)
.attr("fill", aqua)
.attr("x", 50)
.attr("y", 1150)
.attr("font-family", fontsPage)
;
//right
viz.append("text")
.text("Jinyang Memory Book | 3")
.attr("font-size", 30)
.attr("fill", aqua)
.attr("x", 1225)
.attr("y", 1150)
.attr("font-family", fontsPage)
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
