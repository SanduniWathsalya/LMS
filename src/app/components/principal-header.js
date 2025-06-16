import { useState } from "react";
import { User, Settings, LogOut } from 'lucide-react'; // Install via: npm install lucide-react

export default function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="relative flex items-center p-4 border-b  shadow-sm">
      {/* Left-side: Session Info */}
      <div className="flex flex-col text-sm">
        <span className="font-semibold text-black">2025 January Session</span>
        <span className="text-gray-500 text-xs">First Term</span>
      </div>

      {/* Right-side: Profile Info */}
      <div
        className="ml-auto relative flex items-center space-x-3 text-black cursor-pointer group"
        onClick={() => setDropdownOpen(!isDropdownOpen)}
      >
        {/* Profile Image */}
        <img
          src="/images/user5.jpeg"
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover border"
        />

        {/* Name and Role */}
        <div className="flex flex-col text-sm">
          <span className="font-semibold">Paul Willson</span>
          <span className="text-gray-500 text-xs">Principal</span>
        </div>

        {/* Dropdown Arrow */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 24 24"
          className={`transition-transform duration-200 ${
            isDropdownOpen ? "rotate-180" : ""
          }`}
        >
          <path d="M7 10l5 5 5-5z" />
        </svg>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute right-0 top-full mt-2 w-44 bg-white border rounded shadow-md z-50">
            <ul className="py-2 text-sm text-gray-700">
  <li className="group px-4 py-2 hover:bg-blue-200 cursor-pointer flex items-center justify-between gap-2">
    <div className="flex items-center gap-2">
      <User className="w-4 h-4" /> Profile
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-gray-600"
    >
      <path d="M10 17l5-5-5-5v10z" />
    </svg>
  </li>
  <li className="group px-4 py-2 hover:bg-blue-200 cursor-pointer flex items-center justify-between gap-2">
    <div className="flex items-center gap-2">
      <Settings className="w-4 h-4" /> Settings
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-gray-600"
    >
      <path d="M10 17l5-5-5-5v10z" />
    </svg>
  </li>
  <li className="group px-4 py-2 hover:bg-blue-200 cursor-pointer flex items-center justify-between gap-2">
    <div className="flex items-center gap-2">
      <LogOut className="w-4 h-4" /> Logout
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-gray-600"
    >
      <path d="M10 17l5-5-5-5v10z" />
    </svg>
  </li>
</ul>

          </div>
        )}
      </div>
    </header>
  );
}
