import React from "react";
import { motion } from "framer-motion";

const stats = [
  {
    label: "Communication",
    value: "5.0",
    width: "100%",
  },
  {
    label: "Accuracy",
    value: "4.9",
    width: "96%",
  },
  {
    label: "Timeliness",
    value: "4.9",
    width: "95%",
  },
  {
    label: "Photo Quality",
    value: "4.8",
    width: "93%",
  },
];

const tags = ["Newcomer", "Reliable", "Pro"];

const RatingCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        type: "spring",
        stiffness: 120,
      }}
      whileHover={{
        y: -10,
        rotateX: 4,
        rotateY: -4,
      }}
      className="relative overflow-hidden rounded-[40px] border border-[#3d4d73]/40 bg-white/90 backdrop-blur-xl p-10 shadow-[0_20px_80px_rgba(0,0,0,0.15)] transition-all duration-500"
    >
      {/* Animated Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
        }}
        className="absolute -top-10 -right-10 h-72 w-72 rounded-full bg-[#ff6b1a]/20 blur-[100px]"
      />

      {/* Floating Small Glow */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 left-10 h-28 w-28 rounded-full bg-cyan-400/20 blur-[70px]"
      />

      {/* Profile */}
     <div className="flex items-center gap-6">
  {/* PROFILE AVATAR */}
  <motion.div
    whileHover={{
      rotate: 6,
      scale: 1.08,
    }}
    transition={{ type: "spring", stiffness: 260, damping: 15 }}
    className="relative flex h-28 w-28 items-center justify-center rounded-full"
  >
    {/* Glow Background */}
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.2, 0.4, 0.2],
      }}
      transition={{
        repeat: Infinity,
        duration: 2.8,
        ease: "easeInOut",
      }}
      className="absolute inset-0 rounded-full bg-orange-400 blur-xl"
    />

    {/* Pulsing Ring */}
    <motion.div
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        repeat: Infinity,
        duration: 2.2,
        ease: "easeInOut",
      }}
      className="absolute inset-0 rounded-full border-4 border-orange-300/50"
    />

    {/* Image Wrapper (fix layering) */}
    <div className="absolute inset-2 overflow-hidden rounded-full border-4 border-white shadow-xl">
      <img
        src="/I4.jpg"
        alt="Profile"
        className="h-full w-full object-cover"
      />
    </div>
  </motion.div>

  {/* TEXT SECTION */}
  <div>
    <motion.h2
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="text-4xl font-black tracking-tight text-black"
    >
      Rajesh Kumar
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35, duration: 0.6 }}
      className="mt-2 text-lg font-medium text-[#31456c]"
    >
      Elite Buddy · South Delhi ·{" "}
      <span className="text-orange-500 font-semibold">
        142 inspections
      </span>
    </motion.p>
  </div>
</div>

      {/* Rating */}
      <div className="mt-12 flex items-center gap-8">
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.3,
            type: "spring",
            stiffness: 180,
          }}
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 20px rgba(255,122,47,0.8)",
          }}
          className="text-8xl font-black text-[#ff7a2f]"
        >
          4.9
        </motion.h1>

        <div>
          <div className="flex gap-1 text-3xl text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.1,
                }}
                whileHover={{
                  scale: 1.4,
                  rotate: 12,
                }}
              >
                ★
              </motion.span>
            ))}
          </div>

          <p className="mt-3 text-xl text-[#31456c]">
            Based on 142 inspections
          </p>
        </div>
      </div>

      {/* Progress */}
      <div className="mt-14 space-y-8">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: index * 0.15,
            }}
          >
            <div className="mb-3 flex justify-between text-lg text-black">
              <span>{item.label}</span>
              <motion.span
                whileHover={{ scale: 1.2 }}
                className="font-bold text-[#ff7a2f]"
              >
                {item.value}
              </motion.span>
            </div>

            <div className="h-[12px] overflow-hidden rounded-full bg-[#31456c]/20">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: item.width }}
                transition={{
                  duration: 1.4,
                  delay: index * 0.2,
                }}
                className="relative h-full rounded-full bg-gradient-to-r from-[#ff7a2f] via-[#ff9a3c] to-[#00d4ff]"
              >
                <motion.div
                  animate={{
                    x: ["-100%", "300%"],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.5,
                    ease: "linear",
                  }}
                  className="absolute top-0 h-full w-20 bg-white/30 blur-md"
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tags */}
      <div className="mt-12 flex w-fit flex-wrap gap-3 rounded-3xl bg-[#f7f7f7] p-3 shadow-inner">
        {tags.map((tag, index) => (
          <motion.button
            key={index}
            whileHover={{
              y: -5,
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-white px-6 py-3 font-semibold text-black shadow-md transition-all duration-300 hover:shadow-xl"
          >
            {tag}
          </motion.button>
        ))}

        <motion.button
          animate={{
            boxShadow: [
              "0 0 10px rgba(255,107,26,0.4)",
              "0 0 35px rgba(255,107,26,0.8)",
              "0 0 10px rgba(255,107,26,0.4)",
            ],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          whileHover={{
            scale: 1.08,
            rotate: -2,
          }}
          className="rounded-full bg-gradient-to-r from-orange-500 to-[#ff7a2f] px-8 py-3 font-bold text-white"
        >
          ⭐ Elite
        </motion.button>
      </div>
    </motion.div>
  );
};

export default RatingCard;