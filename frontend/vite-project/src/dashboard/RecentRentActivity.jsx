// RecentRentActivity.jsx

import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock3,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

const rentData = [
  {
    id: 1,
    initials: "PM",
    name: "Priya Mehta",
    since: "Since Jan 2025",
    property: "B-204 Saket Delhi",
    rent: "₹9,500",
    due: "1 May",
    status: "Paid",
    action: "Receipt",
    statusColor:
      "bg-green-100 text-green-600 border border-green-200",
    actionColor:
      "bg-green-50 text-green-600 border border-green-200",
    rentColor: "text-green-600",
    avatar: "from-green-200 to-green-100",
    icon: CheckCircle2,
  },

  {
    id: 2,
    initials: "AS",
    name: "Arjun Sharma",
    since: "Since Mar 2025",
    property: "Flat 3 Dwarka",
    rent: "₹14,000",
    due: "1 May",
    status: "Pending",
    action: "Remind",
    statusColor:
      "bg-yellow-100 text-yellow-700 border border-yellow-200",
    actionColor:
      "bg-yellow-50 text-yellow-700 border border-yellow-200",
    rentColor: "text-orange-500",
    avatar: "from-yellow-200 to-yellow-100",
    icon: Clock3,
  },

  {
    id: 3,
    initials: "NK",
    name: "Neha Kapoor",
    since: "Since Feb 2025",
    property: "Room 2 Noida",
    rent: "₹7,800",
    due: "28 Apr",
    status: "Overdue 8d",
    action: "Remind",
    statusColor:
      "bg-red-100 text-red-600 border border-red-200",
    actionColor:
      "bg-orange-50 text-orange-500 border border-orange-200",
    rentColor: "text-red-500",
    avatar: "from-red-200 to-red-100",
    icon: AlertTriangle,
  },
];

const tableVariant = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      staggerChildren: 0.15,
      duration: 0.7,
    },
  },
};

const rowVariant = {
  hidden: {
    opacity: 0,
    x: -40,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.5,
    },
  },
};

const RecentRentActivity = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={tableVariant}
      className="relative overflow-hidden bg-white rounded-[34px] border border-[#f1f1f1] shadow-[0_10px_40px_rgba(0,0,0,0.04)] cursor-progress"
    >
      {/* Background Glow */}
      <div className="absolute top-[-100px] right-[-80px] w-[260px] h-[260px] rounded-full bg-orange-100 blur-3xl opacity-40" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between px-8 py-7 border-b border-[#f3f3f3]">
        <div>
          <h2 className="text-[34px] font-bold text-[#161616]">
            Recent Rent Activity
          </h2>

          <p className="text-gray-400 mt-1 text-lg">
            Latest tenant payment updates
          </p>
        </div>

        <motion.button
          whileHover={{
            scale: 1.05,
            y: -2,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="h-[52px] px-6 rounded-2xl border border-[#ececec] bg-white shadow-sm text-gray-600 font-semibold flex items-center gap-2 hover:bg-orange-50 hover:text-orange-500 transition-all"
        >
          View all
          <ArrowRight size={18} />
        </motion.button>
      </div>

      {/* Table Head */}
      <div className="grid grid-cols-5 px-8 py-5 text-[14px] font-bold tracking-wide text-gray-400 border-b border-[#f5f5f5]">
        <p>TENANT</p>
        <p>PROPERTY</p>
        <p>RENT</p>
        <p>STATUS</p>
        <p className="text-right">ACTION</p>
      </div>

      {/* Rows */}
      <div className="relative z-10">
        {rentData.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.id}
              variants={rowVariant}
              whileHover={{
                backgroundColor: "#fffaf6",
                x: 4,
              }}
              className={`grid grid-cols-5 items-center px-8 py-6 transition-all duration-300 ${
                index !== rentData.length - 1
                  ? "border-b border-[#f5f5f5]"
                  : ""
              }`}
            >
              {/* Tenant */}
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.08,
                  }}
                  className={`w-14 h-14 rounded-full bg-gradient-to-br ${item.avatar} flex items-center justify-center font-bold text-lg text-[#444] shadow-md`}
                >
                  {item.initials}
                </motion.div>

                <div>
                  <h3 className="text-[20px] font-bold text-[#1a1a1a]">
                    {item.name}
                  </h3>

                  <p className="text-gray-400 text-sm mt-1">
                    {item.since}
                  </p>
                </div>
              </div>

              {/* Property */}
              <div>
                <p className="text-[20px] font-medium text-[#333]">
                  {item.property}
                </p>

                <p className="text-gray-400 text-sm mt-1">
                  Due: {item.due}
                </p>
              </div>

              {/* Rent */}
              <div>
                <motion.h2
                  animate={{
                    scale: [1, 1.03, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className={`text-[30px] font-bold ${item.rentColor}`}
                >
                  {item.rent}
                </motion.h2>
              </div>

              {/* Status */}
              <div>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                  }}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold ${item.statusColor}`}
                >
                  <Icon size={16} />
                  {item.status}
                </motion.div>
              </div>

              {/* Action */}
              <div className="flex justify-end">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className={`px-5 py-3 rounded-2xl font-semibold transition-all ${item.actionColor}`}
                >
                  {item.action}
                </motion.button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default RecentRentActivity;