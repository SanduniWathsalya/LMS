"use client";
import Link from 'next/link';
import { FaUserPlus, FaSignInAlt, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 sm:px-8 py-3 bg-blue-900/80 backdrop-blur-sm border-b border-blue-400/20">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent transition-all hover:scale-105 ml-2 sm:ml-5">
            eduPulse
          </p>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 text-blue-200 hover:text-white transition-colors"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
      </button>

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center space-x-4 mr-5">
        <Link href="/adminsignup">
          <button className="flex items-center px-4 py-2 sm:px-6 sm:py-2.5 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-sm font-semibold rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:ring-2 hover:ring-white/30 gap-1.5">
            <FaUserPlus className="w-4 h-4" />
            <span>Sign Up</span>
          </button>
        </Link>

        <Link href="/loginroles">
          <button className="flex items-center px-4 py-2 sm:px-6 sm:py-2.5 bg-gradient-to-r from-purple-600 to-purple-400 text-white text-sm font-semibold rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:ring-2 hover:ring-white/30 gap-1.5">
            <FaSignInAlt className="w-4 h-4" />
            <span>Login</span>
          </button>
        </Link>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-blue-900/95 backdrop-blur-sm px-4 py-4 space-y-4">
          <Link href="/adminsignup">
            <button 
              className="flex items-center w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-base font-medium rounded-lg gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaUserPlus className="w-5 h-5" />
              <span>Sign Up</span>
            </button>
          </Link>

          <Link href="/loginroles">
            <button 
              className="flex items-center w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-400 text-white text-base font-medium rounded-lg gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaSignInAlt className="w-5 h-5" />
              <span>Login</span>
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}