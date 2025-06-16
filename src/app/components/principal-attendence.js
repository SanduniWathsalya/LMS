import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// ✅ Register necessary components for Doughnut chart
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Present", "Absent", "Late Coming"],
  datasets: [
    {
      data: [60, 20, 16],
      backgroundColor: ["#4B9EFF", "#1E40AF", "#1E3A8A"],
    },
  ],
};

export default function Attendance() {
  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-blue-950">Attendance</h2>
      <Doughnut data={data} />
    </div>
  );
}
