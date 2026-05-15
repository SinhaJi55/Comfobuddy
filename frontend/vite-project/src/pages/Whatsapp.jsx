import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
  return (
    <motion.a
      href="https://wa.me/916202101524"
      target="_blank"
      rel="noreferrer"
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{
        scale: 0.9,
      }}
      className="fixed bottom-6 left-6 z-[9999] flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-[0_0_35px_rgba(0,255,100,0.45)]"
    >
      <FaWhatsapp size={34} />
    </motion.a>
  );
};

export default Whatsapp;