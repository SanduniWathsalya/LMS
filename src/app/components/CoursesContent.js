import { useState } from 'react';

// components/TabContent.js
const courses = [
  {
    id: 1,
    title: 'Profitable Design Trends',
    subject: 'IT',
    description: 'Unlock the secrets behind today’s most profitable design styles...',
    duration: '1h 30m',
    instructor: 'Martin Roberts',
    image: '/images/courses1.jpeg',
  },
  {
    id: 2,
    title: 'Web Development',
    subject: 'IT',
    description: 'Dive into the world of web development...',
    duration: '1h 30m',
    instructor: 'Laura James',
    image: '/images/courses2.jpeg',
  },
  {
    id: 3,
    title: 'Cyber Security',
    subject: 'IT',
    description: 'Explore the critical world of cyber security...',
    duration: '3h 40m',
    instructor: 'Laura James',
    image: '/images/courses3.jpeg',
  },
  {
    id: 4,
    title: 'Algebra Basics',
    subject: 'Maths',
    description: 'Learn the fundamental concepts of algebra including variables, equations, expressions, and inequalities.',
    duration: '2h 10m',
    instructor: 'John Doe',
    image: '/images/mathcourse1.jpeg',
  },
  {
    id: 5,
    title: 'Statistics & Probability',
    subject: 'Maths',
    description: 'Explore the essentials of data analysis and probability. Understand how to collect, organize, and interpret data using charts, graphs, mean, median, and mode.',
    duration: '2h 10m',
    instructor: 'John Doe',
    image: '/images/mathcourse2.jpeg',
  },
  {
    id: 6,
    title: 'Introduction to Biology & Scientific Method',
    subject: 'Science',
    description: 'Learn what biology is, why it matters, and how scientists use the scientific method to explore living systems.',
    duration: '2h',
    instructor: 'Jane Smith',
    image: '/images/biocourse1.jpeg',
  },
  {
    id: 7,
    title: 'Cell Structure and Function',
    subject: 'Science',
    description: 'Discover the building blocks of life — the cell. Explore the differences between prokaryotic and eukaryotic cells and understand organelle functions.',
    duration: '2h',
    instructor: 'Jane Smith',
    image: '/images/biocourse2.jpeg',
  },
  {
    id: 8,
    title: 'English Grammar',
    subject: 'English',
    description: 'Master the fundamentals of English grammar...',
    duration: '1h 45m',
    instructor: 'Emily Clark',
    image: '/images/encourse1.jpeg',
  },
];

const teachers = [
  {
    name: 'Martin Roberts',
    course: 'Profitable Design Trends',
    bio: 'Expert in design and branding',
    image: '/images/user5.jpeg',
  },
  {
    name: 'Laura James',
    course: 'Web Development',
    bio: 'Full-stack web developer and mentor, specializing in front-end frameworks and back-end technologies.',
    image: '/images/user3.jpeg',
  },
  {
    name: 'Anna Smith',
    course: 'Cyber Security',
    bio: 'Cyber security expert with experience in network security, ethical hacking, and threat mitigation strategies.',
    image: '/images/user.jpeg',
  },
  {
    name: 'Jesmin Whilson',
    course: 'Database System',
    bio: 'Database systems specialist with experience in SQL, NoSQL, and data modeling.',
    image: '/images/user2.jpeg',
  },
  {
    name: 'Mark Twin',
    course: 'Computer Network',
    bio: 'Computer network specialist with expertise in network architecture, protocols, and troubleshooting.',
    image: '/images/user6.jpeg',
  },
];

const followers = [
  {
    course: 'Profitable Design Trends',
    students: [
      { name: 'Emma Wilson', percentage: 40 },
      { name: 'David Lee', percentage: 92 },
      { name: 'Olivia Martin', percentage: 20 },
      { name: 'James Carter', percentage: 88 },
      { name: 'Sophia Brown', percentage: 91 },
      { name: 'Liam Johnson', percentage: 52 },
      { name: 'Ava Davis', percentage: 76 },
      { name: 'Noah Thompson', percentage: 89 },
    ],
  },
  {
    course: 'Web Development',
    students: [
      { name: 'Emma Wilson', percentage: 85 },
      { name: 'David Lee', percentage: 92 },
      { name: 'Olivia Martin', percentage: 78 },
      { name: 'James Carter', percentage: 88 },
      { name: 'Sophia Brown', percentage: 91 },
      { name: 'Liam Johnson', percentage: 83 },
      { name: 'Ava Davis', percentage: 76 },
      { name: 'Noah Thompson', percentage: 89 },
    ],
  },
  {
    course: 'Cyber Security',
    students: [
      { name: 'Emma Wilson', percentage: 85 },
      { name: 'David Lee', percentage: 92 },
      { name: 'Olivia Martin', percentage: 78 },
      { name: 'James Carter', percentage: 88 },
      { name: 'Sophia Brown', percentage: 91 },
      { name: 'Liam Johnson', percentage: 83 },
      { name: 'Ava Davis', percentage: 76 },
      { name: 'Noah Thompson', percentage: 89 },
    ],
  },
  {
    course: 'Database Management',
    students: [
      { name: 'Emma Wilson', percentage: 85 },
      { name: 'David Lee', percentage: 92 },
      { name: 'Olivia Martin', percentage: 78 },
      { name: 'James Carter', percentage: 88 },
      { name: 'Sophia Brown', percentage: 91 },
      { name: 'Liam Johnson', percentage: 83 },
      { name: 'Ava Davis', percentage: 76 },
      { name: 'Noah Thompson', percentage: 89 },
    ],
  },
];

export default function TabContent({ activeTab }) {
  const [selectedSubject, setSelectedSubject] = useState('IT');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = courses.filter(
    (course) => course.subject === selectedSubject && course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredTeachers = teachers.filter(
    (teacher) =>
      teacher.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
      teacher.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredFollowers = followers.filter((item) =>
    item.course.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const subjectList = ['IT', 'Maths', 'Science', 'English'];

  if (activeTab === 'courses') {
    return (
      <div>
        <div className="mb-4 flex justify-between items-center flex-wrap">
          <div className="flex items-center space-x-2">
            <label className="text-black">Select Subject:</label>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="border p-1 rounded text-black hover:bg-blue-100"
            >
              {subjectList.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>

          <input
            type="text"
            placeholder="Search courses..."
            className="border p-1 rounded text-black w-60 mt-2 sm:mt-0"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {filteredCourses.map((course) => (
          <div key={course.id} className="bg-white p-4 rounded-md shadow mb-4 text-black">
            <img src={course.image} alt={course.title} className="rounded-md mb-2 w-full h-40 object-fill" />
            <h2 className="font-semibold text-lg">{course.title}</h2>
            <p className="text-sm text-gray-600">{course.description}</p>
            <div className="text-xs text-gray-500 mt-2">
              {course.duration} | {course.instructor}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (activeTab === 'teachers') {
    return (
      <div>
        <div className="mb-4 flex justify-between items-center flex-wrap">
          <div className="flex items-center space-x-2">
            <label className="text-black">Select Subject:</label>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="border p-1 rounded text-black hover:bg-blue-100"
            >
              {subjectList.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>

          <input
            type="text"
            placeholder="Search teachers..."
            className="border p-1 rounded text-black w-60 mt-2 sm:mt-0"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {filteredTeachers.map((teacher, index) => (
          <div key={index} className="bg-white p-4 rounded-md shadow mb-4 flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-black">{teacher.name}</h2>
              <p className="text-sm text-gray-500">Course: {teacher.course}</p>
              <p className="text-sm mt-1 text-black">{teacher.bio}</p>
            </div>
            <img src={teacher.image} alt={teacher.name} className="rounded-full w-20 h-20 object-cover ml-4" />
          </div>
        ))}
      </div>
    );
  }

  if (activeTab === 'followers') {
    return (
      <div>
        <div className="mb-4 flex justify-between items-center flex-wrap">
          <div className="flex items-center space-x-2">
            <label className="text-black">Select Subject:</label>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="border p-1 rounded text-black hover:bg-blue-100"
            >
              {subjectList.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>

          <input
            type="text"
            placeholder="Search followers..."
            className="border p-1 rounded text-black w-60 mt-2 sm:mt-0"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {filteredFollowers.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-md shadow mb-4">
            <h2 className="font-semibold text-black text-xl mb-5">{item.course}</h2>

            <ul className="ml-2 text-sm text-gray-700 space-y-2">
              {item.students.map((student, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  {/* Student Name */}
                  <span className="w-32">{student.name}</span>

                  {/* Progress Bar Line */}
                  <div className="w-80 h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-200 to-blue-800"
                      style={{ width: `${student.percentage}%` }}
                    ></div>
                  </div>

                  {/* Percentage */}
                  <span className="w-full text-right text-gray-500">{student.percentage}%</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}
