


export default function LoginPage() {
    return (
        <div>
      
      <div className="min-h-screen flex">
       
        {/* Left Column */}
        <div className="w-1/3 bg-blue-950 text-white flex flex-col items-center justify-center p-10">
          <h1 className="text-5xl font-bold mb-6">eduPulse</h1>
          <p className=" mb-4  text-gray-400 cursor-pointer hover:underline">
            I do not have an account yet. 
          </p>
          <div className="mb-6">
            <label className="block mb-2 text-center text-gray-400">Select your role</label>
            <div className="flex space-x-12">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-transparent border border-white rounded-full flex items-center justify-center text-white">
                Admin
                </div>
                
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-transparent border border-white rounded-full flex items-center justify-center text-white">
                Teacher
                </div>
                
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-transparent border border-white rounded-full flex items-center justify-center text-white">
                Principal
                </div>
                
              </div>
            </div>
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full p-3 border rounded mb-3"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded mb-3"
            />
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div>
          </div>
          <button className="w-full bg-blue-500 text-white p-3 rounded">
            Login
          </button>
        </div>
  
        {/* Right Column */}
        <div className="w-2/3 bg-blue-50 flex flex-col justify-center items-center p-10">
          <h2 className="text-5xl text-blue-950 font-semibold mb-4">Start Managing Now</h2>
          <p className="text-gray-600 text-center mb-6">
            Manage your users and resources effectively with eduPulse.
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded mb-4">
            Get Started
          </button>
          <img
            src="/images/team.jpg" // Replace with your image path
            alt="Manage Illustration"
            className="w-3/4"
          />
        </div>
      </div>
      </div>
    );
  }