import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import Chart from "chart.js/auto";
import { Scatter, Line } from "react-chartjs-2";
import "./LineChart.css";

const ScatterChart = (props) => {
 

    ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);
    const labels = props.labels ? props.labels : null;
    
    const detectColor = () => {
      try {
        if (
          props.data[props.data.length - 1] == props.data[props.data.length - 2]
        ) {
          return "#B4B4B8";
        } else if (
          props.data[props.data.length - 1] > props.data[props.data.length - 2]
        ) {
          return "#0ead98";
        } else {
          return "#db5541";
        }
      } catch (e) {
        console.log(e);
        return "#B4B4B8";
      }
    };
    const data = {
      labels: labels,
      datasets: [
        {
          label: props.globalLabel || "نمودار",
          backgroundColor: props.backgroundColor || "#007bffb4",
          data: props.data,
          borderColor: detectColor,
        },
      ],
    };
  

  return (
    <div className={props.className}>
      {!!props.data && !!data && (
        <Line
          style={ props.style ? { ...props.style ,display: "inline", paddingTop: "7px" }:{ display: "inline", paddingTop: "7px" }}

          options={{
            elements: { point: { radius: 0 } },
            responsive: true,
            maintainAspectRatio: true,
            plugins: { legend: { display: false } },
            scales: {
              x: {
                border: {
                  display: false,
                },
                ticks: {
                  display: false,
                },
                grid: {
                  display: false,
                },
              },
              y: {
                border: {
                  display: false,
                },
                ticks: {
                  display: false,
                },
                grid: {
                  display: false,
                },
              },
            },
           animation:false
          }}

          data={data}
        />
      )}
    </div>
  );
};

export default React.memo(ScatterChart);
