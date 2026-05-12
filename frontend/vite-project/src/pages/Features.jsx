import React from "react";
import {
  ShieldCheck,
  Wallet,
  BookOpenCheck,
  Lock,
  ArrowUpRight,
} from "lucide-react";

import { motion } from "framer-motion";

const data = [
  {
    icon: <ShieldCheck size={28} />,
    title: "Verified Rooms",
    desc: "100% verified by our team",
    glow: "from-orange-400 to-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: <Wallet size={28} />,
    title: "No Brokerage",
    desc: "Zero commission charges",
    glow: "from-cyan-400 to-cyan-500",
    bg: "bg-cyan-50",
  },
  {
    icon: <BookOpenCheck size={28} />,
    title: "Easy Booking",
    desc: "Book in just 3 clicks",
    glow: "from-yellow-400 to-orange-400",
    bg: "bg-yellow-50",
  },
  {
    icon: <Lock size={28} />,
    title: "Safe & Secure",
    desc: "Your safety is our priority",
    glow: "from-purple-400 to-pink-400",
    bg: "bg-purple-50",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
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

const Features = () => {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
        className="absolute left-0 top-10 h-80 w-80 rounded-full bg-orange-300 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-14 text-center">
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            className="mb-4 uppercase tracking-[4px] text-orange-500 font-semibold"
          >
            Why Choose Us
          </motion.p>

          <motion.h2
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-[#1b1b1b]"
          >
            Trusted Rental Experience
          </motion.h2>

          <p className="mt-4 text-lg text-gray-500">
            Smart, secure and hassle-free room booking.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-7 md:grid-cols-2 lg:grid-cols-4"
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{
                y: -14,
                scale: 1.03,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
              }}
              className="group relative overflow-hidden rounded-[32px] border border-white/20 bg-white/90 p-7 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.06)]"
            >
              {/* Animated Shine */}
              <motion.div
                animate={{
                  x: ["-100%", "250%"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "linear",
                }}
                className="absolute top-0 h-full w-24 bg-white/20 blur-2xl"
              />

              {/* Floating Glow */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  opacity: [0.2, 0.45, 0.2],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                }}
                className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-r ${item.glow} opacity-20 blur-3xl`}
              />

              {/* Icon */}
              <motion.div
                whileHover={{
                  rotate: 8,
                  scale: 1.1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                }}
                className={`relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${item.bg} text-orange-500 shadow-md`}
              >
                {/* Pulse Ring */}
                <motion.div
                  animate={{
                    scale: [1, 1.25, 1],
                    opacity: [0.4, 0.1, 0.4],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                  }}
                  className="absolute inset-0 rounded-2xl border border-orange-300"
                />

                {item.icon}
              </motion.div>

              {/* Title */}
              <h2 className="text-2xl font-black text-[#1b1b1b] transition-all duration-300 group-hover:text-orange-500">
                {item.title}
              </h2>

              {/* Description */}
              <p className="mt-3 leading-7 text-gray-500">
                {item.desc}
              </p>

              {/* Bottom */}
              <div className="mt-8 flex items-center justify-between">
                <motion.div
                  whileHover={{
                    width: "100%",
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  className={`h-[4px] w-14 rounded-full bg-gradient-to-r ${item.glow}`}
                />

                <motion.div
                  whileHover={{
                    x: 4,
                    y: -4,
                  }}
                  className="rounded-full bg-[#f8f8f8] p-2 text-gray-400 transition-all duration-300 group-hover:bg-orange-50 group-hover:text-orange-500"
                >
                  <ArrowUpRight size={18} />
                </motion.div>
              </div>

              {/* Hover Border */}
              <motion.div
                animate={{
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                }}
                className="pointer-events-none absolute inset-0 rounded-[32px] border border-orange-300/30"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;