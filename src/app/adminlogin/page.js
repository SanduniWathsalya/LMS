"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminloginPage() {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const router = useRouter();

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle login
  const handleLogin = async () => {
    setErrorMessage("");
    setSuccessMessage("");

    if (!formData.username || !formData.password) {
      setErrorMessage("Please fill in both fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost/edupulse/admin_api/login.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      });

      const data = await response.json();
      if (response.ok && data.message === "Login successful") {
        setSuccessMessage("Login successful! Redirecting...");
        setTimeout(() => router.push("/"), 2000);
      } else {
        setErrorMessage(data.message || "Login failed. Try again.");
      }
    } catch (error) {
      setErrorMessage("Error: Unable to login.");
      console.error("Fetch error:", error);
    }
  };

  return (
    <div className="h-screen flex">
      <div className="w-2/3 bg-blue-50 flex flex-col justify-center items-center p-5">
        <h2 className="text-4xl text-blue-950 font-semibold mb-3 mt-9 text-center">
          Access Your Admin Dashboard
        </h2>
        <p className="text-gray-600 text-center mb-4 text-lg">
          Enter your username and password to get started.
        </p>

        <button className="bg-blue-500 text-white px-6 py-2 rounded font-semibold mb-3 shadow transform transition duration-300 hover:scale-110">
          <Link href="/"> Get Started</Link>
        </button>

        <img
          src="/images/loginpage.png"
          alt="Manage Illustration"
          className="w-3/4 max-h-[500px] object-contain"
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
            onChange={handleInputChange}
            className="w-full p-3 border rounded mb-3 text-black"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full p-3 border rounded mb-3 text-black"
          />
        </div>

        <button className="w-full bg-blue-500 text-white p-3 rounded" onClick={handleLogin}>
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


