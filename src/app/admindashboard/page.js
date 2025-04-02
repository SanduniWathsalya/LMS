"use client";
import { useState } from "react";
import Sidebar from "../components/admin_sidebar";
import AttendanceChart from "../components/AttendanceChart";


const Dashboard = () => {
  return (
    <main>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        {/* Main Content */}
        <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="flex items-right h-28 bg-blue-950 border-b border-gray-200">
          <h2 className="text-white flex items-end mb-2 ml-4 text-lg font-semibold">Welcome to Admin Dashboard</h2> 

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

            
          <div className="grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-4 sm:px-8">
    <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
        <div className="p-4 bg-blue-950"><svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z">
                </path>
            </svg></div>
        <div className="px-4 text-gray-700">
            <h3 className="text-sm tracking-wider">Total Students</h3>
            <p className="text-3xl">12,768</p>
        </div>
    </div>
    <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
        <div className="p-4 bg-blue-950 "><svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2">
                </path>
            </svg></div>
        <div className="px-4 text-gray-700">
            <h3 className="text-sm tracking-wider">Total Teachers </h3>
            <p className="text-3xl">500</p>
        </div>
    </div>
    <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
        <div className="p-4 bg-blue-950"><svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z">
                </path>
            </svg></div>
        <div className="px-4 text-gray-700">
            <h3 className="text-sm tracking-wider">Total Comment</h3>
            <p className="text-3xl">142,334</p>
        </div>
    </div>
    <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
        <div className="p-4 bg-blue-950"><svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4">
                </path>
            </svg></div>
        <div className="px-4 text-gray-700">
            <h3 className="text-sm tracking-wider">Server Load</h3>
            <p className="text-3xl">34.12%</p>
        </div>
    </div>

     {/*User Activity*/}
     <div className="flex justify-between gap-20 sm:grid-cols-3  w-full h-auto ">
  {/* User Activity Section */}
  <div className="bg-white mt-5 flex-[2] justify-between min-w-[1000px] border rounded-sm overflow-hidden shadow">
    <h1 className="text-xl font-bold text-center text-black mt-5">Student Attendence</h1>
    <AttendanceChart />
  </div>
    

 
</div>
 
    
  </div>
</div>


        </div>
        
      
    </main>
  );
};

export default Dashboard;
