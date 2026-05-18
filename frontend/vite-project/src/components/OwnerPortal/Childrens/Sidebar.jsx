import React from "react";

import { motion } from "framer-motion";

import {
  LayoutDashboard,
  Building2,
  IndianRupee,
  Users,
  UserCircle2,
  BarChart3,
  FileText,
  Bell,
  Settings,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

import {
  Link,
  useLocation,
} from "react-router-dom";

const menuItems = [
  {
    section: "OWNER PORTAL",

    items: [
      {
        icon: LayoutDashboard,
        title: "Dashboard",
        path: "/",
      },

      {
        icon: Building2,
        title: "My Listings",
        path: "/listings",
        badge: "6",
      },

      {
        icon: IndianRupee,
        title: "Rent Collection",
        path: "/rent",
        badge: "3",
      },

      {
        icon: Users,
        title: "Buddy Assign",
        path: "/buddy",
      },

      {
        icon: UserCircle2,
        title: "My Tenants",
        path: "/tenants",
      },
    ],
  },

  {
    section: "INSIGHTS",

    items: [
      {
        icon: BarChart3,
        title: "Analytics",
        path: "/analytics",
      },

      {
        icon: FileText,
        title: "Inspection Reports",
        path: "/reports",
      },

      {
        icon: Bell,
        title: "Notifications",
        path: "/notifications",
        badge: "5",
      },
    ],
  },

  {
    section: "ACCOUNT",

    items: [
      {
        icon: Settings,
        title: "Settings",
        path: "/settings",
      },
    ],
  },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <motion.div
      initial={{
        x: -80,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.7,
      }}
      className="w-[290px] min-h-screen bg-white border-r border-[#efefef] px-5 py-6 flex flex-col justify-between"
    >
      <div>
        {menuItems.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className="mb-8"
          >
            {/* Section */}
            <h3 className="text-[12px] font-bold tracking-[1.5px] text-gray-300 mb-4">
              {section.section}
            </h3>

            {/* Items */}
            <div className="space-y-2">
              {section.items.map((item, index) => {
                const Icon = item.icon;

                const active =
                  location.pathname === item.path;

                return (
                  <Link
                    key={index}
                    to={item.path}
                  >
                    <motion.div
                      whileHover={{
                        x: 6,
                        scale: 1.02,
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                      className={`group flex items-center justify-between px-4 py-3 rounded-2xl cursor-pointer transition-all duration-300 ${
                        active
                          ? "bg-orange-50"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      {/* Left */}
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                            active
                              ? "bg-orange-500 text-white shadow-lg shadow-orange-200"
                              : "text-gray-500"
                          }`}
                        >
                          <Icon size={18} />
                        </div>

                        <span
                          className={`font-semibold text-[15px] ${
                            active
                              ? "text-orange-500"
                              : "text-gray-500"
                          }`}
                        >
                          {item.title}
                        </span>
                      </div>

                      {/* Badge */}
                      {item.badge && (
                        <div className="min-w-[28px] h-[28px] rounded-full bg-orange-50 text-orange-500 text-sm font-bold flex items-center justify-center">
                          {item.badge}
                        </div>
                      )}
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}

        {/* Verify Card */}
        <div className="mt-10 bg-gradient-to-br from-[#fff7f0] to-[#fff1e6] rounded-[28px] p-5 border border-orange-100">
          <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center">
            <ShieldCheck
              size={24}
              className="text-orange-500"
            />
          </div>

          <h2 className="text-[28px] font-bold mt-5">
            Get Verified
          </h2>

          <p className="text-gray-500 text-sm mt-2">
            Verified properties get 3x more
            enquiries.
          </p>

          <button className="mt-5 w-full h-[52px] rounded-2xl bg-orange-500 text-white font-bold flex items-center justify-center gap-2">
            Upgrade for ₹499

            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Bottom Profile */}
      <div className="mt-8 flex items-center justify-between bg-white rounded-2xl p-3 border border-[#f1f1f1] shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
            RK
          </div>

          <div>
            <h4 className="font-bold">
              Ramesh Kumar
            </h4>

            <p className="text-sm text-gray-400">
              Property Owner · Delhi
            </p>
          </div>
        </div>

        <ChevronRight
          size={18}
          className="text-gray-400"
        />
      </div>
    </motion.div>
  );
};

export default Sidebar;