import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  Video,
  House,
  ShieldCheck,
  Users,
  MapPin,
  Star,
} from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Search & Shortlist",
    desc: "Browse thousands of verified listings filtered by area, budget and lifestyle preferences.",
    tag1: "Smart Filters",
    tag2: "Shortlist Fast",
    icon: <Search size={34} />,
  },

  {
    id: "02",
    title: "Book Live Inspection",
    desc: "A trusted Buddy visits the property and gives you a real-time walkthrough.",
    tag1: "Live Video",
    tag2: "Ask Anything",
    icon: <Video size={34} />,
    active: true,
  },

  {
    id: "03",
    title: "Move In Safely",
    desc: "Receive a verified AI inspection report before paying any token or rent.",
    tag1: "Verified Report",
    tag2: "Zero Surprises",
    icon: <House size={34} />,
  },
];

const stats = [
  {
    icon: <ShieldCheck size={28} />,
    number: "15K+",
    label: "Verified Rooms",
  },

  {
    icon: <Users size={28} />,
    number: "60K+",
    label: "Happy Renters",
  },

  {
    icon: <MapPin size={28} />,
    number: "30+",
    label: "Cities",
  },

  {
    icon: <Star size={28} />,
    number: "4.9★",
    label: "Average Rating",
  },
];

const Steps = () => {
  return (
    <section className="relative overflow-hidden bg-[#fdf8f5] py-28 px-6 " id="comfoworks-section">

      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-200 opacity-20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-300 opacity-20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TOP */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <p className="uppercase tracking-[5px] text-orange-500 font-bold flex items-center gap-3">

            <span className="w-10 h-[2px] bg-orange-500"></span>

            Simple Process

          </p>

          <h1 className="text-6xl md:text-7xl font-black text-[#111827] leading-[1.1] mt-6">

            How ComfoBuddy
            <br />

            actually{" "}

            <span className="text-orange-500">
              works
            </span>

          </h1>

          <p className="text-[#6b7280] text-xl leading-9 mt-8 max-w-2xl">
            From room discovery to move-in —
            everything is designed to make renting
            transparent, trusted and stress-free.
          </p>

        </motion.div>

        {/* CARDS */}
        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -14,
                scale: 1.02,
              }}
              className={`
              relative overflow-hidden rounded-[38px] p-[1px]
              
              ${
                step.active
                  ? "bg-gradient-to-br from-orange-500 via-orange-300 to-orange-100"
                  : "bg-gradient-to-br from-orange-100 to-orange-50"
              }
              `}
            >

              {/* INNER CARD */}
              <div
                className={`
                relative h-full rounded-[38px] p-10 min-h-[460px]
                transition-all duration-500
                
                ${
                  step.active
                    ? "bg-gradient-to-br from-[#fff5ef] to-[#fffaf7]"
                    : "bg-white"
                }
                `}
              >

                {/* GLOW */}
                <div className="absolute top-0 right-0 w-52 h-52 bg-orange-200 blur-[90px] opacity-20 rounded-full"></div>

                {/* NUMBER */}
                <h1 className="absolute top-6 right-8 text-[110px] font-black text-orange-100 select-none">

                  {step.id}

                </h1>

                {/* ICON */}
                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.12,
                  }}
                  className={`
                  relative w-24 h-24 rounded-[30px]
                  flex items-center justify-center
                  transition-all duration-500
                  
                  ${
                    step.active
                      ? "bg-orange-500 text-white shadow-[0_0_60px_rgba(255,115,0,0.45)]"
                      : "bg-orange-50 text-orange-500"
                  }
                  `}
                >

                  {/* Glow */}
                  <div className="absolute inset-0 rounded-[30px] bg-orange-400 blur-2xl opacity-20"></div>

                  {step.icon}

                </motion.div>

                {/* TITLE */}
                <h2 className="text-4xl font-black text-[#111827] leading-tight mt-10">

                  {step.title}

                </h2>

                {/* DESC */}
                <p className="text-[#6b7280] text-xl leading-10 mt-7">

                  {step.desc}

                </p>

                {/* TAGS */}
                <div className="flex flex-wrap items-center gap-4 mt-12">

                  <div className="bg-orange-50 border border-orange-100 px-6 py-3 rounded-full text-[#111827] font-semibold">

                    {step.tag1}

                  </div>

                  <div className="text-orange-500 text-2xl">
                    →
                  </div>

                  <div className="text-orange-500 font-bold text-lg">

                    {step.tag2}

                  </div>

                </div>

                {/* BOTTOM SHADOW */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-orange-50/60 to-transparent pointer-events-none"></div>

              </div>

            </motion.div>
          ))}

        </div>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >

          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="bg-white rounded-[32px] p-7 border border-orange-100 shadow-[0_10px_40px_rgba(255,115,0,0.05)] hover:shadow-[0_20px_60px_rgba(255,115,0,0.12)] transition-all duration-500"
            >

              <div className="w-20 h-20 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">

                {stat.icon}

              </div>

              <h1 className="text-5xl font-black text-[#111827] mt-6">

                {stat.number}

              </h1>

              <p className="text-[#6b7280] text-lg mt-3">

                {stat.label}

              </p>

            </motion.div>
          ))}

        </motion.div>

      </div>

    </section>
  );
};

export default Steps;