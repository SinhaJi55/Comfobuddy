import React, { useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
} from "lucide-react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

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

  const [authOpen, setAuthOpen] =
    useState(false);

  const [authMode, setAuthMode] =
    useState("login");

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  return (
    <>
      {/* NAVBAR */}
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
        className={`fixed left-0 top-0 z-50 w-full border-b border-orange-100/40 bg-white/80 backdrop-blur-xl transition-all duration-300 ${
          authOpen
            ? "blur-sm pointer-events-none"
            : ""
        }`}
      >
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
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-[#ff7a2f] text-xl font-black text-white shadow-[0_10px_25px_rgba(255,107,26,0.4)]"
              >
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
                  className="cursor-pointer font-semibold text-gray-700 hover:text-orange-500"
                >
                  {item}
                </motion.li>
              ))}
            </ul>

            {/* BUTTONS */}
            <div className="hidden items-center gap-4 md:flex">
              {/* LOGIN */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={() => {
                  setAuthMode("login");
                  setAuthOpen(true);
                }}
                className="rounded-full border border-orange-300 px-6 py-2.5 font-semibold text-orange-500"
              >
                Login
              </motion.button>

              {/* SIGNUP */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0px 0px 30px rgba(255,107,26,0.45)",
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={() => {
                  setAuthMode("signup");
                  setAuthOpen(true);
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
              className="rounded-xl bg-orange-50 p-2 text-orange-500 md:hidden"
            >
              {mobileMenu ? (
                <X size={28} />
              ) : (
                <Menu size={28} />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* AUTH MODAL */}
      <AnimatePresence>
        {authOpen && (
          <>
            {/* BACKDROP */}
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
              onClick={() =>
                setAuthOpen(false)
              }
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
              {/* CLOSE */}
              <motion.button
                whileHover={{
                  rotate: 90,
                }}
                onClick={() =>
                  setAuthOpen(false)
                }
                className="absolute right-5 top-5 rounded-full bg-orange-50 p-2 text-orange-500"
              >
                <X size={20} />
              </motion.button>

              {/* LOGO */}
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-orange-500 to-[#ff7a2f] text-3xl font-black text-white shadow-[0_12px_30px_rgba(255,107,26,0.4)]">
                C
              </div>

              {/* HEADING */}
              <div className="mt-8 text-center">
                <h1 className="text-4xl font-black text-[#1b1b1b]">
                  {authMode === "login"
                    ? "Welcome Back"
                    : "Create Account"}
                </h1>

                <p className="mt-3 text-gray-500">
                  {authMode === "login"
                    ? "Login to continue"
                    : "Join"}{" "}
                  <span className="font-semibold text-orange-500">
                    ComfoBuddy
                  </span>
                </p>
              </div>

              {/* FORM */}
              <form className="mt-10 space-y-6">
                {/* NAME */}
                {authMode === "signup" && (
                  <div className="relative">
                    <User
                      className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-500"
                      size={20}
                    />

                    <input
                      type="text"
                      placeholder="Full Name"
                      className="h-[68px] w-full rounded-2xl border border-orange-200 bg-white pl-14 pr-5 text-lg outline-none focus:border-orange-400"
                    />
                  </div>
                )}

                {/* EMAIL */}
                <div className="relative">
                  <Mail
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-500"
                    size={20}
                  />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="h-[68px] w-full rounded-2xl border border-orange-200 bg-white pl-14 pr-5 text-lg outline-none focus:border-orange-400"
                  />
                </div>

                {/* PASSWORD */}
                <div className="relative">
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
                    placeholder="Enter password"
                    className="h-[68px] w-full rounded-2xl border border-orange-200 bg-white pl-14 pr-14 text-lg outline-none focus:border-orange-400"
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
                </div>

                {/* CONFIRM PASSWORD */}
                {authMode === "signup" && (
                  <div className="relative">
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
                      className="h-[68px] w-full rounded-2xl border border-orange-200 bg-white pl-14 pr-14 text-lg outline-none focus:border-orange-400"
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
                  </div>
                )}

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
                  {authMode === "login"
                    ? "Login"
                    : "Create Account"}

                  <ArrowRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </motion.button>
              </form>

              {/* SWITCH */}
              <p className="mt-8 text-center text-gray-500">
                {authMode === "login"
                  ? "Don't have an account?"
                  : "Already have an account?"}

                <button
                  onClick={() =>
                    setAuthMode(
                      authMode === "login"
                        ? "signup"
                        : "login"
                    )
                  }
                  className="ml-2 font-semibold text-orange-500 hover:underline"
                >
                  {authMode === "login"
                    ? "Sign Up"
                    : "Login"}
                </button>
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;