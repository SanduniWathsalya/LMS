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
      <div className="flex h-screen bg-gray-100 mt-20">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="p-6 bg-gray-100 h-screen">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Employee Payments Dashboard
            </h1>

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
