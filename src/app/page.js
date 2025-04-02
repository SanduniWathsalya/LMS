"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from 'next/link';
import { UserCircleIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const leftFeatures = [
  {
    title: "Smart Updates & Support",
    icon: "🔄",
    content: "Continuous innovation with regular feature updates complemented by 24/7 expert support",
  },
  {
    title: "Live Activity Tracking",
    icon: "🔔",
    content: "Instant alerts for grades, schedules, and announcements with real-time push notifications",
  },
  {
    title: "AI-Powered Insights",
    icon: "📊",
    content: "Advanced analytics transform attendance data into actionable educational strategies",
  },
];

const rightFeatures = [
  {
    title: "Omni-Device Access",
    icon: "📱",
    content: "Universal compatibility across all devices with adaptive responsive design",
  },
  {
    title: "Military-Grade Security",
    icon: "🛡️",
    content: "Enterprise-level encryption ensuring bulletproof data protection and privacy",
  },
  {
    title: "Custom Intelligence",
    icon: "🎯",
    content: "AI-driven personalized dashboards with smart recommendations and insights",
  },
];


export default function Home() {
  return (
    <div>
      
      <main className="min-h-screen flex flex-col justify-start">
  <div>   
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
    <div className="flex flex-col md:flex-row items-center justify-between mt-28 max-w-6xl mx-auto px-6">
  {/* Left Side - Content Section */}
  <div className="md:w-1/2">
    <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 animate-gradient-shine">
      <span className="block mb-4">Best Online</span>
      <span className="text-white drop-shadow-[0_2px_4px_rgba(56,189,248,0.4)]">
        Student Management System
      </span>
    </h1>

    <p className="text-lg md:text-xl text-gray-200 mt-6 leading-relaxed">
      Now you can manage your school, college, or any educational center with 
      <span className="font-semibold text-blue-300"> eduPulse</span>.
    </p>
    <p className="mt-3 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-medium">
      Your data's security is our top priority.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start mt-8">
      <Link href="/contactus" className="group relative inline-block">
        <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 opacity-75 blur transition-all duration-300 group-hover:opacity-100"></div>
        <button className="relative flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
          <img 
            src="/images/contactus.jpg" 
            alt="Contact icon" 
            className="w-6 h-6 mr-3 filter brightness-0 invert transition-transform group-hover:rotate-12" 
          />
          <span className="relative">Contact Us</span>
        </button>
      </Link>

      <Link href="/register" className="group relative inline-block">
        <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-gray-700 to-gray-900 opacity-75 blur transition-all duration-300 group-hover:opacity-100"></div>
        <button className="relative flex items-center px-6 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-[1.02] hover:border-cyan-400 hover:shadow-xl">
          <img 
            src="/images/arrow2.jpg" 
            alt="Learn more arrow" 
            className="w-6 h-6 mr-3 filter brightness-0 invert transition-transform group-hover:translate-x-1" 
          />
          <span className="relative">Explore Features</span>
        </button>
      </Link>
    </div>
  </div>

  {/* Right Side - Image Section */}
  <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
    <img 
      src="/images/world.jpg"
      alt="Hero"
      className="w-[1200px] h-[400px] rounded-lg animate-fade"
    />
  </div>
</div>

          </div>     


          
          <div className="min-h-screen flex flex-col w-full justify-center bg-gradient-to-br from-blue-600 to-blue-400 mt-10 pb-20">
  <div className="animate-fade-in">
    <h1 className="text-5xl text-center mt-20 font-bold text-white drop-shadow-md">
      Transform Your Institution with
      <span className="block mt-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-100">
        eduPulse System
      </span>
    </h1>
    <p className="text-lg text-center text-white mt-6 px-4 md:px-6 mx-auto max-w-4xl leading-relaxed opacity-90">
      Revolutionize educational management through our all-in-one platform designed to streamline administration, 
      enhance communication, and empower academic excellence.
    </p>
  </div>

  {/* Feature Section */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-8 mt-16">
      {/* Left Features */}
      <motion.div
        className="flex flex-col items-center space-y-10"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.15 }} // Faster stagger effect
      >
        {leftFeatures.map((feature, index) => (
          <motion.div
            key={index}
            className="feature-card p-6 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
            initial={{ opacity: 0, y: 80 }} // Moves from further down
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }} // Fast and smooth
           
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
            <p className="text-md opacity-90">{feature.content}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Center Image */}
      <motion.div
        className="flex justify-center items-center relative my-8 md:my-0"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
       
      >
        <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl -z-10"></div>
        <img
          src="/images/centerimage.jpg"
          alt="eduPulse interface"
          className="w-100 rounded-2xl transform transition-transform duration-300"
        />
      </motion.div>

      {/* Right Features */}
      <motion.div
        className="flex flex-col items-center space-y-10"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.15 }}
      >
        {rightFeatures.map((feature, index) => (
          <motion.div
            key={index}
            className="feature-card p-6 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
            <p className="text-md opacity-90">{feature.content}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
</div>




<div className="flex flex-col lg:flex-row items-center min-h-screen bg-gradient-to-br from-blue-900 to-blue-950 px-4 lg:px-20 gap-12 py-20">
      {/* Left Section */}
      <div
        className="relative lg:w-1/2 lg:ml-20 space-y-8"
        
      >
        {/* Title Fade-In */}
        <motion.div
          className="border-l-4 border-cyan-400 pl-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">
            Why Choose Our Platform
          </h3>
        </motion.div>

        {/* Paragraph Swipe from Left */}
        <motion.p
          className="text-lg leading-relaxed text-blue-100/90"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Revolutionizing educational management through innovative technology solutions:
        </motion.p>

        {/* Feature Cards - Moving Up One by One */}
        <motion.div className="space-y-4">
          {[
            {
              title: "All-in-One Management",
              content:
                "Comprehensive tools for attendance, grading, scheduling, and communication in a single integrated platform.",
            },
            {
              title: "Smart Automation",
              content:
                "AI-powered insights and automated workflows that save administrators 20+ hours monthly.",
            },
            {
              title: "Enterprise Security",
              content:
                "Military-grade encryption and GDPR compliance ensuring complete data protection.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="p-4 rounded-xl bg-white/5 border border-white/10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
             
            >
              <h4 className="text-cyan-400 font-semibold mb-2">{feature.title}</h4>
              <p className="text-sm">{feature.content}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Button */}
        <motion.button
          className="bg-cyan-400 text-blue-950 px-6 py-3 rounded-lg font-semibold
            hover:bg-cyan-300 transition-colors duration-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        >
          Schedule Demo
        </motion.button>
      </div>

      {/* Right Section - Image */}
      <motion.div
        className="lg:w-1/2 flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
       
      >
        <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 shadow-xl w-full max-w-2xl">
          <img
            src="/images/whychooseus.jpg"
            alt="Education Platform Interface"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 to-transparent" />
        </div>
      </motion.div>
    </div>



<div className="bg-blue-950 text-white">
  {/* Hero Section */}
  <section className="container mx-auto px-4 py-16 md:py-24">
      {/* Title and Paragraph Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, scale: 0.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Dedicated Portals for Every Role
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-blue-100 leading-relaxed"
          initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
          
        >
          Our comprehensive system provides tailored experiences for principals, teachers, and administrators. 
          Streamline academic management, attendance tracking, and institutional oversight through role-specific portals.
        </motion.p>
      </div>

      {/* Image Section */}
      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative aspect-[5/3] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
          <motion.img
            src="/images/team.jpg"
            alt="Team collaboration interface preview"
            className="object-cover w-full h-88 transform hover:scale-102 transition-transform duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
           
          />
        </div>
      </motion.div>
    </section>

  {/*New- Messaging System */}
  <section className="bg-blue-900/30 py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
        {/* Left Section (Title and Paragraph) */}
        <div className="md:w-1/2 space-y-6">
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Integrated Communication Hub
          </motion.h2>
          <motion.p
            className="text-lg text-blue-100 leading-relaxed"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          >
            Foster seamless collaboration with our real-time messaging platform. Engage in instant discussions, 
            share resources, and maintain continuous communication with all institutional stakeholders through 
            secure, threaded conversations.
          </motion.p>
        </div>

        {/* Right Section (Image) */}
        <div className="md:w-1/2 relative rounded-2xl overflow-hidden shadow-xl border-2 border-blue-900">
          <motion.img
            src="/images/messaging.jpg"
            alt="Messaging interface preview"
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
      </div>
    </section>

  {/*New- Analytics & Attendance */}
  <section className="container mx-auto px-4 py-16 md:py-24">
    <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
      <div className="md:w-1/2 space-y-6 text-center md:text-left">
        <motion.h2 
        className="text-3xl md:text-4xl font-bold"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        >
        Comprehensive Performance Insights
        </motion.h2>
        <motion.p 
        className="text-lg text-blue-100 leading-relaxed"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        >
        Access real-time academic analytics and attendance patterns through intuitive dashboards. 
        Our intelligent tracking system highlights trends, flags concerns, and provides actionable 
        insights to drive student success.
        </motion.p>
      </div>

      <div className="md:w-1/2 relative rounded-2xl overflow-hidden shadow-xl border-2 border-blue-900">
        <motion.img
          src="/images/attendence.jpg"
          alt="Analytics dashboard preview"
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  </section>

  {/* Reporting Section */}
  <section className="bg-blue-900/30 py-16 md:py-24">
    <div className="container mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
      <div className="md:w-1/2 space-y-6">
        <motion.h2 
        className="text-3xl md:text-4xl font-bold"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        >
        Dynamic Reporting Engine
        </motion.h2>
        <motion.p 
        className="text-lg text-blue-100 leading-relaxed"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        >
        Generate comprehensive, customizable reports with one-click functionality. From individual 
        student progress to institutional overviews, our system transforms raw data into actionable 
        intelligence through intuitive visualizations.
        </motion.p>
      </div>
      <div className="md:w-1/2 relative rounded-2xl overflow-hidden shadow-xl border-2 border-blue-900 group">
        <motion.img
          src="/images/reports.png"
          alt="Report generation interface"
          className="object-contain w-100 h-full transition-transform duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-blue-950/20 group-hover:bg-transparent transition-colors duration-300" />
      </div>
    </div>
  </section>
</div>

<div className="relative w-full bg-gradient-to-br from-blue-600 to-blue-900 py-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10 bg-grid-white/20 [mask-image:linear-gradient(to_bottom,transparent,black)]" />
      <motion.div
      className="container mx-auto px-4 max-w-4xl text-center"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Heading Section */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
         
        >
          All Features, One Unified Platform
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
         
        >
          Welcome to <span className="font-semibold text-white">eduPulse</span> - the next-generation student management system 
          revolutionizing school operations. Empower educators, engage administrators, and simplify institutional 
          management through our integrated platform.
        </motion.p>

        {/* Buttons Container */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10">
          {/* Sign Up Button */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
           
          >
            <Link href="/registerroles" className="group relative inline-block">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400 opacity-75 blur transition-all group-hover:opacity-100 group-hover:-inset-2" />
              <button className="relative flex items-center px-8 py-3.5 bg-white text-blue-900 font-bold rounded-full transition-transform duration-300 hover:scale-105">
                <UserCircleIcon className="w-6 h-6 mr-2 text-blue-600" />
                Get Started Now
              </button>
            </Link>
          </motion.div>

          {/* Contact Button */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
           
          >
            <Link href="/contactus" className="group relative inline-block">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 opacity-75 blur transition-all group-hover:opacity-100 group-hover:-inset-2" />
              <button className="relative flex items-center px-8 py-3.5 bg-transparent border-2 border-white text-white font-bold rounded-full transition-all duration-300 hover:bg-white/10">
                <ChatBubbleLeftRightIcon className="w-6 h-6 mr-2 text-white" />
                Schedule Demo
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Additional Text */}
        <motion.p
          className="mt-8 text-sm text-blue-200/90 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          
        >
          Join 500+ institutions transforming their management systems with eduPulse
        </motion.p>
      </motion.div>
    </div>


{/*Footer*/}
<footer className="bg-gray-900 text-white border-t border-gray-700">
  <div className="container mx-auto px-4 py-12">
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
      {/* Brand Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          eduPulse
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed">
          Revolutionizing education management with cutting-edge solutions. 
          Empowering institutions worldwide with intuitive tools for seamless 
          academic operations.
        </p>
      </div>

      {/* Quick Links */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-100">Quick Links</h3>
        <nav className="flex flex-col space-y-2">
          {[
            ['Sign Up', '/signup'],
            ['Login', '/login'],
            ['Contact', '/contact'],
            ['Documentation', '/docs']
          ].map(([title, url]) => (
            <a
              key={title}
              href={url}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300 group"
            >
              {title}
              <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Social Media */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-100">Connect With Us</h3>
        <div className="flex space-x-4">
          {[
            ['Facebook', 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z', 'hover:text-blue-600'],
            ['Twitter', 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z', 'hover:text-blue-400'],
            ['Instagram', 'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm-3.75-7.5a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0z', 'hover:text-pink-500'],
            ['LinkedIn', 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z', 'hover:text-blue-700']
          ].map(([platform, path, hoverColor]) => (
            <a
              key={platform}
              href={`https://${platform.toLowerCase()}.com`}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-300 ${hoverColor} transition-colors duration-300`}
              aria-label={`Visit our ${platform} page`}
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d={path} />
              </svg>
            </a>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-100">Stay Updated</h3>
        <form className="flex flex-col space-y-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 text-sm"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 text-sm"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

    {/* Copyright */}
    <div className="border-t border-gray-800 pt-8 text-center">
      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} eduPulse. All rights reserved.
        <span className="mx-2">|</span>
        <a href="/privacy" className="hover:text-blue-400 transition-colors duration-300">
          Privacy Policy
        </a>
        <span className="mx-2">|</span>
        <a href="/terms" className="hover:text-blue-400 transition-colors duration-300">
          Terms of Service
        </a>
      </p>
    </div>
  </div>
</footer>
    
    </main>
    </div>
    
);
}