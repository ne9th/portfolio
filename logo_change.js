
// ------------logo change on hover----------
var logo = d3.selectAll(".logo-img");

logo.on("mouseover", function() {
  d3.select(this)
    .attr("src", "images/line-logo.png");
})

logo.on("mouseout", function() {
  d3.select(this)
    .attr("src", "images/blue-logo.png");
})

// ----------about:hover------------

var h1 = d3.select("#highlight1");
h1.on("mouseover", function() {
  d3.select(this)
    .style("opacity", "1");
})

var h2 = d3.select("#highlight2");
h2.on("mouseover", function() {
  d3.select(this)
    .style("opacity", "1");
})
