import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";

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
    image: "i7.jpg",
  },
  {
    name: "Ananya Reddy",
    city: "Hyderabad",
    review:
      "No brokers, no hidden charges. Very smooth experience!",
    rating: "4.9",
    image: "I5.jpg",
  },
  {
    name: "Karthik Iyer",
    city: "Pune",
    review:
      "Live tour feature is amazing. Saved me so much time.",
    rating: "4.7",
    image: "I6.jpg",
  },
  {
    name: "Neha Patel",
    city: "Mumbai",
    review:
      "Finally a platform I can trust. Highly recommended!",
    rating: "5.0",
    image: "I8.jpg",
  },
];
const testimonials2 = [
  {
    name: "Shubham Verma",
    city: "Bangalore",
    review:
      "Found my perfect room in Koramangala. The verification made me feel safe.",
    rating: "4.8",
    image: "boy10.jpg",
  },
  {
    name: "Priti Singh",
    city: "Hyderabad",
    review:
      "No brokers, no hidden charges. Very smooth experience!",
    rating: "4.9",
    image: "g1.jpg",
  },
  {
    name: "Krishna",
    city: "Pune",
    review:
      "Live tour feature is amazing. Saved me so much time.",
    rating: "4.7",
    image: "boy11.jpg",
  },
  {
    name: "Swati Kumari",
    city: "Mumbai",
    review:
      "Finally a platform I can trust. Highly recommended!",
    rating: "5.0",
    image: "g2.jpg",
  },
];
const testimonials3 = [
  {
    name: "Kohli Verma",
    city: "Bangalore",
    review:
      "Found my perfect room in Koramangala. The verification made me feel safe.",
    rating: "4.8",
    image: "boy12.jpg",
  },
  {
    name: "Aditi Singh",
    city: "Hyderabad",
    review:
      "No brokers, no hidden charges. Very smooth experience!",
    rating: "4.9",
    image: "g3.jpg",
  },
  {
    name: "Rishi kumar",
    city: "Pune",
    review:
      "Live tour feature is amazing. Saved me so much time.",
    rating: "4.7",
    image: "boy13.jpg",
  },
  {
    name: "Kritika Gupta",
    city: "Mumbai",
    review:
      "Finally a platform I can trust. Highly recommended!",
    rating: "5.0",
    image: "g4.jpg",
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
  const [showMore, setShowMore] =
    useState(false);

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
              className="mb-3 font-semibold uppercase tracking-[4px] text-orange-500"
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
              className="text-4xl font-black text-[#1b1b1b] md:text-5xl"
            >
              What Our Renters Say
            </motion.h2>

            <p className="mt-3 text-lg text-gray-500">
              Real reviews from real people.
            </p>
          </div>

          {/* Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0px 0px 25px rgba(255,107,53,0.35)",
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() =>
              setShowMore(!showMore)
            }
            className="hidden items-center gap-2 rounded-full border border-orange-200 bg-white px-6 py-3 font-semibold text-[#ff6b35] shadow-md transition-all md:flex"
          >
            {showMore
              ? "Close Reviews"
              : "View All Reviews"}

            <ArrowUpRight size={18} />
          </motion.button>
        </div>

        {/* Main Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-4"
        >
          {testimonials.map(
            (item, index) => (
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
                {/* Glow */}
                <motion.div
                  animate={{
                    x: [
                      "-100%",
                      "250%",
                    ],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 5,
                    ease: "linear",
                  }}
                  className="absolute top-0 h-full w-28 bg-white/20 blur-2xl"
                />

                {/* Orb */}
                <motion.div
                  animate={{
                    y: [0, -12, 0],
                    opacity: [
                      0.2,
                      0.45,
                      0.2,
                    ],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                  }}
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange-300/20 blur-3xl"
                />

                {/* Quote */}
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
                      className="h-16 w-16 rounded-full border-2 border-white object-cover shadow-lg"
                    />

                    <motion.div
                      animate={{
                        scale: [
                          1,
                          1.3,
                          1,
                        ],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                      }}
                      className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white bg-green-500"
                    />
                  </motion.div>

                  <div>
                    <h3 className="text-lg font-bold text-[#1a1a1a] transition-all duration-300 group-hover:text-orange-500">
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

                  {/* Dots */}
                  <div className="flex gap-1">
                    {[1, 2, 3].map(
                      (dot) => (
                        <motion.div
                          key={dot}
                          animate={{
                            y: [
                              0,
                              -4,
                              0,
                            ],
                          }}
                          transition={{
                            repeat:
                              Infinity,
                            duration: 1,
                            delay:
                              dot * 0.2,
                          }}
                          className="h-2 w-2 rounded-full bg-orange-400"
                        />
                      )
                    )}
                  </div>
                </div>

                {/* Border */}
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
            )
          )}
        </motion.div>

        {/* Extra Reviews */}
        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: 50,
              }}
              transition={{
                duration: 0.5,
              }}
              className="mt-12"
            >
              {/* Close */}
              <div className="mb-8 flex justify-end">
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    rotate: 90,
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                  onClick={() =>
                    setShowMore(false)
                  }
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-xl text-white shadow-lg"
                >
                  ✕
                </motion.button>
              </div>

              {/* More Cards */}
              <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-4">
                {[
                  ...testimonials2,
                  ...testimonials3,
                ].map(
                  (item, index) => (
                    <motion.div
                      key={index}
                      initial={{
                        opacity: 0,
                        y: 40,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay:
                          index * 0.08,
                      }}
                      whileHover={{
                        y: -12,
                      }}
                      className="relative overflow-hidden rounded-[32px] border border-[#f1ebe7] bg-white p-7 shadow-[0_15px_40px_rgba(0,0,0,0.06)]"
                    >
                      {/* Glow */}
                      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange-300/20 blur-3xl" />

                      {/* Profile */}
                      <div className="mb-5 flex items-center gap-4">
                        <img
                          src={item.image}
                          alt=""
                          className="h-16 w-16 rounded-full border-2 border-white object-cover shadow-lg"
                        />

                        <div>
                          <h3 className="text-lg font-bold">
                            {item.name}
                          </h3>

                          <p className="text-sm text-gray-500">
                            {item.city}
                          </p>
                        </div>
                      </div>

                      {/* Review */}
                      <p className="min-h-[120px] text-[15px] leading-8 text-gray-700">
                        “{item.review}”
                      </p>

                      {/* Rating */}
                      <div className="mt-6 flex w-fit items-center gap-2 rounded-full bg-orange-50 px-4 py-2">
                        <Star
                          size={18}
                          fill="#ff6b35"
                          stroke="#ff6b35"
                        />

                        <span className="font-bold">
                          {item.rating}
                        </span>
                      </div>
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Testimonials;