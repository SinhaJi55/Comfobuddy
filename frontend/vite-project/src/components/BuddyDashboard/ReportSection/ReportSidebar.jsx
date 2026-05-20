import React from "react";
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

const ReportsSidebar = () => {
  const navigate = useNavigate();

  const menus = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard size={18} />,
      path: "/buddy-dashboard",
    },
    {
      title: "Schedule",
      icon: <Calendar size={18} />,
      path: "/schedule",
    },
    {
      title: "Live Call",
      icon: <Video size={18} />,
      path: "/live-call",
    },
    {
      title: "Checklist",
      icon: <ClipboardList size={18} />,
      path: "/checklist",
    },
    {
      title: "Reports",
      icon: <FileText size={18} />,
      path: "/reports",
      active: true,
    },
    {
      title: "Red Flags",
      icon: <Flag size={18} />,
      path: "/redflags",
    },
    {
      title: "Area Score",
      icon: <MapPin size={18} />,
      path: "/areascore",
    },
    {
      title: "Earnings",
      icon: <IndianRupee size={18} />,
      path: "/earnings",
    },
    {
      title: "Profile",
      icon: <User size={18} />,
      path: "/profile",
    },
  ];

  return (
    <div className="w-[260px] bg-white min-h-screen border-r shadow-md p-5">
      
      {/* LOGO */}
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

      {/* MENUS */}
      <div className="space-y-3">
        {menus.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(item.path)}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-300 hover:translate-x-2 hover:shadow-lg ${
              item.active
                ? "bg-orange-500 text-white"
                : "text-black hover:bg-orange-500 hover:text-white"
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

export default ReportsSidebar;