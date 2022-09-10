import { ApexCharts, Chart } from "apexcharts";


const ctxArea = document.getElementById("chartArea").getContext("2d");

const chart = new Chart(ctxArea, {
    type: "line",
    data: {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  },
  options: {},
});

