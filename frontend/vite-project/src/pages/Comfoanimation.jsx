import React from "react";
import { motion } from "framer-motion";

const Comfoanimation = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-[99990]">

      {/* BLUR BACKGROUND */}
     <motion.div
  initial={{
    opacity: 0,
    backdropFilter: "blur(0px)",
  }}
  animate={{
    opacity: [0, 1, 1, 1, 0],
    backdropFilter: [
      "blur(0px)",

      // blur comes in
      "blur(20px)",

      // KEEP FULL BLUR
      "blur(20px)",

      // STILL KEEP BLUR
      "blur(20px)",

      // remove blur only at end
      "blur(0px)",
    ],
  }}
  transition={{
    duration: 7.5,
    times: [0, 0.15, 0.45, 0.8, 1],
    ease: "easeInOut",
  }}
  className="absolute inset-0 bg-white/10"
/>
      {/* ORANGE GLOW */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          repeat: Infinity,
          duration: 7.5,
        }}
        className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-300 blur-[140px]"
      />

      {/* TEXT */}
      <div className="absolute inset-0 flex items-center justify-center">

        {/* COMFO */}
        {"Comfort".split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{
              opacity: 0,
              y: 80,
              scale: 0.5,
            }}
            animate={{
              opacity: [0, 1, 1, 1, 0],
              y: [80, 0, 0, 0, -60],
              scale: [0.5, 1.15, 1, 1, 0.8],
            }}
            transition={{
              duration: 7.5,
              delay: 1 + index * 0.18,
            }}
            className="mx-[2px] text-5xl font-black tracking-[3px] md:text-8xl"
            style={{
              color: "#111111",
              textShadow:
                "0 0 20px rgba(0,0,0,0.18)",
            }}
          >
            {letter}
          </motion.span>
        ))}

        {/* BUDDY */}
        {"Buddy".split("").map((letter, index) => (
          <motion.span
            key={`buddy-${index}`}
            initial={{
              opacity: 0,
              y: 80,
              scale: 0.5,
            }}
            animate={{
              opacity: [0, 1, 1, 1, 0],
              y: [80, 0, 0, 0, -60],
              scale: [0.5, 1.15, 1, 1, 0.8],
            }}
            transition={{
              duration: 7.5,
              delay: 2 + index * 0.18,
            }}
            className="mx-[2px] text-5xl font-black tracking-[3px] md:text-8xl"
            style={{
              background:
                "linear-gradient(to right, #ff7a00, #ff9f43)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow:
                "0 0 30px rgba(255,140,0,0.45)",
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default Comfoanimation;