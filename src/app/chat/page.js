import Sidebar from "../components/chatsidebar";
import ChatWindow from "../components/ChatWindow";
import MemberSidebar from "../components/MemberSidebar";

export default function Home() {
  return (
    <main>
    <div className=" bg-gray-100">
      <div className="flex items-end justify-between h-28 bg-blue-950 border-b border-gray-200 px-4">
        {/* Back Button (Left Corner) */}
        <a
          href="/teacherdashboard"
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

    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <ChatWindow />
      <MemberSidebar />
    </div>
    </div>
    </main>
  );
}
