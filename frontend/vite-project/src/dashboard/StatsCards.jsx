// StatsCards.jsx

import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  IndianRupee,
  AlertCircle,
  Star,
  TrendingUp,
} from "lucide-react";

const statsData = [
  {
    id: 1,
    title: "Total Listings",
    value: "6",
    status: "Active",
    growth: "+1 this month",
    icon: Building2,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
    badgeBg: "bg-green-100",
    badgeText: "text-green-600",
    line: "from-orange-200 via-orange-400 to-orange-500",
    growthColor: "text-green-500",
  },

  {
    id: 2,
    title: "Rent Collected (May)",
    value: "₹74,500",
    status: "On time",
    growth: "₹4,500 more vs Apr",
    icon: IndianRupee,
    iconBg: "bg-green-100",
    iconColor: "text-green-500",
    badgeBg: "bg-green-100",
    badgeText: "text-green-600",
    line: "from-green-200 via-green-400 to-green-500",
    growthColor: "text-green-500",
  },

  {
    id: 3,
    title: "Rent Overdue",
    value: "3",
    status: "Action needed",
    growth: "Send reminders now",
    icon: AlertCircle,
    iconBg: "bg-red-100",
    iconColor: "text-red-500",
    badgeBg: "bg-red-100",
    badgeText: "text-red-500",
    line: "from-red-200 via-red-400 to-red-500",
    growthColor: "text-red-500",
  },

  {
    id: 4,
    title: "Property Rating",
    value: "4.6",
    status: "Good",
    growth: "+0.2 this month",
    icon: Star,
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-500",
    badgeBg: "bg-cyan-100",
    badgeText: "text-cyan-500",
    line: "from-cyan-200 via-cyan-400 to-cyan-500",
    growthColor: "text-green-500",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.9,
  },

  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 cursor-progress">
      {statsData.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.id}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="relative overflow-hidden bg-white rounded-[30px] border border-[#f2f2f2] p-6 shadow-sm hover:shadow-xl transition-all duration-500"
          >
            {/* Glow Effect */}
            <motion.div
              animate={{
                opacity: [0.15, 0.3, 0.15],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl ${item.iconBg}`}
            />

            {/* Top */}
            <div className="flex items-start justify-between relative z-10">
              <motion.div
                whileHover={{
                  rotate: 8,
                  scale: 1.1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
                className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.iconBg}`}
              >
                <Icon className={`${item.iconColor}`} size={24} />
              </motion.div>

              <div
                className={`px-4 py-1.5 rounded-full text-sm font-semibold ${item.badgeBg} ${item.badgeText}`}
              >
                {item.status}
              </div>
            </div>

            {/* Content */}
            <div className="mt-7 relative z-10">
              <p className="text-gray-400 text-sm font-medium">
                {item.title}
              </p>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.5,
                }}
                className="text-[46px] font-bold text-[#151515] mt-2 tracking-tight"
              >
                {item.value}
              </motion.h2>
            </div>

            {/* Animated Graph */}
            <div className="mt-5 flex items-end gap-1 h-12 relative z-10">
              {[16, 10, 28, 12, 34, 20, 40].map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height }}
                  transition={{
                    delay: 0.4 + i * 0.05,
                    duration: 0.5,
                  }}
                  className={`flex-1 rounded-full bg-gradient-to-t ${item.line}`}
                />
              ))}
            </div>

            {/* Bottom */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.8,
              }}
              className={`mt-5 flex items-center gap-2 text-sm font-semibold ${item.growthColor}`}
            >
              <TrendingUp size={16} />
              {item.growth}
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default StatsCards;