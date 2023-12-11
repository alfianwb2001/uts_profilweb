const xArray = [70, 80, 80, 60, 20, 60];
const yArray = ["Java ", "CSS ", "HTML ", "JavaScript ", "PHP ", "Desain Grafis"];

const data = [{
  x:xArray,
  y:yArray,
  type:"bar",
  orientation:"h",
  marker: {color:"#156f8f"}
}];

const layout = {title:"MY SKILL"};

Plotly.newPlot("myPlot", data, layout);