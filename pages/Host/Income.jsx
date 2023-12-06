import React from "react";
import { Bar } from "@antv/g2plot";

const Income = () => {
  // const transactionsData = [
  //   { amount: 720, date: "Jan 3, '23", id: "1" },
  //   { amount: 560, date: "Dec 12, '22", id: "2" },
  //   { amount: 980, date: "Dec 3, '22", id: "3" },
  // ];
  const data = [
    { year: "Ju", value: 600 },
    { year: "Au", value: 400 },
    { year: "Se", value: 300 },
    { year: "Oc", value: 720 },
    { year: "No", value: 980 },
    { year: "De", value: 720 },
  ];
  const columnPlot = new Bar("container", {
    data,
    xField: "year",
    yField: "value",
  });

  return (
    <div>
      <h1>Income</h1>
      <p>
        Last <span>30 days</span>
      </p>
      <h2>$2,260</h2>
      {/* <div id="container">{columnPlot}</div> */}
    </div>
  );
};

export default Income;
