"use client";
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Link from 'next/link';
import { motion } from "framer-motion";
import { useEffect, useState } from "react";


const features = [
  {
    title: "Regular Updates & Support",
    description:
      "We add new and awesome features regularly to make our school administrative software unmatchable. Free online 24/7 support for users.",
  },
  {
    title: "Real-time Notifications",
    description:
      "Stay up to date with instant notifications about important events, such as grade updates, class schedules, and announcements.",
  },
  {
    title: "Attendance Tracking",
    description:
      "Easily manage student attendance with automated records and reports, making it easier for teachers and admins to track student presence.",
  },
];

const rightFeatures = [
  {
    title: "Responsive Web Design",
    description:
      "You can use our student management system on any device, like Mobile, Tablet, Laptop, or desktop due to its responsive design.",
  },
  {
    title: "Fast, Secure & Easy",
    description:
      "We use advanced tools and technologies to build up this free school software. It is super fast, secure, reliable, and easy to use and manage.",
  },
  {
    title: "Personalized Dashboards",
    description:
      "Students, teachers, and administrators have access to personalized dashboards that show relevant information, like attendance, grades, and announcements.",
  },
];

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
      <Link href="/contactus" className = "text-white hover:text-blue-700 ">
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


{/*Start of features section*/} 
<div className="min-h-screen flex flex-col w-full justify-center bg-blue-500 mt-10 pb-20">
      <h1 className="text-5xl text-center mt-56 font-bold text-white">
        Features of Our eduPulse System
      </h1>
      <p className="text-[18px] text-center text-white mt-4 p-4 mx-auto max-w-6xl leading-relaxed">
        eduPulse is an all-in-one platform designed to streamline the
        administration of educational institutions. It offers a comprehensive
        suite of features, including student registration, attendance tracking,
        grade management, and course scheduling. eduPulse simplifies
        communication between students, teachers, and parents while ensuring the
        efficient management of academic and administrative tasks.
      </p>

      <div className="flex justify-center gap-10">
        {/* Left Section with Features */}
        <div className="flex flex-col items-center mt-48 ml-10 space-y-12 w-1/3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-white text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold">{feature.title}</h3>
              <p className="text-[15px] mt-4">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Center Section with Image */}
        <div className="flex flex-col items-center mt-12 mr-5 justify-center w-1/3">
          <motion.img
            src="/images/mobileview.jpg"
            alt="eduPulse system"
            className="w-[400px] h-[700px] rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </div>

        {/* Right Section with Features */}
        <div className="flex flex-col items-center mt-48 mr-4 space-y-12 w-1/3">
          {rightFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="text-white text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold">{feature.title}</h3>
              <p className="text-[15px] mt-4">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
{/*End of features section*/}


{/*Start of why choose us section*/}
<div className="flex justify-between items-center min-h-screen bg-blue-950 px-12 space-x-8 w-full">
      {/* Left Section: Heading and Paragraph */}
      <motion.div
        className="text-white w-1/2 ml-40"
        initial={{ opacity: 0, x: -30 }} // Start from left with 0 opacity
        whileInView={{ opacity: 1, x: 0 }} // Animate to original position
        transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-bold">Why Choose Us</h3>
        <p className="text-[15px] mt-4 leading-relaxed">
          At the core of our student management system is a commitment to enhancing efficiency, transparency, and collaboration in educational institutions.
          Our platform is designed with user-friendly interfaces, ensuring accessibility for students, teachers, and administrators alike. By integrating
          cutting-edge technology, we provide tools that streamline administrative tasks, enable seamless communication, and offer actionable insights through
          data analytics. With features like automated attendance tracking, real-time notifications, and responsive design, our system adapts to your institution's
          unique needs. Choose us to empower your institution with a secure, reliable, and innovative solution that simplifies school management and fosters
          academic excellence.
        </p>
      </motion.div>

      {/* Right Section: Image */}
      <motion.div
        className="w-1/2 flex justify-center"
        initial={{ opacity: 0 }} // Start with 0 opacity
        whileInView={{ opacity: 1 }} // Fade in when in view
        transition={{ duration: 4, ease: "easeOut" }} // Smooth transition
        viewport={{ once: true }}
      >
        <img src="/images/whychooseus.jpg" alt="Why Choose Us" className="w-[700px] h-[400px] rounded-lg" />
      </motion.div>
    </div>
{/*End of why choose us section*/}

{/*Start of separate portals section*/}
<div className="bg-blue-950 flex flex-col items-center justify-center">
      {/* Heading and Paragraph Section */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 100 }} // Start from bottom with 0 opacity
        whileInView={{ opacity: 1, y: 0 }} // Animate to original position
        transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
        viewport={{ once: true }}
      >
        <h1 className="text-3xl font-bold text-white">Separate Portals Available</h1>
        <p className="text-[15px] text-white w-[600px] mt-4 mx-auto max-w-6xl leading-relaxed">
          Our student management system offers dedicated portals for principals, teachers, and administrators, ensuring a tailored experience for each user type.
          Teachers can manage class schedules, track attendance, and monitor student progress. Administrators have full control over system settings, user management, and report generation.
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="flex justify-center mt-8"
        initial={{ opacity: 0, y: 100 }} // Start from bottom with 0 opacity
        whileInView={{ opacity: 1, y: 0 }} // Animate to original position
        transition={{ duration: 1.2, ease: "easeOut" }} // Slight delay for a staggered effect
        viewport={{ once: true }}
      >
        <img src="/images/team.jpg" alt="team" className="w-[500px] h-[600px] rounded-lg" />
      </motion.div>
    </div>
  {/*End of separate portals section*/}


 {/*start of messaging system section*/}
  <div className="flex justify-between items-center bg-blue-950 px-12 space-x-8">
  {/* Left Section: Heading and Paragraph */}
  <motion.div
    className="text-white w-1/2 ml-40"
    initial={{ opacity: 0, x: -30 }} // Start from left with 0 opacity
    whileInView={{ opacity: 1, x: 0 }} // Animate to original position
    transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
    viewport={{ once: true }}
  >
    <h3 className="text-3xl text-center font-bold">Messaging System</h3>
    <p className="text-[15px] mt-4  leading-relaxed">
    Discuss and share ideas with other users through our messaging system. With this feature, you can do real-time chat with every individual associated with your institution.
    </p>
    </motion.div>

  {/* Right Section: Image */}
  <motion.div
        className="w-1/2 flex justify-center"
        initial={{ opacity: 0 }} // Start with 0 opacity
        whileInView={{ opacity: 1 }} // Fade in when in view
        transition={{ duration: 4, ease: "easeOut" }} // Smooth transition
        viewport={{ once: true }}
  >
      <img
      src="/images/messaging.jpg"
      alt="Why Choose Us"
      className="w-[600px] h-[400px] rounded-lg "
    />
   </motion.div>
</div>
 {/*End of messaging system section*/}


 {/*Start of empowering educators section*/}
<div className="flex justify-between items-center  bg-blue-950 px-12 space-x-8">
  {/* Left Section:Dashboard Image*/}
  <motion.div
        className="w-1/2 flex justify-center"
        initial={{ opacity: 0 }} // Start with 0 opacity
        whileInView={{ opacity: 1 }} // Fade in when in view
        transition={{ duration: 4, ease: "easeOut" }} // Smooth transition
        viewport={{ once: true }}
  >
    <img
      src="/images/attendence.jpg"
      alt="Why Choose Us"
      className="w-[700px] h-[400px] rounded-lg "
    />
  </motion.div>

  {/* Right Section: Heading and Paragraph */}
  <motion.div 
   className="text-white w-1/2 ml-40"
   initial={{ opacity: 0, x: 30 }} // Start from right with 0 opacity
   whileInView={{ opacity: 1, x: 0 }} // Animate to original position
   transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
   viewport={{ once: true }}
 >
    <h3 className="text-3xl text-center font-bold">Empowering Educators with Insights</h3>
    <p className="text-[15px] text-center mt-4 leading-relaxed">
    Stay ahead with real-time access to student performance! Our system provides teachers with a seamless way to view attendance records and academic marks, helping them track progress, identify trends, and support students effectively. It's a smart tool to ensure every student reaches their potential.
    </p>
    </motion.div>
</div>
{/*End of empowering educators section*/}


{/*Start of genarate reports section*/}
  <div className="flex justify-between items-center bg-blue-950 px-12 space-x-8">
  {/* Left Section:Heading and Para*/}
  <motion.div 
 className="text-white w-1/2 ml-40"
 initial={{ opacity: 0, x: -30 }} // Start from left with 0 opacity
 whileInView={{ opacity: 1, x: 0 }} // Animate to original position
 transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
 viewport={{ once: true }}
>
    <h3 className="text-3xl text-center font-bold">Genarate Reports</h3>
    <p className="text-[15px] text-center mt-4 leading-relaxed">
    Our system allows educators and administrators to effortlessly generate comprehensive reports on student performance, attendance, and more. With just a few clicks, you can create customized reports that provide deep insights, making it easier to analyze trends, monitor progress, and make informed decisions.
    </p>
  </motion.div>


  {/* Right Section: reports image */}
    <motion.div
        className="w-1/2 flex justify-center"
        initial={{ opacity: 0 }} // Start with 0 opacity
        whileInView={{ opacity: 1 }} // Fade in when in view
        transition={{ duration: 4, ease: "easeOut" }} // Smooth transition
        viewport={{ once: true }}
  >
    <img
      src="/images/reports.png"
      alt="Why Choose Us"
      className="w-[400px] h-[400px]  rounded-lg "
    />
    </motion.div>
</div>
{/*End of empowering educators section*/}

{/*Start of all features in one place section*/}
<div className="flex flex-col w-full h-[500px] justify-center bg-blue-500 mt-10">
      {/* Heading Animation */}
      <motion.h1
        className="text-3xl text-center font-bold text-white"
        initial={{ opacity: 0, y: -50 }} // Start faded out and slightly above
        whileInView={{ opacity: 1, y: 0 }} // Fade in and move to original position
        exit={{ opacity: 0, y: -50 }} // Fade out and move up when leaving
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        All features in one place
      </motion.h1>

      {/* Paragraph Animation */}
      <motion.p
        className="text-[18px] text-center text-white mt-4 p-4 mx-auto max-w-6xl leading-relaxed"
        initial={{ opacity: 0, y: 50 }} // Start faded out and below
        whileInView={{ opacity: 1, y: 0 }} // Fade in and move up
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} // Delay for staggered effect
        viewport={{ once: true }}
      >
        We are eduPulse, the ultimate student management system designed to simplify school operations and empower educators, 
        and administrators. Stay connected with us, and explore how our platform can help you streamline student management 
        effortlessly. Whether you're a teacher, principal, or administrator, eduPulse provides a dedicated portal for everyone.
        <br /><br /> 
        Join us today and take the first step towards a smarter, more efficient school management experience!
      </motion.p>

      {/* Buttons Animation */}
      <motion.div
        className="flex space-x-12 mt-6 justify-center"
        initial={{ opacity: 0, y: 30 }} // Start faded out and slightly below
        whileInView={{ opacity: 1, y: 0 }} // Fade in and move up
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }} // Slight delay for natural flow
        viewport={{ once: true }}
      >
        {/* Sign Up Button */}
        <Link href="/registerroles" className="text-white hover:text-blue-700">
          <button className="flex items-center px-4 py-2 bg-gray-200 text-blue-500 font-semibold rounded-full shadow transform transition duration-300 hover:scale-110">
            <img src="/images/signup.jpg" alt="Signup icon" className="w-7 h-7 mr-1" />
            Sign Up now
          </button>
        </Link>

        {/* Contact Us Button */}
        <Link href="/contactus" className="text-white hover:text-blue-700">
          <button className="flex items-center px-4 py-2 bg-gray-200 text-blue-500 font-semibold rounded-full shadow transform transition duration-300 hover:scale-110">
            <img src="/images/contactus.jpg" alt="Contact icon" className="w-7 h-7 mr-1" />
            Contact Us
          </button>
        </Link>
      </motion.div>
    </div>
{/*End of all features in one place section*/}


{/*Footer*/}
<Footer/>
   
    
    </main>
    </div>
    
);
}