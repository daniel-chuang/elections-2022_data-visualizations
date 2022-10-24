// JS for your graphic
import pym from "pym.js";
import * as d3 from "d3";
import downloadImage from "./download-image";
import ann_arbor from "../data/ann_arbor.json"; // importing the json file

let width; // Width of the figure, for the svg's reference
const height = 500;

const draw = () => {
  // SETTING UP DIFFERENT ELEMENTS
  const figure = d3.select("figure");
  width = figure.node().clientWidth; // D3 way of getting the width of the figure

  const tooltip = figure.append("div").attr("class", "tooltip");

  const svg = figure
    .append("svg") // Changing the size of our new svg visual
    .attr("height", height)
    .attr("width", width);

  // MAKING THE MAP
  const projection = d3.geoMercator().fitSize([width, height], ann_arbor);

  const path = d3.geoPath().projection(projection);

  // Making the thang
  // const paths = svg
  svg
    .selectAll("path")
    .data(ann_arbor.features)
    .enter()
    .append("path")
    .attr("d", (d) => path(d)) // this is what actually renders the vector for each feature
    .attr("stroke", "#FFFFFF")
    .attr("stroke-width", 1)
    .attr("position", "relative")
    .attr("fill", (d) => {
      console.log(d);
      return "#00274C";
    })
    .on("mouseover", function (event) {
      const [x, y] = d3.pointer(event); // Returns an array of the x and y coords
      this.parentNode.appendChild(this); // redraws that specific component
      d3.select(this).attr("stroke", "#FFCB05");
      tooltip
        .style("display", "unset")
        .style("top", `${y}px`)
        .html(
          `<h5>Ward ${d3.select(this).datum().properties.WARD_NUM}, ` +
            `Precinct ${d3.select(this).datum().properties.PRCNCT_NUM}</h5>`
        );
      if (x < width / 2) {
        tooltip.style("left", `${x}px`);
      } else {
        tooltip.style("right", `${x - 220}px`);
      }
    })
    .on("mousemove", (event) => {
      const [x, y] = d3.pointer(event); // Returns an array of the x and y coords
      tooltip.style("top", `${y}px`);
      if (x < width / 2) {
        tooltip.style("left", `${x}px`);
      } else {
        tooltip.style("left", `${x - 220}px`);
      }
    })
    .on("mouseout", function () {
      d3.select(this).attr("stroke", "#FFFFFF");
      tooltip.style("display", "none");
    });

  // step 1: access data
  // step 2: create chart dimensions
  // step 3: draw canvas
  // step 4: create scales
  // step 5: draw data
  // step 6: draw peripherals
  // step 7: set up interactions
};

window.onresize = () => {};

window.onload = () => {
  const pymChild = new pym.Child({ polling: 500 });
  pymChild.sendHeight();
  pymChild.onMessage("download", downloadImage);
  draw();
};
