import React from "react";
import { motion } from "framer-motion";

const FeatureCard = ({
  icon,
  title,
  description,
  iconBg,
  borderHover,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      className={`group relative overflow-hidden rounded-[30px] border border-orange-200 bg-white/90 backdrop-blur-xl p-7 flex gap-6 shadow-[0_10px_35px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] ${borderHover}`}
    >
      {/* Animated Glow */}
      <motion.div
        animate={{
          x: ["-100%", "250%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "linear",
        }}
        className="absolute top-0 h-full w-32 bg-white/20 blur-2xl"
      />

      {/* Hover Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-100/0 via-orange-100/20 to-cyan-100/10 opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Icon Box */}
      <motion.div
        whileHover={{
          rotate: 8,
          scale: 1.1,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
        }}
        className={`relative min-w-[78px] h-[78px] rounded-3xl ${iconBg} flex items-center justify-center shadow-lg border border-white/40`}
      >
        {/* Pulse Ring */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.1, 0.4],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="absolute inset-0 rounded-3xl border border-orange-300"
        />

        {icon}
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        <motion.h3
          whileHover={{
            x: 5,
          }}
          className="text-3xl font-black text-black transition-all duration-300 group-hover:text-orange-500"
        >
          {title}
        </motion.h3>

        <motion.p
          initial={{
            opacity: 0.8,
          }}
          whileHover={{
            opacity: 1,
          }}
          className="mt-3 text-lg leading-8 text-[#31456c]"
        >
          {description}
        </motion.p>

        {/* Bottom Animated Line */}
        <motion.div
          initial={{
            width: 0,
          }}
          whileHover={{
            width: "100%",
          }}
          transition={{
            duration: 0.4,
          }}
          className="mt-5 h-[3px] rounded-full bg-gradient-to-r from-orange-500 to-cyan-400"
        />
      </div>

      {/* Floating Orb */}
      <motion.div
        animate={{
          y: [0, -12, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
        className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-orange-400/20 blur-3xl"
      />
    </motion.div>
  );
};

export default FeatureCard;