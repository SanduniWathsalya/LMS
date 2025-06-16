import { FaTrash, FaEye } from "react-icons/fa";

const RegisteredUserList = ({ title, users }) => {
  const handleDelete = (id) => {
    // Optional: Delete from DB using an API endpoint
    alert("Delete clicked for ID: " + id);
  };

  const handleViewMore = (user) => {
    alert(`Details:\n\nName: ${user.name || user.email}\nEmail: ${user.email}`);
  };

  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-3 text-blue-950">{title}</h3>
      {users.length === 0 ? (
        <p className="text-gray-500">No registered users yet.</p>
      ) : (
        users.map((user) => (
          <div key={user.id} className="bg-gray-200 p-4 mb-2 rounded flex justify-between items-center">
            <p>{user.email}</p>
            <div className="flex items-center gap-4">
              <button onClick={() => handleViewMore(user)} className="text-blue-700">
                <FaEye />
              </button>
              <button onClick={() => handleDelete(user.id)} className="text-red-600">
                <FaTrash />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default RegisteredUserList;
