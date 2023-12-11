import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController
);

const Income = () => {
  const data = {
    labels: ["Ju", "Au", "Se", "Oc", "No", "De"],

    datasets: [
      {
        backgroundColor: [
          "#FFEAD0",
          "#FFEAD0",
          "#FFEAD0",
          "#FFEAD0",
          "#FF8C38",
          "#FF8C38",
        ],
        border: "5px",
        borderWidth: 1,
        data: [4, 1.5, 3, 2.7, 1.54, 0.72],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          font: {
            size: 25,
            weight: "bold",
          },
        },
        display: false,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 5,
        beginAtZero: true,
        border: { dash: [20, 20], display: true },
        grid: {
          display: true, // Display grid lines for the y-axis
        },
        ticks: {
          fontSize: 40,
          stepSize: 1,
          padding: 10,
          callback: function (value, index, ticks) {
            return "$" + value + "k";
          },
        },
      },
      x: {
        beginAtZero: true,
        border: { display: true },
        grid: {
          display: false, // No display of grid lines for the x-axis
        },
        ticks: {
          fontSize: 25,
          padding: 15,
        },
      },
    },
    elements: {
      bar: {
        borderRadius: "15",
      },
    },
    layout: {
      padding: {
        left: 30,
        right: 30,
        top: 30,
        bottom: 30,
      },
      margin: {
        left: 5,
        right: 5,
        top: 5,
        bottom: 5,
      },
    },
  };

  return (
    <div className="income-page">
      <h1 className="income-page-title">Income</h1>
      <p>
        Last <span>30 days</span>
      </p>
      <h2 className="income-total-transaction">$2,260</h2>
      <Bar data={data} options={options} />
      <div className="income-transaction-title">
        <h2>Your transactions (3)</h2>
        <p>
          Last <span>30 days</span>
        </p>
      </div>
      <div className="income-transaction">
        <h3>$720</h3>
        <p>1/12/22</p>
      </div>
      <div className="income-transaction">
        <h3>$560</h3>
        <p>10/11/22</p>
      </div>
      <div className="income-transaction">
        <h3>$980</h3>
        <p>23/11/22</p>
      </div>
    </div>
  );
};

export default Income;
