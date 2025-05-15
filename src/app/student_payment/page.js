import Image from "next/image";

export default function StudentPayment() {
  return (
    <main>
    <div className=" bg-gray-100 h-screen">
      <div className="flex items-end justify-between h-28 bg-blue-950 border-b border-gray-200 px-4">
        {/* Back Button (Left Corner) */}
        <a
          href="/payments"
          className="relative flex flex-col items-center text-white hover:text-gray-300 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            className="transition-transform duration-200 group-hover:scale-110"
          >
            <path fill="currentColor" d="M14 7l-5 5 5 5V7z" />
          </svg>
          <span className="absolute top-full mt-1 text-xs text-white bg-gray-800 px-1 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Back
          </span>
        </a>

        {/* Notifications & Logout (Right Corner) */}
        <div className="flex items-end mb-2 space-x-4">
          <a
            href="#"
            className="relative flex flex-col items-center text-white hover:text-gray-300 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="transition-transform duration-200 group-hover:scale-110"
            >
              <path
                fill="currentColor"
                d="M12 2C10.9 2 10 2.9 10 4V4.29C7.19 5.17 5 7.92 5 11V16L3 18V19H21V18L19 16V11C19 7.92 16.81 5.17 14 4.29V4C14 2.9 13.1 2 12 2ZM12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22Z"
              />
            </svg>
            <span className="absolute top-full mt-1 text-xs text-white bg-gray-800 px-1 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Notifications
            </span>
          </a>

          <a
            href="#"
            className="relative flex flex-col items-center text-white hover:text-gray-300 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="transition-transform duration-200 group-hover:scale-110"
            >
              <path
                fill="currentColor"
                d="M10.09 15.59L12.67 13H4V11H12.67L10.09 8.41L11.5 7L16.5 12L11.5 17L10.09 15.59ZM20 19H13V21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3H13V5H20V19Z"
              />
            </svg>
            <span className="absolute top-full mt-1 text-xs text-white bg-gray-800 px-1 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Logout
            </span>
          </a>
        </div>
      </div>


    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Left Side - Student Image */}
          <div className="md:col-span-1">
            <div className="flex flex-col items-center">
              <div className="w-60 h-60 bg-gray-300 rounded-md overflow-hidden">
                <Image
                  src="/images/student.jpeg"
                  alt="Student"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Student Info + Email Button */}
          <div className="md:col-span-2 space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md m-4">
              <h2 className="text-2xl font-bold text-gray-800">Anna Smith</h2>
              <p className="text-gray-600">SID: ST6001</p>
              <p className="text-gray-600">Email: smith@gmail.com</p>
              <p className="text-green-600 font-semibold mt-2">Status: Paid</p>

              <button className="mt-4 px-4 py-2 bg-blue-950 rounded hover:bg-blue-700 transition">
                Send Email Notification
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Left - Previous Payments */}
        {/* Bottom Section */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
  {/* Bottom Left - Previous Payments */}
  <div>
    <h3 className="text-lg font-semibold text-gray-700 mb-4">Previous Payment Details</h3>
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-md shadow-sm">
        <p className="text-sm text-gray-600">Date: Jan 10, 2025</p>
        <p className="text-sm text-gray-600">Amount: $250.00</p>
        <p className="text-sm text-green-600">Status: Paid</p>
      </div>
      <div className="bg-white p-4 rounded-md shadow-sm">
        <p className="text-sm text-gray-600">Date: Dec 05, 2024</p>
        <p className="text-sm text-gray-600">Amount: $250.00</p>
        <p className="text-sm text-green-600">Status: Paid</p>
      </div>
    </div>
    <button className="mt-4 px-4 py-2 text-white bg-blue-950 rounded hover:bg-blue-700 transition">
      See More
    </button>
  </div>

  {/* Bottom Right - Late Payments */}
  <div>
    <h3 className="text-lg font-semibold text-gray-700 mb-4">Late Payment Details</h3>
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-md shadow-sm">
        <p className="text-sm text-gray-600">Date: Nov 01, 2024</p>
        <p className="text-sm text-gray-600">Amount: $250.00</p>
        <p className="text-sm text-red-600">Status: Late</p>
      </div>
      <div className="bg-white p-4 rounded-md shadow-sm">
        <p className="text-sm text-gray-600">Date: Oct 01, 2024</p>
        <p className="text-sm text-gray-600">Amount: $250.00</p>
        <p className="text-sm text-red-600">Status: Late</p>
      </div>
    </div>
    <button className="mt-4 px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700 transition">
      See More
    </button>
  </div>
</div>

      </div>
    </div>
    </div>
    </main>
  );
}
