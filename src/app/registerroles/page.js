"use client";
import { useState } from "react";
import Link from "next/link";
import { User } from "lucide-react"; // Import user icon

const roles = ["Teacher", "Principal", "Employee"];

const RegisterForm = ({ setIsLogin }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async () => {
    if (!fullName || !email || !password || !confirmPassword || !role) {
      setErrorMessage("Please fill in all fields.");
      setMessage("");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      setMessage("");
      return;
    }

    const userData = {
      fullName,
      email,
      password,
      role,
    };

    try {
      const response = await fetch(
        "http://localhost/edupulse/roles_api/roles_register.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (response.ok) {
        // Show success message and clear form
        setMessage("Registration successful. Awaiting admin approval.");
        setErrorMessage("");
        setFullName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setRole("");
      } else {
        const data = await response.json();
        setErrorMessage(data.message || "Registration failed. Try again.");
        setMessage("");
      }
    } catch (error) {
      setErrorMessage("Failed to connect to the server. Please try again.");
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Column */}
      <div className="w-1/3 bg-blue-950 text-white flex flex-col items-center justify-center p-10">
        <h1 className="text-5xl text-white font-bold mb-6 mt-10">eduPulse</h1>

        <p className="mb-4 text-gray-400 cursor-pointer hover:underline hover:text-white transition-all duration-300 transform hover:scale-110">
          <Link href="/loginroles">Already have an account?</Link>
        </p>

        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        {message && <p className="text-green-500 text-center mb-4">{message}</p>}

        <div className="mb-4 w-full text-black">
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full p-3 border rounded mb-3"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded mb-3"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded mb-3"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-3 border rounded mb-3"
          />

          {/* Role Selection */}
<p className="text-white mb-2">Select Your Role:</p>
<div className="flex justify-between">
  {roles.map((r) => (
    <div
      key={r}
      className={`flex flex-row items-center justify-center w-28 h-12 cursor-pointer border rounded-lg transition-all duration-300 hover:scale-110 ${
        role === r ? "bg-white text-blue-950 font-bold" : "text-white border-white"
      }`}
      onClick={() => setRole(r)}
    >
      <User size={24} className={role === r ? "text-blue-950" : "text-white"} /> {/* User Icon */}
      <span>{r}</span>
    </div>
  ))}
</div>
        </div>

        <button
          onClick={handleRegister}
          className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition"
        >
          Register
        </button>
      </div>

      {/* Right Column */}
      <div className="w-2/3 bg-blue-50 flex flex-col justify-center items-center">
        <h2 className="text-4xl text-blue-950 font-semibold mb-3 mt-20 text-center">
          Join eduPulse Today
        </h2>
        <p className="text-gray-600 text-center mb-4 text-lg">
          Create an account and start managing your users now.
          <br />
          Give your details to register with the system. An admin will review and complete your registration soon.
        </p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded font-semibold  shadow transform transition duration-300 hover:scale-110">
          <Link href="/"> Get Started</Link>
        </button>
        <img
          src="/images/loginpage.png"
          alt="Manage Illustration"
          className="w-3/4 max-h-[400px] object-contain"
        />
      </div>
    </div>
  );
};

export default RegisterForm;
