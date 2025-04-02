"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from 'next/link';
import { User } from "lucide-react"; // Import user icon


export default function loginroles() {
  const [selectedRole, setSelectedRole] = useState(null);
  const router = useRouter();

  const [credentials, setCredentials] = useState({
    Principal: { username: "", password: "" },
    Teacher: { username: "", password: "" },
    Employee: { username: "", password: "" },
  });

  const [errorMessage, setErrorMessage] = useState("");

  const roles = ["Teacher", "Principal", "Employee"];

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
    setErrorMessage("");
  };

  const handleInputChange = (role, field, value) => {
    if (!selectedRole) {
      setErrorMessage("Please select a role first.");
      return;
    }
    setCredentials((prev) => ({
      ...prev,
      [role]: { ...prev[role], [field]: value },
    }));
  };

 const handleLogin = async () => {
  if (!selectedRole) {
    setErrorMessage("Please select a role first.");
    return;
  }

  const { username, password } = credentials[selectedRole];

  if (!username || !password) {
    setErrorMessage("Please enter your username and password.");
    return;
  }

  try {
    const response = await fetch("http://localhost/edupulse/roles_api/login.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, role: selectedRole }),
    });

    const data = await response.json();
    if (response.ok) {
      if (data.status === "approved") {
        router.push(`/${selectedRole.toLowerCase()}-dashboard`);
      } else {
        setErrorMessage("Your registration is pending admin approval.");
      }
    } else {
      setErrorMessage(data.message);
    }
  } catch (error) {
    setErrorMessage("Login failed. Please try again.");
  }
};


  return (
    <div className="min-h-screen flex">
      {/* Left Column */}
      <div className="w-1/3 bg-blue-950 text-white flex flex-col items-center justify-center p-10">
        <h1 className="text-5xl text-white font-bold mb-6">eduPulse</h1>

        <p className="mb-4 text-gray-400 cursor-pointer hover:underline hover:text-white transition-all duration-300 transform  hover:scale-110">
  <Link href="/registerroles">I do not have an account yet.</Link>
</p>

        {/* Role Selection */}
        <div className="mb-6">
  <label className="block mb-2 text-center text-white">Select your role</label>
  <div className="flex space-x-6 justify-center">
    {roles.map((role) => (
      <div
        key={role}
        className={`flex flex-col items-center justify-center w-24 h-20 cursor-pointer border p-4 rounded-full transition-all duration-300 hover:scale-110
          ${selectedRole === role ? "bg-white text-blue-950 font-bold" : "text-white border-white"}`}
        onClick={() => handleRoleSelection(role)}
      >
        <User size={24} className={selectedRole === role ? "text-blue-950 mb-1" : "text-white mb-1"} />
        <span>{role}</span>
      </div>
    ))}
  </div>
</div>

        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}

        {/* Login Form */}
        {selectedRole && (
          <div className="mb-4 w-full">
            <input
              type="text"
              placeholder={`${selectedRole} Username`}
              value={credentials[selectedRole].username}
              onChange={(e) =>
                handleInputChange(selectedRole, "username", e.target.value)
              }
              className="w-full p-3 border rounded mb-3 text-black"
            />
            <input
              type="password"
              placeholder="Password"
              value={credentials[selectedRole].password}
              onChange={(e) =>
                handleInputChange(selectedRole, "password", e.target.value)
              }
              className="w-full p-3 border rounded mb-3 text-black"
            />
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div>
          </div>
        )}

        <button className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white p-3 rounded shadow transform transition duration-300 hover:scale-110" onClick={handleLogin}>
          Login
        </button>
      </div>

      {/* Right Column */}
      <div className="w-2/3 bg-blue-50 flex flex-col justify-center items-center ">
        <h2 className="text-4xl text-blue-950 font-semibold mb-3 mt-20 text-center">
          Start Managing Now
        </h2>
        <p className="text-gray-600 text-center mb-4 text-lg">
          Manage your users and resources effectively with eduPulse.
        </p>
        <Link href="/">
          <button className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-2 rounded font-semibold  shadow transform transition duration-300 hover:scale-110">
            Go to Home
          </button>
        </Link>
        
        <img
          src="/images/team.jpg"
          alt="Manage Illustration"
          className="w-3/4 max-h-[430px] object-contain "
        />
      </div>
    </div>
  );
}
