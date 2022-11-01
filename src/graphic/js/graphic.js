// https://docs.google.com/spreadsheets/d/1MAHeqkZH3nTEoYnVB9-jrLCningGXr225k8JfrkqemY/edit#gid=0

// JS for your graphic
import pym from "pym.js";
import * as d3 from "d3";
import downloadImage from "./download-image";
import ann_arbor from "../data/ann_arbor.json"; // importing the json file
import data from "../data/sample_data.json"; // importing the json file

let width; // Width of the figure, for the svg's reference
const height = 500;

// Race to test for
// const race = "AAATA Proposal";
const race = "Ann Arbor Council W4 DEM";

// Getting the specific race's data
function grabRaceData(basejson, race) {
  for (let i = 0; i < basejson.data.length; i++) {
    if (basejson.data[i].name === race) {
      return basejson.data[i];
    }
  }
  console.log("nothing returned for grabRaceData");
  return;
}

// Getting the data for the specific precinct from the report
function getPrecinctData(report, precinct) {
  // Getting the specific precinct
  for (let i = 0; i < report.data.length; i++) {
    if (precinct === report.data[i].Precinct) {
      return report.data[i];
    }
  }
  console.log("nothing returned for getPrecinctData");
  return {};
}

// Getting the plurality winner
function getPluralityWinner(report, precinct) {
  const precinctData = getPrecinctData(report, precinct);

  // Getting the max value for the specific precinct
  const avoidAttributes = [
    "Precinct",
    "Rejected write-ins",
    "Unassigned write-ins",
    "counted",
  ];
  let max = 0;
  let maxName = "";
  const reportKeys = Object.keys(precinctData);

  for (let i = 0; i < reportKeys.length; i++) {
    if (!avoidAttributes.includes(reportKeys[i])) {
      if (precinctData[reportKeys[i]] > max) {
        max = precinctData[reportKeys[i]];
        maxName = reportKeys[i];
      }
    }
  }

  return maxName;
}

// Gets a list of all the different options
function getOptions(specificData) {
  const avoidAttributes = [
    "Precinct",
    "Rejected write-ins",
    "Unassigned write-ins",
    "counted",
  ];
  const returnArray = [];
  for (let i = 0; i < specificData.options.length; i++) {
    if (!avoidAttributes.includes(specificData.options[i].label)) {
      // console.log(specificData.options[i].label);
      returnArray.push(specificData.options[i].label);
    }
  }
  return returnArray;
}

// Returns a dictionary that assigns a color to each item in an array as keys
function assignColors(options) {
  const returnDict = {};
  for (let i = 0; i < options.length; i++) {
    // Check if it is dems or reps
    if (options[i].includes("(DEM)")) {
      returnDict[options[i]] = "0000FF";
    } else if (options[i].includes("(REP)")) {
      returnDict[options[i]] = "FF0000";
    } else {
      returnDict[options[i]] = Math.floor(Math.random() * 16777215).toString(
        16
      );
    }
  }
  return returnDict;
}

const draw = async () => {
  // Gets the live data
  // const res = await fetch(
  //   "https://magnify.michigandaily.us/primary-2022-washtenaw-results/results.json",
  //    {mode: 'no-cors'});
  // const data = await res.json();

  // Shorthand for fetching data
  // const data = await d3.json("https://magnify.michigandaily.us/primary-2022-washtenaw-results/results.json");

  console.log(data);

  // Assigning colors
  const specificData = grabRaceData(data, race);
  const colors = assignColors(getOptions(specificData));

  // SETTING UP DIFFERENT ELEMENTS
  const figure = d3.select("figure");
  width = figure.node().clientWidth; // D3 way of getting the width of the figure

  const tooltip = figure.append("div").attr("class", "tooltip");

  const svg = figure
    .append("svg") // Changing the size of our new svg visual
    .attr("height", height)
    .attr("width", width);

  const defs = svg.append("defs");
  defs
    .selectAll("pattern")
    .data(Object.values(colors))
    .join("pattern")
    .attr("id", (d) => {
      return `cross-${d}`;
    })
    .attr("width", 6)
    .attr("height", 4)
    .attr("patternUnits", "userSpaceOnUse")
    .attr("patternTransform", "rotate(45)")
    .each(function (d) {
      d3.select(this)
        .append("rect")
        .attr("width", 4)
        .attr("height", 6)
        .attr("fill", d);
    });

  console.log(colors);

  const legendYLimit = 120;
  const blockSize = legendYLimit / Object.values(colors).length;
  const squares = svg.append("g");
  squares
    .selectAll("rect")
    .data(Object.values(colors))
    .join("rect")
    .attr("width", blockSize - 10)
    .attr("height", blockSize - 10)
    .attr("fill", (d) => `#${d}`)
    .attr("x", 10)
    .attr("y", (d, i) => height - legendYLimit + i * blockSize);

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
      const winner = getPluralityWinner(specificData.report, d.properties.NAME);
      // Check if the winner is in color
      for (let i = 0; i < Object.keys(colors).length; i++) {
        // console.log(Object.keys(colors)[i]);
        // console.log(winner.includes(Object.keys(colors)[i]));
        if (winner.includes(Object.keys(colors)[i])) {
          return `#${colors[Object.keys(colors)[i]]}`;
        }
      }
      return "#000000";
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
