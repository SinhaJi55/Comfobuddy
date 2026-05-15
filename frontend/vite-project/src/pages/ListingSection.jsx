import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Star,
  ArrowRight,
  ShieldCheck,
  Wifi,
  Car,
  Utensils,
  Dumbbell,
} from "lucide-react";

const listings = [
  {
    badge: "Verified",
    price: "₹9,500 /mo",
    title: "Private AC Room",
    location: "Saket, South Delhi",
    tags: ["Single bed", "Kitchen", "Wi-Fi"],
    rating: 4.9,
    gradient: "from-cyan-400/20 via-blue-200/10 to-transparent",
    iconBg: "bg-cyan-100",
    image:
      "/bed9.jpg",
  },
  {
    badge: "Verified",
    price: "₹14,000 /mo",
    title: "1BHK Furnished Flat",
    location: "Dwarka Sec 10, Delhi",
    tags: ["Furnished", "Parking", "Geyser"],
    rating: 4.8,
    gradient: "from-orange-400/20 via-amber-200/10 to-transparent",
    iconBg: "bg-orange-100",
    image:
      "/bed8.jpg",
  },
  {
    badge: "Girls Only",
    price: "₹7,800 /mo",
    title: "Girls PG — Double Share",
    location: "Laxmi Nagar, Delhi",
    tags: ["Meals", "Laundry", "Security"],
    rating: 4.7,
    gradient: "from-indigo-400/20 via-blue-200/10 to-transparent",
    iconBg: "bg-indigo-100",
    image:
      "/bed7.jpg",
  },
  {
    badge: "Verified",
    price: "₹22,000 /mo",
    title: "2BHK Semi-Furnished",
    location: "Gurgaon Sector 49",
    tags: ["2 ACs", "Parking", "Lift"],
    rating: 5.0,
    gradient: "from-pink-400/20 via-purple-200/10 to-transparent",
    iconBg: "bg-pink-100",
    image:
      "/bed6.jpg",
  },
];

const getIcon = (tag) => {
  if (tag.includes("Wi"))
    return <Wifi size={18} className="text-cyan-600" />;
  if (tag.includes("Parking"))
    return <Car size={18} className="text-orange-600" />;
  if (tag.includes("Meals"))
    return <Utensils size={18} className="text-pink-600" />;
  if (tag.includes("Gym"))
    return <Dumbbell size={18} className="text-green-600" />;

  return <ShieldCheck size={18} className="text-orange-500" />;
};

const ListingSection = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-[#fff8f3] via-[#fdfdfd] to-[#eef7ff] px-6 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="uppercase tracking-[0.3em] text-orange-500 text-xs font-bold">
            Fresh & Verified
          </p>

          <h2 className="text-5xl md:text-6xl font-black mt-4 leading-tight text-black">
            Latest inspected <br />
            listings for students
          </h2>

          <p className="text-[#4b5d7c] mt-5 max-w-2xl text-lg leading-8">
            Every property is inspected personally by our Buddy team to ensure
            comfort, safety, and premium living experience.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {listings.map((item, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-[32px] border border-orange-100 bg-white/90 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
            >
              {/* Animated Glow */}
              <motion.div
                animate={{
                  x: ["-100%", "250%"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "linear",
                }}
                className="absolute top-0 h-full w-32 bg-white/20 blur-2xl"
              />

              {/* Hover Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 transition duration-500 group-hover:opacity-100`}
              />

              {/* Floating Orb */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                }}
                className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-orange-400/20 blur-3xl"
              />

              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 backdrop-blur-xl border border-white/30 px-4 py-2 rounded-full text-xs font-semibold text-white">
                    {item.badge}
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full text-sm text-white">
                  <Star
                    size={14}
                    className="fill-yellow-400 text-yellow-400"
                  />
                  {item.rating}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-6">
                
                {/* Price */}
                <motion.h3
                  whileHover={{ x: 5 }}
                  className="text-3xl font-black text-black transition-all duration-300 group-hover:text-orange-500"
                >
                  {item.price}
                </motion.h3>

                {/* Title */}
                <h4 className="mt-2 text-lg font-bold text-[#1b2b49]">
                  {item.title}
                </h4>

                {/* Location */}
                <div className="flex items-center gap-2 mt-3 text-[#5c6f91] text-sm">
                  <MapPin size={16} />
                  {item.location}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {item.tags.map((tag, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{
                        scale: 1.05,
                        y: -2,
                      }}
                      className="flex items-center gap-2 bg-white border border-orange-100 px-3 py-2 rounded-2xl text-xs text-[#31456c] shadow-sm"
                    >
                      <div
                        className={`h-8 w-8 rounded-xl ${item.iconBg} flex items-center justify-center`}
                      >
                        {getIcon(tag)}
                      </div>

                      {tag}
                    </motion.div>
                  ))}
                </div>

                {/* Animated Line */}
                <motion.div
                  initial={{
                    width: 0,
                  }}
                  whileHover={{
                    width: "100%",
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  className="mt-6 h-[3px] rounded-full bg-gradient-to-r from-orange-500 to-cyan-400"
                />

                {/* Button */}
                <motion.button
                  whileHover={{
                    x: 5,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="mt-6 w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-400 py-3.5 text-white font-semibold shadow-lg shadow-orange-300/40 transition-all duration-300 hover:shadow-orange-400/50"
                >
                  View Details
                  <ArrowRight size={18} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListingSection;