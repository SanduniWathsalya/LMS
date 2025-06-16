import { Bar } from "react-chartjs-2";

export default function StudyStatistics() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Learning",
        backgroundColor: "#FFA07A",
        data: [3, 4, 4, 5, 6, 6, 7],
      },
      {
        label: "Writing",
        backgroundColor: "#6A5ACD",
        data: [2, 3, 4, 3, 4, 3, 5],
      },
      {
        label: "Reading",
        backgroundColor: "#90EE90",
        data: [4, 5, 6, 6, 5, 6, 7],
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded shadow-md col-span-2">
      <h3 className="font-semibold mb-4">Study Statistics</h3>
      <Bar data={data} />
    </div>
  );
}
