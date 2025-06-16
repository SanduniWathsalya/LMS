"use client"
import "../../../.venv/Lib/site-packages/chart-setup";

import Sidebar from "../components/principal-sidebar";
import Header from "../components/principal-header";
import ContinueClasses from "../components/principal-ContinueClasses";
import EventCalendar from "../components/principal-EventCalendar";

import ExamResults from "../components/principal-ExamResults";
import Progress from "../components/principal-Progress";
import Attendance from "../components/principal-attendence";

export default function PrincipalDashboard() {
  return (
    <main>
            <div className="flex h-screen overflow-hidden">
            <Sidebar />
            {/* Main Content */}
            <div className="flex flex-col flex-1 overflow-y-auto">
            <div className="flex items-right h-28 bg-blue-950 border-b border-gray-200">
              <h2 className="text-white flex items-end mb-2 ml-4 text-lg font-semibold">Welcome to Principal Dashboard</h2> 
    
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



     <div className="flex-1 bg-gray-100 overflow-y-scroll p-6">
  <Header />

  <div className="space-y-6 mt-6">
    {/* 1. Continue Classes - full width */}
    <ContinueClasses />

    {/* 2. First Row: Exam Results (left) and Event Calendar (right) */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
  {/* Left column spans 2 columns */}
  
  <div className="lg:col-span-2">
    <ExamResults />

    {/* New div below ExamResults for Attendance & Progress */}
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <Attendance />
      <Progress />
    </div>
  </div>

  {/* Right column: Event Calendar */}
  <div>
    <EventCalendar />
  </div>
</div>

</div>
</div>
       </div>
    </div>
     </main>
  );
}
