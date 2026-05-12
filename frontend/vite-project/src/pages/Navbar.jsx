import React, { useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  "Home",
  "Properties",
  "Services",
  "About",
  "Contact",
];

const Navbar = () => {
  const [mobileMenu, setMobileMenu] =
    useState(false);

  return (
    <motion.nav
      initial={{
        y: -80,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.7,
      }}
      className="fixed left-0 top-0 z-50 w-full border-b border-orange-100/40 bg-white/80 backdrop-blur-xl"
    >
      {/* Top Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [-100, 100, -100],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
          }}
          className="absolute top-0 h-24 w-64 rounded-full bg-orange-300 blur-[100px]"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          {/* LOGO */}
          <motion.div
            whileHover={{
              scale: 1.03,
            }}
            className="flex cursor-pointer items-center gap-3"
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
              {/* Animated Shine */}
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

          {/* DESKTOP MENU */}
          <ul className="hidden items-center gap-10 md:flex">
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{
                  y: -3,
                }}
                className="group relative cursor-pointer font-semibold text-gray-700 transition-all duration-300 hover:text-orange-500"
              >
                {item}

                {/* Animated Underline */}
                <motion.span
                  initial={{
                    width: 0,
                  }}
                  whileHover={{
                    width: "100%",
                  }}
                  className="absolute -bottom-2 left-0 h-[3px] rounded-full bg-gradient-to-r from-orange-500 to-[#ff934d]"
                />
              </motion.li>
            ))}
          </ul>

          {/* BUTTONS */}
          <div className="hidden items-center gap-4 md:flex">
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "#fff7f2",
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="rounded-full border border-orange-300 px-6 py-2.5 font-semibold text-orange-500 transition-all duration-300"
            >
              Login
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0px 0px 30px rgba(255,107,26,0.45)",
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-[#ff7a2f] px-7 py-2.5 font-semibold text-white shadow-[0_12px_30px_rgba(255,107,26,0.35)]"
            >
              Get Started

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.button>
          </div>

          {/* MOBILE BUTTON */}
          <motion.button
            whileTap={{
              scale: 0.9,
            }}
            onClick={() =>
              setMobileMenu(!mobileMenu)
            }
            className="relative z-50 rounded-xl bg-orange-50 p-2 text-orange-500 md:hidden"
          >
            {mobileMenu ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </motion.button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.3,
            }}
            className="absolute left-0 top-full w-full border-b border-orange-100 bg-white/95 px-6 py-8 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item, index) => (
                <motion.button
                  key={index}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    x: 8,
                  }}
                  className="flex items-center justify-between border-b border-gray-100 pb-3 text-left text-lg font-semibold text-gray-700 hover:text-orange-500"
                >
                  {item}

                  <ArrowRight size={18} />
                </motion.button>
              ))}

              {/* Mobile Buttons */}
              <div className="mt-4 flex flex-col gap-4">
                <motion.button
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="rounded-2xl border border-orange-300 py-3 font-semibold text-orange-500"
                >
                  Login
                </motion.button>

                <motion.button
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="rounded-2xl bg-gradient-to-r from-orange-500 to-[#ff7a2f] py-3 font-semibold text-white shadow-[0_10px_25px_rgba(255,107,26,0.35)]"
                >
                  Get Started
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;