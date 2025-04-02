"use client";
import Navbar from "../components/Navbar"
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminSignPage() {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    // Basic email validation to check if it includes an "@" symbol and a period "."
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.username || !formData.email || !formData.password) {
      setErrorMessage("Please fill all fields");
      setSuccessMessage(""); // Clear success message
      return;
    }

    // Check if the email is in a valid format
    if (!validateEmail(formData.email)) {
      setErrorMessage("Please enter a valid email address");
      setSuccessMessage(""); // Clear success message
      return;
    }

    const response = await fetch("http://localhost/eduPulse/admin_api/register.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    setMessage(result.message);
    if (result.success) {
      setSuccessMessage("Registration successful!");
      setErrorMessage(""); // Clear error message
      router.push("/adminlogin");
    } else {
      setErrorMessage(result.message || "Registration failed!");
      setSuccessMessage(""); // Clear success message
    }
  };

  return (
    <main>
    <div className="h-screen flex ">
      <div className="w-2/3 bg-blue-50 flex flex-col  justify-center items-center p-5 ">
        <h2 className="text-4xl text-blue-950 font-semibold mb-3 text-center mt-40">
          Become a Part of Our Team
        </h2>
        <p className="text-gray-600 text-center mb-4 text-lg">
          Register as an Admin and Manage Your System with Ease
        </p>
        <Link href="/">
          <button className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-2 rounded font-semibold  shadow transform transition duration-300 hover:scale-110">
            Go to Home
          </button>
        </Link>

        <img
          src="/images/adminregister.png"
          alt="Manage Illustration"
          className="w-3/4 max-h-[500px] object-contain mb-20"
        />
      </div>

      <div className="w-1/3 bg-blue-950 text-white flex flex-col items-center justify-center p-10">
        <h1 className="text-5xl font-bold mb-6">eduPulse</h1>
        <h2 className="text-3xl mb-4">Create an Admin Account</h2>

        {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}

        <div className="mb-4 w-full">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full p-3 border rounded mb-3 text-black"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded mb-3 text-black"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border rounded mb-3 text-black"
          />
        </div>

        <button className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white p-3 rounded shadow transform transition duration-300 hover:scale-110" onClick={handleSubmit}>
          Register
        </button>

        <p className="mt-4 text-gray-400 hover:text-white ">
          Already have an account?{" "}
          <Link href="/adminlogin" className="text-blue-500 hover:text-blue-400 transition-transform duration-300 hover:scale-110">
          Login here
         </Link>


        </p>
      </div>
    </div>
    </main>
  );
}
