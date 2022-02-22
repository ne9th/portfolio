
// ------------logo change on hover----------
var logo = d3.selectAll(".logo-img");

logo.on("mouseover", function() {
  d3.select(this)
    .attr("src", "../images/line-logo.png");
})

logo.on("mouseout", function() {
  d3.select(this)
    .attr("src", "../images/blue-logo.png");
})
