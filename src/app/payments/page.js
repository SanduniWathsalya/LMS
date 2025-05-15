"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaBook } from "react-icons/fa";

const grades = ['grade6', 'grade7', 'grade8', 'grade9', 'grade10', 'grade11', 'grade12', 'grade13'];

export default function PaymentPage() {

  const fetchStudents = async (grade) => {
    setLoading(true);
    const res = await fetch(`/api/getStudents?grade=${grade}`);
    const data = await res.json();
    setStudents(data);
    setLoading(false);
  };


 
  const [selectedGrade, setSelectedGrade] = useState(null);
const [students, setStudents] = useState([]);
const [loading, setLoading] = useState(false);

const handleSelectGrade = async (grade) => {
  setSelectedGrade(grade);
  setLoading(true);

  // Format grade (e.g., "Grade 6" → "grade6")
  const tableName = grade.toLowerCase().replace(/\s+/g, '');

  try {
    const res = await fetch(`http://localhost/edupulse/admin_api/get_students.php?grade=${tableName}`);
    const data = await res.json();

    setStudents(data);
  } catch (error) {
    console.error('Error fetching students:', error);
    setStudents([]);
  } finally {
    setLoading(false);
  }
};

const [studentId, setStudentId] = useState('');
const [paymentType, setPaymentType] = useState('');
const [selectedSubjects, setSelectedSubjects] = useState([]);
const [semester, setSemester] = useState('');
const [paymentDate, setPaymentDate] = useState('');
const subjectList = ['Maths', 'Science', 'English', 'IT' ]; // Replace with real list
const [paymentMonth, setPaymentMonth] = useState('');


const handleSubjectSelect = (e) => {
  const value = e.target.value;
  setSelectedSubjects((prev) =>
    e.target.checked ? [...prev, value] : prev.filter((subj) => subj !== value)
  );
};

const handlePaymentSubmit = (e) => {
  e.preventDefault();
  const data = {
    studentId,
    paymentType,
    selectedSubjects,
    semester,
    paymentDate,
  };
  console.log("Submitting payment: ", data);
  // Add API call here
};



  return (
    <main>
    <div className=" bg-gray-100 h-screen">
      <div className="flex items-end justify-between h-28 bg-blue-950 border-b border-gray-200 px-4">
        {/* Back Button (Left Corner) */}
        <a
          href="/employeedashboard"
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

    <div className=" flex  m-8">
      {/* Left Side: Grade Cards */}
      <div className="w-1/5 space-y-2">
  {grades.map((grade) => (
    <div
      key={grade}
      onClick={() => handleSelectGrade(grade)}
      className={`text-xl text-center py-3  rounded-md cursor-pointer shadow-md hover:opacity-90 transition-colors duration-300 ${
        selectedGrade === grade
          ? 'bg-white text-blue-950 border border-blue-950'
          : 'bg-blue-950 text-white'
      }`}
    >
      {grade.replace(/(\D+)(\d+)/, (_, word, number) =>
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() + ' ' + number
      )}
    </div>
  ))}
</div>



      {/* Right Side */}
      <div className="w-4/5  ml-12 ">
       {!selectedGrade ? (
  <div className="p-6 border rounded shadow-md bg-white mb-10">
  <h3 className="text-xl font-bold text-blue-950 mb-4">Add New Payment</h3>

  <form className="space-y-4 ">
    {/* Student ID Input */}
    <div>
      <label className="block text-sm font-medium text-black">Student ID</label>
      <input
        type="text"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-600"
        placeholder="Enter Student ID"
      />
    </div>

    {/* Payment Type Dropdown */}
    <div>
      <label className="block text-sm font-medium text-black">Payment Type</label>
      <select
        value={paymentType}
        onChange={(e) => setPaymentType(e.target.value)}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-600"
      >
        <option value="">Select Payment Type</option>
        <option value="subject">Subject-wise</option>
        <option value="semester">Semester-wise</option>
      </select>
    </div>

    {/* Subject Selection (conditional) */}
    {paymentType === "subject" && (
       <>
     <div className="flex items-center justify-between">
  <label className="block text-sm font-medium text-black">Select Subjects</label>

  {/* Subject Details Button */}
  <Link href="/subjects">
    <button className="flex items-center gap-2 text-xs bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-1 rounded hover:from-blue-700 hover:to-blue-900 shadow-md transition transform hover:-translate-y-1">
  <FaBook className="text-sm" />
  Subject Details
</button>
  </Link>
</div>

<div className="mt-2 grid grid-cols-2 gap-2 text-black">
  {subjectList.map((subject) => (
    <label key={subject} className="flex items-center gap-2">
      <input
        type="checkbox"
        value={subject}
        onChange={(e) => handleSubjectSelect(e)}
      />
      {subject}
    </label>
  ))}
</div>

      
     

        <div>
  <label className="block text-sm font-medium text-black">Payment Month</label>
  <select
    value={paymentMonth}
    onChange={(e) => setPaymentMonth(e.target.value)}
    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-600"
  >
    <option value="">Select Month</option>
    <option value="January">January</option>
    <option value="February">February</option>
    <option value="March">March</option>
    <option value="April">April</option>
    <option value="May">May</option>
    <option value="June">June</option>
    <option value="July">July</option>
    <option value="August">August</option>
    <option value="September">September</option>
    <option value="October">October</option>
    <option value="November">November</option>
    <option value="December">December</option>
  </select>
</div>

<div>
          <label className="block text-sm font-medium text-black">Payment Date</label>
          <input
            type="date"
            value={paymentDate}
            onChange={(e) => setPaymentDate(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-600"
          />
        </div>
      </>

    )}

    {/* Semester Selection + Calendar (conditional) */}
    {paymentType === "semester" && (
      <>
        <div>
          <label className="block text-sm font-medium text-black">Select Semester</label>
          <select
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-600"
          >
            <option value="">Select Semester</option>
            <option value="Semester 1">Semester 1</option>
            <option value="Semester 2">Semester 2</option>
            <option value="Semester 3">Semester 3</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-black">Payment Date</label>
          <input
            type="date"
            value={paymentDate}
            onChange={(e) => setPaymentDate(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-600"
          />
        </div>
      </>
    )}

    {/* Submit Button */}
    <div>
      <button
        type="submit"
        onClick={handlePaymentSubmit}
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-2 rounded hover:from-blue-700 hover:to-blue-900 shadow-md transition transform hover:-translate-y-1 "
      >
        Submit Payment
      </button>
    </div>
  </form>
</div>



 
) : loading ? (


          <p className="text-lg text-black">Loading students for {selectedGrade.toUpperCase()}...</p>
        ) : (
          <>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-blue-950">
              Students in {selectedGrade.toLowerCase()}
            </h2>
            <button
  onClick={() => setSelectedGrade(null)}
  className="relative group bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-2 rounded-full hover:from-blue-700 hover:to-blue-900 text-sm flex items-center gap-2 shadow-md transition transform hover:-translate-y-1"
>
  {/* Sleek Back Icon (Heroicons - arrow-left-circle) */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.5v15m7.5-7.5H4.5"
    />
  </svg>
  Add a new payment

  
</button>



          </div>
        
          <ul className="space-y-2 text-black">
            {students.map((student, index) => (
              <li
                key={index}
                className="flex justify-between items-center border p-3 rounded shadow-sm hover:bg-gray-50 transition"
              >
                <div className="flex gap-4">
                  <span><strong>{student.sid}</strong> </span>
                  <span>{student.name}</span>
                </div>
                <Link href="/student_payment">
                  <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm">
                    View
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </>
        
        )}
      </div>
    </div>
    </div>
    </main>
  );
}
