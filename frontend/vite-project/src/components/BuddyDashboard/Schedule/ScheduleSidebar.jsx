// components/Sidebar.jsx

import {
  LayoutDashboard,
  Calendar,
  Video,
  ClipboardList,
  FileText,
  Flag,
  MapPin,
  IndianRupee,
  User,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ScheduleSidebar = () => {
     const navigate=useNavigate();  
  const menus = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard size={18} />,
      path:"/buddy-dashboard",
    },
    {
      title: "Schedule",
      icon: <Calendar size={18} />,
      active: true,
    },
    {
      title: "Live Call",
      icon: <Video size={18} />,
    },
    {
      title: "Checklist",
      icon: <ClipboardList size={18} />,
    },
    {
      title: "Reports",
      icon: <FileText size={18} />,
    },
    {
      title: "Red Flags",
      icon: <Flag size={18} />,
    },
    {
      title: "Area Score",
      icon: <MapPin size={18} />,
    },
    {
      title: "Earnings",
      icon: <IndianRupee size={18} />,
    },
    {
      title: "Profile",
      icon: <User size={18} />,
    },
  ];

  return (
    <div className="w-[260px] bg-white min-h-screen border-r shadow-md p-5">
      <div className="flex items-center gap-3 mb-10">
        <div className="bg-orange-500 text-white w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold shadow-lg">
          C
        </div>

        <div>
          <h1 className="font-bold text-xl text-black">
            ComfoBuddy
          </h1>

          <p className="text-sm text-gray-500">
            INSPECTION TEAM
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {menus.map((item, index) => (
          <div
            key={index}
             onClick={() => navigate(item.path)}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-300 hover:translate-x-2 hover:shadow-lg ${
              item.active
                ? "bg-orange-500 text-white"
                : "text-black hover:bg-orange-100"
            }`}
          >
            {item.icon}

            <span className="font-medium">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleSidebar;