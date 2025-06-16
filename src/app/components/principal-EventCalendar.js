import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import {CalendarIcon, Clock, Pencil } from 'lucide-react';

export default function CalendarEvents() {
  const [value, setValue] = useState(new Date());

  const events = [
    { title: 'PTA Meeting', date: 'Mon 11th Nov, 2023', time: '9:00am' },
    { title: 'Quiz', date: 'Sat 16th Nov, 2023', time: '10:30am' },
     { title: 'Maths Quiz', date: '2025-06-05', time: '10:00 AM' },
    { title: 'Parent Meeting', date: '2025-06-10', time: '2:00 PM' },
  ];

  

  return (
    <div className="w-full sm:w-80 bg-white p-4 rounded shadow ml-0 sm:ml-6 mt-6 sm:mt-0 text-black">
      <div className="mb-6">

        <Calendar onChange={setValue} value={value} />
      </div>
     <div>
      <h3 className="font-semibold mb-2 text-blue-950 mt-10" >Upcoming Events</h3>
      <ul className="space-y-3">
        {events.map((event, i) => (
          <li
            key={i}
            className="p-3 bg-blue-50 rounded border-l-4 border-blue-400 flex justify-between items-start"
          >
            <div>
              <p className="font-semibold text-sm">{event.title}</p>
              <div className="mt-1 flex flex-col text-xs text-gray-600 space-y-1">
                <div className="flex items-center gap-1">
                <CalendarIcon className="w-4 h-4 text-blue-600" />
                 <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span>{event.time}</span>
                </div>
              </div>
            </div>
            <Pencil className="w-4 h-4 text-gray-500 hover:text-blue-600 cursor-pointer mt-1" />
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}
