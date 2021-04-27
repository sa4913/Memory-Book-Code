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

// purple outllines
viz.append("rect")
  .attr("x", column1-5)
  .attr("y", 100-5)
  .attr("height", 160)
  .attr("width", 160)
  .attr("opacity", 1)
  .attr("fill", "purple")
;
viz.append("rect")
.attr("x", column2-5)
.attr("y", 100-5)
.attr("height", 160)
.attr("width", 160)
.attr("fill", "purple")
;
viz.append("rect")
.attr("x", column3-5)
.attr("y", 100-5)
.attr("height", 160)
.attr("width", 160)
.attr("fill", "purple")
;
viz.append("rect")
.attr("x", column4-5)
.attr("y", 100-5)
.attr("height", 160)
.attr("width", 160)
.attr("fill", "purple")
;
//left page, row 2
viz.append("rect")
.attr("x", column1-5)
.attr("y", 450-5)
.attr("height", 160)
.attr("width", 160)
.attr("fill", "purple")
;
viz.append("rect")
.attr("x", column2-5)
.attr("y", 450-5)
.attr("height", 160)
.attr("width", 160)
.attr("fill", "purple")
;
viz.append("rect")
.attr("x", column3-5)
.attr("y", 450-5)
.attr("height", 160)
.attr("width", 160)
.attr("fill", "purple")
;
viz.append("rect")
.attr("x", column4-5)
.attr("y", 450-5)
.attr("height", 160)
.attr("width", 160)
.attr("fill", "purple")
;
//left page row 3
viz.append("rect")
.attr("x", column1-5)
.attr("y", 800-5)
.attr("height", 160)
.attr("width", 160)
.attr("fill", "purple")
;
viz.append("rect")
.attr("x", column2-5)
.attr("y", 800-5)
.attr("height", 160)
.attr("width", 160)
.attr("fill", "purple")
;
viz.append("rect")
.attr("x", column3-5)
.attr("y", 800-5)
.attr("height", 160)
.attr("width", 160)
.attr("fill", "purple")
;
viz.append("rect")
.attr("x", column4-5)
.attr("y", 800-5)
.attr("height", 160)
.attr("width", 160)
.attr("fill", "purple")
;

//right page, row 1
viz.append("rect")
.attr("x", column1+right-5)
.attr("y", 100-5)
.attr("height", 160)
.attr("width", 160)
.attr("fill", "purple")
;

viz.append("rect")
.attr("x", column2+right-5)
.attr("y", 100-5)
.attr("height", 160)
.attr("width", 160)
.attr("fill", "purple")
;
viz.append("rect")
.attr("x", column3+right-5)
.attr("y", 100-5)
.attr("height", 160)
.attr("width", 160)
.attr("fill", "purple")
;
viz.append("rect")
.attr("x", column4+right-5)
.attr("y", 100-5)
.attr("height", 160)
.attr("width", 160)
.attr("fill", "purple")
;
//right page, row 2
viz.append("rect")
.attr("x", column1+right-5)
.attr("y", 450-5)
.attr("height", 160)
.attr("width", 160)
.attr("fill", "purple")
;
viz.append("rect")
.attr("x", column2+right-5)
.attr("y", 450-5)
.attr("height", 160)
.attr("width", 160)
.attr("fill", "purple")
;
viz.append("rect")
.attr("x", column3+right-5)
.attr("y", 450-5)
.attr("height", 160)
.attr("width", 160)
.attr("fill", "purple")
;
viz.append("rect")
  .attr("x", column4+right-5)
  .attr("y", 450-5)
  .attr("height", 160)
  .attr("width", 160)
  .attr("fill", "purple")
;
//right page row 3
viz.append("rect")
.attr("x", column1+right-5)
.attr("y", 800-5)
.attr("height", 160)
.attr("width", 160)
.attr("fill", "purple")
;
viz.append("rect")
.attr("x", column2+right-5)
.attr("y", 800-5)
.attr("height", 160)
.attr("width", 160)
.attr("fill", "purple")
;
viz.append("rect")
  .attr("x", column3+right-5)
  .attr("y", 800-5)
  .attr("height", 160)
  .attr("width", 160)
  .attr("fill", "purple")
;
viz.append("rect")
  .attr("x", column4+right-5)
  .attr("y", 800-5)
  .attr("height", 160)
  .attr("width", 160)
  .attr("fill", "purple")
;


//left page, row 1
viz.append("rect")
  .attr("x", column1)
  .attr("y", 100)
  .attr("height", 150)
  .attr("width", 150)
  .attr("fill", "white")
;

viz.append("rect")
  .attr("x", column2)
  .attr("y", 100)
  .attr("height", 150)
  .attr("width", 150)
  .attr("fill", "white")
;
viz.append("rect")
  .attr("x", column3)
  .attr("y", 100)
  .attr("height", 150)
  .attr("width", 150)
  .attr("fill", "white")
;
viz.append("rect")
  .attr("x", column4)
  .attr("y", 100)
  .attr("height", 150)
  .attr("width", 150)
  .attr("fill", "white")
;
//left page, row 2
viz.append("rect")
  .attr("x", column1)
  .attr("y", 450)
  .attr("height", 150)
  .attr("width", 150)
  .attr("fill", "white")
;
viz.append("rect")
  .attr("x", column2)
  .attr("y", 450)
  .attr("height", 150)
  .attr("width", 150)
  .attr("fill", "white")
;
viz.append("rect")
  .attr("x", column3)
  .attr("y", 450)
  .attr("height", 150)
  .attr("width", 150)
  .attr("fill", "white")
;
viz.append("rect")
  .attr("x", column4)
  .attr("y", 450)
  .attr("height", 150)
  .attr("width", 150)
  .attr("fill", "white")
;
//left page row 3
viz.append("rect")
  .attr("x", column1)
  .attr("y", 800)
  .attr("height", 150)
  .attr("width", 150)
  .attr("fill", "white")
;
viz.append("image")
  .attr("link:href", "StudentPhotos/10-11/VeraZhang1007.jpeg")
  .attr("x", column1)
  .attr("y", 800)
  .attr("width", 150)
  .attr("height", 150)
;
viz.append("text")
.text("Vera Zhang")
.attr("font-size", 40)
.attr("fill", aqua)
.attr("x", column1)
.attr("y", 1000)
.attr("font-family", fontsName)
;

viz.append("rect")
  .attr("x", column2)
  .attr("y", 800)
  .attr("height", 150)
  .attr("width", 150)
  .attr("fill", "white")
;
viz.append("rect")
  .attr("x", column3)
  .attr("y", 800)
  .attr("height", 150)
  .attr("width", 150)
  .attr("fill", "white")
;
viz.append("rect")
  .attr("x", column4)
  .attr("y", 800)
  .attr("height", 150)
  .attr("width", 150)
  .attr("fill", "white")
;

//right page, row 1
viz.append("rect")
  .attr("x", column1+right)
  .attr("y", 100)
  .attr("height", 150)
  .attr("width", 150)
  .attr("fill", "white")
;
viz.append("image")
  .attr("link:href", "StudentPhotos/10-11/BingtingZhang1011.jpg")
  .attr("x", column1+right)
  .attr("y", 100)
  .attr("width", 150)
  .attr("height", 150)
;
viz.append("text")
.text("Bingting")
.attr("font-size", 40)
.attr("fill", aqua)
.attr("x", column1+right)
.attr("y", 300)
.attr("font-family", fontsName)
;
viz.append("text")
.text("Zhang")
.attr("font-size", 40)
.attr("fill", aqua)
.attr("x", column1+right+30)
.attr("y", 340)
.attr("font-family", fontsName)
;

viz.append("rect")
  .attr("x", column2+right)
  .attr("y", 100)
  .attr("height", 150)
  .attr("width", 150)
  .attr("fill", "white")
;
viz.append("rect")
  .attr("x", column3+right)
  .attr("y", 100)
  .attr("height", 150)
  .attr("width", 150)
  .attr("fill", "white")
;
viz.append("rect")
  .attr("x", column4+right)
  .attr("y", 100)
  .attr("height", 150)
  .attr("width", 150)
  .attr("fill", "white")
;
//right page, row 2
viz.append("rect")
  .attr("x", column1+right)
  .attr("y", 450)
  .attr("height", 150)
  .attr("width", 150)
  .attr("fill", "white")
;
viz.append("rect")
  .attr("x", column2+right)
  .attr("y", 450)
  .attr("height", 150)
  .attr("width", 150)
  .attr("fill", "white")
;
viz.append("rect")
  .attr("x", column3+right)
  .attr("y", 450)
  .attr("height", 150)
  .attr("width", 150)
  .attr("fill", "white")
;
viz.append("rect")
  .attr("x", column4+right)
  .attr("y", 450)
  .attr("height", 150)
  .attr("width", 150)
  .attr("fill", "white")
;
//right page row 3
viz.append("rect")
  .attr("x", column1+right)
  .attr("y", 800)
  .attr("height", 150)
  .attr("width", 150)
  .attr("fill", "white")
;
viz.append("rect")
  .attr("x", column2+right)
  .attr("y", 800)
  .attr("height", 150)
  .attr("width", 150)
  .attr("fill", "white")
;
viz.append("rect")
  .attr("x", column3+right)
  .attr("y", 800)
  .attr("height", 150)
  .attr("width", 150)
  .attr("fill", "white")
;
viz.append("rect")
  .attr("x", column4+right)
  .attr("y", 800)
  .attr("height", 150)
  .attr("width", 150)
  .attr("fill", "white")
;

//page numbers
//left
viz.append("text")
.text("10 | Jinyang Memory Book")
.attr("font-size", 30)
.attr("fill", aqua)
.attr("x", 50)
.attr("y", 1150)
.attr("font-family", fontsPage)
;
//right
viz.append("text")
.text("Jinyang Memory Book | 11")
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
