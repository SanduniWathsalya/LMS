export default function StudentTable() {
  const students = [
    { id: 'GS/2360', name: 'Sophiya Willson', gender: 'Female', class: 'JSS1', date: '09-09-2023' },
    { id: 'GS/2031', name: 'Christopher Aang', gender: 'Male', class: 'SSS 3', date: '15-09-2023' },
    { id: 'GS/1984', name: 'Rayan Francis', gender: 'Male', class: 'Basic 2', date: '28-09-2023' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow mt-12 overflow-x-auto">
      <h3 className="font-semibold mb-4 text-blue-950 text-lg">Newly Admitted Students</h3>
      <table className="w-full text-sm text-black border border-gray-200 rounded-md">
        <thead>
          <tr className="bg-gray-100 text-left text-sm text-gray-700">
            <th className="p-3 border-b">S/N</th>
            <th className="p-3 border-b">Student ID</th>
            <th className="p-3 border-b">Full Name</th>
            <th className="p-3 border-b">Gender</th>
            <th className="p-3 border-b">Class</th>
            <th className="p-3 border-b">Date</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, i) => (
            <tr key={i} className="hover:bg-blue-50 transition duration-200">
              <td className="p-3 border-b">{i + 1}</td>
              <td className="p-3 border-b">{s.id}</td>
              <td className="p-3 border-b">{s.name}</td>
              <td className="p-3 border-b">{s.gender}</td>
              <td className="p-3 border-b">{s.class}</td>
              <td className="p-3 border-b">{s.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
