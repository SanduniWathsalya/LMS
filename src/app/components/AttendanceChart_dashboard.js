"use client"; 
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const AttendencesChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July","August","September","October","November","December"],
        datasets: [
          {
            label: "Student Attendence",
            data: [112, 119, 30, 102, 201, 132, 142],
            backgroundColor: "rgba(243, 243, 243, 0.2)",
            borderColor: "rgba(0, 0, 139, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                ticks: {
                  color: "black", // Set X-axis label text color to black
                },
              },
              y: {
                ticks: {
                  color: "black", // Set Y-axis label text color to black
                  beginAtZero: true,
                },
            },
          },
          plugins: {
            legend: {
              labels: {
                color: "black", // Set legend text color to black
              },
            },
          },
        },
      });
    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className="container w-[1000px] ] mx-auto px-10 py-12 mt-3">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default AttendencesChart;
