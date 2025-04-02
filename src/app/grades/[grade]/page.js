"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const StudentList = () => {
  const { grade } = useParams(); // Get the selected grade from the URL
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null); // Track student being edited
  const [newStudent, setNewStudent] = useState({
    name: "",
    marks: { math: "", science: "", english: "", history: "" },
  });

  // Fetch students based on the selected grade
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await fetch(`http://localhost:8000/students_api/students.php?grade=${grade}`);

        const data = await res.json();
        setStudents(data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, [grade]);

  // Handle changes in student marks for editing
  const handleEditChange = (e, subject) => {
    setEditingStudent((prev) => ({
      ...prev,
      marks: { ...prev.marks, [subject]: e.target.value },
    }));
  };

  // Handle changes in new student form
  const handleNewStudentChange = (e, subject) => {
    setNewStudent((prev) => ({
      ...prev,
      marks: { ...prev.marks, [subject]: e.target.value },
    }));
  };

  // Start editing a student
  const startEditing = (student) => {
    setEditingStudent({ ...student });
  };

  // Save the changes for edited student
  const saveEditedStudent = async () => {
    try {
      const res = await fetch(`/api/students/${editingStudent.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editingStudent),
      });
      const updatedStudent = await res.json();
      setStudents((prev) =>
        prev.map((student) =>
          student.id === updatedStudent.id ? updatedStudent : student
        )
      );
      setEditingStudent(null); // Clear editing state
    } catch (error) {
      console.error("Error saving student:", error);
    }
  };

  // Add new student
  const addNewStudent = async () => {
    try {
      const res = await fetch(`/api/students`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newStudent),
      });
      const addedStudent = await res.json();
      setStudents((prev) => [...prev, addedStudent]);
      setNewStudent({
        name: "",
        marks: { math: "", science: "", english: "", history: "" },
      });
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  return (
    <main>
    <div className="h-screen bg-gray-100 text-black  ">
    <div className="flex items-end justify-between h-28 bg-blue-950 border-b border-gray-200 px-4">
  {/* Back Button (Left Corner) */}
  <a href="/marks" className="relative flex flex-col items-center text-white hover:text-gray-300 group">
    {/* Back Icon */}
    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" className="transition-transform duration-200 group-hover:scale-110">
      <path 
        fill="currentColor" 
        d="M14 7l-5 5 5 5V7z"
      />
    </svg>
    
    {/* Tooltip (Under the Icon) */}
    <span className="absolute top-full mt-1 text-xs text-white bg-gray-800 px-1 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
      Back
    </span>
  </a>

  {/* Notifications & Logout (Right Corner) */}
  <div className="flex items-end mb-2 space-x-4">
    {/* Notifications Button */}
    <a href="#" className="relative flex flex-col items-center text-white hover:text-gray-300 group">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="transition-transform duration-200 group-hover:scale-110">
        <path 
          fill="currentColor" 
          d="M12 2C10.9 2 10 2.9 10 4V4.29C7.19 5.17 5 7.92 5 11V16L3 18V19H21V18L19 16V11C19 7.92 16.81 5.17 14 4.29V4C14 2.9 13.1 2 12 2ZM12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22Z"
        />
      </svg>
      <span className="absolute top-full mt-1 text-xs text-white bg-gray-800 px-1 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        Notifications
      </span>
    </a>

    {/* Logout Button */}
    <a href="#" className="relative flex flex-col items-center text-white hover:text-gray-300 group">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="transition-transform duration-200 group-hover:scale-110">
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


      <div className="p-6">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-6 ">
        Students in Grade {grade}
      </h1>

      {/* Add Student Form */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Add New Student</h2>
        <input
          type="text"
          placeholder="Name"
          value={newStudent.name}
          onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
          className="p-2 border border-gray-300 rounded mb-2 w-full"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          {["math", "science", "english", "history"].map((subject) => (
            <input
              key={subject}
              type="number"
              placeholder={subject.charAt(0).toUpperCase() + subject.slice(1)}
              value={newStudent.marks[subject]}
              onChange={(e) => handleNewStudentChange(e, subject)}
              className="p-2 border border-gray-300 rounded"
            />
          ))}
        </div>
        <button
          onClick={addNewStudent}
          className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
        >
          Add Student
        </button>
      </div>

      {/* Student Table */}
      <table className="w-full border-collapse border border-gray-300 bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="p-3 border">Student Name</th>
            <th className="p-3 border">Math</th>
            <th className="p-3 border">Science</th>
            <th className="p-3 border">English</th>
            <th className="p-3 border">History</th>
            <th className="p-3 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((student) => (
              <tr key={student.id} className="text-center border">
                <td className="p-3 border">{student.name}</td>
                {["math", "science", "english", "history"].map((subject) => (
                  <td key={subject} className="p-3 border">
                    {editingStudent && editingStudent.id === student.id ? (
                      <input
                        type="number"
                        value={editingStudent.marks[subject]}
                        onChange={(e) => handleEditChange(e, subject)}
                        className="p-2 border border-gray-300 rounded"
                      />
                    ) : (
                      student.marks[subject]
                    )}
                  </td>
                ))}
                <td className="p-3 border">
                  {editingStudent && editingStudent.id === student.id ? (
                    <button
                      onClick={saveEditedStudent}
                      className="bg-green-600 text-white py-1 px-3 rounded-lg hover:bg-green-700"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => startEditing(student)}
                      className="bg-yellow-600 text-white py-1 px-3 rounded-lg hover:bg-yellow-700"
                    >
                      Edit
                    </button>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="p-3 text-center">
                No students found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    </div>
    </main>
  );
};

export default StudentList;
