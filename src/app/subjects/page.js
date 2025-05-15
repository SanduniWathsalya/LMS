"use client"
import { useState } from "react";
export default function SubjectListPage() {
  const subjects = [
    {
      id: "SU001",
      name: "Maths",
      semesters: [
        { name: "Semester 1", cost: 300 },
        { name: "Semester 2", cost: 400 },
        { name: "Semester 3", cost: 500 },
      ],
    },
    {
      id: "SU002",
      name: "Science",
      semesters: [
        { name: "Semester 1", cost: 200 },
        { name: "Semester 2", cost: 200 },
        { name: "Semester 3", cost: 400 },
      ],
    },
    {
      id: "SU003",
      name: "IT",
      semesters: [
        { name: "Semester 1", cost: 100 },
        { name: "Semester 2", cost: 400 },
        { name: "Semester 3", cost: 500 },
      ],
    },
    {
      id: "SU004",
      name: "English",
      semesters: [
        { name: "Semester 1", cost: 200 },
        { name: "Semester 2", cost: 200 },
        { name: "Semester 3", cost: 400 },
      ],
    },
  ];

   const [showForm, setShowForm] = useState(false);
  const [newSubject, setNewSubject] = useState({
    id: "",
    name: "",
    semesters: [{ name: "", cost: "" }],
  });

  const handleAddSemester = () => {
    setNewSubject((prev) => ({
      ...prev,
      semesters: [...prev.semesters, { name: "", cost: "" }],
    }));
  };

  const handleSemesterChange = (index, field, value) => {
    const updatedSemesters = [...newSubject.semesters];
    updatedSemesters[index][field] = value;
    setNewSubject({ ...newSubject, semesters: updatedSemesters });
  };

  const handleSave = () => {
    setSubjects([...subjects, newSubject]);
    setNewSubject({ id: "", name: "", semesters: [{ name: "", cost: "" }] });
    setShowForm(false);
  };

  return (
       <main>
    <div className=" bg-gray-100 h-screen">
      <div className="flex items-end justify-between h-28 bg-blue-950 border-b border-gray-200 px-4">
        {/* Back Button (Left Corner) */}
        <a
          href="/payments"
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

     <div className="p-6 m-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-blue-950">Subjects</h1>
           



             <button
  onClick={() => setShowForm(true)}
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
  Add a subject

  
</button>
          </div>

          {/* SUBJECT LIST */}
          {subjects.map((subject, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row text-blue-700 border-b border-gray-300 py-4 space-y-2 md:space-y-0 md:space-x-8"
            >
              <div className="w-full md:w-1/4 font-semibold text-blue-900 text-xl">
                <p>{subject.id}</p>
                <p>{subject.name}</p>
              </div>
              <div className="w-full md:w-3/4 space-y-1">
                {subject.semesters.map((sem, i) => (
                  <div key={i} className="flex justify-between">
                    <span>{sem.name}</span>
                    <span>${sem.cost}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* POPUP FORM */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
              <h2 className="text-xl font-bold mb-4 text-blue-900">Add New Subject</h2>

              <input
                type="text"
                placeholder="Subject ID"
                className="w-full mb-2 p-2 border rounded text-black"
                value={newSubject.id}
                onChange={(e) =>
                  setNewSubject({ ...newSubject, id: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Subject Name"
                className="w-full mb-2 p-2 border rounded text-black"
                value={newSubject.name}
                onChange={(e) =>
                  setNewSubject({ ...newSubject, name: e.target.value })
                }
              />

              <div className="space-y-2">
                {newSubject.semesters.map((sem, i) => (
                  <div key={i} className="flex gap-2">
                <select
              className="flex-1 p-2 border rounded text-gray-700"
              value={sem.name}
              onChange={(e) =>
              handleSemesterChange(i, "name", e.target.value)
              }
                >
              <option value="">Select Semester</option>
              <option value="Semester 1">Semester 1</option>
              <option value="Semester 2">Semester 2</option>
              <option value="Semester 3">Semester 3</option>
                </select>

              <input
              type="number"
              placeholder="Cost"
              className="w-24 p-2 border rounded text-black"
              value={sem.cost}
              onChange={(e) =>
              handleSemesterChange(i, "cost", e.target.value)
             }
            />
            </div>
                ))}
              </div>

              <button
                onClick={handleAddSemester}
                className="text-blue-600 mt-2 text-sm underline"
              >
                + Add another semester
              </button>

              <div className="mt-4 flex justify-end space-x-2">
                <button
                onClick={() => {
              setNewSubject({ id: "", name: "", semesters: [{ name: "", cost: "" }] });
              setShowForm(false);
              }}

                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}