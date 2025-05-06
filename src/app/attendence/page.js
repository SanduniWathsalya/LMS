// pages/attendance.js
"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AttendancePage() {
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [attendanceData, setAttendanceData] = useState([]);

  const grades = [6, 7, 8, 9, 10, 11, 12, 13];

  const fetchStudents = async (grade) => {
    try {
      const response = await axios.get(`http://localhost/edupulse/get_students.php?grade=${grade}`);
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const fetchAttendance = async () => {
    try {
      const response = await axios.get(
        `http://localhost/edupulse/get_attendance.php?student_id=${selectedStudent.id}&start_date=${startDate}&end_date=${endDate}`
      );
      setAttendanceData(response.data);
    } catch (error) {
      console.error('Error fetching attendance:', error);
    }
  };

  const handleGradeClick = (grade) => {
    setSelectedGrade(grade);
    fetchStudents(grade);
  };

  const handleViewAttendance = (student) => {
    setSelectedStudent(student);
    setShowModal(true);
  };

  const handleSubmitDateRange = () => {
    fetchAttendance();
    setShowModal(false);
  };

  return (
    <div className="bg-[#1d2d5c]  text-white">
      <header className="flex justify-between items-center p-4 bg-[#0f1e4c]">
        <h1 className="text-2xl font-bold text-sky-300">eduPulse</h1>
        <div className="space-x-2">
          <button className="bg-blue-500 px-4 py-2 rounded">Sign Up</button>
          <button className="bg-fuchsia-500 px-4 py-2 rounded">Login</button>
        </div>
      </header>

      {!selectedGrade ? (
        <main className="p-6 bg-gray-100 text-black rounded-b-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8">
            {grades.map((grade) => (
              <button
                key={grade}
                onClick={() => handleGradeClick(grade)}
                className="bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-lg font-semibold shadow-md"
              >
                Grade {grade}
              </button>
            ))}
          </div>
          <p className="text-center mt-8 text-lg font-semibold text-[#0f1e4c]">
            Click a grade and check your students' attendance.
          </p>
        </main>
      ) : (
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Students in Grade {selectedGrade}</h2>
          <table className="w-full bg-white text-black rounded shadow">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2">Admission No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} className="text-center border-b">
                  <td>{student.admission_no}</td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>
                    <button
                      onClick={() => handleViewAttendance(student)}
                      className="bg-blue-600 px-2 py-1 rounded text-white"
                    >
                      View Attendance
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button
            onClick={() => setSelectedGrade(null)}
            className="mt-4 bg-gray-600 px-4 py-2 rounded"
          >
            ← Back to Grades
          </button>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded text-black w-80">
            <h3 className="text-lg font-bold mb-2">Select Date Range</h3>
            <label className="block mb-2">Start Date:</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full mb-2 border p-1"
            />
            <label className="block mb-2">End Date:</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full mb-2 border p-1"
            />
            <button
              onClick={handleSubmitDateRange}
              className="mt-2 bg-blue-600 px-4 py-2 rounded text-white"
            >
              Submit
            </button>
          </div>
        </div>
      )}

      {attendanceData.length > 0 && (
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">Attendance Chart</h3>
          <ul className="bg-white text-black p-4 rounded">
            {attendanceData.map((record, index) => (
              <li key={index}>
                {record.date}: {record.present === '1' ? 'Present' : 'Absent'}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
