// LiveCallSidebar.jsx

import React from "react";
import {
  LayoutDashboard,
  CalendarDays,
  Video,
  ClipboardCheck,
  FileText,
  Flag,
  MapPin,
  IndianRupee,
  User,
  Bell,
} from "lucide-react";

import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    path:"/owner-dashboard"
  },
  {
    icon: CalendarDays,
    label: "Schedule",
    path: "/schedule",
    badge: 4,
  },
  {
    icon: Video,
    label: "Live Call",
    path: "/live-call",
    badge: 1,
  },
  {
    icon: ClipboardCheck,
    label: "Checklist",
    path: "/checklist",
  },
  {
    icon: FileText,
    label: "Reports",
    path: "/report",
  },
  {
    icon: Flag,
    label: "Red Flags",
    path: "/red-flags",
    badge: 3,
  },
  {
    icon: MapPin,
    label: "Area Score",
    path: "/area-score",
  },
  {
    icon: IndianRupee,
    label: "Earnings",
    path: "/earnings",
  },
  {
    icon: User,
    label: "Profile",
    path: "/profile",
  },
];

const LiveCallSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="hidden lg:flex w-[280px] bg-white border-r border-gray-200 min-h-screen flex-col justify-between sticky top-0">

      {/* TOP */}
      <div>

        {/* LOGO */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">

            <div className="bg-orange-500 text-white w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xl">
              CB
            </div>

            <div>
              <h1 className="text-2xl font-bold text-black">
                ComfoBuddy
              </h1>

              <p className="text-sm text-orange-500 font-semibold">
                INSPECTION TEAM
              </p>
            </div>

          </div>
        </div>

        {/* NAVIGATION */}
        <div className="p-4 space-y-2">

          {navItems.map((item, index) => {
            const Icon = item.icon;

            const isActive = location.pathname === item.path;

            return (
              <button
                key={index}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center justify-between px-4 py-4 rounded-2xl transition-all duration-300 border group
                ${
                  isActive
                    ? "bg-orange-500 text-white border-orange-500 shadow-lg"
                    : "bg-white text-black border-gray-200 hover:bg-orange-500 hover:text-white hover:border-orange-500"
                }`}
              >

                <div className="flex items-center gap-3">
                  <Icon size={20} />

                  <span className="font-semibold">
                    {item.label}
                  </span>
                </div>

                {item.badge && (
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-bold
                    ${
                      isActive
                        ? "bg-white text-orange-500"
                        : "bg-orange-100 text-orange-500 group-hover:bg-white"
                    }`}
                  >
                    {item.badge}
                  </span>
                )}

              </button>
            );
          })}

        </div>
      </div>

      {/* BOTTOM */}
      <div className="p-4 border-t border-gray-200">

        <div className="flex items-center justify-between mb-5">

          <div>
            <p className="text-gray-500 text-sm">
              Current Time
            </p>

            <h2 className="font-bold text-black">
              11:44 AM
            </h2>
          </div>

          <button className="bg-orange-500 text-white px-4 py-2 rounded-xl hover:bg-black transition-all duration-300">
            ● Live
          </button>

        </div>

        <div className="flex items-center justify-between">

          <button className="w-12 h-12 rounded-2xl border border-gray-200 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300">
            <Bell size={20} />
          </button>

          <div className="flex items-center gap-3">

            <div className="text-right">
              <h3 className="font-bold text-black">
                Ritik
              </h3>

              <p className="text-sm text-gray-500">
                Inspector
              </p>
            </div>

            <div className="w-12 h-12 bg-orange-500 text-white rounded-2xl flex items-center justify-center font-bold">
              RK
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default LiveCallSidebar;