// ListingsGrid.jsx

import React from "react";
import { motion } from "framer-motion";

import {
  MapPin,
  Eye,
  Users,
  ClipboardCheck,
  Pencil,
  Search,
  BadgeCheck,
  Plus,
} from "lucide-react";

const listings = [
  {
    id: 1,
    title: "Private AC Room",
    location: "Saket, South Delhi",
    price: "₹9,500/mo",
    views: 284,
    tenants: 1,
    inspections: 4,
    status: "Verified",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 2,
    title: "1BHK Furnished Flat",
    location: "Dwarka Sec 10",
    price: "₹14,000/mo",
    views: 198,
    tenants: 1,
    inspections: 3,
    status: "Verified",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 3,
    title: "Girls PG Double Share",
    location: "Laxmi Nagar",
    price: "₹7,800/mo",
    views: 142,
    tenants: 2,
    inspections: 1,
    status: "Pending",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 4,
    title: "2BHK Semi-Furnished",
    location: "Gurgaon Sec 49",
    price: "₹22,000/mo",
    views: 320,
    tenants: 1,
    inspections: 6,
    status: "Verified",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 5,
    title: "Studio Apartment",
    location: "Rohini Sec 9",
    price: "₹11,500/mo",
    views: 167,
    tenants: 1,
    inspections: 2,
    status: "Verified",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 6,
    title: "Boys PG Triple Share",
    location: "Noida Sec 62",
    price: "₹6,500/mo",
    views: 95,
    tenants: 3,
    inspections: 2,
    status: "Pending",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 7,
    title: "Luxury Penthouse",
    location: "DLF Phase 5",
    price: "₹55,000/mo",
    views: 540,
    tenants: 2,
    inspections: 8,
    status: "Verified",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 8,
    title: "Modern Co-Living Space",
    location: "Koramangala",
    price: "₹13,500/mo",
    views: 211,
    tenants: 4,
    inspections: 5,
    status: "Verified",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
  },
];

const ListingsGrid = () => {
  return (
    <div className="w-full">
      {/* Top */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">
        <div>
          <h1 className="text-[38px] font-black text-[#161616]">
            My Properties
          </h1>

          <p className="text-gray-400 text-lg mt-2">
            Manage all your property listings
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button className="h-[52px] px-6 rounded-2xl border border-[#ececec] bg-white font-semibold text-gray-600 hover:bg-gray-50 transition-all">
            Filter
          </button>

          <motion.button
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="h-[54px] px-7 rounded-2xl bg-orange-500 hover:bg-orange-600 transition-all text-white font-bold flex items-center gap-2 shadow-lg shadow-orange-200"
          >
            <Plus size={18} />
            Add Listing
          </motion.button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8">
        {listings.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{
              opacity: 0,
              y: 50,
              scale: 0.92,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -12,
            }}
            className="group bg-white rounded-[34px] overflow-hidden border border-[#efefef] shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)] transition-all duration-500"
          >
            {/* Image Section */}
            <div className="relative h-[260px] overflow-hidden">
              <motion.img
                whileHover={{
                  scale: 1.08,
                }}
                transition={{
                  duration: 0.7,
                }}
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Status */}
              <motion.div
                animate={{
                  scale: [1, 1.04, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className={`absolute top-5 left-5 px-4 py-2 rounded-full text-sm font-bold backdrop-blur-md ${
                  item.status === "Verified"
                    ? "bg-green-500/90 text-white"
                    : "bg-orange-400/90 text-white"
                }`}
              >
                {item.status === "Verified" && (
                  <BadgeCheck size={16} className="inline mr-1" />
                )}

                {item.status}
              </motion.div>

              {/* Price */}
              <div className="absolute bottom-5 right-5 px-5 py-3 rounded-2xl bg-black/40 backdrop-blur-xl text-white font-bold text-[22px] shadow-lg">
                {item.price}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div>
                <h2 className="text-[30px] font-bold text-[#161616] leading-tight">
                  {item.title}
                </h2>

                <div className="flex items-center gap-2 text-gray-500 mt-2">
                  <MapPin size={16} />
                  <span className="text-lg">{item.location}</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mt-6">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                  }}
                  className="bg-[#faf7f5] rounded-2xl py-4 text-center"
                >
                  <h3 className="text-[30px] font-black text-[#161616]">
                    {item.views}
                  </h3>

                  <div className="flex items-center justify-center gap-1 text-gray-400 text-sm mt-1">
                    <Eye size={14} />
                    Views
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{
                    scale: 1.05,
                  }}
                  className="bg-[#faf7f5] rounded-2xl py-4 text-center"
                >
                  <h3 className="text-[30px] font-black text-[#161616]">
                    {item.tenants}
                  </h3>

                  <div className="flex items-center justify-center gap-1 text-gray-400 text-sm mt-1">
                    <Users size={14} />
                    Tenants
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{
                    scale: 1.05,
                  }}
                  className="bg-[#faf7f5] rounded-2xl py-4 text-center"
                >
                  <h3 className="text-[30px] font-black text-[#161616]">
                    {item.inspections}
                  </h3>

                  <div className="flex items-center justify-center gap-1 text-gray-400 text-sm mt-1">
                    <ClipboardCheck size={14} />
                    Insp.
                  </div>
                </motion.div>
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-3 gap-3 mt-6">
                <motion.button
                  whileHover={{
                    scale: 1.04,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="h-[52px] rounded-2xl border border-[#ececec] bg-white font-semibold text-gray-600 hover:bg-gray-50 flex items-center justify-center gap-2"
                >
                  <Pencil size={16} />
                  Edit
                </motion.button>

                <motion.button
                  whileHover={{
                    scale: 1.04,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="h-[52px] rounded-2xl border border-[#ececec] bg-white font-semibold text-gray-600 hover:bg-gray-50 flex items-center justify-center gap-2"
                >
                  <Eye size={16} />
                  View
                </motion.button>

                <motion.button
                  whileHover={{
                    scale: 1.04,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="h-[52px] rounded-2xl bg-orange-50 text-orange-500 border border-orange-200 font-bold flex items-center justify-center gap-2 hover:bg-orange-500 hover:text-white transition-all"
                >
                  <Search size={16} />
                  Book Buddy
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ListingsGrid;