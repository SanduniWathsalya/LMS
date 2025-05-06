import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, CategoryScale } from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale);

const AttendanceChart = ({ attendanceData }) => {
  const dates = attendanceData.map((item) => item.date);
  const statusValues = attendanceData.map((item) => (item.status === "Present" ? 1 : 0));

  const chartData = {
    labels: dates,
    datasets: [
      {
        label: "Attendance (1 = Present, 0 = Absent)",
        data: statusValues,
        borderColor: "blue",
        backgroundColor: "rgba(0,0,255,0.2)",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        ticks: {
          callback: (value) => (value === 1 ? "Present" : "Absent"),
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default AttendanceChart;
