import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="max-w-7xl mx-auto px-6 lg:px-10 py-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-14">

        {/* Brand Section */}
        <motion.div variants={itemVariants}>
          
          {/* Logo */}
          <motion.div
            whileHover={{
              scale: 1.03,
            }}
            className="flex cursor-pointer items-center gap-3 mb-6"
          >
            <motion.div
              whileHover={{
                rotate: 10,
                scale: 1.1,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
              }}
              className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500 to-[#ff7a2f] text-xl font-black text-white shadow-[0_10px_25px_rgba(255,107,26,0.4)]"
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
                className="absolute top-0 h-full w-10 bg-white/20 blur-md"
              />

              C
            </motion.div>

            <h1 className="text-3xl font-black text-gray-800">
              Comfo
              <span className="bg-gradient-to-r from-orange-500 to-[#ff934d] bg-clip-text text-transparent">
                Buddy
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <p className="text-gray-500 leading-7">
            India's most trusted platform for verified rentals.
            Find your dream room with comfort, safety and ease.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-8">

           {[
  "/facebook.png",
  "/instagram.png",
  "/twitter.png",
  "/Linkedin.png",
].map((icon, i) => (
  <motion.div
    key={i}
    whileHover={{
      y: -8,
      scale: 1.1,
      backgroundColor: "#ff6b35",
      boxShadow: "0px 10px 25px rgba(255,107,53,0.35)",
    }}
    transition={{
      type: "spring",
      stiffness: 300,
    }}
    className="w-12 h-12 rounded-full bg-white border border-[#ece7e2] flex items-center justify-center cursor-pointer overflow-hidden"
  >
    <img
      src={icon}
      alt="social"
      className="w-5 h-5 object-contain"
    />
  </motion.div>
))}

          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={itemVariants}>
          <h3 className="font-bold text-lg mb-5 text-gray-800">
            Quick Links
          </h3>

          <ul className="space-y-4 text-gray-500">
            {[
              "Find Rooms",
              "How It Works",
              "For Owners",
              "About Us",
            ].map((item, i) => (
              <motion.li
                key={i}
                whileHover={{
                  x: 8,
                  color: "#ff6b35",
                }}
                className="cursor-pointer transition"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Company */}
        <motion.div variants={itemVariants}>
          <h3 className="font-bold text-lg mb-5 text-gray-800">
            Company
          </h3>

          <ul className="space-y-4 text-gray-500">
            {[
              "Careers",
              "Blog",
              "Contact",
              "Investors",
            ].map((item, i) => (
              <motion.li
                key={i}
                whileHover={{
                  x: 8,
                  color: "#ff6b35",
                }}
                className="cursor-pointer transition"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Support */}
        <motion.div variants={itemVariants}>
          <h3 className="font-bold text-lg mb-5 text-gray-800">
            Support
          </h3>

          <ul className="space-y-4 text-gray-500">
            {[
              "Help Center",
              "Privacy Policy",
              "Safety Center",
              "Terms & Conditions",
            ].map((item, i) => (
              <motion.li
                key={i}
                whileHover={{
                  x: 8,
                  color: "#ff6b35",
                }}
                className="cursor-pointer transition"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div variants={itemVariants}>
          <h3 className="font-bold text-lg mb-5 text-gray-800">
            Stay Updated
          </h3>

          <p className="text-gray-500 leading-7 mb-6">
            Get latest rooms and offers directly in your inbox.
          </p>

          <motion.div
            whileHover={{
              boxShadow: "0px 10px 30px rgba(255,107,53,0.12)",
            }}
            className="bg-white rounded-2xl border border-[#ece7e2] p-2 flex items-center transition"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 outline-none px-3 py-2 bg-transparent text-sm"
            />

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 25px rgba(255,107,53,0.35)",
              }}
              whileTap={{ scale: 0.95 }}
              className="rounded-2xl border border-orange-300 py-3 font-semibold text-white px-8 mt-8  shadow-md transition-all bg-orange-600"
            >
              Subscribe
            </motion.button>
          </motion.div>
        </motion.div>

      </div>

      {/* Bottom Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.6,
          duration: 0.8,
        }}
        viewport={{ once: true }}
        className="border-t border-[#ece7e2] mt-16 pt-8 text-center text-gray-500 text-sm"
      >
        © 2026 ComfoBuddy. All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;