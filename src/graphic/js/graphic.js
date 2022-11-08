// TODO: Fix Legend, Bar at Bottom, Titles? idk, Actual Website, Stylize better

//////////////// SPECIFICATIONS ///////////////
// All of the election races that we are covering
// https://docs.google.com/spreadsheets/d/1MAHeqkZH3nTEoYnVB9-jrLCningGXr225k8JfrkqemY/edit#gid=0

//////////////// IMPORTS //////////////////////
// Imports
import pym from "pym.js";
import * as d3 from "d3";
import downloadImage from "./download-image";
import ann_arbor from "../data/ann_arbor.json"; // importing the json file
import data from "../data/sm-asdfkasdf.json"; // importing the json file
import { sum } from "d3";

// Initialization
let width = 500; // Width of the figure, for the svg's reference
let height = 500;
let tie_exists = false;
let is_mobile = false;

// Race to Cover
// const race = "AAATA Proposal";
// const race = "Ann Arbor Mayor DEM";
const race = "Ann Arbor Council W4 DEM";

////////////////// FUNCTIONS //////////////////
// Getting the specific race's data
function grabRaceData(basejson, race) {
  for (let i = 0; i < basejson.data.length; i++) {
    if (basejson.data[i].name === race) {
      return basejson.data[i];
    }
  }
  // console.log("nothing returned for grabRaceData");
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
  // console.log("nothing returned for getPrecinctData");
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
      } else if (precinctData[reportKeys[i]] === max) {
        maxName = "Tie";
      } else {
        continue;
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
    console.log(options[i]);
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
  return d3
    .scaleOrdinal()
    .domain(Object.keys(returnDict))
    .range(Object.values(returnDict));
}

// Counts the total amount of votes for a precint object thing
function totalVotes(precinctData) {
  const avoidAttributes = [
    "Precinct",
    "Rejected write-ins",
    "Unassigned write-ins",
    "counted",
  ];
  let total = 0;
  const precinctDataKeys = Object.keys(precinctData);
  for (let i = 0; i < precinctDataKeys.length; i++) {
    if (!avoidAttributes.includes(precinctDataKeys[i])) {
      console.log(precinctData[precinctDataKeys[i]]);
      total += precinctData[precinctDataKeys[i]];
    }
  }
  return total;
}

// Count the total amount of votes for everything
function totalVotesEverywhere(specificData, colors) {
  const returnObject = {};
  const report = specificData.report.data;
  for (let i = 0; i < colors.domain().length; i++) {
    // Loops through the options
    returnObject[colors.domain()[i]] = 0;
    for (let j = 0; j < report.length; j++) {
      // Loops through the precincts
      returnObject[colors.domain()[i]] += report[j][colors.domain()[i]];
    }
  }
  console.log(returnObject);
  return returnObject;
}

////////////////// RENDERING //////////////////
const draw = async () => {
  //// FETCHING DATA ////
  // Traditional way of getting the live data
  // const res = await fetch(
  //   "https://magnify.michigandaily.us/primary-2022-washtenaw-results/results.json",
  //    {mode: 'no-cors'});
  // const data = await res.json();

  // Shorthand for fetching data with d3
  // const data = await d3.json(
  //   "https://magnify.michigandaily.us/primary-2022-washtenaw-results/results.json"
  // );

  console.log(data);

  //// ASSIGNING COLORS TO EACH OPTION ////
  const specificData = grabRaceData(data, race);
  const colors = assignColors(getOptions(specificData));

  //// SETTING UP DIFFERENT ELEMENTS OF THE GRAPH ////
  const figure = d3.select("figure");
  width = figure.node().clientWidth; // D3 way of getting the width of the figure

  // Setting up the figure
  const tooltip = figure.append("div").attr("class", "tooltip");

  // Change positioning based on if mobile or not
  if (is_mobile) {
    tooltip.attr("position", "relative");
    height += 75;
  }

  const svg = figure
    .append("svg") // Changing the size of our new svg visual
    .attr("height", height)
    .attr("width", width);

  // Check for mobile
  if (width < 500) {
    is_mobile = true;
  }

  //// SETTING UP STRIPED FILLING ////
  const defs = svg.append("defs");

  defs
    .selectAll("pattern")
    .data(colors.range())
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
        .attr("fill", `#${d}`);
    });

  defs
    .append("pattern")
    .attr("id", "cross-979797")
    .attr("width", 6)
    .attr("height", 4)
    .attr("patternUnits", "userSpaceOnUse")
    .attr("patternTransform", "rotate(45)")
    .append("rect")
    .attr("width", 4)
    .attr("height", 6)
    .attr("fill", `#979797`);

  //// MAKING THE MAP ////
  const projection = d3.geoMercator().fitSize([width, height], ann_arbor);
  const path = d3.geoPath().projection(projection);

  const paths = svg
    .selectAll("path")
    .data(ann_arbor.features)
    .enter()
    .append("path")
    .attr("d", (d) => path(d)) // this is what actually renders the vector for each feature
    .attr("stroke", "#FFFFFF")
    .attr("stroke-width", 1)
    .attr("position", "relative")
    .attr("fill", (d) => {
      const precinctData = getPrecinctData(
        specificData.report,
        d.properties.NAME
      );
      const winner = getPluralityWinner(specificData.report, d.properties.NAME);
      let returnColor = "#000000";
      // Check if the winner is in color
      for (let i = 0; i < colors.domain().length; i++) {
        if (winner.includes(colors.domain()[i])) {
          // Make stripes if not fully counted
          if (precinctData.counted !== "fully-counted") {
            returnColor = `url(#cross-${colors(colors.domain()[i])})`;
          } else {
            returnColor = `#${colors(colors.domain()[i])}`;
          }
          break;
        } else if (winner === "Tie") {
          tie_exists = true;
          if (precinctData.counted !== "fully-counted") {
            returnColor = `url(#cross-979797)`;
          } else {
            returnColor = `#979797`;
          }
          break;
        }
      }

      return returnColor;
    });

  // Moving the figure up if mobile
  if (is_mobile) {
    console.log("IS MOBILE");
    paths.attr("transform", `translate(0, ${-50})`);
  }

  //// CHECKING TO ADD TIE TO THE LEGEND ////
  if (tie_exists) {
    colors.domain([...colors.domain(), "Tie"]);
    colors.range([...colors.range(), "979797"]);
  }
  const invertColors = d3
    .scaleOrdinal()
    .domain(colors.range())
    .range(colors.domain());

  //// SETTING UP VARIABLES FOR THE LEGEND ////
  const blockSize = 20;
  const legendYLimit = blockSize * 2 * colors.range().length;
  const blockOffset = 13;
  const fontSize = blockSize * 0.7;

  svg
    .append("g")
    .selectAll("g")
    .data(colors.range())
    .join("g")
    .attr(
      "transform",
      (d, i) => `translate(0, ${height - legendYLimit + i * blockSize * 2})`
    )

    .each(function (d) {
      console.log(d);
      console.log(this);

      // For the blocks
      d3.select(this)
        .append("rect")
        .attr("width", blockSize - 5)
        .attr("height", blockSize - 5)
        .attr("fill", (d) => `#${d}`)
        .attr("y", blockSize);

      // For the stripes
      d3.select(this)
        .append("rect")
        .attr("width", blockSize - 5)
        .attr("height", blockSize - 5)
        .attr("fill", (d) => `url(#cross-${d})`);

      // For the stripes, text
      d3.select(this)
        .append("text")
        .text((d) => `${invertColors(d)} (Partially Counted)`)
        .attr("x", blockSize)
        .attr("font-family", "Open Sans")
        .attr("font-size", fontSize)
        .attr("y", blockOffset);

      // For the blocks, text
      d3.select(this)
        .append("text")
        .text((d) => invertColors(d))
        .attr("x", blockSize)
        .attr("font-family", "Open Sans")
        .attr("font-size", fontSize)
        .attr("y", blockOffset + blockSize);
    });

  //// MAKING THE BAR ////
  const barContainer = figure.append("div").attr("class", "barContainer");

  // Remove the tie option from colors
  if (tie_exists) {
    colors.domain().splice(-1);
    colors.range().splice(-1);
    colors
      .domain(colors.domain().slice(0, colors.domain().length - 1))
      .range(colors.range().slice(0, colors.range().length - 1));
  }

  const totalVoteCountArray = totalVotesEverywhere(specificData, colors);
  let linearGradient = "linear-gradient( to right,";
  let currentPercent = 0;
  for (let i = 0; i < colors.domain().length; i++) {
    const percent =
      (100 * totalVoteCountArray[colors.domain()[i]]) /
      sum(Object.values(totalVoteCountArray));
    linearGradient += `#${colors(colors.domain()[i])} ${currentPercent}% ${
      currentPercent + percent
    }%`;
    if (i !== colors.domain().length - 1) {
      linearGradient += ",";
    }
    currentPercent += percent;
  }
  linearGradient += ")";
  console.log(linearGradient);
  // const barBlocks = barContainer
  barContainer
    .append("div")
    .style("width", `${width}px`)
    .style("height", `${20}px`)
    .style("background", linearGradient);

  //// MOUSE EVENTS FOR THE MAP ////
  paths
    .on("mouseover", function (event) {
      const [x, y] = d3.pointer(event); // Returns an array of the x and y coords
      this.parentNode.appendChild(this); // redraws that specific component
      d3.select(this).attr("stroke", "#FFCB05");

      // Defining the dynamic data for the tooltip hover
      let dynamicTable = "<table>";
      dynamicTable +=
        "<tr><th><b>Choices</b></th><th><b>Votes</b></th><th><b>Percent</b></th></tr>";
      // Looping through all the options
      // Calculating the total amount of voters
      const report = specificData.report;
      const precinctData = getPrecinctData(
        report,
        d3.select(this).datum().properties.NAME
      );
      const totalVoteCount = totalVotes(precinctData);
      for (let i = 0; i < colors.domain().length; i++) {
        dynamicTable += "<tr>";

        // Options
        dynamicTable += `<th>${colors.domain()[i]}</th>`;

        // Votes
        console.log(precinctData);
        if (precinctData[colors.domain()[i]] === undefined) {
          dynamicTable += "<th>" + "N/A" + "</th>";
        } else {
          dynamicTable += `<th>${precinctData[colors.domain()[i]]}</th>`;
        }

        // Vote percent
        dynamicTable += `<th>${(
          (100 * precinctData[colors.domain()[i]]) /
          totalVoteCount
        ).toFixed(2)}%</th>`;

        dynamicTable += "</tr>";
      }
      dynamicTable += "</table>";

      //// RENDER THE TOOLTIP ////
      tooltip.style("display", "unset").html(
        `<b>Ward ${d3.select(this).datum().properties.WARD_NUM}, ` +
          `Precinct ${d3.select(this).datum().properties.PRCNCT_NUM}</b>
            ${dynamicTable}`
      );

      if (!is_mobile) {
        tooltip.style("top", `${y}px`);

        if (x < width / 2) {
          tooltip.style("left", `${x}px`);
        } else {
          tooltip.style("left", `${x - 220}px`);
        }
      }
    })
    .on("mousemove", (event) => {
      const [x, y] = d3.pointer(event); // Returns an array of the x and y coords
      // Move the tooltip when the mouse moves
      if (!is_mobile) {
        tooltip.style("top", `${y}px`);
        if (x < width / 2) {
          tooltip.style("left", `${x}px`);
        } else {
          tooltip.style("left", `${x - 270}px`);
        }
      }
    })
    .on("mouseout", function () {
      d3.select(this).attr("stroke", "#FFFFFF");
      tooltip.style("display", "none");
    });
};

window.onresize = () => {};

window.onload = () => {
  const pymChild = new pym.Child({ polling: 500 });
  pymChild.sendHeight();
  pymChild.onMessage("download", downloadImage);
  draw();
};
