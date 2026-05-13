import React from "react";
import { motion } from "framer-motion";

const CTASection = () => {
  const goto = () => {
    const section = document.getElementById("search-section");

    section?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 mt-24">
      
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative overflow-hidden bg-[#fdf3ee] rounded-[40px] py-20 px-8 text-center shadow-[0_20px_80px_rgba(255,107,53,0.12)]"
      >

        {/* Background Glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[-100px] right-[-100px] w-72 h-72 bg-[#ff6b35]/20 blur-3xl rounded-full"
        />

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-120px] left-[-100px] w-80 h-80 bg-orange-200 blur-3xl rounded-full"
        />

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="relative text-4xl md:text-5xl font-bold text-[#1a1a1a] leading-tight"
        >
          Ready to Find Your Perfect Room?
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          viewport={{ once: true }}
          className="relative text-gray-500 text-lg mt-5 max-w-2xl mx-auto leading-8"
        >
          Join thousands of happy renters who found their new
          home with StayFinder.
        </motion.p>

        {/* Button */}
        <motion.button
          whileHover={{
            scale: 1.08,
            boxShadow: "0px 15px 40px rgba(255,107,53,0.35)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={goto}
          className="rounded-2xl border border-orange-300 py-3 font-semibold text-white px-8 mt-8  shadow-md transition-all bg-orange-600"
        >
          Get Started Now →
        </motion.button>

      </motion.div>

    </section>
  );
};

export default CTASection;