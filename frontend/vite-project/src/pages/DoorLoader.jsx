import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DoorLoader = () => {
  const [hideLoader, setHideLoader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHideLoader(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!hideLoader && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 1,
            },
          }}
          className="fixed inset-0 z-[999999] flex items-center justify-center overflow-hidden bg-[#fff7f2]"
        >
          {/* Huge Background Glow */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="absolute h-[700px] w-[700px] rounded-full bg-orange-300 blur-[180px]"
          />

          {/* Center Content */}
          <div className="relative flex flex-col items-center">
            {/* Knock Knock */}
            <motion.h1
              animate={{
                opacity: [0.5, 1, 0.5],
                y: [0, -8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.3,
              }}
              className="mb-10 text-center text-5xl font-black tracking-[10px] text-orange-500 md:text-7xl"
            >
              KNOCK • KNOCK
            </motion.h1>

            {/* BIG DOOR */}
            <div className="relative perspective-[3000px]">
              {/* Door Frame */}
              <div className="relative h-[75vh] w-[340px] overflow-hidden rounded-[40px] border-[14px] border-orange-200 bg-gradient-to-b from-[#ffd9c2] to-[#ffb07c] p-3 shadow-[0_40px_120px_rgba(255,115,0,0.35)] md:w-[500px]">
                {/* Light Inside */}
                <motion.div
                  animate={{
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.5,
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-orange-100 to-white"
                />

                {/* Main Door */}
                <motion.div
                  initial={{
                    rotateY: 0,
                  }}
                  animate={{
                    rotateY: -115,
                  }}
                  transition={{
                    delay: 1.5,
                    duration: 1.6,
                    ease: "easeInOut",
                  }}
                  style={{
                    transformOrigin: "left center",
                  }}
                  className="absolute inset-0 rounded-[28px] border border-orange-400 bg-gradient-to-br from-orange-500 via-[#ff8b3d] to-[#ff6b1a] shadow-[0_35px_100px_rgba(255,115,0,0.45)]"
                >
                  {/* Door Design */}
                  <div className="grid h-full grid-cols-2 gap-5 p-6">
                    <div className="rounded-[28px] border border-orange-300 bg-orange-400/20 backdrop-blur-sm" />
                    <div className="rounded-[28px] border border-orange-300 bg-orange-400/20 backdrop-blur-sm" />
                    <div className="rounded-[28px] border border-orange-300 bg-orange-400/20 backdrop-blur-sm" />
                    <div className="rounded-[28px] border border-orange-300 bg-orange-400/20 backdrop-blur-sm" />
                  </div>

                  {/* Door Handle */}
                  <motion.div
                    animate={{
                      x: [0, 5, 0, 5, 0],
                    }}
                    transition={{
                      duration: 1,
                      delay: 0.4,
                    }}
                    className="absolute right-8 top-1/2 h-7 w-7 -translate-y-1/2 rounded-full bg-yellow-200 shadow-[0_0_30px_rgba(255,255,180,1)]"
                  />
                </motion.div>
              </div>
            </div>

            {/* Bottom Text */}
            <motion.p
              animate={{
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.8,
              }}
              className="mt-12 text-center text-lg font-semibold tracking-[5px] text-orange-400 md:text-2xl"
            >
              OPENING YOUR DREAM ROOM EXPERIENCE...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


export default DoorLoader;