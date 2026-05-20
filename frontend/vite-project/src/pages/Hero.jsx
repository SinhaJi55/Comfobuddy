import React from "react";
import { motion } from "framer-motion";
import {
  Navigation,
  ArrowRight,
  Star,
  ShieldCheck,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();

  const goto = () => {
    const section = document.getElementById("searching-section");
    section?.scrollIntoView({
  behavior: "smooth",
  block: "start",
});
  };
  const go = () => {
    const section = document.getElementById("comfoworks-sections");
      section?.scrollIntoView({
  behavior: "smooth",
  block: "start",
});
  };

  return (
    <section  className="relative overflow-hidden pb-24 pt-32" id="hero"
  style={{
    background:
      "radial-gradient(circle at top left, #fff3e8 0%, #fff8f3 35%, #ffffff 70%)",
  }}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Orange Glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut",
          }}
          className="absolute -left-20 top-10 h-96 w-96 rounded-full"
        />

        {/* Cyan Glow */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            repeat: Infinity,
            duration: 7,
          }}
          className="absolute right-0 top-40 h-80 w-80 rounded-full bg-cyan-300 blur-[140px]"
        />

        {/* Floating Bubbles */}
        <span className="bubble bubble1 bg-orange-400"></span>
        <span className="bubble bubble2 bg-orange-300"></span>
        <span className="bubble bubble3 bg-cyan-300"></span>
        <span className="bubble bubble4 bg-orange-500"></span>
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{
            opacity: 0,
            x: -80,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          {/* Tag */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-[2px] w-12 bg-orange-500"></span>

            <p className="uppercase tracking-[4px] text-orange-500 font-semibold">
              Find. Verify. Move In.
            </p>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
            }}
            className="text-5xl md:text-7xl font-black leading-tight text-gray-900"
          >
            Your Perfect
            <br />

            <span className="relative inline-block">
              Room Is Just

              <motion.span
                animate={{
                  width: ["0%", "100%", "0%"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                }}
                className="absolute bottom-2 left-0 h-3 bg-orange-200 -z-10"
              />
            </span>

            <br />

            <span className="bg-gradient-to-r from-[#ff6b1a] via-[#ff934d] to-[#00d4ff] bg-clip-text text-transparent">
              3 Clicks
            </span>{" "}
            Away.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
            }}
            className="mt-8 max-w-2xl text-lg leading-9 text-gray-500"
          >
            Verified rooms, real photos, honest reviews and
            hassle-free booking experience with trusted
            landlords.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.7,
            }}
            className="mt-10 flex flex-col gap-5 md:flex-row"
          >
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
              className="group flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-orange-500 to-[#ff7a2f] px-8 py-4 font-semibold text-white shadow-[0_12px_30px_rgba(255,107,26,0.35)]"
            >
              Search Rooms

              <ArrowRight
                size={18}
                className="transition-all duration-300 group-hover:translate-x-1"
              />
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "#fff7f2",
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={go}
              className="flex items-center justify-center gap-3 rounded-2xl border border-orange-200 bg-white px-8 py-4 font-semibold text-orange-500 shadow-md"
            >
              <Navigation size={18} />
              See How it Works
            </motion.button>
          </motion.div>

          {/* Small Stats */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1,
            }}
            className="mt-12 flex flex-wrap gap-5"
          >
            <div className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-md">
              <div className="rounded-xl bg-orange-100 p-2 text-orange-500">
                <ShieldCheck size={20} />
              </div>

              <div>
                <h3 className="font-bold text-gray-900">
                  100% Verified
                </h3>

                <p className="text-sm text-gray-500">
                  Safe & Trusted
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-md">
              <div className="rounded-xl bg-yellow-100 p-2 text-yellow-500">
                <Star size={20} />
              </div>

              <div>
                <h3 className="font-bold text-gray-900">
                  4.9 Rating
                </h3>

                <p className="text-sm text-gray-500">
                  From 12k+ users
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{
            opacity: 0,
            x: 80,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="relative"
        >
          {/* Floating Card */}
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="absolute -left-10 top-16 z-20 hidden rounded-3xl bg-white p-5 shadow-[0_15px_50px_rgba(0,0,0,0.1)] md:block"
          >
            <p className="text-sm text-gray-500">
              Trusted By
            </p>

            <h2 className="mt-1 text-3xl font-black text-orange-500">
              12k+
            </h2>

            <p className="text-sm text-gray-600">
              Active Renters
            </p>
          </motion.div>

          {/* Main Image */}
          <motion.div
            whileHover={{
              scale: 1.03,
            }}
            transition={{
              duration: 0.5,
            }}
            className="relative overflow-hidden rounded-[40px]"
          >
            <motion.div
              animate={{
                rotate: [0, 2, 0, -2, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 8,
              }}
              className="w-full h-[700px] bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage: "url('/orange.png')",
              }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
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
            className="absolute bottom-10 right-0 z-20 rounded-3xl bg-white px-6 py-5 shadow-[0_15px_50px_rgba(0,0,0,0.1)]"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                <img
                  src="/I1.jpg"
                  alt=""
                  className="h-12 w-12 rounded-full border-2 border-white object-cover"
                />

                <img
                  src="I2.jpg"
                  alt=""
                  className="h-12 w-12 rounded-full border-2 border-white object-cover"
                />

                <img
                  src="/I3.jpg"
                  alt=""
                  className="h-12 w-12 rounded-full border-2 border-white object-cover"
                />
              </div>

              <div>
                <div className="flex items-center gap-1 text-orange-500">
                  <Star
                    size={16}
                    fill="#ff6b1a"
                    stroke="#ff6b1a"
                  />

                  <span className="font-bold">
                    4.9
                  </span>
                </div>

                <p className="text-sm text-gray-500">
                  Loved by renters
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
    
  );
};

export default Hero;