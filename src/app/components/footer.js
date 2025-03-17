"use client"
import Link from 'next/link';
import "@fortawesome/fontawesome-free/css/all.min.css";


export default function Footer() {
    return (
<div>
<footer className="bg-gray-900 w-full text-white py-8 ">
<div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
  {/* First Column */}
  <div>
    <h2 className="text-2xl font-bold mb-4">eduPulse</h2>
    <p className="text-sm">
    eduPulse is the world's best student management system. 
    Our student management system has more features than any student management system in the market.
    Your satisfaction is our priority.
    </p>
  </div>

  {/* Second Column */}
  <div className="flex flex-col items-center text-center">
  <h2 className="text-lg font-bold mb-4">Navigations</h2>
  <ul className="space-y-4">
    <li>
      <a href="/adminsignup" className="hover:font-bold">
        Signup
      </a>
    </li>
    <li>
      <a href="/loginroles" className="hover:font-bold">
        Login
      </a>
    </li>
    <li>
      <a href="/contactus" className="hover:font-bold">
        Contact Us
      </a>
    </li>
  </ul>
</div>



  {/* Third Column */}
  <div className="flex flex-col items-center text-center">
  <h2 className="text-lg font-bold mb-4">Follow Us</h2>
  <div className="flex flex-col items-center space-y-2 text-lg">
    <a
      href="https://www.facebook.com/share/14s4caA2tgM/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-500"
    >
      <i className="fab fa-facebook-f"></i>
    </a>
    
    <a
      href="https://www.instagram.com/frithcode_technologies?igsh=NnE5cmtneGUyNWF5"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-pink-500"
    >
      <i className="fab fa-instagram"></i>
    </a>
    <a
      href="https://www.linkedin.com/company/frithcode-technologies/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-700"
    >
      <i className="fab fa-linkedin-in"></i>
    </a>
  </div>
</div>

</div>
<div className="mt-8 text-center text-sm text-gray-400">
  &copy; {new Date().getFullYear()} eduPulse. All rights reserved.
</div>
</footer>
</div>
  );
}