'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { X, Menu, LayoutDashboard, Book,FileBarChart, CheckCheck, MessageSquare, Calendar } from "lucide-react";


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get the current route

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: 'Dashboard', path: '/employeedashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'Courses', path: '/Courses', icon: <Book size={20} /> },
    { name: 'Marks', path: '/marks', icon: <FileBarChart size={20} /> },
    { name: 'Attendence', path: '/attendence', icon: <CheckCheck size={20} /> },
    { name: 'Chat', path: '/chat', icon: <MessageSquare size={20} /> },
    { name: 'Schedule', path: '/schedule', icon: <Calendar size={20} /> },
  ];

  return (
    <div className="flex">
      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 bg-blue-500 text-yellow-300 rounded-md md:hidden"
      >
        {isOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-blue-950 text-white border-r border-gray-300 p-5 w-64 md:flex md:flex-col transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:relative`}
      >
       

        <nav className="flex flex-col gap-4 mt-20">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-200 hover:text-black ${
                pathname === item.path ? 'bg-white text-black' : ''
              }`}
            >
              {item.icon} {/* Display the icon */}
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
