"use client";
import { useState } from "react";

const grades = [6, 7, 8, 9, 10, 11, 12, 13];
const initialStudentData = {
  6: ["Mark Twin", "Jenny Asmith", "Kevin Foll", "Jerry Nushell", "Jaden Doe"],
  7: ["Student D", "Student E", "Student F"],
  8: ["Student G", "Student H", "Student I"],
  9: ["Student J", "Student K", "Student L"],
  10: ["Student M", "Student N", "Student O"],
  11: ["Student P", "Student Q", "Student R"],
  12: ["Student S", "Student T", "Student U"],
  13: ["Student V", "Student W", "Student X"],
};

export default function Attendance() {
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [studentData, setStudentData] = useState(initialStudentData);
  const [newStudent, setNewStudent] = useState("");

  const handleAddStudent = () => {
    if (newStudent.trim() !== "" && selectedGrade) {
      setStudentData((prevData) => ({
        ...prevData,
        [selectedGrade]: [...prevData[selectedGrade], newStudent],
      }));
      setNewStudent(""); // Clear input field
    }
  };

  return (
    <main>
      <div className="h-screen bg-gray-100">
        <div className="flex items-end justify-between h-28 bg-blue-950 border-b border-gray-200 px-4">
          {/* Back Button (Left Corner) */}
          <a
            href="/marks"
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

        {/* Grade Selection Cards */}
<div className="grid grid-cols-4 gap-8 mb-6 p-6 text-xl">
  {grades.map((grade) => (
    <button
      key={grade}
      onClick={() => setSelectedGrade(grade)}
      className={`p-4 rounded-lg shadow-md transition text-white ${
        selectedGrade === grade ? "bg-blue-950" : "bg-blue-500 hover:bg-blue-600"
      }`}
    >
      Grade {grade}
    </button>
  ))}
</div>


        {/* Attendance Section */}
        <div className="border p-6 rounded-lg shadow-md bg-white text-black">
          {selectedGrade ? (
            <div>
              <h2 className="text-2xl font-bold mb-4 text-center text-blue-950">
                Students in Grade {selectedGrade}
              </h2>
              <ul className="list-decimal pl-5">
                {studentData[selectedGrade].map((student, index) => (
                  <li key={index}>{student}</li>
                ))}
              </ul>

              {/* Add Student Section */}
              <div className="mt-6 flex items-center gap-4">
                <input
                  type="text"
                  value={newStudent}
                  onChange={(e) => setNewStudent(e.target.value)}
                  className="border rounded-lg p-2 w-full text-black"
                  placeholder="Enter student name"
                />
                <button
                  onClick={handleAddStudent}
                  className="bg-blue-950 text-white p-2 rounded-lg shadow-md hover:bg-green-600 transition"
                >
                  Add Students
                </button>
              </div>
            </div>
          ) : (
            <p className="text-blue-950 text-2xl font-bold mb-4 text-center">
              Click a grade and check your students' attendance.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
