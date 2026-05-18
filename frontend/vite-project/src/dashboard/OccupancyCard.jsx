// OccupancyRateCard.jsx

import React from "react";
import { motion } from "framer-motion";

const particles = Array.from({ length: 10 });

const OccupancyRateCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
      className="relative overflow-hidden w-full max-w-[420px] h-[360px] rounded-[38px] bg-white border border-[#f3f3f3] shadow-[0_20px_60px_rgba(255,115,0,0.08)] p-7 cursor-pointer"
    >
      {/* Animated Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute top-[-100px] right-[-80px] w-[250px] h-[250px] rounded-full bg-orange-200 blur-3xl"
      />

      {/* Floating Particles */}
      {particles.map((_, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            y: [0, -20, 0],
            x: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            delay: index * 0.3,
          }}
          className="absolute w-2 h-2 rounded-full bg-orange-300 blur-[1px]"
          style={{
            top: `${20 + index * 7}%`,
            left: `${10 + index * 8}%`,
          }}
        />
      ))}

      {/* Title */}
      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[34px] font-bold text-[#171717] leading-none"
        >
          Occupancy Rate
        </motion.h2>

        <p className="text-gray-400 text-lg mt-2 font-medium">
          Current month
        </p>
      </div>

      {/* Circular Progress */}
      <div className="relative flex items-center justify-center mt-10">
        {/* Outer Glow Ring */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="absolute w-[190px] h-[190px] rounded-full border-[10px] border-orange-100 blur-sm"
        />

        {/* SVG Circle */}
        <svg
          className="w-[220px] h-[220px] -rotate-90"
          viewBox="0 0 220 220"
        >
          {/* Background Circle */}
          <circle
            cx="110"
            cy="110"
            r="85"
            stroke="#fff1e7"
            strokeWidth="12"
            fill="none"
          />

          {/* Animated Progress */}
          <motion.circle
            cx="110"
            cy="110"
            r="85"
            stroke="url(#gradient)"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={534}
            initial={{ strokeDashoffset: 534 }}
            animate={{ strokeDashoffset: 90 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
          />

          {/* Gradient */}
          <defs>
            <linearGradient
              id="gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#ff6a00" />
              <stop offset="100%" stopColor="#f9a03f" />
            </linearGradient>
          </defs>
        </svg>

        {/* Percentage */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.8,
            type: "spring",
            stiffness: 120,
          }}
          className="absolute flex flex-col items-center justify-center"
        >
          <motion.h1
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="text-[68px] font-black text-[#1b1b1b] tracking-tight"
          >
            83
            <span className="text-[34px]">%</span>
          </motion.h1>
        </motion.div>
      </div>

      {/* Bottom Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.2,
        }}
        className="mt-2 text-center"
      >
        <p className="text-[18px] font-semibold text-gray-500">
          <span className="text-orange-500 font-bold">
            5
          </span>{" "}
          of{" "}
          <span className="text-orange-500 font-bold">
            6
          </span>{" "}
          units occupied
        </p>
      </motion.div>

      {/* Shine Effect */}
      <motion.div
        animate={{
          x: ["-120%", "220%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 2,
        }}
        className="absolute top-0 left-0 w-[120px] h-full bg-white/30 blur-2xl rotate-12"
      />
    </motion.div>
  );
};

export default OccupancyRateCard;