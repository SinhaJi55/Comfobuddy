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
import { motion, AnimatePresence, useAnimation } from "framer-motion";

const navItems = ["Home", "Properties", "Services", "About", "Contact"];

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const iconControls = useAnimation();

  const handleLogoHover = () => {
    iconControls.start({
      rotate: [0, -8, 10, -5, 8, 0],
      transition: { duration: 0.5, ease: "easeInOut" },
    });
  };

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className={`fixed left-0 top-0 z-50 w-full border-b border-orange-100/40 bg-white/80 backdrop-blur-xl transition-all duration-300 ${
          authOpen ? "blur-sm pointer-events-none" : ""
        }`}
      >
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex h-20 items-center justify-between">

            {/* ── LOGO ── */}
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex cursor-pointer items-center gap-4"
              onHoverStart={handleLogoHover}
            >
              {/* Icon shell */}
              <div className="relative">
                {/* Pulse ring 1 */}
                <motion.div
                  className="absolute rounded-[20px] border-2 border-orange-400/40"
                  style={{ inset: "-6px" }}
                  animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Pulse ring 2 */}
                <motion.div
                  className="absolute rounded-[26px] border border-orange-400/20"
                  style={{ inset: "-13px" }}
                  animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0, 0.4] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                />
                {/* Orbit dot */}
                <motion.div
                  className="absolute rounded-full pointer-events-none"
                  style={{ inset: "-14px" }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-2 h-2 rounded-full bg-orange-400 absolute top-0 left-1/2 -translate-x-1/2 shadow-[0_0_6px_2px_rgba(255,150,50,0.7)]" />
                </motion.div>

                {/* Float + icon */}
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <motion.div
                    animate={iconControls}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 20px 48px rgba(255,107,26,0.6)",
                    }}
                    className="relative flex h-12 w-12 items-center justify-center rounded-[18px] bg-gradient-to-br from-orange-500 to-[#ff7a2f] text-xl font-black text-white shadow-[0_12px_32px_rgba(255,107,26,0.45)] overflow-hidden"
                  >
                    {/* Glass sheen */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/25 to-transparent pointer-events-none" />
                    {/* Shimmer sweep */}
                    <motion.div
                      className="absolute top-0 h-full w-[60%] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"
                      animate={{ left: ["-100%", "160%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    />
                    <span className="relative z-10">C</span>
                  </motion.div>
                </motion.div>
              </div>

              {/* Text + tagline */}
              <div className="flex flex-col gap-0.5">
                <h1 className="text-3xl font-black leading-none tracking-tight text-gray-800">
                  Comfo
                  <motion.span
                    className="bg-gradient-to-r from-orange-500 via-orange-300 to-orange-500 bg-clip-text text-transparent"
                    style={{ backgroundSize: "200% auto" }}
                    animate={{ backgroundPosition: ["200% center", "-200% center"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    Buddy
                  </motion.span>
                </h1>
                <motion.p
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="text-[10px] font-extrabold uppercase tracking-[2.5px] text-orange-400/80"
                >
                  Your comfort companion
                </motion.p>
              </div>
            </motion.div>
            {/* ── END LOGO ── */}

            {/* DESKTOP MENU */}
            <ul className="hidden items-center gap-10 md:flex">
              {navItems.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ y: -3 }}
                  className="cursor-pointer font-semibold text-gray-700 hover:text-orange-500"
                >
                  {item}
                </motion.li>
              ))}
            </ul>

            {/* BUTTONS */}
            <div className="hidden items-center gap-4 md:flex">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => { setAuthMode("login"); setAuthOpen(true); }}
                className="rounded-full border border-orange-300 px-6 py-2.5 font-semibold text-orange-500"
              >
                Login
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(255,107,26,0.45)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => { setAuthMode("signup"); setAuthOpen(true); }}
                className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-[#ff7a2f] px-7 py-2.5 font-semibold text-white shadow-[0_12px_30px_rgba(255,107,26,0.35)]"
              >
                Get Started
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
            </div>

            {/* MOBILE BUTTON */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenu(!mobileMenu)}
              className="rounded-xl bg-orange-50 p-2 text-orange-500 md:hidden"
            >
              {mobileMenu ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* AUTH MODAL */}
      <AnimatePresence>
        {authOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setAuthOpen(false)}
              className="fixed inset-0 z-[90] bg-black/30 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 60 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 60 }}
              transition={{ type: "spring", stiffness: 140 }}
              className="fixed left-1/2 top-1/2 z-[100] w-[92%] max-w-md -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[36px] border border-orange-100 bg-white/90 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.15)] backdrop-blur-xl"
            >
              <motion.button
                whileHover={{ rotate: 90 }}
                onClick={() => setAuthOpen(false)}
                className="absolute right-5 top-5 rounded-full bg-orange-50 p-2 text-orange-500"
              >
                <X size={20} />
              </motion.button>

              {/* Modal logo icon */}
              <div className="relative mx-auto w-fit">
                <motion.div
                  className="absolute rounded-[28px] border-2 border-orange-400/35"
                  style={{ inset: "-6px" }}
                  animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute rounded-full pointer-events-none"
                  style={{ inset: "-14px" }}
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-orange-400 absolute top-0 left-1/2 -translate-x-1/2 shadow-[0_0_8px_2px_rgba(255,150,50,0.7)]" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-orange-500 to-[#ff7a2f] text-3xl font-black text-white shadow-[0_12px_30px_rgba(255,107,26,0.4)] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/25 to-transparent pointer-events-none" />
                  <motion.div
                    className="absolute top-0 h-full w-[60%] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"
                    animate={{ left: ["-100%", "160%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                  <span className="relative z-10">C</span>
                </motion.div>
              </div>

              <div className="mt-8 text-center">
                <h1 className="text-4xl font-black text-[#1b1b1b]">
                  {authMode === "login" ? "Welcome Back" : "Create Account"}
                </h1>
                <p className="mt-3 text-gray-500">
                  {authMode === "login" ? "Login to continue" : "Join"}{" "}
                  <span className="font-semibold text-orange-500">ComfoBuddy</span>
                </p>
              </div>

              <form className="mt-10 space-y-6">
                {authMode === "signup" && (
                  <div className="relative">
                    <User className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-500" size={20} />
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="h-[68px] w-full rounded-2xl border border-orange-200 bg-white pl-14 pr-5 text-lg outline-none focus:border-orange-400"
                    />
                  </div>
                )}

                <div className="relative">
                  <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-500" size={20} />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="h-[68px] w-full rounded-2xl border border-orange-200 bg-white pl-14 pr-5 text-lg outline-none focus:border-orange-400"
                  />
                </div>

                <div className="relative">
                  <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-500" size={20} />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    className="h-[68px] w-full rounded-2xl border border-orange-200 bg-white pl-14 pr-14 text-lg outline-none focus:border-orange-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-500"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>

                {authMode === "signup" && (
                  <div className="relative">
                    <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-500" size={20} />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm password"
                      className="h-[68px] w-full rounded-2xl border border-orange-200 bg-white pl-14 pr-14 text-lg outline-none focus:border-orange-400"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-500"
                    >
                      {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                )}

                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: "0px 0px 35px rgba(255,107,26,0.45)" }}
                  whileTap={{ scale: 0.96 }}
                  className="group flex h-[68px] w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-orange-500 to-[#ff7a2f] text-lg font-bold text-white shadow-[0_12px_30px_rgba(255,107,26,0.35)]"
                >
                  {authMode === "login" ? "Login" : "Create Account"}
                  <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
              </form>

              <p className="mt-8 text-center text-gray-500">
                {authMode === "login" ? "Don't have an account?" : "Already have an account?"}
                <button
                  onClick={() => setAuthMode(authMode === "login" ? "signup" : "login")}
                  className="ml-2 font-semibold text-orange-500 hover:underline"
                >
                  {authMode === "login" ? "Sign Up" : "Login"}
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