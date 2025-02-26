import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between p-5 bg-blue-950 text-white">
        
        <div className="flex items-center space-x-3">
  
    <p className="text-3xl font-bold ml-10">eduPulse</p>
  </div>

  <div className="flex items-center space-x-10">
    <Link href="/adminsignup" className="text-white hover:text-blue-700">
      <button className="flex items-center px-8 py-3 bg-gray-200 text-blue-500 font-semibold rounded-full shadow transform transition duration-300 hover:scale-110">
        <img src="/images/signup.jpg" alt="Signup icon" className="w-7 h-7 mr-1" />
        Signup
      </button>
    </Link>

    <Link href="/loginroles" className="text-white hover:text-blue-700">
      <button className="flex items-center px-8 py-3 bg-gray-200 text-blue-500 font-semibold rounded-full shadow transform transition duration-300 hover:scale-110">
        <img src="/images/login.jpg" alt="Login icon" className="w-7 h-7 mr-1" />
        Login
      </button>
    </Link>
  </div>
</nav>
    );
}