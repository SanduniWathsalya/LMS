"use client";
import { useState } from "react";

export default function StudentRegistration() {
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    studentId: "",
    grade: "",
    address: "",
    phone: "",
    guardianName: "",
    guardianPhone: ""
  });

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "success" or "error"

  const grades = ["grade6", "grade7", "grade8", "grade9", "grade10", "grade11", "grade12", "grade13"];

  const handleGradeClick = (grade) => {
    setSelectedGrade(grade);
    setFormData((prev) => ({
      ...prev,
      grade: grade
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    const requiredFields = ["name", "email", "studentId", "grade", "address", "phone", "guardianName", "guardianPhone"];
    const hasEmptyField = requiredFields.some(field => !formData[field]);

    if (hasEmptyField) {
      setMessage("Please fill all the fields before submitting.");
      setMessageType("error");
      return;
    }

    try {
      const response = await fetch("http://localhost/edupulse/employee_api/register_student.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.status === "success") {
        setMessage(result.message);
        setMessageType("success");

        // Reset form
        setFormData({
          name: "",
          email: "",
          studentId: "",
          grade: "",
          address: "",
          phone: "",
          guardianName: "",
          guardianPhone: ""
        });
        setSelectedGrade(null);
      } else {
        setMessage(result.message);
        setMessageType("error");
      }
    } catch (error) {
      console.error("Error during fetch:", error);
      setMessage("Failed to register student. Please check your backend.");
      setMessageType("error");
    }
  };

  return (
    <main>
      <div className="bg-gray-100 min-h-screen">
        {/* Top Navbar */}
        <div className="flex items-end justify-between h-28 bg-blue-950 border-b border-gray-200 px-4">
          <a href="/employeedashboard" className="relative flex flex-col items-center text-white hover:text-gray-300 group">
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" className="transition-transform duration-200 group-hover:scale-110">
              <path fill="currentColor" d="M14 7l-5 5 5 5V7z" />
            </svg>
            <span className="absolute top-full mt-1 text-xs text-white bg-gray-800 px-1 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Back
            </span>
          </a>

          <div className="flex items-end mb-2 space-x-4">
            <a href="#" className="relative flex flex-col items-center text-white hover:text-gray-300 group">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="transition-transform duration-200 group-hover:scale-110">
                <path fill="currentColor" d="M12 2C10.9 2 10 2.9 10 4V4.29C7.19 5.17 5 7.92 5 11V16L3 18V19H21V18L19 16V11C19 7.92 16.81 5.17 14 4.29V4C14 2.9 13.1 2 12 2ZM12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22Z" />
              </svg>
              <span className="absolute top-full mt-1 text-xs text-white bg-gray-800 px-1 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Notifications
              </span>
            </a>

            <a href="#" className="relative flex flex-col items-center text-white hover:text-gray-300 group">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="transition-transform duration-200 group-hover:scale-110">
                <path fill="currentColor" d="M10.09 15.59L12.67 13H4V11H12.67L10.09 8.41L11.5 7L16.5 12L11.5 17L10.09 15.59ZM20 19H13V21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3H13V5H20V19Z" />
              </svg>
              <span className="absolute top-full mt-1 text-xs text-white bg-gray-800 px-1 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Logout
              </span>
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-gray-100 flex">
          {/* Grade List */}
          <div className="w-1/5 p-4 space-y-2 mt-4">
            {grades.map((grade) => (
              <div
                key={grade}
                onClick={() => handleGradeClick(grade)}
                className={`text-xl text-center py-3 rounded-md cursor-pointer shadow-md hover:opacity-90 transition duration-300 ${
                  selectedGrade === grade
                    ? "bg-white text-blue-950 border border-blue-950"
                    : "bg-blue-950 text-white"
                }`}
              >
                {grade.replace(/(\D+)(\d+)/, (_, word, number) =>
                  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() + " " + number
                )}
              </div>
            ))}
          </div>

          {/* Registration Form */}
          <div className="w-4/5 p-8 ">
            <h2 className="text-2xl font-bold text-blue-950 mb-6">Register a New Student</h2>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md space-y-4 ">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-black">Student Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full p-2 border rounded text-gray-600" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-2 border rounded text-gray-600" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black">Student ID</label>
                  <input type="text" name="studentId" value={formData.studentId} onChange={handleChange} required className="w-full p-2 border rounded text-gray-600" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black">Grade</label>
                  <input type="text" name="grade" value={formData.grade} readOnly className="w-full p-2 border rounded bg-gray-100 text-gray-600" placeholder="Select grade from left" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black">Address</label>
                  <input type="text" name="address" value={formData.address} onChange={handleChange} required className="w-full p-2 border rounded text-gray-600" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black">Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full p-2 border rounded text-gray-600" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black">Guardian's Name</label>
                  <input type="text" name="guardianName" value={formData.guardianName} onChange={handleChange} required className="w-full p-2 border rounded text-gray-600" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black">Guardian's Phone</label>
                  <input type="tel" name="guardianPhone" value={formData.guardianPhone} onChange={handleChange} required className="w-full p-2 border rounded text-gray-600" />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-2 rounded hover:from-blue-700 hover:to-blue-900 shadow-md transition transform hover:-translate-y-1 mb-2"
                >
                  Submit Registration
                </button>

                {message && (
                  <p className={` text-sm font-medium ${messageType === "success" ? "text-green-600" : "text-red-600"}`}>
                    {message}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
