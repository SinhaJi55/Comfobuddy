import React from "react";
import {
  Star,
  ShieldCheck,
  Trophy,
} from "lucide-react";

import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const LeftFeatures = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="relative"
    >
      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
        }}
        className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-orange-500 blur-[120px]"
      />

      {/* Tag */}
      <motion.p
        variants={fadeUp}
        className="mb-6 flex items-center gap-3 uppercase tracking-[4px] text-[#ff6b1a] font-semibold"
      >
        <motion.span
          animate={{
            width: ["20px", "50px", "20px"],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
          }}
          className="h-[2px] bg-[#ff6b1a]"
        />

        Trust Infrastructure
      </motion.p>

      {/* Heading */}
      <motion.h1
        variants={fadeUp}
        className="relative text-6xl font-black leading-tight text-black"
      >
        <motion.span
          animate={{
            textShadow: [
              "0px 0px 10px rgba(255,107,26,0.3)",
              "0px 0px 30px rgba(255,107,26,0.7)",
              "0px 0px 10px rgba(255,107,26,0.3)",
            ],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
          className="inline-block"
        >
          The Buddy Rating
        </motion.span>

        <br />

        <span className="bg-gradient-to-r from-[#ff6b1a] via-[#ff9a3c] to-[#00d4ff] bg-clip-text text-transparent">
          System
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={fadeUp}
        className="mt-8 max-w-2xl text-xl leading-9 text-[#31456c]"
      >
        Every inspection rated. Every Buddy ranked.
        <span className="font-bold text-[#ff6b1a]">
          {" "}
          Manipulation blocked.
        </span>
      </motion.p>

      {/* Cards */}
      <motion.div
        variants={container}
        className="mt-14 flex flex-col gap-7"
      >
        <motion.div
          variants={fadeUp}
          whileHover={{
            x: 12,
          }}
          transition={{
            type: "spring",
            stiffness: 180,
          }}
        >
          <FeatureCard
            icon={
              <motion.div
                whileHover={{
                  rotate: 360,
                  scale: 1.2,
                }}
                transition={{
                  duration: 0.8,
                }}
              >
                <Star
                  className="fill-yellow-400 text-orange-500"
                  size={34}
                />
              </motion.div>
            }
            title="5-Dimension Ratings"
            description="Communication, accuracy, timing, photos — not just one overall score."
            iconBg="bg-white"
            borderHover="border-[#ff6b1a]"
          />
        </motion.div>

        <motion.div
          variants={fadeUp}
          whileHover={{
            x: 12,
          }}
          transition={{
            type: "spring",
            stiffness: 180,
          }}
        >
          <FeatureCard
            icon={
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
              >
                <ShieldCheck
                  className="text-[#00d4ff]"
                  size={34}
                />
              </motion.div>
            }
            title="AI Fake Review Shield"
            description="Multiple layers block fake reviews and review farms."
            iconBg="bg-white"
            borderHover="border-[#00d4ff]"
          />
        </motion.div>

        <motion.div
          variants={fadeUp}
          whileHover={{
            x: 12,
          }}
          transition={{
            type: "spring",
            stiffness: 180,
          }}
        >
          <FeatureCard
            icon={
              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.8,
                }}
              >
                <Trophy
                  className="text-[#ffc857]"
                  size={34}
                />
              </motion.div>
            }
            title="Elite Buddy Tier"
            description="Top 2% only — 4.9+ stars and 100+ inspections."
            iconBg="bg-white"
            borderHover="border-[#ffc857]"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LeftFeatures;