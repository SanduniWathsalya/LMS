"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function StudentDetails({ params }) {
  const { id } = params;
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const grade = searchParams.get("grade");

  const [student, setStudent] = useState(null);
  const [graphData, setGraphData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:5000/student/${id}?type=${type}&grade=${grade}`);
        const data = await res.json();
        setStudent(data.student);
        setGraphData(data.graphData);
      } catch (error) {
        console.error("Failed to fetch student data:", error);
      }
    };
    fetchData();
  }, [id, type, grade]);

  if (!student || !graphData) {
    return <p className="text-center text-xl mt-10">Loading student data...</p>;
  }

  const chartData = {
    labels: graphData.map((d) => d.month),
    datasets: [
      {
        label: "Marks",
        data: graphData.map((d) => d.marks),
        backgroundColor: "rgba(30, 64, 175, 0.7)", // Blue
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: `${type.toUpperCase()} Marks for ${student.name}` },
    },
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-4">
        {student.name}'s {type} Results - Grade {grade}
      </h1>
      <p className="text-center text-gray-600 mb-8">Admission No: {student.admission_number}</p>

      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}
