"use client";

import Sidebar from "../components/teacher_sidebar";
import { useRouter } from "next/navigation";

export default function TeacherDashboard() {
  const router = useRouter();
  const grades = Array.from({ length: 8 }, (_, i) => i + 6); // Grades 6 to 13

  return (
    <main>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        {/* Main Content */}
        <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="flex items-right h-28 bg-blue-950 border-b border-gray-200">
          <h2 className="text-white flex items-end mb-2 ml-4 text-lg font-semibold">Welcome to Teacher Dashboard</h2> 

            {/* Notifications, Logout */}
            <div className="flex items-end mb-2  justify-between space-x-4 ml-auto mr-4">
            <a href="#" className="relative flex flex-col items-center text-white hover:text-gray-300 group">
            {/* Logout Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"  className="transition-transform duration-200 group-hover:scale-110">
            <path 
              fill="currentColor" 
              d="M12 2C10.9 2 10 2.9 10 4V4.29C7.19 5.17 5 7.92 5 11V16L3 18V19H21V18L19 16V11C19 7.92 16.81 5.17 14 4.29V4C14 2.9 13.1 2 12 2ZM12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22Z"
            />
          </svg>
          {/* Tooltip (Under the Icon) */}
          <span className="absolute top-full mt-1 text-xs text-white bg-gray-800 px-1 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Notifications
          </span>
        </a>

              
        <a href="#" className="relative flex flex-col items-center text-white hover:text-gray-300 group">
          {/* Logout Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"  className="transition-transform duration-200 group-hover:scale-110">
            <path 
              fill="currentColor" 
              d="M10.09 15.59L12.67 13H4V11H12.67L10.09 8.41L11.5 7L16.5 12L11.5 17L10.09 15.59ZM20 19H13V21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3H13V5H20V19Z"
            />
          </svg>

          {/* Tooltip (Under the Icon) */}
          <span className="absolute top-full mt-1 text-xs text-white bg-gray-800 px-1 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Logout
          </span>
        </a>
        </div>
          </div>


        <div className=" p-6 w-full">
          <h1 className="text-5xl font-bold text-center mt-8 mb-6 text-blue-700">
            Grab your Students' Marks
          </h1>
          <p className="text-lg text-center mb-6">
            Select a grade to view students' marks. Click on a grade to see detailed marks.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {grades.map((grade) => (
              <button
                key={grade}
                className="bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
                onClick={() => router.push(`/grades/${grade}`)}
              >
                Grade {grade}
              </button>
            ))}
          </div>
        </div>
      </div>
      </div>
    </main>
  );
}
