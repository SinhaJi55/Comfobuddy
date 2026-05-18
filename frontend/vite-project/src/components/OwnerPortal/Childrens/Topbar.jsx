// DashboardTopbar.jsx

import React from "react";
import {
  Search,
  Bell,
  HelpCircle,
  Plus,
} from "lucide-react";

const DashboardTopbar = () => {
  return (
    <div className="w-full bg-white border-b border-gray-100 px-8 py-5 flex items-center justify-between">
      
      {/* Left Side */}
      <div>
        <h1 className="text-[40px] font-bold text-black leading-none">
          Dashboard
        </h1>

        <div className="flex items-center gap-2 mt-2 text-sm text-gray-400 font-medium">
          <span>Owner</span>
          <span>›</span>
          <span className="text-gray-600">Dashboard</span>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-5">
        
        {/* Search */}
        <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-4 h-[54px] w-[360px] shadow-sm">
          <Search size={18} className="text-gray-400" />
          
          <input
            type="text"
            placeholder="Search listings, tenants..."
            className="w-full outline-none text-sm text-gray-600 placeholder:text-gray-400 bg-transparent"
          />
        </div>

        {/* Notification */}
        <button className="w-[54px] h-[54px] rounded-2xl border border-gray-200 flex items-center justify-center bg-white shadow-sm hover:scale-105 transition">
          <Bell size={20} className="text-gray-500" />
        </button>

        {/* Help */}
        <button className="w-[54px] h-[54px] rounded-2xl border border-gray-200 flex items-center justify-center bg-white shadow-sm hover:scale-105 transition">
          <HelpCircle size={20} className="text-gray-500" />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-3 py-2 shadow-sm cursor-pointer">
          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
            className="w-11 h-11 rounded-xl object-cover"
          />

          <div className="hidden md:block">
            <h4 className="text-sm font-semibold text-gray-800">
              Ritik Sinha
            </h4>

            <p className="text-xs text-gray-400">
              Property Owner
            </p>
          </div>
        </div>

        {/* Add Listing */}
        <button className="h-[54px] px-7 rounded-2xl bg-orange-500 hover:bg-orange-600 transition text-white font-semibold flex items-center gap-2 shadow-lg shadow-orange-200">
          <Plus size={18} />
          Add Listing
        </button>
      </div>
    </div>
  );
};

export default DashboardTopbar;