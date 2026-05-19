// components/Navbar.jsx

import { Bell } from "lucide-react";

const ScheduleNavbar = () => {
  return (
    <div className="bg-white px-8 py-5 flex items-center justify-between border-b shadow-sm sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-black">
        Schedule Dashboard
      </h1>

      <div className="flex items-center gap-5">
        <div className="text-gray-500 font-medium">
          6:52 PM
        </div>

        <div className="bg-orange-500 text-white px-4 py-2 rounded-full animate-pulse shadow-lg">
          Live
        </div>

        <Bell className="text-black hover:text-orange-500 cursor-pointer transition duration-300" />

        <div className="w-11 h-11 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold shadow-lg hover:scale-110 transition duration-300">
          RK
        </div>
      </div>
    </div>
  );
};

export default ScheduleNavbar;