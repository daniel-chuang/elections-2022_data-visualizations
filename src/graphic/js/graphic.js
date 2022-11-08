import pym from "pym.js";
import * as d3 from "d3";
import downloadImage from "./download-image";
import annArbor from "../data/ann_arbor.json";
import votes from "../data/data.json";

const emptyFill = "rgba(0,0,0,0.05)";
const percent = d3.format(".2%");

function getPrecinctData(report, precinct) {
  return report.data.filter((d) => d.Precinct === precinct).pop();
}

function getPluralityWinner(precinctData, options) {
  let max = 0;
  let maxName = "";

  options.forEach((option) => {
    if (precinctData[option] > max) {
      max = precinctData[option];
      maxName = option;
    } else if (precinctData[option] === max) {
      maxName = "Tie";
    }
  });

  return maxName;
}

function getOptions({ options }) {
  const avoidAttributes = [
    "Precinct",
    "Rejected write-ins",
    "Unassigned write-ins",
    "counted",
  ];
  return options
    .filter((d) => !avoidAttributes.includes(d.label))
    .map((d) => d.label);
}

function assignColors(options) {
  return d3
    .scaleOrdinal()
    .domain([...options, "Tie"])
    .range([
      ...d3.schemeCategory10.slice(0, options.length).map((d) => d.slice(1)),
      "979797",
    ])
    .unknown(emptyFill);
}

function totalVotesByOption({ report: { data: report } }, options) {
  return Object.fromEntries(
    options.map((o) => [o, d3.sum(report, (precinct) => precinct[o])])
  );
}

const draw = async () => {
  const race = "Ann Arbor Mayor DEM";

  const raceData = votes.data.filter((d) => d.name === race).pop();
  const { report } = raceData;
  const options = getOptions(raceData);
  const colors = assignColors(options);

  const figure = d3.select("figure");
  const width = figure.node().clientWidth;
  const isMobile = width < 500;
  const height = isMobile ? width : 500;

  const svg = figure.append("svg").attr("width", width).attr("height", height);
  const tooltip = figure.append("div").attr("class", "tooltip");
  if (isMobile) {
    tooltip.attr("position", "relative");
  }

  svg
    .append("defs")
    .selectAll("pattern")
    .data(colors.range())
    .join("pattern")
    .attr("id", (d) => `cross-${d}`)
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

  const projection = d3.geoMercator().fitSize([width, height], annArbor);
  const path = d3.geoPath().projection(projection);

  svg
    .selectAll("path")
    .data(annArbor.features)
    .join("path")
    .attr("d", path)
    .attr("stroke", "white")
    .attr("stroke-width", 1)
    .attr("fill", ({ properties: { NAME } }) => {
      const precinctData = getPrecinctData(report, NAME);
      if (precinctData === undefined) {
        return emptyFill;
      }
      const winner = getPluralityWinner(precinctData, options);
      const color = colors(winner);
      return precinctData.counted === "fully-counted"
        ? `#${color}`
        : `url(#cross-${color})`;
    })
    .each(function () {
      const path = d3.select(this);
      const isEmpty = path.attr("fill") === emptyFill;
      path.attr("class", isEmpty ? "empty" : "filled");
    });

  const blockSize = 20;
  const legendHeight = blockSize * 2 * colors.range().length;
  const squareSize = blockSize - 5;
  const blockOffset = 13;
  const fontSize = 11;

  const legend = isMobile
    ? figure.append("svg").attr("width", width).attr("height", legendHeight)
    : svg.append("g");

  function square(selection) {
    return selection
      .append("rect")
      .attr("width", squareSize)
      .attr("height", squareSize);
  }

  function label(selection) {
    return selection
      .append("text")
      .attr("x", blockSize)
      .attr("font-family", "Open Sans")
      .attr("font-size", fontSize);
  }

  function drawColorBlocks(name) {
    const s = d3.select(this);
    const color = colors(name);

    square(s).attr("fill", `#${color}`);
    label(s).text(name).attr("y", blockOffset);

    square(s).attr("fill", `url(#cross-${color})`).attr("y", blockSize);
    label(s)
      .text(`${name} (Partial Count)`)
      .attr("y", blockOffset + blockSize);
  }

  legend
    .selectAll("g")
    .data(colors.domain())
    .join("g")
    .attr(
      "transform",
      (_, i) =>
        `translate(0, ${
          (isMobile ? 0 : height - legendHeight) + i * blockSize * 2
        })`
    )
    .each(drawColorBlocks);

  const votesByOption = totalVotesByOption(raceData, options);
  const totalVotes = d3.sum(Object.values(votesByOption));
  let linearGradient = "linear-gradient(to right,";
  let currentPercent = 0;
  options.forEach((option, i) => {
    const percent = (votesByOption[option] / totalVotes) * 100;
    linearGradient += `#${colors(option)} ${currentPercent}% ${
      currentPercent + percent
    }%`;
    if (i !== options.length - 1) {
      linearGradient += ",";
    }
    currentPercent += percent;
  });
  linearGradient += ")";

  figure
    .append("div")
    .style("margin-top", "10px")
    .style("width", "100%")
    .style("height", "20px")
    .style("background", linearGradient);

  function moveTooltip(event) {
    if (!isMobile) {
      const [x, y] = d3.pointer(event);
      tooltip.style("top", `${y}px`);
      tooltip.style("left", x < width / 2 ? `${x}px` : `${x - 220}px`);
    }
  }

  svg
    .selectAll("path.filled")
    .on("mouseover", function (event) {
      const path = d3.select(this);
      const { NAME, WARD_NUM, PRCNCT_NUM } = path.datum().properties;
      this.parentNode.appendChild(this);

      path.attr("stroke", "#FFCB05").attr("stroke-width", 2);

      let table = "<table>";
      table += `<tr>
        <th><b>Choices</b></th>
        <th><b>Votes</b></th>
        <th><b>Percent</b></th>
      </tr>`;

      const precinctData = getPrecinctData(report, NAME);
      const totalPrecinctVotes = d3.sum(options, (d) => precinctData[d]);
      options.forEach((option) => {
        const votePercent = precinctData[option] / totalPrecinctVotes;
        table += `<tr>
          <th>${option}</th>
          <th>${precinctData[option]}</th>
          <th>${percent(votePercent)}</th>
        </tr>`;
      });
      table += "</table>";

      tooltip.style("display", "unset").html(
        `<b>Ward ${WARD_NUM}, Precinct ${PRCNCT_NUM}</b> 
          ${table}`
      );
      moveTooltip(event);
    })
    .on("mousemove", moveTooltip)
    .on("mouseout", function () {
      d3.select(this).attr("stroke", "#FFFFFF").attr("stroke-width", 1);
      tooltip.style("display", "none");
    });
};

window.onload = () => {
  const pymChild = new pym.Child({ polling: 500 });
  pymChild.sendHeight();
  pymChild.onMessage("download", downloadImage);
  draw();
};
