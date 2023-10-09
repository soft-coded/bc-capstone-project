import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Chart123({ chartDataHistory }) {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Converted Values",
        data: [],
        backgroundColor: "#63229B",
        borderWidth: 1,
      },
    ],
  });

  // Listen for changes in chartDataHistory
  useEffect(() => {
    // Check if chartDataHistory is empty
    if (chartDataHistory && chartDataHistory.length === 0) {
      // Reset the chart data
      setChartData({
        labels: [],
        datasets: [
          {
            label: "Converted Values",
            data: [],
            backgroundColor: "#63229B",
            borderWidth: 1,
          },
        ],
      });
    } else {
      // Chart data is not empty, update the chart as before
      const labels = chartDataHistory.map((item) => item.toCountry);
      const convertedValues = chartDataHistory.map(
        (item) => item.convertedValue
      );

      // Update the chart data with history data
      setChartData((prevChartData) => ({
        ...prevChartData,
        labels: labels,
        datasets: [
          {
            ...prevChartData.datasets[0],
            data: convertedValues,
          },
        ],
      }));
    }
  }, [chartDataHistory]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Converted Values by Country",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Index*Amount",
        },
      },
      x: {
        title: {
          display: true,
          text: "Quote Currency",
        },
      },
    },
  };

  return (
      <div
        style={{
          width: "100%",
          height: "400px",
          display: "inline-flex",
          backgroundColor: "white",
          padding: '1rem'
        }}
      >
        <Bar data={chartData} options={options}></Bar>
      </div>
  );
}
