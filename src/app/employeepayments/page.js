"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/employee_sidebar";

const EmployeePayments = () => {
  const [students, setStudents] = useState([]);
  const [paidCount, setPaidCount] = useState(0);
  const [unpaidCount, setUnpaidCount] = useState(0);
  const [changes, setChanges] = useState({}); // Track modified statuses
  const [message, setMessage] = useState("");

  // Fetch students from PHP backend
  useEffect(() => {
    axios
      .get("http://localhost/edupulse/employee_api/payments.php")
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Calculate Paid & Unpaid counts
  useEffect(() => {
    calculateCounts(students);
  }, [students]);

  const calculateCounts = (data) => {
    const paid = data.filter((student) => student.status === "Paid").length;
    const unpaid = data.length - paid;
    setPaidCount(paid);
    setUnpaidCount(unpaid);
  };

  // Toggle status locally
  const togglePaymentStatus = (id, status) => {
    const newStatus = status === "Paid" ? "Not Paid" : "Paid";

    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id ? { ...student, status: newStatus } : student
      )
    );

    setChanges((prevChanges) => ({
      ...prevChanges,
      [id]: newStatus, // Track changes
    }));
  };

  // Save changes to database
  const saveChanges = () => {
    axios
      .post("http://localhost/edupulse/employee_api/update_payments.php", {
        changes,
      })
      .then((response) => {
        setMessage("Update successful!");
        setChanges({}); // Clear changes
      })
      .catch((error) => {
        console.error("Error saving changes:", error);
        setMessage("Update failed!");
      });
  };

  return (
    <main>
      <div className="flex h-screen bg-gray-100 ">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="flex items-right h-28 bg-blue-950 border-b border-gray-200">
          <h2 className="text-white flex items-end mb-2 ml-4 text-lg font-semibold">Welcome to Employee Dashboard</h2> 

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





          <div className="p-6  bg-gray-100 w-full">
           

            {/* Payment Summary */}
            <div className="flex justify-between bg-white p-4 rounded-lg shadow-md mb-6">
              <div className="text-green-600 font-bold text-lg">Paid: {paidCount}</div>
              <div className="text-red-600 font-bold text-lg">Not Paid: {unpaidCount}</div>
            </div>

            {/* Students Table */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm">
                    <th className="py-2">Student Name</th>
                    <th className="py-2">Status</th>
                    <th className="py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr key={student.id} className="border-b text-black">
                      <td className="py-2 text-center">{student.student_name}</td>
                      <td
                        className={`py-2 text-center ${
                          student.status === "Paid" ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {student.status}
                      </td>
                      <td className="py-2 text-center">
                        <button
                          className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-950"
                          onClick={() => togglePaymentStatus(student.id, student.status)}
                        >
                          Change Status
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Save Button */}
            {Object.keys(changes).length > 0 && (
              <div className="text-right mt-4">
                <button
                  className="bg-green-600 text-white px-6 py-1 rounded hover:bg-green-800"
                  onClick={saveChanges}
                >
                  Save Changes
                </button>
              </div>
            )}

            {/* Success Message */}
            {message && <p className="text-center text-green-600 mt-2">{message}</p>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default EmployeePayments;
