import React from "react";
import { motion } from "framer-motion";

const ListingCard = ({ data }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="rounded-2xl overflow-hidden bg-[#111a2e] shadow-xl border border-white/10"
    >
      {/* Top Gradient */}
      <div className={`h-28 bg-gradient-to-r ${data.gradient} relative`}>
        
        {/* Badge */}
        <span className="absolute top-3 left-3 text-xs bg-white/10 px-3 py-1 rounded-full backdrop-blur-md">
          {data.badge}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        
        {/* Price */}
        <h3 className="text-xl font-bold">{data.price}</h3>

        {/* Title */}
        <p className="text-gray-200 mt-1 font-semibold">
          {data.title}
        </p>

        {/* Location */}
        <p className="text-gray-400 text-sm mt-1">
          📍 {data.location}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {data.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-white/10 px-2 py-1 rounded-full text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-5">
          <p className="text-yellow-400 text-sm">
            ⭐ {data.rating}
          </p>

          <button className="text-orange-400 text-sm hover:translate-x-1 transition">
            View →
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ListingCard;