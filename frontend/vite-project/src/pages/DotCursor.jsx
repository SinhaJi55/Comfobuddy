import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const RoomCursor = () => {
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
        x: position.x - 35,
        y: position.y - 35,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 20,
      }}
      className="pointer-events-none fixed left-0 top-0 z-[9999]"
    >
      <div className="h-[60px] w-[60px] overflow-hidden rounded-full border-2 border-orange-400 shadow-[0_0_35px_rgba(255,115,0,0.7)]">
        <img
          src="/cursor.jpg"
          alt="cursor"
          className="h-full w-full object-cover"
        />
      </div>
    </motion.div>
  );
};

export default RoomCursor;