import Navbar from './components/Navbar';
import Link from 'next/link';



export default function Home() {
  return (
    <div>
      <Navbar/>
      <main className="min-h-screen flex flex-col justify-start">
      <div className="">   
      <div className="area">
			<ul className="circles">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</div>
    </div> 
      <h1 className="text-7xl text-center mt-28 font-bold  text-white leading-snug">Best Online <br/>Student Management System</h1>
      <p className='text-1xl text-center   text-gray-400 mt-4'>Now you can manage your school, college, or any educational center with eduPulse. Your data's security is our top priority.</p>
    
      <div className="flex space-x-5 items-center justify-center ">
      <Link href="/register" className = "text-white hover:text-blue-700 ">
      <button className="flex items-center mt-5 px-4 py-2 bg-blue-500 text-white font-semibold rounded shadow hover:bg-blue-400 hover:scale-105 hover:opacity-80 transition-transform transition-opacity duration-300">
           <img src="/images/contactus.jpg" alt="icon" className="w-8 h-8 mr-3  " /> 
           Contact Us
      </button></Link>

      <Link href="/register" className = "text-white hover:text-blue-700 ">
      <button className="flex items-center mt-5 px-4 py-2  bg-transparent border border-white font-semibold rounded shadow hover:bg-blue-400 hover:scale-105 hover:opacity-80 transition-transform transition-opacity duration-300">
            <img src="/images/arrow2.jpg" alt="icon" className="w-8 h-8 mr-3 " /> 
                Learn More
      </button></Link>
       </div>
       <div className="flex  items-center mt-2 justify-center ">
       <img 
            src="/images/hero.jpg"
            alt="Hero"
            className="w-[400px] h-[200px]   rounded-lg animate-fade"/>
          
          </div>  
     
     <div className="min-h-screen flex flex-col w-full justify-center bg-blue-500 mt-10 pb-20 ">
  <h1 className="text-5xl text-center mt-56 justify-center font-bold text-white">Features of Our eduPulse System</h1>
  <p className="text-[18px] text-center text-white mt-4 p-4 mx-auto max-w-6xl leading-relaxed">
    eduPulse is an all-in-one platform designed to streamline the administration of educational institutions. It offers a comprehensive suite of features, including student registration, attendance tracking, grade management, and course scheduling. eduPulse simplifies communication between students, teachers, and parents while ensuring the efficient management of academic and administrative tasks.
  </p>

  <div className="flex justify-center gap-10">
  {/* Left Section with Features */}
  <div className="flex flex-col items-center mt-48 ml-10 space-y-12 w-1/3">
    <div className="text-white text-center">
      <h3 className="text-3xl font-bold">Regular Updates & Support</h3>
      <p className="text-[15px] mt-4">
      We add new and awesome features regularly to make our school administrative software unmatchable. Free online 24/7 support for users.
      </p>
    </div>
    <div className="text-white text-center">
      <h3 className="text-3xl font-bold">Real-time Notifications</h3>
      <p className="text-[15px] mt-4">
        Stay up to date with instant notifications about important events, such as grade updates, class schedules, and announcements.
      </p>
    </div>
    <div className="text-white text-center">
      <h3 className="text-3xl font-bold">Attendance Tracking</h3>
      <p className="text-[15px] mt-4">
        Easily manage student attendance with automated records and reports, making it easier for teachers and admins to track student presence.
      </p>
    </div>
  </div>

  {/* Center Section with Image */}
  <div className="flex flex-col items-center mt-12 mr-5 justify-center w-1/3">
    <img
      src="/images/mobileview.jpg"
      alt="eduPulse system"
      className="w-[400px] h-[700px] rounded-lg "
    />
  </div>

  {/* Right Section with Features */}
  <div className="flex flex-col items-center mt-48 mr-4 space-y-12 w-1/3">
    <div className="text-white text-center">
      <h3 className="text-3xl font-bold">Responsive Web Design</h3>
      <p className="text-[15px] mt-4">
        You can use our student management system on any device, like Mobile, Tablet, Laptop, or desktop due to its responsive design.
      </p>
    </div>
    <div className="text-white text-center">
      <h3 className="text-3xl font-bold">Fast, Secure & Easy</h3>
      <p className="text-[15px] mt-4">
      We use advanced tools and technologies to build up this free school software. It is super fast, secure, reliable, and easy to use and manage.
      </p>
    </div>
    <div className="text-white text-center">
      <h3 className="text-3xl font-bold">Personalized Dashboards</h3>
      <p className="text-[15px] mt-4">
      Students, teachers, and administrators have access to personalized dashboards that show relevant information, like attendance, grades, and announcements.
      </p>
    </div>
  </div>
</div>
</div>

<div className="flex justify-between items-center min-h-screen bg-blue-950 px-12 space-x-8">
  {/* Left Section: Heading and Paragraph */}
  <div className="text-white w-1/2 ml-40">
    <h3 className="text-3xl font-bold">Why Choose Us</h3>
    <p className="text-[15px] mt-4 leading-relaxed">
      At the core of our student management system is a commitment to enhancing efficiency, transparency, and collaboration in educational institutions. 
      Our platform is designed with user-friendly interfaces, ensuring accessibility for students, teachers, and administrators alike. By integrating 
      cutting-edge technology, we provide tools that streamline administrative tasks, enable seamless communication, and offer actionable insights through 
      data analytics. With features like automated attendance tracking, real-time notifications, and responsive design, our system adapts to your institution's 
      unique needs. Choose us to empower your institution with a secure, reliable, and innovative solution that simplifies school management and fosters 
      academic excellence.
    </p>
  </div>

  {/* Right Section: Image */}
  <div className="w-1/2 flex justify-center">
    <img
      src="/images/whychooseus.jpg"
      alt="Why Choose Us"
      className="w-[700px] h-[400px] rounded-lg "
    />
  </div>
</div>

<div className=" flex flex-col  justify-center bg-blue-950">
  <h1 className="text-3xl text-center justify-center font-bold text-white ">Separate Portals Available</h1>
  <p className="text-[15px] text-center text-white w-[600px] mt-4 mx-auto max-w-6xl leading-relaxed">
  Our student management system offers dedicated portals for principals ,teachers, and administrators, ensuring a tailored experience for each user type.Teachers can manage class schedules, track attendance, and monitor student progress. Administrators have full control over system settings, user management, and report generation.
</p>
</div>
<div className=" flex justify-center bg-blue-950">
    <img
      src="/images/team.jpg"
      alt="team"
      className="w-[500px] h-[600px] rounded-lg "
    />
  </div>

  <div className="flex justify-between items-center bg-blue-950 px-12 space-x-8">
  {/* Left Section: Heading and Paragraph */}
  <div className="text-white w-1/2 ml-40">
    <h3 className="text-3xl text-center font-bold">Messaging System</h3>
    <p className="text-[15px] mt-4  leading-relaxed">
    Discuss and share ideas with other users through our messaging system. With this feature, you can do real-time chat with every individual associated with your institution.
    </p>
  </div>

  {/* Right Section: Image */}
  <div className="w-1/2 flex justify-center">
    <img
      src="/images/messaging.jpg"
      alt="Why Choose Us"
      className="w-[600px] h-[400px] rounded-lg "
    />
  </div>
</div>

<div className="flex justify-between items-center  bg-blue-950 px-12 space-x-8">
  {/* Left Section:Dashboard Image*/}
  <div className="w-1/2 flex justify-center">
    <img
      src="/images/attendence.jpg"
      alt="Why Choose Us"
      className="w-[700px] h-[400px] rounded-lg "
    />
  </div>

  {/* Right Section: Heading and Paragraph */}
  <div className="text-white  w-1/2 ml-40">
    <h3 className="text-3xl text-center font-bold">Empowering Educators with Insights</h3>
    <p className="text-[15px] text-center mt-4 leading-relaxed">
    Stay ahead with real-time access to student performance! Our system provides teachers with a seamless way to view attendance records and academic marks, helping them track progress, identify trends, and support students effectively. It's a smart tool to ensure every student reaches their potential.
    </p>
  </div>
</div>


  <div className="flex justify-between items-center bg-blue-950 px-12 space-x-8">
  {/* Left Section:Heading and Para*/}
  <div className="text-white mt-10 w-1/2 ml-40">
    <h3 className="text-3xl text-center font-bold">Genarate Reports</h3>
    <p className="text-[15px] text-center mt-4 leading-relaxed">
    Our system allows educators and administrators to effortlessly generate comprehensive reports on student performance, attendance, and more. With just a few clicks, you can create customized reports that provide deep insights, making it easier to analyze trends, monitor progress, and make informed decisions.
    </p>
  </div>


  {/* Right Section: reports image */}
  <div className="w-1/2 flex justify-center bg-blue-950">
    <img
      src="/images/reports.png"
      alt="Why Choose Us"
      className="w-[400px] h-[400px]  rounded-lg "
    />
  </div>
</div>

<div className=" flex flex-col w-full h-[500px] justify-center bg-blue-500 mt-10   ">
  <h1 className="text-3xl text-center mt-26 justify-center font-bold text-white">All features in one place</h1>
  <p className="text-[18px] text-center text-white mt-4 p-4 mx-auto max-w-6xl leading-relaxed">
 We are eduPulse, the ultimate student management system designed to simplify school operations and empower educators, 
and administrators.Stay connected with us, and explore how our platform can help you streamline student management 
effortlessly. Whether you're a teacher, principal, or administrator, eduPulse provides a dedicated portal for everyone.<br/><br/> 
Join us today and take the first step towards a smarter, more efficient school management experience! 
</p>
<div className="flex space-x-12 mt-6 justify-center ">
      <Link href="/registerroles" className = "text-white hover:text-blue-700 ">
      <button className="flex items-center px-4 py-2 bg-gray-200 text-blue-500 font-semibold rounded-full shadow transform transition duration-300 hover:scale-110">
      <img src="/images/signup.jpg" alt="Signup icon" className="w-7 h-7 mr-1" />
           Sign Up now
      </button></Link>

      <Link href="/contact" className = "text-white hover:text-blue-700 ">
      <button className="flex items-center px-4 py-2 bg-gray-200 text-blue-500 font-semibold rounded-full shadow transform transition duration-300 hover:scale-110">
      <img src="/images/contactus.jpg" alt="Signup icon" className="w-7 h-7 mr-1" />
            Contact Us
      </button></Link>
       </div>
</div>


{/*Footer*/}
    <footer className="bg-gray-900 w-full text-white py-8 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* First Column */}
        <div>
          <h2 className="text-2xl font-bold mb-4">eduPulse</h2>
          <p className="text-sm">
          eduPulse is the world's best student management system. 
          Our student management system has more features than any student management system in the market.
          Your satisfaction is our priority.
          </p>
        </div>

        {/* Second Column */}
        <div>
  <h2 className="text-lg font-bold mb-4">Navigations</h2>
  <ul className="space-y-2">
    <li>
      <a href="/signup" className="hover:underline">
        Signup
      </a>
    </li>
    <li>
      <a href="/login" className="hover:underline">
        Login
      </a>
    </li>
    <li>
      <a href="/contact" className="hover:underline">
        Contact Us
      </a>
    </li>
  </ul>
</div>


        {/* Third Column */}
        <div>
          <h2 className="text-lg font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} eduPulse. All rights reserved.
      </div>
    </footer>
    
    </main>
    </div>
);
}