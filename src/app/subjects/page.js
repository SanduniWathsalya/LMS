"use client";
import { useEffect, useState } from "react";
import { FaPencilAlt } from "react-icons/fa";

export default function SubjectListPage() {
  const [subjects, setSubjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost/edupulse/subject_api/get_subjects.php")
      .then((res) => res.json())
      .then((data) => setSubjects(data))
      .catch((err) => console.error("Error fetching subjects:", err));
  }, []);

  const [showForm, setShowForm] = useState(false);
  const [newSubject, setNewSubject] = useState({
    id: "",
    name: "",
    semesters: [{ name: "", cost: "" }],
  });

  const [editSubjectIndex, setEditSubjectIndex] = useState(null);
  const [editSubjectData, setEditSubjectData] = useState(null);

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
  // Send new subject to the backend
  fetch("http://localhost/edupulse/subject_api/save_subject.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newSubject),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        // Refetch subject list from backend after saving
        fetch("http://localhost/edupulse/subject_api/get_subjects.php")
          .then((res) => res.json())
          .then((updatedData) => {
            setSubjects(updatedData);
            setNewSubject({ id: "", name: "", semesters: [{ name: "", cost: "" }] });
            setShowForm(false);
          });
      } else {
        alert("Failed to save subject: " + data.message);
      }
    })
    .catch((err) => {
      console.error("Save error:", err);
      alert("An error occurred while saving.");
    });
};

  const handleEdit = (index) => {
    setEditSubjectIndex(index);
    setEditSubjectData({ ...subjects[index], semesters: [...subjects[index].semesters] });
  };

  const handleEditSemesterChange = (i, field, value) => {
    const updatedSemesters = [...editSubjectData.semesters];
    updatedSemesters[i][field] = value;
    setEditSubjectData({ ...editSubjectData, semesters: updatedSemesters });
  };

  const handleEditSave = () => {
    const updatedSubjects = [...subjects];
    updatedSubjects[editSubjectIndex] = editSubjectData;
    setSubjects(updatedSubjects);
    setEditSubjectIndex(null);
    setEditSubjectData(null);

    // 🔁 Backend Update Request
    fetch("http://localhost/edupulse/subject_api/update_subject.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: editSubjectData.id,
        semesters: editSubjectData.semesters,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          console.log("Update successful");
        } else {
          alert("Failed to update: " + data.message);
        }
      })
      .catch((err) => {
        console.error("Update error:", err);
      });
  };

  return (
    <main>
      <div className="bg-gray-100">
        {/* Header */}
        <div className="flex items-end justify-between h-28 bg-blue-950 border-b border-gray-200 px-4">
          <a href="/payments" className="relative flex flex-col items-center text-white hover:text-gray-300 group">
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" className="transition-transform duration-200 group-hover:scale-110">
              <path fill="currentColor" d="M14 7l-5 5 5 5V7z" />
            </svg>
            <span className="absolute top-full mt-1 text-xs text-white bg-gray-800 px-1 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">Back</span>
          </a>

          <div className="flex items-end mb-2 space-x-4">
            <a href="#" className="relative flex flex-col items-center text-white hover:text-gray-300 group">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="transition-transform duration-200 group-hover:scale-110">
                <path fill="currentColor" d="M12 2C10.9 2 10 2.9 10 4V4.29C7.19 5.17 5 7.92 5 11V16L3 18V19H21V18L19 16V11C19 7.92 16.81 5.17 14 4.29V4C14 2.9 13.1 2 12 2ZM12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22Z" />
              </svg>
              <span className="absolute top-full mt-1 text-xs text-white bg-gray-800 px-1 py-0.5 rounded opacity-0 group-hover:opacity-100">Notifications</span>
            </a>
            <a href="#" className="relative flex flex-col items-center text-white hover:text-gray-300 group">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="transition-transform duration-200 group-hover:scale-110">
                <path fill="currentColor" d="M10.09 15.59L12.67 13H4V11H12.67L10.09 8.41L11.5 7L16.5 12L11.5 17L10.09 15.59ZM20 19H13V21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3H13V5H20V19Z" />
              </svg>
              <span className="absolute top-full mt-1 text-xs text-white bg-gray-800 px-1 py-0.5 rounded opacity-0 group-hover:opacity-100">Logout</span>
            </a>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 m-4">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 gap-4">
            <h1 className="text-2xl font-bold text-blue-950">Subjects</h1>
            <button
              onClick={() => setShowForm(true)}
              className="relative group bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-2 rounded-full hover:from-blue-700 hover:to-blue-900 text-sm flex items-center gap-2 shadow-md transition transform hover:-translate-y-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5H4.5" />
              </svg>
              Add a subject
            </button>
          </div>

          {/* Search */}
          <div className="mb-6 relative w-full sm:w-1/2 text-black">
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z" />
            </svg>
            <input
              type="text"
              placeholder="Search subjects ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-2 pl-10 border border-blue-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Subject List */}
          {subjects
            .filter(
              (subject) =>
                subject.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                subject.id.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((subject, idx) => (
              <div key={idx} className="bg-blue-100 rounded-lg p-4 mb-4 shadow text-blue-800">
               <div className="flex justify-between items-center mb-2">
  <div className="text-xl font-semibold">{subject.id} - {subject.name}</div>
  <button
    onClick={() => handleEdit(idx)}
    className="text-blue-700 hover:text-blue-900"
    aria-label="Edit"
  >
    <FaPencilAlt className="w-4 h-4" />
  </button>
</div>

                {subject.semesters.map((sem, i) => (
                  <div key={i} className="flex justify-between px-2">
                    <span> {sem.name}</span>
                    <span>${sem.cost}</span>
                  </div>
                ))}
              </div>
            ))}

          {/* Add Form Popup */}
          {showForm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
                <h2 className="text-xl font-bold mb-4 text-blue-900">Add New Subject</h2>
                <input
                  type="text"
                  placeholder="Subject ID"
                  className="w-full mb-2 p-2 border rounded text-black"
                  value={newSubject.id}
                  onChange={(e) => setNewSubject({ ...newSubject, id: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Subject Name"
                  className="w-full mb-2 p-2 border rounded text-black"
                  value={newSubject.name}
                  onChange={(e) => setNewSubject({ ...newSubject, name: e.target.value })}
                />
                {newSubject.semesters.map((sem, i) => (
                  <div key={i} className="flex gap-2 mb-2">
                    <select
                      className="flex-1 p-2 border rounded text-gray-700"
                      value={sem.name}
                      onChange={(e) => handleSemesterChange(i, "name", e.target.value)}
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
                      onChange={(e) => handleSemesterChange(i, "cost", e.target.value)}
                    />
                  </div>
                ))}
                <button onClick={handleAddSemester} className="text-blue-600 text-sm underline mb-4">
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
                  <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Edit Form Popup */}
          {editSubjectData && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
                <h2 className="text-xl font-bold mb-4 text-blue-900">Edit Subject</h2>
                <input
                  type="text"
                  value={editSubjectData.id}
                  disabled
                  className="w-full mb-2 p-2 border rounded bg-gray-100 text-gray-700"
                />
                <input
                  type="text"
                  value={editSubjectData.name}
                  disabled
                  className="w-full mb-2 p-2 border rounded bg-gray-100 text-gray-700"
                />
                {editSubjectData.semesters.map((sem, i) => (
                  <div key={i} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={sem.name}
                      disabled
                      className="flex-1 p-2 border rounded bg-gray-100 text-gray-700"
                    />
                    <input
                      type="number"
                      value={sem.cost}
                      onChange={(e) => handleEditSemesterChange(i, "cost", e.target.value)}
                      className="w-24 p-2 border rounded text-black"
                    />
                  </div>
                ))}
                <div className="mt-4 flex justify-end space-x-2">
                  <button
                    onClick={() => {
                      setEditSubjectIndex(null);
                      setEditSubjectData(null);
                    }}
                    className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                  <button onClick={handleEditSave} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
