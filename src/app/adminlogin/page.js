"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";


export default function AdminLoginPage() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.username || !formData.password) {
      setErrorMessage("Please fill all fields");
      setSuccessMessage(""); // Clear success message
      return;
    }

    const response = await fetch("http://localhost/eduPulse/admin_api/login.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (result.success) {
      setSuccessMessage("Login successful!");
      setErrorMessage(""); // Clear error message
      router.push("/admindashboard");
    } else {
      setErrorMessage(result.message || "Login failed!");
      setSuccessMessage(""); // Clear success message
    }
  };

  return (
    <div className="h-screen flex">
      <div className="w-2/3 bg-blue-50 flex flex-col justify-center items-center p-5">
        <h2 className="text-4xl text-blue-950 font-semibold mb-3 mt-20 text-center">
          Access Your Admin Dashboard
        </h2>
        <p className="text-gray-600 text-center mb-4 text-lg ">
          Enter your username and password to get started.
        </p>

        <Link href="/">
        <button className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-2 rounded font-semibold  shadow transform transition duration-300 hover:scale-110">
        Go to Home
        </button>
        </Link>

        <img
          src="/images/loginpage.png"
          alt="Manage Illustration"
          className="w-3/4 max-h-[500px] object-contain "
        />
      </div>

      <div className="w-1/3 bg-blue-950 text-white flex flex-col items-center justify-center p-10">
        <h1 className="text-5xl text-white font-bold mb-6">eduPulse</h1>
        <h2 className="text-3xl text-white mb-4">Login for Admin Account</h2>

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
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border rounded mb-3 text-black"
          />
        </div>

        <button className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white p-3 rounded shadow transform transition duration-300 hover:scale-110" onClick={handleSubmit}>
          Login
        </button>

        <p className="mt-4 text-gray-400">
          I do not have an account yet.{" "}
          <Link href="/adminsignup" className="text-blue-500">Register here</Link>
        </p>
      </div>
    </div>
  );
}
