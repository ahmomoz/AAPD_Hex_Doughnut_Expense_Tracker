let savingLineChart = document.querySelector("#savingLineChart");
let labels = ["1", "2", "3", "4", "5", "6", "7"];
let datasetData = [20000, 30000, 40000, 55000, 49000, 58000, 60000];

new Chart(savingLineChart, {
  type: "line",
  data: {
    labels: labels,
    datasets: [
      {
        data: datasetData,
        borderColor: "#FE8439",
        borderWidth: 3,
        fill: false,
        borderJoinStyle: "round",
        yAxisID: "y",
        pointRadius: 5,
        backgroundColor: "#ffffff",
      },
      {
        data: datasetData,
        borderColor: "#FE8439",
        borderWidth: 0,
        fill: false,
        borderJoinStyle: "round",
        yAxisID: "y2",
        pointRadius: 0,
        backgroundColor: "#ffffff",
      },
    ],
  },
  options: {
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
            family: "Nunito",
          },
        },
      },
      y: {
        ticks: {
          font: {
            size: 15,
            family: "Nunito",
          },
          maxTicksLimit: 5,
          callback: (context, index) => {
            return Intl.NumberFormat("en-US", {
              notation: "compact",
              maximumFractionDigits: 1,
            }).format(context);
          },
        },
        border: {
          display: false,
        },
      },
      y2: {
        position: "right",
        ticks: {
          font: {
            size: 15,
            family: "Nunito",
          },
          maxTicksLimit: 5,
          callback: (context, index) => {
            return Intl.NumberFormat("en-US", {
              notation: "compact",
              maximumFractionDigits: 1,
            }).format(context);
          },
        },
        border: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  },
});
