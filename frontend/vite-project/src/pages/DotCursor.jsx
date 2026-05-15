import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const DotCursor = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener(
      "mousemove",
      moveCursor
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        moveCursor
      );
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 10,
        y: position.y - 10,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 22,
      }}
      className="pointer-events-none fixed left-0 top-0 z-[100000]"
    >
      {/* OUTER GLOW */}
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.2,
          ease: "easeInOut",
        }}
        className="absolute h-5 w-5 rounded-full bg-orange-400 blur-md"
      />

      {/* MAIN DOT */}
      <motion.div
        animate={{
          scale: [1, 0.8, 1],
          opacity: [1, 0.5, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 0.8,
        }}
        className="relative h-5 w-5 rounded-full bg-orange-500 shadow-[0_0_25px_rgba(255,115,0,0.9)]"
      />
    </motion.div>
  );
};

export default DotCursor;