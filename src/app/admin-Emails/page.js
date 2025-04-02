"use client";
import { useState, useEffect } from "react";
import Sidebar from "../components/admin_sidebar";

const AdminEmails = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetch("http://localhost/edupulse/roles_api/get_notifications.php")
      .then((res) => res.json())
      .then((data) => setNotifications(data));
  }, []);

  const handleApprove = async (id, email, role) => {
    try {
        const response = await fetch("http://localhost/edupulse/roles_api/approveUser.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: id,
                email: email,
                role: role,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            alert(data.message);
        } else {
            alert("Approval failed. Please try again.");
            console.error("Server Error:", data);
        }
    } catch (error) {
        console.error("Request failed:", error);
    }
};

  
  
  return (
    <main>
      <div className="flex h-screen bg-gray-100">
      <Sidebar />
       {/* Main Content */}
       <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="flex items-right h- bg-blue-950 border-b border-gray-200">
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


        <div className="p-5">
            <h2 className="text-xl font-bold text-black mb-4">
              Pending Registrations
            </h2>
            {notifications.length === 0 ? (
              <p>No new registrations.</p>
            ) : (
              notifications.map((notif) => (
                <div
                  key={notif.id}
                  className="p-4 mb-2 bg-gray-300 text-black rounded flex justify-between"
                >
                  <p>{notif.message}</p>
                  <button
                    onClick={() =>
                      handleApprove(notif.id, notif.email, notif.role)
                    }
                    className={`px-4 py-1 rounded text-white ${
                      notif.status === "approved"
                        ? "bg-green-700 cursor-not-allowed"
                        : "bg-green-500 hover:bg-green-600"
                    }`}
                    disabled={notif.status === "approved"}
                  >
                    {notif.status === "approved" ? "Approved" : "Approve"}
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminEmails;
