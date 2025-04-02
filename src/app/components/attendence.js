import { useState, useEffect } from "react";

const Attendance = ({ studentId }) => {
  const [attendance, setAttendance] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!studentId) return;

    fetch(`http://localhost/backend/getAttendance.php?student_id=${studentId}`)
      .then((res) => res.json())
      .then((data) => {
        setAttendance(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching attendance:", error);
        setLoading(false);
      });
  }, [studentId]);

  if (loading) return <p>Loading attendance...</p>;

  return (
    <div>
      <h2>Attendance Record</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendance.length > 0 ? (
            attendance.map((entry, index) => (
              <tr key={index}>
                <td>{entry.date}</td>
                <td>{entry.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">No attendance records found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;
