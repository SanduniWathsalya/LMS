"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TeacherDashboard() {
  const router = useRouter();
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [students, setStudents] = useState([]);
  const grades = Array.from({ length: 8 }, (_, i) => i + 6); // Grades 6 to 13

  const dummyStudentData = {
    6: [
      { id: 1, name: "John Doe", admission_number: "A001" },
      { id: 2, name: "Jane Smith", admission_number: "A002" },
      { id: 3, name: "Alice Johnson", admission_number: "A003" },
      { id: 5, name: "Bob Brown", admission_number: "A004" },
      { id: 6, name: "Alice Johnson", admission_number: "A003" },
      { id: 7, name: "Bob Brown", admission_number: "A004" },
    ],
    7: [
      { id: 3, name: "Alice Johnson", admission_number: "A003" },
      { id: 4, name: "Bob Brown", admission_number: "A004" },
    ],
    // Add more dummy data for other grades as needed
  };

  const fetchStudents = (grade) => {
    setSelectedGrade(grade);
    setStudents(dummyStudentData[grade] || []);
  };

  return (
    <main>
      <div className="flex-h-screen h-full bg-gray-100">
        {/* Top Bar */}
        <div className="flex items-end justify-between h-28 bg-blue-950 border-b border-gray-200 px-4">
          {/* Back Button */}
          <a
            href="/teacherdashboard"
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

          {/* Notifications & Logout */}
          <div className="flex items-end mb-2 space-x-4">
            {/* Notifications */}
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

            {/* Logout */}
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

        <div className="p-6 w-full">
          {/* Grade Buttons */}
          <div className="grid grid-cols-4 gap-8 mb-6 p-6 text-xl animate-fade-in">
            {grades.map((grade) => (
              <button
                key={grade}
                className="bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
                onClick={() => fetchStudents(grade)}
              >
                Grade {grade}
              </button>
            ))}
          </div>

          {/* Instructions */}
          <div className="border p-6 rounded-lg shadow-md bg-white text-black">
            <p className="text-blue-950 text-2xl font-bold mb-4 text-center">
              Click a grade and check your students' marks.
            </p>
          </div>

          {/* Display Students */}
          {selectedGrade && (
            <div className="mt-8 max-w-4xl mx-auto text-black">
              <h2 className="text-2xl font-bold mb-4 text-blue-800">
                Grade {selectedGrade} Students List
              </h2>
              <ul className="space-y-4">
                {students.map((student) => (
                  <li
                    key={student.id}
                    className="bg-white p-4 rounded shadow flex justify-between items-center"
                  >
                    <div>
                      <p className="font-semibold">{student.name}</p>
                      <p className="text-sm text-gray-600">
                        Admission No: {student.admission_number}
                      </p>
                    </div>
                    <div className="relative">
                      <select
                        className="bg-blue-600 text-white py-2 px-3 rounded hover:bg-blue-700"
                        onChange={(e) =>
                          router.push(`/grades/student/${student.id}?type=${e.target.value}&grade=${selectedGrade}`)

                        }
                      >
                        <option value="">View</option>
                        <option value="monthly">Monthly Test</option>
                        <option value="assignment">Assignment</option>
                        <option value="term">Term Test</option>
                      </select>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
