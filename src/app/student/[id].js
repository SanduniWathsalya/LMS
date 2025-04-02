import { useRouter } from "next/router";
import Attendance from "../../components/Attendance";

const StudentPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Student Attendance</h1>
      {id ? <Attendance studentId={id} /> : <p>Loading student...</p>}
    </div>
  );
};

export default StudentPage;
