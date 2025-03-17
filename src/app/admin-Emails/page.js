"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/admin_sidebar"

const AdminEmails = () => {
  const [emails, setEmails] = useState([]);
  const [error, setError] = useState(null);

  // Fetch pending emails when the component is mounted
  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const response = await axios.get('http://localhost/edupulse/admin_api/adminEmails.php'); // Assuming PHP backend API
        setEmails(response.data);
      } catch (err) {
        setError('Failed to fetch emails.');
      }
    };
    fetchEmails();
  }, []);

  // Function to handle confirming an email
  const handleConfirm = async (id, role) => {
    try {
      const response = await axios.post('http://localhost/edupulse/admin_api/approveUser.php', { id, role, status: 'approved' });
      if (response.data.message === "User status updated successfully.") {
        // Re-fetch the list of emails after successful confirmation
        const updatedEmails = emails.filter((email) => email.id !== id);
        setEmails(updatedEmails);
      }
    } catch (err) {
      setError('Failed to confirm user.');
    }
  };

  return (
    <main>
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="flex items-right h-12 bg-blue-950 border-b border-gray-200">
         

          {/* Notifications, Settings, Logout */}
          <div className="flex items-center space-x-4 ml-auto mr-4">
            <a href="#" className="text-white hover:text-white ">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M6.429 2.413a.75.75 0 0 0-1.13-.986l-1.292 1.48a4.75 4.75 0 0 0-1.17 3.024L2.78 8.65a.75.75 0 1 0 1.5.031l.056-2.718a3.25 3.25 0 0 1 .801-2.069z"
                />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-white ">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19.9 12.66a1 1 0 0 1 0-1.32l1.28-1.44a1 1 0 0 0 .12-1.17l-2-3.46a1 1 0 0 0-1.07-.48l-1.88.38a1 1 0 0 1-1.15-.66l-.61-1.83a1 1 0 0 0-.95-.68h-4a1 1 0 0 0-1 .68l-.56 1.83a1 1 0 0 1-1.15.66L5 4.79a1 1 0 0 0-1 .48L2 8.73a1 1 0 0 0 .1 1.17l1.27 1.44a1 1 0 0 1 0 1.32L2.1 14.1a1 1 0 0 0-.1 1.17l2 3.46a1 1 0 0 0 1.07.48l1.88-.38a1 1 0 0 1 1.15.66l.61 1.83a1 1 0 0 0 1 .68h4a1 1 0 0 0 .95-.68l.61-1.83a1 1 0 0 1 1.15-.66l1.88.38a1 1 0 0 0 1.07-.48l2-3.46a1 1 0 0 0-.12-1.17ZM18.41 14l.8.9l-1.28 2.22l-1.18-.24a3 3 0 0 0-3.45 2L12.92 20h-2.56L10 18.86a3 3 0 0 0-3.45-2l-1.18.24l-1.3-2.21l.8-.9a3 3 0 0 0 0-4l-.8-.9l1.28-2.2l1.18.24a3 3 0 0 0 3.45-2L10.36 4h2.56l.38 1.14a3 3 0 0 0 3.45 2l1.18-.24l1.28 2.22l-.8.9a3 3 0 0 0 0 3.98m-6.77-6a4 4 0 1 0 4 4a4 4 0 0 0-4-4m0 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2"
                />
              </svg>
            </a>
            <a href="#" className="flex items-center text-white hover:text-gray-100 ">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M10 15v-3H3v-2h7V7l5 5z" />
              </svg>
            </a>
          </div>
          </div>

        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="p-6 bg-gray-100 h-screen">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Pending Registration Emails</h1>
      
      {error && <div className="text-red-500 mb-4">{error}</div>}

      <div className="bg-white shadow-md rounded-lg p-6">
        <ul className="space-y-4">
          {emails.length === 0 ? (
            <li className="text-gray-500">No pending registrations.</li>
          ) : (
            emails.map((email) => (
              <li key={email.id} className="flex justify-between items-center border-b pb-4">
                <div className="flex flex-col">
                  <p className="font-semibold">{email.fullName}</p>
                  <p className="text-gray-600">{email.email}</p>
                </div>
                <div className="flex space-x-4">
                  <button
                    onClick={() => handleConfirm(email.id, email.role)}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => handleReject(email.id, email.role)}
                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
                  >
                    Reject
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
    </div>
    </div>
    </div>
    </main>
  );
};

export default AdminEmails;
