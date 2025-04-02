"use client"
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import { Home, Mail, Phone } from "lucide-react";



const ContactUs = () => {
 

  return (
    <main>
    <div>
     
    <Navbar/>
    <div className=" flex flex-col md:flex-row justify-between p-6 mt-20 space-y-6 md:space-y-0">

      {/* Contact Form */}
      <div className="bg-[#D4D2F6] p-6 rounded-lg w-full  md:w-[500px]">
        <h2 className="text-2xl text-black font-bold mb-4">Contact Us</h2>
        
        <form >
          <div className="mb-4 text-black">
            <label className="block text-lg mb-2">Name :</label>
            <input
              type="text"
              name="to_name"
              className="w-full p-3 bg-[#F4F2FF] border border-white rounded-md"
            />
            <p className="text-red-500 text-sm"></p>
          </div>
          <div className="mb-4 text-black">
            <label className="block text-lg mb-2">Email :</label>
            <input
              type="email"
              name="from_name"
              className="w-full p-3 bg-[#F4F2FF] border border-white rounded-md"
            />
            <p className="text-red-500 text-sm"></p>
          </div>
          <div className="mb-4 text-black">
            <label className="block text-lg mb-2">Message :</label>
            <textarea
              name="message"
              rows="4"
              className="w-full p-3 bg-[#F4F2FF] border border-white rounded-md"
            />
            <p className="text-red-500 text-sm"></p>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#140C73] text-white p-3 rounded-md w-full hover:bg-[#370398] transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Contact Details */}
      <div className="bg-[#D4D2F6] p-6 rounded-lg w-full  md:w-[800px]">
      <div className="space-y-4 text-black text-center font-bold">
  <div className="flex items-center space-x-2 justify-center">
    <Home className="w-5 h-5 text-gray-600" />
    <p>Institute of Alexandria, Sri Jayawardenepura Kotte</p>
  </div>
  <div className="flex items-center space-x-2 justify-center">
    <Mail className="w-5 h-5 text-gray-600" />
    <p>edupulseschools@gmail.com</p>
  </div>
  <div className="flex items-center space-x-2 justify-center">
    <Phone className="w-5 h-5 text-gray-600" />
    <p>(011) 234 5567</p>
  </div>
</div>
        <div className="relative h-[350px] w-full mt-6">
          <iframe
            width="100%"
            height="100%"
            src="https://maps.google.com/maps?width=650&amp;height=920&amp;hl=en&amp;q=Institute%20of%20Alexandria,%20262%20B240,%20Sri%20Jayawardenepura%20Kotte%2010120+(Where%20are%20we)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            className="rounded-md shadow-lg"
          ></iframe>
        </div>
      </div>
    </div>

    
    </div>
    
    </main>
   
  );
};

export default ContactUs;
