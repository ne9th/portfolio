/*** warping SVG ***/
const svg = document.getElementById('subtitle');
const warp = new Warp(svg);

warp.interpolate(4);
warp.transform(([ x, y ]) => [ x, y, y ]);

let offset = 0;
function animate() {
    warp.transform(([ x, y, oy ]) => [ x, oy + 4 * Math.sin(x / 64 + offset), oy ]);
    offset += 0.1;
    requestAnimationFrame(animate);
  }
animate();

// // ------------logo change on hover----------
// var logo = d3.selectAll(".logo-img");
//
// logo.on("mouseover", function() {
//   d3.select(this)
//     .attr("src", "images/blue-logo.png");
// })
//
// logo.on("mouseout", function() {
//   d3.select(this)
//     .attr("src", "images/line-logo.png");
// })


// ------------color change on hover----------

var uxui = d3.selectAll("#i, #uxui");
var web_dev = d3.selectAll("#e, #web-dev, #w");
var design = d3.selectAll("#g, #design, #n");

// ----------uxui:hover------------
uxui.on("mouseover", function() {
  d3.selectAll("#i, #uxui")
    .style("-webkit-text-stroke-color", "blue")
    .style("-webkit-text-fill-color", "blue");
})

uxui.on("mouseout", function() {
  d3.select("#uxui")
    .style("-webkit-text-stroke-color", "black")
    .style("-webkit-text-fill-color", "transparent");

  d3.select("#i")
    .style("-webkit-text-stroke-color", "black")
    .style("-webkit-text-fill-color", "black");
})

// ----------web-dev:hover------------
web_dev.on("mouseover", function() {
  d3.selectAll("#e, #web-dev, #w")
    .style("-webkit-text-stroke-color", "blue")
    .style("-webkit-text-fill-color", "blue");
})

web_dev.on("mouseout", function() {
  d3.selectAll("#web-dev, #w")
    .style("-webkit-text-stroke-color", "black")
    .style("-webkit-text-fill-color", "transparent")

  d3.selectAll("#e")
    .style("-webkit-text-stroke-color", "black")
    .style("-webkit-text-fill-color", "black");

})

// ----------design:hover------------
design.on("mouseover", function() {
  d3.selectAll("#g, #design, #n")
    .style("-webkit-text-stroke-color", "blue")
    .style("-webkit-text-fill-color", "blue");
})

design.on("mouseout", function() {
  d3.selectAll("#design, #n")
    .style("-webkit-text-stroke-color", "black")
    .style("-webkit-text-fill-color", "transparent")

  d3.select("#g")
    .style("-webkit-text-stroke-color", "black")
    .style("-webkit-text-fill-color", "black");
})
