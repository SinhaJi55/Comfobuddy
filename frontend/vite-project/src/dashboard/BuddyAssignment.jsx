// BuddyAssignments.jsx

import React from "react";
import { motion } from "framer-motion";

import {
  Star,
  MapPin,
  ShieldCheck,
  Clock3,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const buddies = [
  {
    id: 1,
    initials: "RK",
    name: "Rajesh Kumar",
    role: "Elite Inspector",
    rating: "4.9",
    location: "B-204 Saket",
    status: "Live Now",
    avatar: "from-cyan-200 to-cyan-100",
    statusColor:
      "bg-green-100 text-green-600 border border-green-200",
    button: false,
  },

  {
    id: 2,
    initials: "PM",
    name: "Priya Malhotra",
    role: "Property Expert",
    rating: "4.8",
    location: "Flat 3 Dwarka",
    status: "4:00 PM",
    avatar: "from-green-200 to-green-100",
    statusColor:
      "bg-cyan-100 text-cyan-600 border border-cyan-200",
    button: false,
  },

  {
    id: 3,
    initials: "AS",
    name: "Amit Sharma",
    role: "Inspection Pro",
    rating: "4.7",
    location: "Available",
    status: "Assign",
    avatar: "from-yellow-200 to-yellow-100",
    statusColor:
      "bg-orange-500 text-white border border-orange-500",
    button: true,
  },

  {
    id: 4,
    initials: "NK",
    name: "Neha Kapoor",
    role: "Tenant Specialist",
    rating: "4.9",
    location: "Sector 18 Noida",
    status: "On Route",
    avatar: "from-pink-200 to-pink-100",
    statusColor:
      "bg-purple-100 text-purple-600 border border-purple-200",
    button: false,
  },

  {
    id: 5,
    initials: "VS",
    name: "Vikram Singh",
    role: "Senior Buddy",
    rating: "5.0",
    location: "Karol Bagh",
    status: "Assigned",
    avatar: "from-indigo-200 to-indigo-100",
    statusColor:
      "bg-blue-100 text-blue-600 border border-blue-200",
    button: false,
  },

  {
    id: 6,
    initials: "RT",
    name: "Ritika Tandon",
    role: "Property Manager",
    rating: "4.8",
    location: "South Delhi",
    status: "Available",
    avatar: "from-orange-200 to-orange-100",
    statusColor:
      "bg-green-100 text-green-600 border border-green-200",
    button: false,
  },
];

const containerVariant = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const rowVariant = {
  hidden: {
    opacity: 0,
    x: -50,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const BuddyAssignments = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
      }}
      viewport={{ once: true }}
      className="relative overflow-hidden bg-white rounded-[36px] border border-[#f1f1f1] shadow-[0_10px_50px_rgba(0,0,0,0.05)] cursor-progress"
    >
      {/* Background Glow */}
      <div className="absolute top-[-100px] right-[-100px] w-[280px] h-[280px] bg-orange-100 blur-3xl opacity-40 rounded-full" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between px-8 py-7 border-b border-[#f4f4f4]">
        <div>
          <h2 className="text-[34px] font-bold text-[#171717]">
            Buddy Assignments Today
          </h2>

          <p className="text-gray-400 mt-2 text-lg">
            Smart buddy allocation for inspections
          </p>
        </div>

        <div className="flex items-center gap-4">
          {/* Today Badge */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="px-5 py-3 rounded-full bg-cyan-100 text-cyan-600 font-bold text-sm"
          >
            6 inspections today
          </motion.div>

          {/* Manage Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="h-[54px] px-6 rounded-2xl border border-[#ededed] bg-white shadow-sm text-gray-600 font-semibold flex items-center gap-2 hover:bg-orange-50 hover:text-orange-500 transition-all"
          >
            Manage
            <ArrowRight size={18} />
          </motion.button>
        </div>
      </div>

      {/* List */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10"
      >
        {buddies.map((buddy, index) => (
          <motion.div
            key={buddy.id}
            variants={rowVariant}
            whileHover={{
              backgroundColor: "#fffaf6",
              x: 6,
            }}
            className={`flex items-center justify-between px-8 py-6 transition-all duration-300 ${
              index !== buddies.length - 1
                ? "border-b border-[#f5f5f5]"
                : ""
            }`}
          >
            {/* Left */}
            <div className="flex items-center gap-5">
              {/* Avatar */}
              <motion.div
                whileHover={{
                  rotate: 8,
                  scale: 1.08,
                }}
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${buddy.avatar} flex items-center justify-center text-[26px] font-bold text-[#333] shadow-md`}
              >
                {buddy.initials}
              </motion.div>

              {/* Details */}
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-[24px] font-bold text-[#1a1a1a]">
                    {buddy.name}
                  </h3>

                  <ShieldCheck
                    size={18}
                    className="text-orange-500"
                  />
                </div>

                <div className="flex items-center gap-3 mt-2 flex-wrap">
                  {/* Stars */}
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <motion.div
                        key={star}
                        animate={{
                          scale: [1, 1.15, 1],
                        }}
                        transition={{
                          duration: 2,
                          delay: star * 0.2,
                          repeat: Infinity,
                        }}
                      >
                        <Star
                          size={14}
                          className="fill-orange-400 text-orange-400"
                        />
                      </motion.div>
                    ))}
                  </div>

                  <span className="text-gray-500 font-medium">
                    {buddy.rating}
                  </span>

                  <span className="text-gray-300">•</span>

                  <span className="text-gray-500">
                    {buddy.role}
                  </span>

                  <span className="text-gray-300">•</span>

                  <div className="flex items-center gap-1 text-gray-500">
                    <MapPin size={14} />
                    {buddy.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-4">
              {!buddy.button && (
                <motion.div
                  animate={{
                    scale: [1, 1.04, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className={`px-5 py-3 rounded-full text-sm font-bold flex items-center gap-2 ${buddy.statusColor}`}
                >
                  <Sparkles size={14} />
                  {buddy.status}
                </motion.div>
              )}

              {buddy.button && (
                <>
                  <div className="px-5 py-3 rounded-full text-sm font-semibold bg-gray-100 text-gray-500 border border-gray-200">
                    Available
                  </div>

                  <motion.button
                    whileHover={{
                      scale: 1.06,
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="h-[52px] px-7 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold shadow-lg shadow-orange-200"
                  >
                    Assign
                  </motion.button>
                </>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default BuddyAssignments;