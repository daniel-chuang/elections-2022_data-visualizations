import pym from "pym.js";
import * as d3 from "d3";
import downloadImage from "./download-image";
import annArbor from "../data/ann_arbor.json";
import blurbs from "../data/blurbs.csv";

const emptyFill = "#0000000d";
const blue = "#55aaff";
const red = "#c8473a";
const green = "#238800";
const orange = "#ffa600";
const purple = "#665191";

let votes;

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

  if (max === 0) {
    return "Empty";
  }

  return maxName;
}

function getOptions({ options }) {
  const avoidAttributes = [
    "Precinct",
    "Rejected write-ins",
    "Unassigned write-ins",
    "counted",
    "Mary Buzuma Brian Ellison",
    "Donna Brandenburg Mellissa Carone",
    "Kevin Hogan Destiny Clayton",
    "Daryl M. Simpson Doug Dern",
    "Gregory Scott Stempfle",
    "Christine C. Schwartz",
    "Larry James Hutchinson Jr.",
    "Joseph W. McHugh Jr.",
    "Gerald T. Van Sickle",
    "Eric Larson",
    "Joe Sanger",
    "Sherry A. Wells",
    "Kathleen Oakford",
  ];
  return options
    .filter((d) => !avoidAttributes.includes(d.label))
    .map((d) => d.label);
}

function totalVotesByOption({ report: { data: report } }, options) {
  return Object.fromEntries(
    options.map((o) => [o, d3.sum(report, (precinct) => precinct[o])])
  );
}

const draw = async (raceName) => {
  const raceNameToSlug = {
    "State Senator 14th District": "State Senate District 14",
    "State Senator 15th District": "State Senate District 15",
    Gubernatorial: "Governor and Lieutenant Governor",
    "Ann Arbor Mayor": "Ann Arbor Mayor",
    "Secretary of State": "Secretary of State",
    "US Congress District 6": "US Congress District 6",
    "State Proposal 1": "State Proposal 22-1",
    "State Proposal 2": "State Proposal 22-2",
    "State Proposal 3": "State Proposal 22-3",
    "City of Ann Arbor Proposal 1": "City of Ann Arbor Proposal 1",
    "Attorney General": "Attorney General",
    "Regent of the University of Michigan":
      "Regent of the University of Michigan",
    "Justice of Supreme Court": "Justice of Supreme Court",
    "State Legislature Representative 23rd District": "State Rep District 23",
    "State Legislature Representative 33rd District": "State Rep District 33",
    "State Legislature Representative 47th District": "State Rep District 47",
    "State Legislature Representative 48th District": "State Rep District 48",
    "County Commissioner 8th District": "County Commissioner District 8",
    "Ann Arbor Council Member 5th Ward": "Ann Arbor Council Member 5th Ward",
    "Ann Arbor Public Schools Board Member":
      "Ann Arbor Public Schools Board Member",
    "Ann Arbor District Library Board Member":
      "Ann Arbor District Library Board Member",
    "Judge of Circuit Court 22nd Circuit Court":
      "Judge Circuit Court Non-incumbent",
  };

  const blurb = blurbs.filter((d) => d.race === raceName).pop();
  document.querySelector("#blurb").innerHTML = blurb.blurb
    .split("\n")
    .join("<br/><br/>");

  const race = raceNameToSlug[raceName];

  const title = document.querySelector("h1");
  title.textContent = `Live Election Results - ${raceName}`;

  const optionsToColors = {
    // governor
    "Gretchen Whitmer Garlin D. Gilchrist II": blue,
    "Tudor M. Dixon Shane Hernandez": red,
    "Jocelyn Benson": blue,
    "Kristina Elaine Karamo": red,
    // ann arbor mayor
    "Christopher Taylor": blue,
    "Eric B. Lipson": "#FFFF00",
    //regents
    "Mike Behm": blue,
    "Kathy White": "#0044ff",
    "Lena Epstein": red,
    "Sevag Vartanian": "#fa8072",
    //attorney general
    "Dana Nessel": blue,
    "Matthew DePerno": red,
    // congress
    "Debbie Dingell": blue,
    "Whittney Williams": red,
    //supreme court
    "Richard Bernstein": "#8c564b",
    "Kyra Harris Bolden": "#ff7f0e",
    "Paul Hudson": "#2ca02c",
    "Kerry Lee Morgan": "#9467bd",
    "Brian Zahra": "#e377c2",
    // proposals
    Yes: orange,
    No: purple,
    // 14
    "Sue Shink": blue,
    "Tim Golding": red,
    // 15
    "Jeff Irwin": blue,
    "Scott Price": red,

    "Jason Morgan": blue,
    "Richard L. Sharland": red,

    "Felicia Brabec": blue,
    "Robert Borer III": red,

    "Carrie Rheingans": blue,
    "Tina Bednarski-Lynch": red,

    "Jennifer Conlin": blue,
    "Jason Woolford": red,
    "Eric Borregard": green,

    "Yousef Rabhi": blue,
    "Leslie Shannon": red,

    "Jenn Cornell": blue,
    "Jonathan Hoard": "#FFFF00",

    "Susan Baskett": "#1f77b4",
    "Kai S. Cortina": "#ff7f0e",
    "Jacinda Townsend Gides": "#2ca02c",
    "Jamila James": "#d62728",
    "Lena Kauffman": "#9467bd",
    "Jeremy Lapham": "#8c564b",
    "Paulette Metoyer": "#e377c2",
    "Rima Mohammad": "#7f7f7f",
    "Susan Ward Schmidt": "#bcbd22",
    "Barry Schumer": "#17becf",
    "Andrew Spencer": "#e6ab02",
    "Leslie Wilkins": "#7570b3",
    "Alex Wood": "#e7298a",

    "Sara Duvall": "#1f77b4",
    "Catherine Hadley": "#ff7f0e",
    "Sherrie A. Kossoudji": "#2ca02c",
    "Jim Leija": "#d62728",
    "John Schaeffer": "#9467bd",
    "Aidan Sova": "#8c564b",

    "Marla Linderman Richelew": "#9467bd",
    "Arianne Elizabeth Slay": "#2ca02c",
  };

  const raceData = votes.data.filter((d) => d.name === race).pop();
  const { report } = raceData;
  const options = getOptions(raceData);
  const colors = d3
    .scaleOrdinal()
    .domain([...options, "Tie"])
    .range([
      ...options
        .map((option) => optionsToColors[option] ?? emptyFill)
        .map((d) => d.slice(1)),
      "979797",
    ])
    .unknown(emptyFill);

  const figure = d3.select("figure");
  figure.selectAll("*").remove();
  const width = figure.node().clientWidth;
  const isMobile = width < 500;
  let height = isMobile ? width : 500;

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
      if (winner === "Empty") {
        return emptyFill;
      }
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

  if (!isMobile && legendHeight > height) {
    height = legendHeight;
    svg.attr("height", legendHeight);
  }

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
      .text(`${name} (Partial)`)
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

  const barContainer = figure
    .append("div")
    .style("position", "relative")
    .style("margin-top", "10px")
    .style("width", "100%")
    .style("height", "20px");

  const votesByOption = totalVotesByOption(raceData, options);
  const totalVotes = d3.sum(Object.values(votesByOption));
  let linearGradient = "linear-gradient(to right,";
  let currentPercent = 0;
  options
    .sort((a, b) => d3.descending(votesByOption[a], votesByOption[b]))
    .forEach((option, i) => {
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

  barContainer
    .append("div")
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
      options
        .sort((a, b) => d3.descending(precinctData[a], precinctData[b]))
        .forEach((option) => {
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

window.onload = async () => {
  const pymChild = new pym.Child({ polling: 500 });
  pymChild.sendHeight();
  pymChild.onMessage("download", downloadImage);

  votes = await d3.json(
    "https://magnify.michigandaily.us/general-2022-washtenaw-results/results.json"
  );

  document.querySelector("#last-update").innerHTML += votes.meta.time;
  const chooser = document.querySelector("select");
  let race = chooser.selectedOptions[0].textContent;

  draw(race);

  chooser.addEventListener("change", () => {
    race = chooser.selectedOptions[0].textContent;
    draw(race);
  });
};
