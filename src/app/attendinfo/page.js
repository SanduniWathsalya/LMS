"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import Sidebar from "../components/teacher_sidebar";
import { FaArrowLeft } from 'react-icons/fa';

export default function GradeInfoPage() {
  const router = useRouter();
  const params = useSearchParams();
  const grade = params.get('grade');

  const [selectedSession, setSelectedSession] = useState('');
  const [students, setStudents] = useState([]);
  const [reportDate, setReportDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState(null);

  // ✅ Fetch subjects and students when grade changes
  useEffect(() => {
    if (grade) {
      // Fetch subjects
      axios
        .get(`http://localhost/edupulse/attendence_api/get_subjects.php?grade=${grade}`)
        .then(res => {
          setSubjects(res.data);
          if (res.data.length > 0) {
            setSelectedSubject(res.data[0]);
          }
        })
        .catch(err => console.error("Subject load error:", err));

      // Fetch students for grade6, grade7, ...
      axios
        .get(`http://localhost/edupulse/attendence_api/get_students_by_grade.php?grade=grade${grade}`)
        .then(res => setStudents(res.data))
        .catch(err => console.error("Student load error:", err));
    }
  }, [grade]);

  return (
    <main>
      <div className="flex  bg-gray-100">
        <Sidebar />

        <div className="flex flex-col flex-1 overflow-y-auto">
          {/* Top Bar */}
          <div className="flex items-right h-28 bg-blue-950 border-b border-gray-200">
            <h2 className="text-white flex items-end mb-2 ml-4 text-lg font-semibold">Welcome to Teacher Dashboard</h2>

            <div className="flex items-end mb-2 justify-between space-x-4 ml-auto mr-4">
              <a href="#" className="relative flex flex-col items-center text-white hover:text-gray-300 group">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="group-hover:scale-110 transition-transform">
                  <path d="M12 2C10.9...Z" />
                </svg>
                <span className="absolute top-full mt-1 text-xs text-white bg-gray-800 px-1 py-0.5 rounded opacity-0 group-hover:opacity-100">Notifications</span>
              </a>
              <a href="#" className="relative flex flex-col items-center text-white hover:text-gray-300 group">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="group-hover:scale-110 transition-transform">
                  <path d="M10.09...Z" />
                </svg>
                <span className="absolute top-full mt-1 text-xs text-white bg-gray-800 px-1 py-0.5 rounded opacity-0 group-hover:opacity-100">Logout</span>
              </a>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-4">
            {/* Top controls */}
            <div className="flex justify-between items-center mb-4">
              <button onClick={() => router.push('/attendence')} className="flex items-center bg-blue-600 text-white px-3 py-1 rounded shadow hover:bg-blue-700">
                <FaArrowLeft className="mr-2" /> Back to Grades
              </button>
              <h2 className="font-bold text-xl text-blue-800">Grade: {grade}</h2>
            </div>

            {/* Session Selector */}
            <div className="text-center mb-4">
              <label className="mr-2 font-medium text-black">Session:</label>
              <select
                value={selectedSession}
                onChange={e => setSelectedSession(e.target.value)}
                className="border p-1 rounded text-blue-500"
              >
                <option value="">Select term</option>
                <option value="First Term">First Term</option>
                <option value="Second Term">Second Term</option>
                <option value="Third Term">Third Term</option>
              </select>
            </div>

            {/* Subject Button List */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {subjects.map(sub => (
                <button
                  key={sub.subid}
                  className={`px-4 py-1 border rounded shadow ${
                    selectedSubject?.subid === sub.subid
                      ? 'bg-blue-700 text-white'
                      : 'bg-white text-blue-600'
                  } hover:bg-blue-600 hover:text-white`}
                  onClick={() => setSelectedSubject(sub)}
                >
                  {sub.subid}
                </button>
              ))}
            </div>

            {/* Subject Info Header */}
            {selectedSubject && (
              <div className="flex justify-between items-center px-4 py-2 text-blue-800 text-sm md:text-base font-medium mb-4 border-t border-b border-gray-300">
                <div className="flex-1 text-left font-bold">
                  {selectedSubject.subid}
                </div>
                <div className="flex-1 text-center">
                  {selectedSubject.sub_name}
                </div>
                <div className="flex-1 text-right">
                  <input
                    type="date"
                    value={reportDate}
                    onChange={e => setReportDate(e.target.value)}
                    className="border p-1 bg-gray-100 text-black"
                  />
                </div>
              </div>
            )}

           {/* Title */}
<h2 className="text-center text-xl font-semibold underline mb-4 text-blue-700">
  Student List
</h2>

{/* Student Table */}
<table className="w-full table-auto border border-gray-300">
  <tbody>
    {students.map(st => (
      <tr key={st.id} className="text-center border-b text-black">
        <td className="border p-2 font-medium">{st.id}</td>
        <td className="border p-2">{st.name}</td>
        <td className="border p-2">
          <input
            type="checkbox"
            checked={st.present === '1'}
            onChange={() => {
              
              // Optional: toggle present state in future
            }}
          />
        </td>
      </tr>
    ))}
  </tbody>
</table>


            {students.length > 0 && (
              <div className="text-right mt-6">
                <button className="bg-green-600 hover:bg-green-700 px-6 py-2 text-white rounded shadow">
                  Report
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
