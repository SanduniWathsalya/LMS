'use client';
import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend,
  Title,
  Tooltip
} from 'chart.js';
import { ChevronDown, ChevronUp } from 'lucide-react';

ChartJS.register(BarElement, CategoryScale, LinearScale, Legend, Title, Tooltip);

export default function FeeChart() {
  const allLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const paidData = [120, 110, 130, 100, 140, 150, 160, 170, 90, 130, 160, 150];
  const unpaidData = [80, 70, 90, 50, 60, 70, 60, 130, 50, 100, 120, 140];

  const [monthsToShow, setMonthsToShow] = useState(6);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top', labels: { color: '#1e3a8a' } },
    },
    scales: {
      x: { ticks: { color: '#1e3a8a' }, grid: { display: false } },
      y: { beginAtZero: true, ticks: { color: '#1e3a8a' }, grid: { color: '#e5e7eb' } },
    },
  };

  const data = {
    labels: allLabels.slice(-monthsToShow),
    datasets: [
      {
        label: 'Paid',
        data: paidData.slice(-monthsToShow),
        backgroundColor: '#3b82f6',
      },
      {
        label: 'Unpaid',
        data: unpaidData.slice(-monthsToShow),
        backgroundColor: '#93c5fd',
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded shadow mt-6 h-[400px]">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-blue-950">Paid/Unpaid Fees Report</h3>
        <div className="relative">
          <button
            className="text-sm px-3 py-1 border rounded flex items-center gap-1 bg-gray-100 hover:bg-gray-200 text-black"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {monthsToShow} Months
            {dropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-1 bg-white border rounded shadow z-10 w-28 text-black ">
              {[6, 12].map((value) => (
                <button
                  key={value}
                  onClick={() => {
                    setMonthsToShow(value);
                    setDropdownOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 "
                >
                  {value} Months
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
}
