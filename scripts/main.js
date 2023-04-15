var main = document.querySelector("main");
var scrolly = main.querySelector("#scrolly");
var figure = scrolly.querySelector("figure");
var article = scrolly.querySelector("article");
var step = article.querySelectorAll(".step");

// initialize the scrollama
var scroller = scrollama();

// generic window resize listener event
function handleResize() {
  // 1. update height of step elements
  var stepH = Math.floor(window.innerHeight * 0.75);
  step.forEach(function (s) {
    s.style.height = stepH + "px";
  });

  var figureHeight = window.innerHeight / 2;
  var figureMarginTop = (window.innerHeight - figureHeight) / 2;

  figure.style.height = figureHeight + "px";
  figure.style.top = figureMarginTop + "px";

  // 3. tell scrollama to update new element dimensions
  scroller.resize();
}

// scrollama event handlers
function handleStepEnter(response) {
  console.log(response);
  // response = { element, direction, index }

  // add color to current step only
  step.forEach(function (s, i) {
    s.classList.toggle("is-active", i === response.index);
  });

  // update graphic based on step
  /* figure.querySelector("div").textContent = response.index + 1;
  //add id into html tag --> pass to query selector
  console.log(figure.querySelector("div").textContent); */

  const charts = figure.querySelectorAll('.flourish-embed');
  console.log(charts);
  function hideCharts() {
    for (let i = 0; i < charts.length; i++) {
      charts[i].style.display = "none";
    }
  }

  hideCharts();
  // charts[response.index].style.display = "block";
  if (response.index === 0)
    charts[0].style.display = "block";
  else if (response.index === 1)
    charts[1].style.display = "block";
  else if (response.index === 2)
    charts[2].style.display = "block";
  else if (response.index === 3)
    charts[3].style.display = "block";
  else if (response.index === 4)
    charts[4].style.display = "block";
  else if (response.index === 5)
    charts[5].style.display = "block";
  else if (response.index === 6)
    charts[6].style.display = "block";
  else if (response.index === 7)
    charts[7].style.display = "block";
  else if (response.index === 8)
    charts[8].style.display = "block";
  else if (response.index === 9)
    charts[9].style.display = "block";
  else if (response.index === 10)
    charts[10].style.display = "block";
  else if (response.index === 11)
    charts[11].style.display = "block";
  else if (response.index === 12)
    charts[12].style.display = "block";
  else if (response.index === 13)
    charts[13].style.display = "block";
  else if (response.index === 14)
    charts[14].style.display = "block";
  else if (response.index === 15)
    charts[15].style.display = "block";
  else if (response.index === 16)
    charts[16].style.display = "block";
  else if (response.index === 17)
    charts[17].style.display = "block";


}

function init() {
  // 1. force a resize on load to ensure proper dimensions are sent to scrollama
  handleResize();

  // 2. setup the scroller passing options
  //    this will also initialize trigger observations
  // 3. bind scrollama event handlers (this can be chained like below)
  scroller
    .setup({
      step: "#scrolly article .step",
      offset: 0.33,
      debug: false,
    })
    .onStepEnter(handleStepEnter);

  // 4. add window resize listener
  window.addEventListener("resize", handleResize);
}

// kick things off
init();
