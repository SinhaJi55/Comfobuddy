import React, { useState } from "react";
import {
  MapPin,
  ChevronDown,
  BedDouble,
  Search,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";

const SearchSection = () => {
  const [active, setActive] = useState("Rooms");

  const tabs = ["Rooms", "PGs", "Flats"];

  const [budget, setBudget] =
    useState("Any budget");

  const [furnishing, setFurnishing] =
    useState("Any type");

  return (
    <section
      id="search-section"
      className="relative overflow-hidden bg-white px-4 py-20"
    >
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
        className="absolute left-0 top-10 h-80 w-80 rounded-full bg-orange-300 blur-[140px]"
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 80,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
        }}
        className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-[40px] border border-orange-100 bg-white/90 px-8 py-10 shadow-[0_25px_80px_rgba(0,0,0,0.08)] backdrop-blur-xl"
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
          className="pointer-events-none absolute inset-0 rounded-[40px] border border-orange-300/40"
        />

        {/* Header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              className="mb-4 flex items-center gap-3"
            >
              <span className="h-[2px] w-10 bg-orange-500"></span>

              <p className="uppercase tracking-[4px] text-orange-500 font-semibold">
                Smart Search
              </p>
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-black">
              Find your{" "}
              <span className="bg-gradient-to-r from-[#ff6b1a] to-[#00d4ff] bg-clip-text text-transparent">
                perfect space
              </span>
            </h1>

            <p className="mt-4 text-lg text-gray-500">
              Search verified rooms with real photos,
              ratings & zero brokerage.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex w-fit gap-2 rounded-2xl bg-[#f7f7f7] p-2 shadow-inner">
            {tabs.map((tab) => (
              <motion.button
                key={tab}
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={() => setActive(tab)}
                className={`relative overflow-hidden rounded-xl px-8 py-3 font-semibold transition-all duration-300
                  
                  ${
                    active === tab
                      ? "bg-gradient-to-r from-orange-500 to-[#ff7a2f] text-white shadow-[0_10px_25px_rgba(255,107,26,0.35)]"
                      : "bg-white text-black hover:bg-orange-50"
                  }
                `}
              >
                {active === tab && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500 to-[#ff7a2f]"
                  />
                )}

                <span className="relative z-10">
                  {tab}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Search Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Location */}
          <motion.div
            whileHover={{
              y: -6,
            }}
          >
            <p className="mb-3 text-sm font-semibold uppercase text-black">
              Location
            </p>

            <div className="group flex h-[74px] items-center gap-4 rounded-2xl border border-orange-200 bg-white px-5 shadow-sm transition-all duration-300 hover:border-orange-400 hover:shadow-lg">
              <motion.div
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                }}
              >
                <MapPin
                  className="text-[#ff6b1a]"
                  size={24}
                />
              </motion.div>

              <input
                type="text"
                placeholder="Dwarka, Noida, Gurgaon..."
                className="w-full bg-transparent text-lg text-black outline-none placeholder:text-[#667085]"
              />
            </div>
          </motion.div>

          {/* Budget */}
          <motion.div
            whileHover={{
              y: -6,
            }}
          >
            <p className="mb-3 text-sm font-semibold uppercase text-black">
              Budget
            </p>

            <div className="relative">
              <select
                value={budget}
                onChange={(e) =>
                  setBudget(e.target.value)
                }
                className="h-[74px] w-full appearance-none rounded-2xl border border-orange-200 bg-white px-5 text-lg text-black shadow-sm outline-none transition-all duration-300 hover:border-orange-400 hover:shadow-lg"
              >
                <option>Any budget</option>
                <option>
                  ₹5,000 - ₹10,000
                </option>
                <option>
                  ₹10,000 - ₹20,000
                </option>
                <option>
                  ₹20,000 - ₹40,000
                </option>
                <option>₹40,000+</option>
              </select>

              <ChevronDown
                className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-gray-500"
              />
            </div>
          </motion.div>

          {/* Furnishing */}
          <motion.div
            whileHover={{
              y: -6,
            }}
          >
            <p className="mb-3 text-sm font-semibold uppercase text-black">
              Furnishing
            </p>

            <div className="relative">
              <BedDouble
                className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-500"
                size={22}
              />

              <select
                value={furnishing}
                onChange={(e) =>
                  setFurnishing(e.target.value)
                }
                className="h-[74px] w-full appearance-none rounded-2xl border border-orange-200 bg-white pl-14 pr-5 text-lg text-black shadow-sm outline-none transition-all duration-300 hover:border-orange-400 hover:shadow-lg"
              >
                <option>Any type</option>

                <option>
                  Fully Furnished
                </option>

                <option>
                  Semi Furnished
                </option>

                <option>
                  Unfurnished
                </option>
              </select>

              <ChevronDown
                className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-gray-500"
              />
            </div>
          </motion.div>

          {/* Search Button */}
          <motion.div
            whileHover={{
              y: -6,
            }}
            className="flex items-end"
          >
            <motion.button
              whileHover={{
                scale: 1.03,
                boxShadow:
                  "0px 0px 35px rgba(255,107,26,0.45)",
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="group relative flex h-[74px] w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-[#ff6b1a] to-[#ff8c42] text-xl font-bold text-white shadow-[0_12px_30px_rgba(255,107,26,0.35)]"
            >
              {/* Shine Effect */}
              <motion.div
                animate={{
                  x: ["-100%", "250%"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "linear",
                }}
                className="absolute top-0 h-full w-24 bg-white/20 blur-xl"
              />

              <Search size={22} />

              Search Now

              <motion.div
                animate={{
                  rotate: [0, 15, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                }}
              >
                <Sparkles size={18} />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default SearchSection;