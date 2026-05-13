import React, { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  ArrowRight,
  X,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

const Signup = ({ open, setOpen }) => {
  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* BACKGROUND BLUR */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[90] bg-black/30 backdrop-blur-md"
          />

          {/* MODAL */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
              y: 60,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              y: 60,
            }}
            transition={{
              type: "spring",
              stiffness: 140,
            }}
            className="fixed left-1/2 top-1/2 z-[100] w-[92%] max-w-md -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[36px] border border-orange-100 bg-white/90 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.15)] backdrop-blur-xl"
          >
            {/* CLOSE BUTTON */}
            <motion.button
              whileHover={{
                rotate: 90,
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.9,
              }}
              onClick={() => setOpen(false)}
              className="absolute right-5 top-5 rounded-full bg-orange-50 p-2 text-orange-500"
            >
              <X size={20} />
            </motion.button>

            {/* GLOW */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.15, 0.3, 0.15],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="absolute -top-20 -right-20 h-52 w-52 rounded-full bg-orange-300 blur-[120px]"
            />

            {/* LOGO */}
            <motion.div
              whileHover={{
                rotate: 8,
                scale: 1.05,
              }}
              className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-orange-500 to-[#ff7a2f] text-3xl font-black text-white shadow-[0_12px_30px_rgba(255,107,26,0.4)]"
            >
              C
            </motion.div>

            {/* HEADING */}
            <div className="mt-8 text-center">
              <h1 className="text-4xl font-black text-[#1b1b1b]">
                Create Account
              </h1>

              <p className="mt-3 text-gray-500">
                Join{" "}
                <span className="font-semibold text-orange-500">
                  ComfoBuddy
                </span>
              </p>
            </div>

            {/* FORM */}
            <form className="mt-10 space-y-6">
              {/* NAME */}
              <motion.div
                whileHover={{
                  y: -3,
                }}
                className="relative"
              >
                <User
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-500"
                  size={20}
                />

                <input
                  type="text"
                  placeholder="Full Name"
                  className="h-[68px] w-full rounded-2xl border border-orange-200 bg-white pl-14 pr-5 text-lg outline-none transition-all duration-300 focus:border-orange-400"
                />
              </motion.div>

              {/* EMAIL */}
              <motion.div
                whileHover={{
                  y: -3,
                }}
                className="relative"
              >
                <Mail
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-500"
                  size={20}
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-[68px] w-full rounded-2xl border border-orange-200 bg-white pl-14 pr-5 text-lg outline-none transition-all duration-300 focus:border-orange-400"
                />
              </motion.div>

              {/* PASSWORD */}
              <motion.div
                whileHover={{
                  y: -3,
                }}
                className="relative"
              >
                <Lock
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-500"
                  size={20}
                />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Create password"
                  className="h-[68px] w-full rounded-2xl border border-orange-200 bg-white pl-14 pr-14 text-lg outline-none transition-all duration-300 focus:border-orange-400"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-500"
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </motion.div>

              {/* CONFIRM PASSWORD */}
              <motion.div
                whileHover={{
                  y: -3,
                }}
                className="relative"
              >
                <Lock
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-500"
                  size={20}
                />

                <input
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Confirm password"
                  className="h-[68px] w-full rounded-2xl border border-orange-200 bg-white pl-14 pr-14 text-lg outline-none transition-all duration-300 focus:border-orange-400"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-500"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </motion.div>

              {/* BUTTON */}
              <motion.button
                whileHover={{
                  scale: 1.03,
                  boxShadow:
                    "0px 0px 35px rgba(255,107,26,0.45)",
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="group flex h-[68px] w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-orange-500 to-[#ff7a2f] text-lg font-bold text-white shadow-[0_12px_30px_rgba(255,107,26,0.35)]"
              >
                Create Account

                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.button>
            </form>

            {/* LOGIN LINK */}
            <p className="mt-8 text-center text-gray-500">
              Already have an account?

              <button className="ml-2 font-semibold text-orange-500 hover:underline">
                Login
              </button>
            </p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Signup;