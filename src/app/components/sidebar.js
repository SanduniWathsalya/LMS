'use client';

import { useState } from 'react';
import Link from 'next/link';
import { X, Menu } from "lucide-react"; // Using Lucide icons


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-blue-500 text-yellow-300 rounded-md md:hidden"
      >
        {isOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-black md:hidden"
        >
          <X size={28} />
        </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-blue-950 text-white border-r border-gray-300 p-5 w-64 md:flex md:flex-col transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:relative`}
      >
        
        <h2 className="text-2xl font-semibold text-center text-white   mb-6">Edupulse</h2>
        <nav className="flex flex-col gap-4">
          <Link href="/employeedashboard" className="flex items-center px-4 py-2 bg-gray-200 text-black  hover:bg-gray-200 hover:text-black rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
            stroke="currentColor" className="w-4 mr-3">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M3 13h8V3H3zm10 8h8V11h-8zm-10 0h8v-6H3zm10-8h8V3h-8z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
             Dashboard
          </Link>
          <Link href="/Courses" className="flex items-center px-4 py-2  hover:bg-gray-200 hover:text-black rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
            stroke="currentColor" className="w-4 mr-3">
              <path strokeLinecap="round" strokeLinejoin="round"
              d="M12 2 1 7l11 5l9-4.09V14h2V7zM6 14.28v3.59L12 22l6-4.13v-3.59l-6 3.79z"/>
          </svg>
           Courses
          </Link>
          <Link href="/settings" className="flex items-center px-4 py-2  hover:bg-gray-200 hover:text-black rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
            stroke="currentColor" className="w-4 mr-3">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M16 13.5c-2.33 0-7 1.17-7 3.5V20h14v-3c0-2.33-4.67-3.5-7-3.5m-7-3c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3s1.34 3 3 3m9 0c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3s1.34 3 3 3M4 13.5C1.67 13.5 0 14.67 0 17v3h7v-3c0-2.33-1.67-3.5-3-3.5"/>
          </svg>
            Users
          </Link>
          <Link href="/employeepayments" className="flex items-center px-4 py-2  hover:bg-gray-200 hover:text-black rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
            stroke="currentColor" className="w-4 mr-3">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M4 6h16v2H4Zm0 12v-6h16v6Zm2-2h4v2H6Z"/>
          </svg>
           Payments
          </Link>
          <Link href="/settings" className="flex items-center px-4 py-2  hover:bg-gray-200  hover:text-black rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
            stroke="currentColor" className="w-4 mr-3">
            <path  strokeLinecap="round" strokeLinejoin="round"
              d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6l-4 4V6a2 2 0 0 1 2-2m0 2v14.17L5.17 18H20V6Z"/>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
            Chat
          </Link>
          <Link href="/settings" className="flex items-center px-4 py-2  hover:bg-gray-200 hover:text-black rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
            stroke="currentColor" className="w-4 mr-3">
            <path  strokeLinecap="round" strokeLinejoin="round"
              d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 18H5V10h14Zm-7-9h5v5h-5Z"/>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
            Schedule
          </Link>
          <Link href="/settings" className="flex items-center px-4 py-2  hover:bg-gray-200 hover:text-black rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
            stroke="currentColor" className="w-4 mr-3">
            <path  strokeLinecap="round" strokeLinejoin="round"
              d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
            Settings
          </Link>
        </nav>
      
      </div>
    </div>
    
  );
};

export default Sidebar;
