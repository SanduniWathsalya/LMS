"use client"
import { useState } from "react";

export default function UsersPage() {
    const [selectedGrade, setSelectedGrade] = useState("All");

  const [teachers] = useState([
    { id: "T001", name: "Ms. Silva", subject: "Math", photo: "/images/user.jpeg" },
    { id: "T002", name: "Mr. Perera", subject: "Science", photo: "/images/user5.jpeg" },
    { id: "T003", name: "Ms. Fernando", subject: "English", photo: "/images/user2.jpeg" },
    { id: "T004", name: "Mr. Mark", subject: "IT", photo: "/images/user6.jpeg" },
  ]);

  const [students] = useState([
    { sid: "ST6001", name: "Kevin Dohn", grade: "6", date: "2023-01-15", photo: "/images/student6.jpeg" },
    { sid: "ST6002", name: "Leo Philips", grade: "6", date: "2023-02-20", photo: "/images/student2.jpeg" },
    { sid: "ST6003", name: "Annah Smith", grade: "6", date: "2023-03-10", photo: "/images/student3.jpeg" },
    { sid: "ST8001", name: "Joe Litson", grade: "8", date: "2023-04-05", photo: "/images/student5.jpeg" },
    { sid: "ST8002", name: "Sellina Fransis", grade: "8", date: "2023-04-05", photo: "/images/student.jpeg" },
    { sid: "ST8003", name: "Mark Twin", grade: "8", date: "2023-04-05", photo: "/images/student4.jpeg" },
    { sid: "ST9001", name: "Jone Roninson", grade: "9", date: "2023-04-05", photo: "/images/student7.jpeg" },
    { sid: "ST9002", name: "Auther Dias", grade: "9", date: "2023-04-05", photo: "/images/student8.jpeg" },
  ]);

const grades = ["All", "6", "7", "8", "9", "10", "11", "12", "13"];

  const filteredStudents =
    selectedGrade === "All"
      ? students
      : students.filter((s) => s.grade === selectedGrade);

  return (
     <main>
    <div className=" bg-gray-100 h-screen">
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


    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Teachers Section */}
      <h2 className="text-2xl font-bold mb-4 text-blue-950">Teachers</h2>
      <div className="relative">
        <div className="flex overflow-x-auto space-x-4 pb-2 scrollbar-hide">
          {teachers.map((t) => (
            <div key={t.id} className="flex items-center bg-white shadow-md rounded-xl p-4 min-w-[300px]">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                <img src={t.photo} alt={t.name} className="w-full h-full object-cover" />
              </div>
              <div className="ml-4 text-black">
                <p className="text-sm font-bold">ID: {t.id}</p>
                <p className="text-base font-semibold">{t.name}</p>
                <p className="text-sm text-gray-600">{t.subject}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Students Section */}
      <h2 className="text-2xl font-bold mt-10 mb-4 text-blue-950">Students</h2>
<div className="flex justify-end mb-4">
  <div>
    <label className="text-blue-900 font-semibold mr-2">Filter by Grade:</label>
    <select
      value={selectedGrade}
      onChange={(e) => setSelectedGrade(e.target.value)}
      className="border border-blue-300 rounded px-3 py-1 text-blue-900"
    >
      {grades.map((grade) => (
        <option key={grade} value={grade}>
          {grade === "All" ? "All Grades" : `Grade ${grade}`}
        </option>
      ))}
    </select>
  </div>
</div>


      {/* Table Headers */}
      <div className="grid grid-cols-5 gap-4 font-bold text-blue-900 px-4 py-2 bg-blue-100 rounded-t-lg">
        <div>Photo</div>
        <div>Student ID</div>
        <div>Name</div>
        <div>Grade</div>
        <div>Registered Date</div>
      </div>

      {/* Student Rows */}
      <div className="flex flex-col w-full">
        {filteredStudents.map((s) => (
          <div
            key={s.sid}
            className="grid grid-cols-5 gap-4 items-center bg-white shadow-md p-4 border-b"
          >
            <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
              <img src={s.photo} alt={s.name} className="w-full h-full object-cover" />
            </div>
            <div className="text-lg font-bold text-gray-900">{s.sid}</div>
            <div className="text-gray-800">{s.name}</div>
            <div className="text-gray-800">{s.grade}</div>
            <div className="text-gray-800">{s.date}</div>
          </div>
        ))}
      </div>
    </div>
  
    </div>
     </div>
    </main>
  );
}
