import React from "react";
import { motion } from "framer-motion";
import {
  Star,
  Quote,
  ArrowUpRight,
} from "lucide-react";

const testimonials = [
  {
    name: "Rohit Sharma",
    city: "Bangalore",
    review:
      "Found my perfect room in Koramangala. The verification made me feel safe.",
    rating: "4.8",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Ananya Reddy",
    city: "Hyderabad",
    review:
      "No brokers, no hidden charges. Very smooth experience!",
    rating: "4.9",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Karthik Iyer",
    city: "Pune",
    review:
      "Live tour feature is amazing. Saved me so much time.",
    rating: "4.7",
    image:
      "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Neha Patel",
    city: "Mumbai",
    review:
      "Finally a platform I can trust. Highly recommended!",
    rating: "5.0",
    image:
      "https://randomuser.me/api/portraits/women/65.jpg",
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
    y: 50,
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

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        }}
        className="absolute right-0 top-0 h-96 w-96 rounded-full bg-orange-400 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}
        <div className="mb-14 flex items-center justify-between">
          <div>
            <motion.p
              initial={{
                opacity: 0,
                x: -20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              className="mb-3 uppercase tracking-[4px] text-orange-500 font-semibold"
            >
              Trusted By Renters
            </motion.p>

            <motion.h2
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="text-4xl md:text-5xl font-black text-[#1b1b1b]"
            >
              What Our Renters Say
            </motion.h2>

            <p className="mt-3 text-lg text-gray-500">
              Real reviews from real people.
            </p>
          </div>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 25px rgba(255,107,53,0.35)",
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="hidden md:flex items-center gap-2 rounded-full border border-orange-200 bg-white px-6 py-3 font-semibold text-[#ff6b35] shadow-md transition-all"
          >
            View All Reviews
            <ArrowUpRight size={18} />
          </motion.button>
        </div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-4"
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{
                y: -14,
                rotateX: 4,
                rotateY: -4,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
              }}
              className="group relative overflow-hidden rounded-[32px] border border-[#f1ebe7] bg-white/90 p-7 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.06)]"
            >
              {/* Animated Glow */}
              <motion.div
                animate={{
                  x: ["-100%", "250%"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "linear",
                }}
                className="absolute top-0 h-full w-28 bg-white/20 blur-2xl"
              />

              {/* Floating Gradient Orb */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  opacity: [0.2, 0.45, 0.2],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                }}
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange-300/20 blur-3xl"
              />

              {/* Quote Icon */}
              <motion.div
                whileHover={{
                  rotate: 12,
                  scale: 1.1,
                }}
                className="absolute right-5 top-5 rounded-2xl bg-orange-50 p-3 text-orange-400"
              >
                <Quote size={22} />
              </motion.div>

              {/* Profile */}
              <div className="relative z-10 mb-6 flex items-center gap-4">
                <motion.div
                  whileHover={{
                    scale: 1.08,
                  }}
                  className="relative"
                >
                  <img
                    src={item.image}
                    alt=""
                    className="h-16 w-16 rounded-full object-cover border-2 border-white shadow-lg"
                  />

                  {/* Online Dot */}
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                    }}
                    className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white bg-green-500"
                  />
                </motion.div>

                <div>
                  <h3 className="text-lg font-bold text-[#1a1a1a] group-hover:text-orange-500 transition-all duration-300">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {item.city}
                  </p>
                </div>
              </div>

              {/* Review */}
              <p className="relative z-10 min-h-[120px] text-[15px] leading-8 text-gray-700">
                “{item.review}”
              </p>

              {/* Bottom */}
              <div className="relative z-10 mt-8 flex items-center justify-between">
                <motion.div
                  whileHover={{
                    scale: 1.08,
                  }}
                  className="flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2"
                >
                  <Star
                    size={18}
                    fill="#ff6b35"
                    stroke="#ff6b35"
                  />

                  <span className="font-bold text-[#1a1a1a]">
                    {item.rating}
                  </span>
                </motion.div>

                {/* Small Animated Dots */}
                <div className="flex gap-1">
                  {[1, 2, 3].map((dot) => (
                    <motion.div
                      key={dot}
                      animate={{
                        y: [0, -4, 0],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 1,
                        delay: dot * 0.2,
                      }}
                      className="h-2 w-2 rounded-full bg-orange-400"
                    />
                  ))}
                </div>
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
                className="pointer-events-none absolute inset-0 rounded-[32px] border border-orange-300/40"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;