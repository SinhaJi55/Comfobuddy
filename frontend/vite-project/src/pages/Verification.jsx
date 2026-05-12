import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  BadgeCheck,
  Video,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const Verification = () => {
  const goto = () => {
    const section =
      document.getElementById("comfoworks-section");

    section?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
        className="absolute -left-20 top-10 h-96 w-96 rounded-full bg-orange-300 blur-[140px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
        }}
        className="absolute right-0 top-20 h-80 w-80 rounded-full bg-cyan-300 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
          className="relative overflow-hidden rounded-[42px] border border-orange-100 bg-gradient-to-br from-[#fff7f2] via-white to-[#fef4ee] p-10 shadow-[0_25px_80px_rgba(0,0,0,0.08)]"
        >
          {/* Animated Border */}
          <motion.div
            animate={{
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className="pointer-events-none absolute inset-0 rounded-[42px] border border-orange-300/30"
          />

          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* LEFT */}
            <motion.div
              initial={{
                opacity: 0,
                x: -60,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
              }}
            >
              {/* Tag */}
              <div className="mb-6 flex items-center gap-3">
                <span className="h-[2px] w-12 bg-orange-500"></span>

                <p className="uppercase tracking-[4px] text-orange-500 font-semibold">
                  India's Most Trusted
                </p>
              </div>

              {/* Heading */}
              <h1 className="text-5xl md:text-6xl font-black leading-tight text-[#1b1b1b]">
                Live Verification.
                <br />

                Real Rooms.
                <br />

                <span className="bg-gradient-to-r from-orange-500 to-[#ff934d] bg-clip-text text-transparent">
                  No Surprises.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-8 max-w-xl text-lg leading-9 text-gray-500">
                We verify every property with live video,
                real photos and on-ground checks so
                you always get exactly what you see.
              </p>

              {/* Features */}
              <div className="mt-10 space-y-5">
                {[
                  {
                    icon: (
                      <Video size={20} />
                    ),
                    text: "Live video verification",
                  },
                  {
                    icon: (
                      <ShieldCheck size={20} />
                    ),
                    text: "100% genuine property checks",
                  },
                  {
                    icon: (
                      <BadgeCheck size={20} />
                    ),
                    text: "Trusted by thousands of renters",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      x: 6,
                    }}
                    className="flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-md"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-500">
                      {item.icon}
                    </div>

                    <p className="font-medium text-gray-700">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Button */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0px 0px 35px rgba(255,107,26,0.45)",
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={goto}
                className="group relative mt-10 flex items-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-orange-500 to-[#ff7a2f] px-8 py-4 font-semibold text-white shadow-[0_12px_30px_rgba(255,107,26,0.35)]"
              >
                {/* Shine */}
                <motion.div
                  animate={{
                    x: ["-100%", "250%"],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "linear",
                  }}
                  className="absolute top-0 h-full w-20 bg-white/20 blur-xl"
                />

                How Verification Works

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.button>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{
                opacity: 0,
                x: 60,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
              }}
              className="relative"
            >
              {/* Floating Card */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                }}
                className="absolute -left-10 top-10 z-20 hidden rounded-3xl bg-white p-5 shadow-[0_15px_50px_rgba(0,0,0,0.1)] md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-500">
                    <ShieldCheck size={28} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-orange-500">
                      100%
                    </h3>

                    <p className="text-sm text-gray-500">
                      Verified Listings
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Main Image */}
              <motion.div
                whileHover={{
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="relative overflow-hidden rounded-[38px]"
              >
                <img
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
                  alt=""
                  className="h-[650px] w-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                {/* Floating Glow */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                  }}
                  className="absolute right-10 top-10 h-40 w-40 rounded-full bg-orange-400/20 blur-3xl"
                />
              </motion.div>

              {/* Bottom Floating Review */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                }}
                className="absolute bottom-8 right-0 z-20 rounded-3xl bg-white px-6 py-5 shadow-[0_15px_50px_rgba(0,0,0,0.1)]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    <img
                      src="https://randomuser.me/api/portraits/women/65.jpg"
                      alt=""
                      className="h-12 w-12 rounded-full border-2 border-white object-cover"
                    />

                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt=""
                      className="h-12 w-12 rounded-full border-2 border-white object-cover"
                    />

                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt=""
                      className="h-12 w-12 rounded-full border-2 border-white object-cover"
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-orange-500">
                      <Sparkles size={16} />

                      <span className="font-bold">
                        Trusted by 12k+
                      </span>
                    </div>

                    <p className="text-sm text-gray-500">
                      Happy renters across India
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Verification;