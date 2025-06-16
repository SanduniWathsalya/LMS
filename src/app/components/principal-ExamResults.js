export default function ExamResults() {
  const subjects = [
    { name: "Maths", detail: "Problem solving" },
    { name: "Chemistry", detail: "Equations" },
    { name: "Physics", detail: "Directions" },
  ];

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h3 className="font-semibold mb-4 text-blue-950">Exam Papers & Results</h3>
      <div className="flex gap-4 text-black flex-wrap justify-center">
        {subjects.map((subject, index) => (
          <div
            key={index}
            className="bg-gray-200 p-4 rounded text-center flex flex-col justify-between w-48 h-52"
          >
            <div>
              <p className="font-semibold">{subject.name}</p>
              <p className="text-sm text-gray-500 mb-2">{subject.detail}</p>

              {/* Paper & Pencil Icon */}
              <div className="flex justify-center mb-2 mt-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-5M18.5 2.5a2.121 2.121 0 113 3L12 15l-4 1 1-4 9.5-9.5z"
                  />
                </svg>
              </div>
            </div>

            <button className="bg-blue-500 text-white px-4 py-1 rounded mt-auto">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
