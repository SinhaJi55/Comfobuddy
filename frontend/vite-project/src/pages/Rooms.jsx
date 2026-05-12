import React from "react";
import { Star, MapPin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const rooms = [
  {
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    name: "Premium PG in Koramangala",
    price: "₹8,200",
    location: "Koramangala, Bangalore",
    rating: "4.7",
  },
  {
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    name: "1BHK Fully Furnished Flat",
    price: "₹18,000",
    location: "HSR Layout, Bangalore",
    rating: "4.8",
  },
  {
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156",
    name: "Modern Studio Apartment",
    price: "₹12,500",
    location: "Indiranagar",
    rating: "4.6",
  },
  {
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    name: "Cozy Private Room",
    price: "₹6,500",
    location: "Jayanagar",
    rating: "4.7",
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

const item = {
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

const Rooms = () => {
  return (
    <section className="relative overflow-hidden pb-24 pt-10">
      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        }}
        className="absolute left-0 top-20 h-72 w-72 rounded-full bg-orange-400 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-12 flex items-center justify-between">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-3 uppercase tracking-[4px] text-orange-500 font-semibold"
            >
              Verified Spaces
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-black"
            >
              Top Verified Rooms
            </motion.h1>
          </div>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 25px rgba(255,107,26,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center gap-2 rounded-full border border-orange-200 bg-white px-6 py-3 font-semibold text-orange-500 shadow-md transition-all"
          >
            View All
            <ArrowUpRight size={18} />
          </motion.button>
        </div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {rooms.map((room, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -15,
                rotateX: 4,
                rotateY: -4,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
              }}
              className="group relative overflow-hidden rounded-[30px] border border-white/20 bg-white shadow-[0_15px_40px_rgba(0,0,0,0.08)]"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <motion.img
                  whileHover={{
                    scale: 1.12,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  src={room.image}
                  alt=""
                  className="h-56 w-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70" />

                {/* Rating Badge */}
                <motion.div
                  whileHover={{
                    scale: 1.1,
                  }}
                  className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold shadow-lg backdrop-blur-md"
                >
                  <Star
                    size={14}
                    fill="#ff7a2f"
                    stroke="#ff7a2f"
                  />
                  {room.rating}
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-lg font-bold text-black transition group-hover:text-orange-500">
                    {room.name}
                  </h2>
                </div>

                {/* Price */}
                <motion.p
                  whileHover={{
                    scale: 1.05,
                  }}
                  className="mt-3 text-2xl font-black text-orange-500"
                >
                  {room.price}
                  <span className="ml-1 text-sm font-medium text-gray-400">
                    /month
                  </span>
                </motion.p>

                {/* Location */}
                <div className="mt-5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <motion.div
                      animate={{
                        y: [0, -2, 0],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                      }}
                    >
                      <MapPin size={16} />
                    </motion.div>

                    {room.location}
                  </div>
                </div>

                {/* Bottom Button */}
                <motion.button
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className="mt-6 w-full rounded-2xl bg-gradient-to-r from-[#ff7a2f] to-[#ff5e00] py-3 font-semibold text-white shadow-[0_10px_25px_rgba(255,107,26,0.35)] transition-all"
                >
                  View Details
                </motion.button>
              </div>

              {/* Animated Border Glow */}
              <motion.div
                animate={{
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                }}
                className="pointer-events-none absolute inset-0 rounded-[30px] border border-orange-400/40"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Rooms;