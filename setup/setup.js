// Please do not make changes to this file

let docw = 800;
let doch = 1200;
let page;


function init(){
  var path = window.location.pathname;
  page = path.split("/").pop().split(".")[0];
  let container = document.getElementById("container");

  if(page == "cover"){
    container.className = "page cover-container"
  }//else if(page == "middlespread"){
  //   container.className = "page middle-spread-container"
   //}
   else if(page == "two-three"){
    container.className = "page middlespread-container"
  }else if(page == "four-five"){
    container.className = "page middlespread-container"
  }else if(page == "six-seven"){
    container.className = "page middlespread-container"
  }else if(page == "eight-nine"){
    container.className = "page middlespread-container"
  }else if(page == "ten-eleven"){
    container.className = "page middlespread-container"
  }else if(page == "twelve-thirteen"){
    container.className = "page middlespread-container"
  }else if(page == "fourteen-fifteen"){
    container.className = "page middlespread-container"
  }else if(page == "back"){
    container.className = "page back-container"
  }

  function checkPage(tocheck){
    return page==tocheck?"open-page":"";
  }

  var str = `
  <div id="nav-wrapper">

     <nav id="page-nav"><a class="button `+ checkPage('cover') +`" href="cover.html">Cover</a><a class="button `+ checkPage('two-three') +`" href="two-three.html">Events</a><a class="button `+ checkPage('twelve-thirteen') +`" href="twelve-thirteen.html">What We're Missing</a><a class="button `+ checkPage('fourteen-fifteen') +`" href="fourteen-fifteen.html">Lovely Jinyang</a><a class="button `+ checkPage('back') +`" href="back.html">Back</a></nav>
  </div>
  `;
  //<a class="button `+ checkPage('middlespread') +`" href="middlespread.html">Garbage</a>
  // <p id="header-p-tag">Jinyang Memory Book (w800xh1200)</p>
  document.body.insertAdjacentHTML( 'afterbegin', str );

  let css = `<link rel="stylesheet" href="setup/setup.css">
  `
  document.head.insertAdjacentHTML( 'beforeend', css );

}
window.addEventListener("load", init);
