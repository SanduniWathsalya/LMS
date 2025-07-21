"use client";
import { useState } from 'react';
import Sidebar from "../components/teacher_sidebar";
import { useRouter } from 'next/navigation';

export default function AttendancePage() {
  const [selectedGrade, setSelectedGrade] = useState(null);
  const grades = [6, 7, 8, 9, 10, 11, 12, 13];
  const router = useRouter();

  const handleGradeClick = (grade) => {
    setSelectedGrade(grade);
    router.push(`/attendinfo?grade=${grade}`);
  };

  return (
    <main>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />

        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="flex items-right h-28 bg-blue-950 border-b border-gray-200">
            <h2 className="text-white flex items-end mb-2 ml-4 text-lg font-semibold">Welcome to Teacher Dashboard</h2>

            <div className="flex items-end mb-2 justify-between space-x-4 ml-auto mr-4">
              <a href="#" className="relative flex flex-col items-center text-white hover:text-gray-300 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                  className="transition-transform duration-200 group-hover:scale-110">
                  <path
                    fill="currentColor"
                    d="M12 2C10.9 2 10 2.9 10 4V4.29C7.19 5.17 5 7.92 5 11V16L3 18V19H21V18L19 16V11C19 7.92 16.81 5.17 14 4.29V4C14 2.9 13.1 2 12 2ZM12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22Z"
                  />
                </svg>
                <span className="absolute top-full mt-1 text-xs text-white bg-gray-800 px-1 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Notifications
                </span>
              </a>

              <a href="#" className="relative flex flex-col items-center text-white hover:text-gray-300 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                  className="transition-transform duration-200 group-hover:scale-110">
                  <path
                    fill="currentColor"
                    d="M10.09 15.59L12.67 13H4V11H12.67L10.09 8.41L11.5 7L16.5 12L11.5 17L10.09 15.59ZM20 19H13V21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3H13V5H20V19Z"
                  />
                </svg>
                <span className="absolute top-full mt-1 text-xs text-white bg-gray-800 px-1 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Logout
                </span>
              </a>
            </div>
          </div>

          {/* Grade Selection */}
          <main className="p-6 bg-gray-100 text-black rounded-b-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8">
              {grades.map((grade) => (
                <button
                  key={grade}
                  onClick={() => handleGradeClick(grade)}
                  className="bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-lg font-semibold shadow-md"
                >
                  Grade {grade}
                </button>
              ))}
            </div>
            <p className="text-center mt-8 text-lg font-semibold text-[#0f1e4c]">
              Click a grade and check your students' attendance.
            </p>
          </main>
        </div>
      </div>
    </main>
  );
}
