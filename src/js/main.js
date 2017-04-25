require('../styles/style.scss');
const data = [54, 78, 34, 90, 28, 11, 98, 78, 27, 50, 45, 34, 16,44,67,87];

const width = 500;
const height = 320;

const svg = d3.select(".bargraph")
              .append("svg")
              .attr("width", width)
              .attr("height", height);

svg.selectAll("rect")
  .data(data)
  .enter()
  .append("rect")
  .attr("x", (d, i) => i * 30)
  .attr("y", (d, i) => height - 3 * d)
  .attr("width", 25)
  .attr("height", (d) => d * 3)
  .attr("fill", "navy")
  .attr("class", "bar")
  .append("title")
  .text((d) => d);

svg.selectAll("text")
  .data(data)
  .enter()
  .append("text")
  .attr("x", (d, i) => i * 30)
  .attr("y", (d, i) => (height - 3 * d) - 3)
  .text((d) => d)
  .attr("fill", "green")
  .style("font-size", 22);

////////////////////////////////////////////////////////

    const dataset2 = [
                  [ 34,    78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,    411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,   333 ],
                  [ 78,    320 ],
                  [ 21,    123 ]
                ];


    const w2 = 500;
    const h2 = 500;

    const svg2 = d3.select(".scatter")
                  .append("svg")
                  .attr("width", w2)
                  .attr("height", h2);

    svg2.selectAll("circle")
       .data(dataset2)
       .enter()
       .append("circle")
       .attr("cx", (d) => d[0])
       .attr("cy", (d) => d[1])
       .attr("r", 5)


    svg2.selectAll("text")
       .data(dataset2)
       .enter()
       .append("text")
       .attr("x", (d) => d[0] + 5)
       .attr("y", (d) => d[1])
       .text((d) => d[0] + "," + d[1])
