import { useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { Chart } from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";
import config from "../../config";
// import 'chartjs-adapter-date-fns';

Chart.register(zoomPlugin);

function CryptoChart({ selectedCoin }) {
  const [dataSet, setDataSet] = useState([]);
  const [dateSet, setDateSet] = useState([]);
  const chartRef = useRef(null);

  useEffect(
    function () {
      if (!selectedCoin) return;

      const body = { symbol: selectedCoin };
      async function getCoinHistory() {
        const response = await fetch(
          `${config.BACKEND_URL}/api/trade/history`,
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(body),
          }
        );

        if (!response.ok) {
          throw new Error(`Can't get history!`);
        }

        const history = await response.json();

        const data = history.map((his) => ({
          date: his[9],
          price: his[4],
          volume: his[5],
        }));

        setDataSet(data.map((d) => d.price));
        setDateSet(
          data.map((d) => new Date(d.date).toISOString().split("T")[0])
        );

        console.log(data);
        return history;
      }
      getCoinHistory();
    },
    [selectedCoin]
  );

  useEffect(() => {
    if (chartRef.current && dataSet.length > 400) {
      const chart = chartRef.current;
      const maxItems = 400;
      const min = Math.max(dataSet.length - maxItems, 0);
      chart.options.scales.x.min = min;
      chart.options.scales.x.max = dataSet.length - 1;
      chart.update();
    }
  }, [dataSet, dateSet]);

  const options = {
    responsive: true,
    animation: {
      duration: 1000,
      easing: "easeOutQuart",
    },
    interaction: {
      mode: "nearest",
    },
    plugins: {
      zoom: {
        pan: {
          enabled: true,
          mode: "x",
        },
        zoom: {
          limit: {
            x: { min: 0, max: 200 },
          },
          wheel: {
            enabled: true,
            speed: 0.1,
          },
          pinch: {
            enabled: true,
            speed: 0.005,
          },
          mode: "x",
        },
      },
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: selectedCoin?.split("CAD"),
      },
    },
    scales: {
      x: {
        // type: 'time',
        // time: {
        //   unit: 'day', // Sets the scale unit. Change it according to the granularity needed.
        //   tooltipFormat: 'PPP', // Uses date-fns formatting tokens.
        //   displayFormats: {
        //     quarter: 'MMM yyyy', // Customize depending on needed granularity
        //     month: 'MMM yyyy',
        //     day: 'MMM dd',
        //   },
        // },
        // ticks: {
        //   maxTicksLimit: 10, // Limits the maximum number of ticks displayed at once
        //   autoSkip: true, // Enables automatic skipping of ticks to fit the maxTicksLimit
        // },
        display: true,
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: false,
        display: true,
        grid: {
          display: false,
        },
        position: "right",
      },
    },
    beginAtZero: false,
  };

  const chartData = {
    labels: dateSet,
    datasets: [
      {
        label: "",
        data: dataSet,
        drawActiveElementsOnTop: false,
        cubicInterpolationMode: "monotone",
        fill: {
          target: "origin",
          above: "#dbeafe",
        },
        pointRadius: 0,
        pointHitRadius: 10,
        pointHoverRadius: 4,
        borderJoinStyle: "round",
        borderColor: "#93c5fd",
        borderWidth: 2,
      },
    ],
  };

  // console.log(dateSet);

  return (
    <div className="w-full">
      <Line ref={chartRef} data={chartData} options={options} />
    </div>
  );
}

export default CryptoChart;
