"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import RegisteredUserList from "../components/RegisteredUserList";
import { FaUserTie } from "react-icons/fa"; // Import icon at the top
import { GiTeacher } from "react-icons/gi"; // Import the teacher icon


export default function AdminEmails() {
  const [notifications, setNotifications] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch("http://localhost/edupulse/roles_api/get_notifications.php")
      .then((res) => res.json())
      .then((data) => {
        setNotifications(data);
      });
  }, []);

  const principalRequests = notifications.filter(
    (n) => n.role === "principal" && n.status !== "approved"
  );
  const teacherRequests = notifications.filter(
    (n) => n.role === "teacher" && n.status !== "approved"
  );
  const employeeRequests = notifications.filter(
    (n) => n.role === "employee" && n.status !== "approved"
  );

  const approvedPrincipals = notifications.filter(
    (n) => n.role === "principal" && n.status === "approved"
  );
  const approvedTeachers = notifications.filter(
    (n) => n.role === "teacher" && n.status === "approved"
  );
  const approvedEmployees = notifications.filter(
    (n) => n.role === "employee" && n.status === "approved"
  );

  return (
     <main>
    <div className=" bg-gray-100">
      <div className="flex items-end justify-between h-28 bg-blue-950 border-b border-gray-200 px-4">
        {/* Back Button (Left Corner) */}
        <a
          href="/admindashboard"
          className="relative flex flex-col items-center text-white hover:text-gray-300 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            className="transition-transform duration-200 group-hover:scale-110"
          >
            <path fill="currentColor" d="M14 7l-5 5 5 5V7z" />
          </svg>
          <span className="absolute top-full mt-1 text-xs text-white bg-gray-800 px-1 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Back
          </span>
        </a>

        {/* Notifications & Logout (Right Corner) */}
        <div className="flex items-end mb-2 space-x-4">
          <a
            href="#"
            className="relative flex flex-col items-center text-white hover:text-gray-300 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="transition-transform duration-200 group-hover:scale-110"
            >
              <path
                fill="currentColor"
                d="M12 2C10.9 2 10 2.9 10 4V4.29C7.19 5.17 5 7.92 5 11V16L3 18V19H21V18L19 16V11C19 7.92 16.81 5.17 14 4.29V4C14 2.9 13.1 2 12 2ZM12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22Z"
              />
            </svg>
            <span className="absolute top-full mt-1 text-xs text-white bg-gray-800 px-1 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Notifications
            </span>
          </a>

          <a
            href="#"
            className="relative flex flex-col items-center text-white hover:text-gray-300 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="transition-transform duration-200 group-hover:scale-110"
            >
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

    <div className="p-6">
      <h2 className="text-xl font-bold mb-6 text-blue-950">New Requests</h2>

      {/* Top Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
       
  <div
  onClick={() => router.push("/principalrequests")}
  className="cursor-pointer bg-blue-100 hover:bg-blue-200 p-4 rounded shadow flex items-center gap-4"
  >
  {/* Icon */}
  <div className="text-blue-950 text-4xl">
    <FaUserTie />
  </div>

  {/* Text */}
  <div>
    <h3 className="text-xl font-bold text-blue-950">Principal Requests</h3>
    <p className="text-black">{principalRequests.length} pending</p>
  </div>
</div>

    <div
  onClick={() => router.push("/teacherrequests")}
  className="cursor-pointer bg-green-100 hover:bg-green-200 p-4 rounded shadow flex items-center gap-4"
>
  {/* Icon */}
  <div className="text-green-900 text-4xl">
    <GiTeacher />
  </div>

  {/* Text */}
  <div>
    <h3 className="text-xl font-bold text-green-900">Teacher Requests</h3>
   <p className="text-black">{teacherRequests.length} pending</p>
  </div>
</div>
        
        
        <div
  onClick={() => router.push("/employeerequests")}
  className="cursor-pointer bg-yellow-100 hover:bg-yellow-200 p-4 rounded shadow flex items-center gap-4"
>
  {/* Icon */}
  <div className="text-yellow-700 text-4xl">
    <FaUserTie />
  </div>

  {/* Text */}
  <div>
    <h3 className="text-xl font-bold text-yellow-900">Employee Requests</h3>
    <p className="text-black">{employeeRequests.length} pending</p>
  </div>
</div>

      </div>

      {/* Bottom Approved Users */}
      <RegisteredUserList title="Registered Principals" users={approvedPrincipals} />
      <RegisteredUserList title="Registered Teachers" users={approvedTeachers} />
      <RegisteredUserList title="Registered Employees" users={approvedEmployees} />
    </div>
    </div>
    </main>
  );
}
