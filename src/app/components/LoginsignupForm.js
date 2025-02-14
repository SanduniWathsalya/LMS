"use client";
import { useState } from "react";

export default function LoginSignUpForm() {
  const [isActive, setIsActive] = useState(false); // To track the form state (login or register)
  const [isLogin, setIsLogin] = useState(true); // To track whether we're on the login or register form

  const toggleForm = () => {
    setIsActive(!isActive);
    setIsLogin(!isLogin); // Toggle between login and register
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-800 via-indigo-800 to-indigo-600">
      <div className="relative w-[850px] h-[550px] bg-white rounded-3xl shadow-lg overflow-hidden">
        {/* Login Form */}
        <div
          className={`absolute w-1/2 h-full bg-white flex items-center text-center p-10 transition-all duration-500 ${
            isLogin ? "left-0" : "left-[-100%]"
          }`}
        >
          <form>
            <h1 className="text-3xl text-blue-950 font-semibold">Login</h1>
            <div className="relative my-6">
              <input
                type="text"
                placeholder="Username"
                required
                className="w-full p-3 pl-8 bg-gray-200 rounded-lg"
              />
              <i className="absolute right-5 top-1/2 transform -translate-y-1/2 text-xl bx bxs-user"></i>
            </div>
            <div className="relative my-6">
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full p-3 pl-8 bg-gray-200 rounded-lg"
              />
              <i className="absolute right-5 top-1/2 transform -translate-y-1/2 text-xl bx bxs-lock-alt"></i>
            </div>
            <div className="my-4">
              <a href="#" className="text-gray-700">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full h-12 bg-indigo-500 text-white font-semibold rounded-lg shadow-md"
            >
              Login
            </button>
            <p className="my-4 text-black">or login with social platforms</p>
            <div className="flex justify-center text-black space-x-4">
              <a href="#" className="text-2xl text-gray-900">
                <i className="bx bxl-google"></i>
              </a>
              <a href="#" className="text-2xl text-gray-700">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="#" className="text-2xl text-gray-700">
                <i className="bx bxl-github"></i>
              </a>
              <a href="#" className="text-2xl text-gray-700">
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </form>
        </div>

        {/* Register Form */}
        <div
          className={`absolute w-1/2 h-full bg-white flex items-center text-center p-10 transition-all duration-500 ${
            !isLogin ? "left-0" : "left-[-100%]"
          }`}
        >
          <form>
            <h1 className="text-3xl font-semibold text-blue-950">Registration</h1>
            <div className="relative my-6">
              <input
                type="text"
                placeholder="Username"
                required
                className="w-full p-3 pl-8 bg-gray-200 rounded-lg"
              />
              <i className="absolute right-5 top-1/2 transform -translate-y-1/2 text-xl bx bxs-user"></i>
            </div>
            <div className="relative my-6">
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full p-3 pl-8 bg-gray-200 rounded-lg"
              />
              <i className="absolute right-5 top-1/2 transform -translate-y-1/2 text-xl bx bxs-envelope"></i>
            </div>
            <div className="relative my-6">
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full p-3 pl-8 bg-gray-200 rounded-lg"
              />
              <i className="absolute right-5 top-1/2 transform -translate-y-1/2 text-xl bx bxs-lock-alt"></i>
            </div>
            <button
              type="submit"
              className="w-full h-12 bg-indigo-500 text-white font-semibold rounded-lg shadow-md"
            >
              Register
            </button>
            <p className="my-4">or register with social platforms</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-2xl text-gray-700">
                <i className="bx bxl-google"></i>
              </a>
              <a href="#" className="text-2xl text-gray-700">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="#" className="text-2xl text-gray-700">
                <i className="bx bxl-github"></i>
              </a>
              <a href="#" className="text-2xl text-gray-700">
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </form>
        </div>

        {/* Toggle Panel */}
        <div className="absolute w-full h-full flex justify-center items-center">
          <div
            className={`absolute w-full h-full bg-indigo-500 rounded-full transition-all duration-1000`}
            style={{ left: isActive ? "50%" : "-250%" }}
          ></div>
          <div
            className={`absolute left-0 w-1/2 h-full flex justify-center items-center`}
          >
            <div>
              <h1 className="text-4xl text-white">Hello, Welcome!</h1>
              <p className="text-lg text-white">Don't have an account?</p>
              <button
                onClick={toggleForm}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg"
              >
                Register
              </button>
            </div>
          </div>
          <div
            className={`absolute right-0 w-1/2 h-full flex justify-center items-center`}
          >
            <div>
              <h1 className="text-4xl text-white">Welcome Back!</h1>
              <p className="text-lg text-white">Already have an account?</p>
              <button
                onClick={toggleForm}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
