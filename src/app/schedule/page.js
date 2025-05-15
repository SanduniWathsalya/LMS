// pages/teacher/schedule.js
"use client"
import { useEffect, useState } from 'react';

export default function Schedule() {
  const [schedule, setSchedule] = useState([]);
  
  const [weekStartDate, setWeekStartDate] = useState(() => {
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay()); // Sunday
    return startOfWeek;
  });
  
  const getCurrentWeek = (startDate) => {
    return Array.from({ length: 7 }, (_, i) => {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      return {
        label: ['S', 'M', 'T', 'W', 'T', 'F', 'S'][i],
        date: date.getDate(),
        fullDate: date,
        isToday: date.toDateString() === new Date().toDateString(),
      };
    });
  };
  
  const currentWeek = getCurrentWeek(weekStartDate);

  const goToPreviousWeek = () => {
    const newStart = new Date(weekStartDate);
    newStart.setDate(newStart.getDate() - 7);
    setWeekStartDate(newStart);
  };
  
  const goToNextWeek = () => {
    const newStart = new Date(weekStartDate);
    newStart.setDate(newStart.getDate() + 7);
    setWeekStartDate(newStart);
  };
  
  

  const handleEdit = (id) => {
    // For now, just log
    console.log("Edit schedule with ID:", id);
    // Later, you can redirect or show a modal to edit
    // Example: router.push(`/teacher/edit-schedule/${id}`);
  };
  
  const [selectedLabels, setSelectedLabels] = useState({});

const toggleLabel = (id, type) => {
  setSelectedLabels(prev => {
    const key = `${id}-${type}`;
    return {
      ...prev,
      [key]: !prev[key],
    };
  });
};


  

  useEffect(() => {
    const fetchSchedule = async () => {
      const res = await fetch("http://localhost/edupulse/schedule_api/get_schedule.php?teacher_id=1");
      const data = await res.json();
      setSchedule(data);
    };

    fetchSchedule();
  }, []);

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

      <div className="p-6 bg-gray-200">
  <h1 className="text-2xl font-bold mb-4 text-blue-950">My Schedule</h1>
  <div className="flex flex-col lg:flex-row gap-6">
    {/* LEFT SIDE: Schedule */}
    <div className="lg:w-2/3 space-y-6 text-black bg-white p-4 rounded-lg shadow-md">

  {/* Week Calendar */}
<div className="flex items-center justify-between mb-6">
<button
  onClick={goToPreviousWeek}
  className="bg-blue-700 text-white rounded-full w-5 h-5 flex items-center justify-center hover:bg-blue-800"
  title="Previous Week"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
</button>


  <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium flex-grow">
    {currentWeek.map((day, i) => (
      <div
        key={i}
        className={`p-2 flex flex-col items-center rounded ${
          day.isToday ? 'bg-blue-700 text-white font-bold' : 'bg-white text-black'
        }`}
      >
        <span>{day.label}</span>
        <span>{day.date}</span>
      </div>
    ))}
  </div>

  <button
  onClick={goToNextWeek}
  className="bg-blue-700 text-white rounded-full w-5 h-5 flex items-center justify-center hover:bg-blue-800"
  title="Next Week"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7 " />
  </svg>
</button>
</div>


  {/* Flex Container for Main Content */}
  
      {schedule.map((item) => (
        <div key={item.id} className="flex items-start justify-between border-b pb-4">
          <div className="flex items-start space-x-4">
            {/* Class + line */}
            <div className="text-lg font-bold min-w-[80px]">{item.class}</div>
            <div className="border-l-4 border-blue-500 h-full"></div>

            {/* Content */}
            <div>
              <div className="text-sm text-gray-600 font-semibold">{item.day_of_week}</div>
              <div className="mt-1 text-base">
                <p className="font-medium">Algebra</p>
               
              </div>
            </div>
          </div>

          {/* Time right */}
          <div className="text-right text-sm text-gray-600 space-y-2 relative">
  {/* Edit icon */}
  <button
    onClick={() => handleEdit(item.id)} // create this function
    className="absolute -top-5 right-0 text-gray-500 hover:text-blue-700"
    title="Edit Schedule"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 
               7.04a1.003 1.003 0 0 0 0-1.42l-2.34-2.34a1.003 
               1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 
               1.84-1.82z" />
    </svg>
  </button>

  {/* Time */}
  <div>{item.start_time} - {item.end_time}</div>

  {/* Type Boxes */}
  <div className="flex gap-2 justify-end">
  {['Lesson', 'Homework', 'Assignment'].map((type) => {
    const key = `${item.id}-${type}`;
    const isSelected = selectedLabels[key];

    let bgColor = 'bg-gray-300'; // default
    if (isSelected && type === 'Lesson') bgColor = 'bg-blue-500';
    if (isSelected && type === 'Homework') bgColor = 'bg-red-500';
    if (isSelected && type === 'Assignment') bgColor = 'bg-yellow-500';

    return (
      <button
        key={type}
        onClick={() => toggleLabel(item.id, type)}
        className={`px-2 py-1 rounded text-xs text-white ${bgColor}`}
      >
        {type}
      </button>
    );
  })}
</div>


</div>


        </div>
      ))}
    </div>

    {/* RIGHT SIDE: Cards */}
    <div className="lg:w-1/3 space-y-4">
      {/* Absence Card */}
      <div className=" shadow-md rounded-lg p-4 bg-gradient-to-r from-purple-600 to-purple-400 ">
        <h2 className="text-lg font-semibold mb-2 text-white">Absence</h2>
        <p className="text-sm text-gray-200">Check absent students in your session </p>
      </div>

      {/* Notes Card */}
      <div className=" shadow-md rounded-lg p-4 bg-gradient-to-r from-purple-600 to-purple-400 ">
        <h2 className="text-lg font-semibold mb-2 text-white">Notes</h2>
        <p className="text-sm text-gray-200">Add important notes, ideas, or plans here.</p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 relative">
  <h2 className="text-lg font-semibold mb-2 text-blue-950">Tasks</h2>

  {/* Icon in Top-Right Corner */}
  <button
  className="bg-blue-700 text-white rounded-full w-5 h-5 flex items-center justify-center hover:bg-blue-800  absolute top-4 right-4 cursor-pointer"
>
  <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-4 w-4"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  strokeWidth={2}
  onClick={() => console.log("Add button clicked")}
>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
</svg>
</button>

 <ul className="text-sm text-gray-600 space-y-2">
  {["Prepare lesson for Monday", "Grade student submissions", "Update attendance sheet"].map((task, index) => (
    <li key={index} className="flex justify-between items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-red-600 mr-2"  // Red color with margin
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7H5M3 7h18M5 7l1 14h12l1-14H5z" />
      </svg>
      <span>{task}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-blue-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </li>
  ))}
</ul>

</div>


    </div>
  </div>
</div>














    
    </div>
    </main>
  );
}
