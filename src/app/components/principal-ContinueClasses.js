import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // or use SVGs directly

export default function ContinueClasses() {
  const scrollRef = useRef(null);

  const scroll = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += offset;
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow-md relative">
     <div className="flex items-center justify-between mb-4">
  <h3 className="font-semibold text-blue-950">Today Classes</h3>
  <p className="text-sm text-gray-600">
    {new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric"
    })}
  </p>
</div>


      {/* Arrows */}
<button
  onClick={() => scroll(-200)}
  className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 p-2 rounded-full shadow text-blue-950"
>
  <ChevronLeft size={20} />
</button>
<button
  onClick={() => scroll(200)}
  className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 p-2 rounded-full shadow text-blue-950"
>
  <ChevronRight size={20} />
</button>


      {/* Scrollable Row */}
      <div className="overflow-x-auto scrollbar-hide">
  <div
    ref={scrollRef}
    className="flex justify-center space-x-4 w-fit mx-auto"
  >
    {[
  {
    subject: "Maths",
    teacher: "Alan Black",
    img: "/images/maths-class.jpeg",
    teacherImg: "/images/user.jpeg", // <-- add teacher image
    grade: "7",
    duration: "1h 20m"
  },
  {
    subject: "Physics",
    teacher: "John Deo",
    img: "/images/english-class.jpeg",
    teacherImg: "/images/user5.jpeg",
    grade: "8",
    duration: "1h 10m"
  },
  {
    subject: "Biology",
    teacher: "Mary Smith",
    img: "/images/maths-class.jpeg",
    teacherImg: "/images/user2.jpeg",
    grade: "9",
    duration: "1h 15m"
  },
  {
    subject: "Chemistry",
    teacher: "Paul White",
    img: "/images/english-class.jpeg",
    teacherImg: "/images/user6.jpeg",
    grade: "10",
    duration: "1h 5m"
  },
].map((cls, index) => (
  <div key={index} className="bg-gray-100 p-4 rounded min-w-[220px] flex flex-col  ">
    <img src={cls.img} alt="class" className="w-full h-24 object-cover rounded mb-3" />
    <p className="font-semibold text-black">{cls.subject} Class</p>
    <p className="text-sm text-gray-500 mb-3">
     Grade {cls.grade} • {cls.duration}
    </p>
    <div className="flex items-center justify-between w-full mt-2">
  {/* Left side: image + name */}
  <div className="flex items-center space-x-2">
    <img
      src={cls.teacherImg}
      alt={cls.teacher}
      className="w-10 h-10 rounded-full object-cover"
    />
    <p className="text-sm text-gray-700">{cls.teacher}</p>
  </div>

  {/* Right side: icon */}
  <button onClick={() => handleTeacherClick(cls)} className="text-blue-600 hover:text-blue-800">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 0a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v4a2 2 0 002 2m6 0v6m0 0l-3-3m3 3l3-3" />
    </svg>
  </button>
</div>


  </div>
))}

  </div>
</div>

    </div>
  );
}
