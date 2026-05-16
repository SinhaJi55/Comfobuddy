import React from "react";
import {
  Home,
  Building2,
  IndianRupee,
  Users,
  Bell,
  Settings,
  BarChart3,
  ShieldCheck,
  Star,
  Search,
  Plus,
  Menu,
} from "lucide-react";

import { motion } from "framer-motion";

const sidebarItems = [
  {
    icon: <Home size={20} />,
    name: "Dashboard",
    active: true,
  },
  {
    icon: <Building2 size={20} />,
    name: "My Listings",
  },
  {
    icon: <IndianRupee size={20} />,
    name: "Rent Collection",
  },
  {
    icon: <Users size={20} />,
    name: "Tenants",
  },
  {
    icon: <BarChart3 size={20} />,
    name: "Analytics",
  },
  {
    icon: <Bell size={20} />,
    name: "Notifications",
  },
  {
    icon: <Settings size={20} />,
    name: "Settings",
  },
];

const stats = [
  {
    title: "Total Listings",
    value: "06",
    growth: "+1 this month",
    icon: <Building2 size={22} />,
    bg: "bg-orange-100",
    color: "text-orange-500",
  },
  {
    title: "Rent Collected",
    value: "₹74,500",
    growth: "+₹4,500 vs Apr",
    icon: <IndianRupee size={22} />,
    bg: "bg-green-100",
    color: "text-green-600",
  },
  {
    title: "Pending Issues",
    value: "03",
    growth: "Need attention",
    icon: <Bell size={22} />,
    bg: "bg-red-100",
    color: "text-red-500",
  },
  {
    title: "Property Rating",
    value: "4.8",
    growth: "+0.4 this month",
    icon: <Star size={22} />,
    bg: "bg-cyan-100",
    color: "text-cyan-600",
  },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen flex bg-[#fff8f3]">

      {/* SIDEBAR */}

      <div className="hidden lg:flex w-[280px] bg-[#0f172a] text-white flex-col justify-between p-6">

        <div>

          {/* LOGO */}

          <div className="mb-14">
            <img
              src="/logo.png"
              alt="logo"
              className="h-12"
            />
          </div>

          {/* MENU */}

          <div className="space-y-3">

            {sidebarItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 6 }}
                className={`flex items-center gap-4 px-5 py-4 rounded-2xl cursor-pointer transition-all ${
                  item.active
                    ? "bg-gradient-to-r from-orange-500 to-[#ff934d]"
                    : "hover:bg-white/10"
                }`}
              >
                {item.icon}

                <span className="font-medium">
                  {item.name}
                </span>
              </motion.div>
            ))}

          </div>
        </div>

        {/* VERIFY CARD */}

        <div className="bg-gradient-to-br from-orange-500 to-[#ff934d] p-6 rounded-3xl">

          <ShieldCheck size={42} className="mb-4" />

          <h2 className="text-2xl font-bold mb-3">
            Get Verified
          </h2>

          <p className="text-sm text-orange-100 leading-6">
            Verified owners get premium visibility and trust.
          </p>

          <button className="w-full mt-6 bg-white text-orange-500 py-3 rounded-2xl font-semibold hover:scale-105 transition-all">
            Upgrade ₹499
          </button>

        </div>
      </div>

      {/* MAIN CONTENT */}

      <div className="flex-1 overflow-y-auto">

        {/* TOPBAR */}

        <div className="bg-white border-b border-orange-100 px-6 lg:px-10 py-5 flex items-center justify-between sticky top-0 z-50">

          <div className="flex items-center gap-4">

            <Menu className="lg:hidden text-orange-500" />

            <div>
              <h1 className="text-4xl font-black text-gray-900">
                Dashboard
              </h1>

              <p className="text-gray-400 text-sm mt-1">
                Owner / Overview
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">

            {/* SEARCH */}

            <div className="hidden md:flex items-center gap-3 bg-[#fff7f1] border border-orange-100 px-4 py-3 rounded-2xl">

              <Search
                size={18}
                className="text-orange-500"
              />

              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none text-sm"
              />

            </div>

            {/* BUTTON */}

            <button className="bg-gradient-to-r from-orange-500 to-[#ff934d] text-white px-6 py-3 rounded-2xl flex items-center gap-2 font-semibold shadow-lg shadow-orange-500/30 hover:scale-105 transition-all">

              <Plus size={18} />

              Add Listing

            </button>
          </div>
        </div>

        {/* BODY */}

        <div className="p-6 lg:p-10">

          {/* ALERT */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-[#fff5ec] to-[#fffaf6] border border-orange-200 rounded-3xl p-6 flex flex-col lg:flex-row items-center justify-between mb-10"
          >

            <div className="flex items-center gap-5">

              <div className="w-14 h-14 rounded-2xl bg-orange-500 text-white flex items-center justify-center">

                <ShieldCheck />

              </div>

              <div>

                <h2 className="text-2xl font-bold text-gray-800">
                  Your profile is not verified yet
                </h2>

                <p className="text-gray-500 mt-1">
                  Get more tenant trust and premium visibility.
                </p>

              </div>
            </div>

            <button className="mt-5 lg:mt-0 bg-gradient-to-r from-orange-500 to-[#ff934d] text-white px-7 py-4 rounded-2xl font-semibold hover:scale-105 transition-all">

              Get Verified ₹499

            </button>

          </motion.div>

          {/* STATS */}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

            {stats.map((item, index) => (

              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="bg-white border border-orange-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all"
              >

                <div className="flex items-center justify-between mb-6">

                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.bg} ${item.color}`}
                  >
                    {item.icon}
                  </div>

                  <span className="text-xs bg-[#f7f7f7] px-3 py-1 rounded-full text-gray-500 font-semibold">
                    Active
                  </span>

                </div>

                <h1 className="text-5xl font-black text-gray-900 mb-2">
                  {item.value}
                </h1>

                <p className="text-gray-500 font-medium">
                  {item.title}
                </p>

                <p className="text-green-500 text-sm mt-3 font-semibold">
                  ↗ {item.growth}
                </p>

              </motion.div>

            ))}

          </div>

          {/* BOTTOM SECTION */}

          <div className="grid lg:grid-cols-3 gap-8">

            {/* GRAPH */}

            <div className="lg:col-span-2 bg-white border border-orange-100 rounded-3xl p-8 shadow-sm">

              <div className="flex items-center justify-between mb-8">

                <div>

                  <h2 className="text-2xl font-bold text-gray-900">
                    Monthly Rent Income
                  </h2>

                  <p className="text-gray-400 text-sm mt-1">
                    All properties combined
                  </p>

                </div>

                <div className="flex gap-3">

                  <button className="px-4 py-2 rounded-xl bg-orange-100 text-orange-500 font-semibold">
                    6M
                  </button>

                  <button className="px-4 py-2 rounded-xl border border-orange-100 text-gray-500">
                    1Y
                  </button>

                </div>
              </div>

              {/* GRAPH AREA */}

              <div className="relative h-[320px] rounded-3xl bg-gradient-to-b from-[#fff7f1] to-white overflow-hidden border border-orange-50">

                <svg
                  viewBox="0 0 800 300"
                  className="absolute bottom-0 left-0 w-full h-full"
                >

                  <motion.path
                    d="M0 240 C150 200 180 100 320 130 C460 160 500 70 640 110 C720 130 760 90 800 40"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="6"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2 }}
                  />

                </svg>

              </div>
            </div>

            {/* OCCUPANCY */}

            <div className="bg-white border border-orange-100 rounded-3xl p-8 shadow-sm flex flex-col items-center justify-center">

              <h2 className="text-2xl font-bold text-gray-900 mb-10">
                Occupancy Rate
              </h2>

              <div className="relative w-56 h-56">

                <div className="absolute inset-0 rounded-full border-[16px] border-orange-100"></div>

                <motion.div
                  initial={{ rotate: -90 }}
                  animate={{ rotate: 210 }}
                  transition={{ duration: 2 }}
                  className="absolute inset-0 rounded-full border-[16px] border-transparent border-t-orange-500 border-r-orange-400"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center">

                  <h1 className="text-6xl font-black text-gray-900">
                    83%
                  </h1>

                  <p className="text-gray-400 mt-2 text-center">
                    5 of 6 occupied
                  </p>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;