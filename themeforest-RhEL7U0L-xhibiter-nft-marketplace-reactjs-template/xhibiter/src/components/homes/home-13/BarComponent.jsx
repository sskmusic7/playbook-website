import {
  CategoryScale,
  Chart,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  LineController,
} from "chart.js";
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  LineController
);
function getGradient(ctx, chartArea) {
  let width, height, gradient;
  const chartWidth = chartArea.right - chartArea.left;
  const chartHeight = chartArea.bottom - chartArea.top;
  if (!gradient || width !== chartWidth || height !== chartHeight) {
    // Create the gradient because this is either the first render
    // or the size of the chart has changed
    width = chartWidth;
    height = chartHeight;
    gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0, "rgb(131, 88, 255)");
    // gradient.addColorStop(0.5, 'rgb(255, 205, 86)');
    gradient.addColorStop(1, "rgb(255, 53, 104)");
  }

  return gradient;
}

import { Bar } from "react-chartjs-2";

const footer = (tooltipItems) => {
  let sum = 1;
  tooltipItems.forEach(function (tooltipItem) {
    sum *= tooltipItem.parsed.y;
  });
  return (
    Intl.NumberFormat("en-US", { notation: "compact" }).format(sum) + " mints"
  );
};
const chartsOptions = {
  maintainAspectRatio: false,
  responsive: true,
  layout: {
    padding: {
      left: -5,
      bottom: -5,
      right: 5,
      top: 5,
    },
  },
  interaction: {
    intersect: false,
    mode: "index",
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
    y: {
      border: {
        display: false,
      },
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
  },
  plugins: {
    legend: { display: false },
    decimation: {
      enabled: true,
    },
    tooltip: {
      enabled: false,

      external: function (context) {
        // Tooltip Element
        let tooltipEl = document.getElementById("chartjs-tooltip");

        // Create element on first render
        if (!tooltipEl) {
          tooltipEl = document.createElement("div");
          tooltipEl.style.background = "#131740";
          tooltipEl.style.color = "#ffffff";
          tooltipEl.style.textAlign = "left";
          tooltipEl.style.padding = "10px";
          tooltipEl.style.borderRadius = "8px";

          tooltipEl.id = "chartjs-tooltip";
          tooltipEl.innerHTML = "<table></table>";
          document.body.appendChild(tooltipEl);
        }

        // Hide if no tooltip
        const tooltipModel = context.tooltip;
        if (tooltipModel.opacity === 0) {
          tooltipEl.style.opacity = 0;
          return;
        }

        // Set caret Position
        tooltipEl.classList.remove("above", "below", "no-transform");
        if (tooltipModel.yAlign) {
          tooltipEl.classList.add(tooltipModel.yAlign);
        } else {
          tooltipEl.classList.add("no-transform");
        }

        // Set Text
        if (tooltipModel.body) {
          const titleLines = tooltipModel.title || [];
          const footerLines = tooltipModel.footer || [];

          let innerHtml = "<thead>";

          titleLines.forEach(function (title) {
            innerHtml += "<tr><th>" + title + "</th></tr>";
          });

          footerLines.forEach(function (footer) {
            innerHtml += "<tr><th>" + footer + "</th></tr>";
          });

          innerHtml += "</thead>";

          let tableRoot = tooltipEl.querySelector("table");
          tableRoot.innerHTML = innerHtml;
        }

        const position = context.chart.canvas.getBoundingClientRect();
        // const bodyFont = Chart.helpers.toFont(tooltipModel.options.bodyFont);

        // Display, position, and set styles for font
        tooltipEl.style.opacity = 1;
        tooltipEl.style.position = "absolute";
        tooltipEl.style.left =
          position.left + window.pageXOffset + tooltipModel.caretX + "px";
        tooltipEl.style.top =
          position.top + window.pageYOffset + tooltipModel.caretY + "px";
        tooltipEl.style.fontSize = "12px";
        tooltipEl.style.padding =
          tooltipModel.padding + "px " + tooltipModel.padding + "px";
        tooltipEl.style.pointerEvents = "none";
      },

      usePointStyle: true,
      position: "nearest",
      yAlign: "bottom",
      callbacks: {
        footer: footer,
      },
    },
  },
  animation: false,
};

export default function BarComponent({ datapoints, labels }) {
  const chartData = {
    labels: labels
      ? labels
      : [
          "March 17 - 3:12pm",
          "March 17 - 3:16pm",
          "March 17 - 3:22pm",
          "March 17 - 3:26pm",
          "March 17 - 3:32pm",
        ],
    datasets: [
      {
        type: "line",
        pointRadius: 0,
        backgroundColor: "#8358FF",
        borderWidth: 2,
        borderColor: function (context) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            // This case happens on initial chart load
            return;
          }
          return getGradient(ctx, chartArea);
        },
        data: datapoints ? datapoints : [(100, 309, 252, 954, 0)],
        tension: 0.5,
      },
    ],
  };
  return <Bar options={chartsOptions} data={chartData} />;
}
