"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';

export default function StudentMarksPage() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const name = searchParams.get("name");
  const admission = searchParams.get("admission");
  const studentId = useSearchParams().get("id");

  const [marksData, setMarksData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost/marks_api/get_marks.php?id=${studentId}&type=${type}`)
      .then((res) => res.json())
      .then((data) => setMarksData(data));
  }, [studentId, type]);

  if (!marksData) return <div>Loading...</div>;

  const chartData = {
    labels: marksData.map((m) => m.subject),
    datasets: [{
      label: `${type} Marks`,
      data: marksData.map((m) => m.marks),
      backgroundColor: 'rgba(59,130,246,0.6)', // blue-500
    }]
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-4">{name}</h1>
      <p className="text-center text-gray-600 mb-4">Admission No: {admission}</p>
      <div className="max-w-3xl mx-auto">
        <Bar data={chartData} />
      </div>
    </div>
  );
}
