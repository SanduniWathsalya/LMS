import { FaBullhorn, FaRulerCombined, FaUser,FaComments } from 'react-icons/fa';
import { MdScience } from 'react-icons/md';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col p-4">
     <div className="text-xl font-bold mb-6 flex items-center gap-2">
    <FaComments className="text-blue-400 text-center" />
    Chat Box
    </div>


      <div className="mb-4">
        <h3 className="text-sm font-semibold">CHANNELS</h3>
        <ul className="mt-2 space-y-2">
          <li className="flex items-center gap-2">
            <FaBullhorn className="text-yellow-400" />
            Teacher Announcements
          </li>
          <li className="flex items-center gap-2">
            <FaRulerCombined className="text-pink-400" />
            Math channel
          </li>
          <li className="flex items-center gap-2">
            <MdScience className="text-blue-400" />
            Physics
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-sm font-semibold">PERSONAL CHAT ROOMS</h3>
        <ul className="mt-2 space-y-2">
          <li className="flex items-center gap-2">
            <FaUser className="text-green-400" />
            MarkTwin
          </li>
          <li className="flex items-center gap-2">
            <FaUser className="text-red-400" />
            Jasmine Gabriella
          </li>
          <li className="flex items-center gap-2">
            <FaUser className="text-purple-400" />
            Allie Johnston
          </li>
          <li className="flex items-center gap-2">
            <FaUser className="text-orange-400" />
            Authar Bohem
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
