
import React, { useState, useEffect } from "react";
import {
  X, ArrowRight, Mail, Lock, Eye, EyeOff,
  ShieldCheck, Home, Users, CheckCircle2, Timer
} from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

// --- HELPERS ---
const playSound = (url) => {
  const audio = new Audio(url);
  audio.volume = 0.4;
  audio.play().catch(() => {});
};

// 3D character image (swap with your own transparent PNG anytime)
const CHARACTER_IMG =
  "https://customer-assets.emergentagent.com/job_dc26f942-acd3-44ef-93bd-247ea8ff9faa/artifacts/z35cy29h_image.png";

const navItems = [
  { name: "Home", id: "hero" },
  { name: "Services", id: "searching-section" },
  { name: "About", id: "comfoworks-sections" },
  { name: "Contact", whatsapp: "https://wa.me/916202101524" },
];

const roles = [
  { title: "Owner", icon: <Home size={28} />, desc: "List & manage properties" },
  { title: "Tenant", icon: <Users size={28} />, desc: "Find verified rooms easily" },
  { title: "Buddy", icon: <ShieldCheck size={28} />, desc: "Verification partner access" },
];

const TOTAL_SECONDS = 60;

const Navbar = () => {
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [selectedRole, setSelectedRole] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [countdown, setCountdown] = useState(TOTAL_SECONDS);

  const iconControls = useAnimation();

  // Countdown
  useEffect(() => {
    let timer;
    if (authOpen && selectedRole && countdown > 0 && !isSuccess) {
      timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    }
    if (countdown === 0 && !isSuccess) {
      closeModal();
    }
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authOpen, selectedRole, countdown, isSuccess]);

  useEffect(() => {
    if (selectedRole) setCountdown(TOTAL_SECONDS);
  }, [selectedRole]);

  const handleLogoHover = () => {
    iconControls.start({
      rotate: [0, -8, 10, -5, 8, 0],
      transition: { duration: 0.5, ease: "easeInOut" },
    });
  };

  const closeModal = () => {
    setAuthOpen(false);
    setSelectedRole(null);
    setIsSuccess(false);
    setCountdown(TOTAL_SECONDS);
  };

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    playSound("https://mixkit.co");
    setIsSuccess(true);
    setTimeout(() => closeModal(), 3000);
  };

  const mm = String(Math.floor(countdown / 60)).padStart(2, "0");
  const ss = String(countdown % 60).padStart(2, "0");
  const isUrgent = countdown <= 10 && countdown > 0;
  const progress = (countdown / TOTAL_SECONDS) * 100;

  // Character animation states
  const characterAnim = isUrgent
    ? {
        y: [0, -28, 0, -22, 0],
        rotate: [0, -7, 7, -5, 0],
        scale: [1, 1.04, 1, 1.03, 1],
      }
    : {
        y: [0, -18, 0, -10, 0],
        rotate: [0, -3, 3, -2, 0],
      };

  const characterTransition = {
    duration: isUrgent ? 0.7 : 3,
    repeat: Infinity,
    ease: "easeInOut",
  };

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className={`fixed left-0 top-0 z-50 w-full border-b border-orange-100/40 bg-white/80 backdrop-blur-xl ${
          authOpen ? "pointer-events-none blur-sm" : ""
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex h-20 items-center justify-between">
            {/* LOGO */}
            <motion.div
              whileHover={{ scale: 1.04 }}
              className="flex cursor-pointer items-center gap-4"
              onHoverStart={handleLogoHover}
            >
              <div className="flex flex-col leading-none">
                <h1 className="text-3xl font-black tracking-tight text-gray-800">
                  Comfo
                  <span className="bg-gradient-to-r from-orange-500 via-orange-300 to-orange-500 bg-clip-text text-transparent">
                    Buddy
                  </span>
                </h1>
                <motion.p
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-[11px] font-bold uppercase tracking-[3px] text-orange-500/80"
                >
                  Your Rental Partner
                </motion.p>
              </div>
            </motion.div>

            {/* DESKTOP MENU */}
            <ul className="hidden items-center gap-10 md:flex">
              {navItems.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ y: -3 }}
                  className="cursor-pointer font-semibold text-gray-700 hover:text-orange-500"
                  onClick={() => {
                    if (item.whatsapp) {
                      window.open(item.whatsapp, "_blank");
                    } else {
                      document
                        .getElementById(item.id)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {item.name}
                </motion.li>
              ))}
            </ul>

            <div className="hidden items-center gap-4 md:flex">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setAuthMode("login");
                  setAuthOpen(true);
                  setSelectedRole(null);
                  playSound("https://mixkit.co");
                }}
                className="rounded-full border border-orange-300 px-6 py-2.5 font-semibold text-orange-500"
              >
                Login
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(255,107,26,0.45)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setAuthMode("signup");
                  setAuthOpen(true);
                  setSelectedRole(null);
                  playSound("https://mixkit.co");
                }}
                className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-[#ff7a2f] px-7 py-2.5 font-semibold text-white shadow-[0_12px_30px_rgba(255,107,26,0.35)]"
              >
                Get Started{" "}
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
            </div>
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
              onClick={closeModal}
              className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 60 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 60 }}
              className="fixed left-1/2 top-1/2 z-[100] w-[94%] max-w-5xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[40px] border border-orange-100 bg-white shadow-[0_40px_100px_rgba(0,0,0,0.25)]"
            >
              <div className="relative grid grid-cols-1 md:grid-cols-2">
                {/* LEFT — CHARACTER + TIMER */}
                {/* LEFT — CHARACTER ONLY + TIMER ABOVE HEAD */}
<div className="relative hidden md:flex flex-col items-center justify-end overflow-hidden bg-gradient-to-br from-orange-50 via-orange-100/60 to-orange-200/40 p-8 pb-12">
  {/* Decorative blobs (background only) */}
  <div className="pointer-events-none absolute -top-16 -left-16 h-56 w-56 rounded-full bg-orange-300/40 blur-3xl" />
  <div className="pointer-events-none absolute bottom-10 right-0 h-40 w-40 rounded-full bg-orange-400/30 blur-3xl" />

  {/* CHARACTER WRAPPER (timer follows character bounce) */}
  <motion.div
    initial={{ y: 40, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="relative z-[1] flex flex-col items-center"
  >
    {/* TIMER — sits right above the character's head */}
    {selectedRole && (
      <motion.div
        animate={characterAnim}            // bounces WITH the character
        transition={characterTransition}
        className="mb-3"
      >
        <motion.div
          animate={isUrgent ? { scale: [1, 1.08, 1] } : { scale: 1 }}
          transition={{ repeat: isUrgent ? Infinity : 0, duration: 0.7 }}
          className={`flex flex-col items-center rounded-3xl px-5 py-3 shadow-xl ${
            isUrgent
              ? "bg-red-500 text-white shadow-red-200"
              : "bg-white text-orange-600 shadow-orange-200"
          }`}
        >
          <div className="flex items-center gap-2">
            <Timer size={18} />
            <span className="text-2xl font-black tabular-nums tracking-wider">
              {mm}:{ss}
            </span>
          </div>
          <p
            className={`mt-0.5 text-[10px] font-bold uppercase tracking-[2px] ${
              isUrgent ? "text-white" : "text-orange-500"
            }`}
          >
            Fill it fast!
          </p>
          <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-black/10">
            <motion.div
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear", duration: 0.5 }}
              className={`h-full ${isUrgent ? "bg-white" : "bg-orange-500"}`}
            />
          </div>
        </motion.div>

        {/* little arrow pointing down to character's head */}
        <div
          className={`mx-auto h-3 w-3 -mt-1 rotate-45 ${
            isUrgent ? "bg-red-500" : "bg-white"
          }`}
        />
      </motion.div>
    )}

    {/* CHARACTER — transparent PNG only */}
    <motion.img
      src={CHARACTER_IMG}
      alt="Mascot"
      animate={characterAnim}
      transition={characterTransition}
      whileHover={{
        rotate: [0, -12, 12, -8, 0],
        transition: { duration: 0.6 },
      }}
      className="max-h-[420px] w-auto object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.25)]"
    />

    {/* Floor shadow */}
    <motion.div
      animate={{
        scaleX: isUrgent ? [1, 0.6, 1, 0.7, 1] : [1, 0.7, 1, 0.85, 1],
        opacity: isUrgent ? [0.4, 0.1, 0.4, 0.15, 0.4] : [0.35, 0.15, 0.35, 0.2, 0.35],
      }}
      transition={characterTransition}
      className="-mt-1 h-3 w-40 rounded-full bg-black blur-md"
    />
  </motion.div>
</div>

                {/* RIGHT — FORM */}
                <div className="relative bg-white p-8 md:p-10">
                  <button
                    onClick={closeModal}
                    className="absolute right-6 top-6 rounded-full bg-orange-50 p-2 text-orange-500 transition-transform hover:rotate-90"
                  >
                    <X size={22} />
                  </button>

                  {/* SUCCESS OVERLAY */}
                  <AnimatePresence>
                    {isSuccess && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 z-[110] flex flex-col items-center justify-center bg-white"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: [0, 1.2, 1] }}
                          transition={{ duration: 0.5 }}
                        >
                          <CheckCircle2 size={100} className="text-green-500" />
                        </motion.div>
                        <h2 className="mt-6 text-3xl font-black text-gray-800">Success!</h2>
                        <p className="text-gray-500">Welcome to the family</p>
                        {[...Array(12)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{
                              y: [0, 200],
                              x: [0, (i - 6) * 30],
                              opacity: [1, 0],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute h-3 w-3 rounded-full bg-orange-400"
                          />
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="text-center">
                    <h1 className="text-3xl md:text-4xl font-black text-[#1b1b1b]">
                      {selectedRole ? `Hello ${selectedRole}!` : "Who are you?"}
                    </h1>
                    <p className="mt-2 text-gray-400">Join the orange community</p>
                  </div>

                  {!selectedRole ? (
                    <div className="mt-8 grid grid-cols-1 gap-4">
                      {roles.map((role, index) => (
                        <motion.button
                          key={index}
                          whileHover={{ x: 10, backgroundColor: "#fff7f2" }}
                          onClick={() => {
                            setSelectedRole(role.title);
                            playSound("https://mixkit.co");
                          }}
                          className="flex items-center gap-5 rounded-[28px] border border-orange-100 p-4 transition-colors"
                        >
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-200">
                            {role.icon}
                          </div>
                          <div className="text-left">
                            <h3 className="text-lg font-black text-gray-800">{role.title}</h3>
                            <p className="text-xs text-gray-400">{role.desc}</p>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="mt-6"
                    >
                      {/* Mobile-only timer */}
                      <div className="mb-4 flex items-center justify-center gap-2 md:hidden">
                        <div
                          className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold ${
                            isUrgent ? "bg-red-500 text-white" : "bg-orange-100 text-orange-600"
                          }`}
                        >
                          <Timer size={16} />
                          {mm}:{ss} — Fill it fast!
                        </div>
                      </div>

                      <form onSubmit={handleAuthSubmit} className="space-y-4">
                        <div className="group relative">
                          <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-500 transition-transform group-focus-within:scale-110" />
                          <input
                            required
                            type="email"
                            placeholder="Email Address"
                            className="h-[64px] w-full rounded-[22px] border-2 border-orange-50 bg-orange-50/30 pl-14 text-base outline-none transition-all focus:border-orange-500 focus:bg-white"
                          />
                        </div>
                        <div className="group relative">
                          <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-500 transition-transform group-focus-within:scale-110" />
                          <input
                            required
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="h-[64px] w-full rounded-[22px] border-2 border-orange-50 bg-orange-50/30 pl-14 pr-14 text-base outline-none transition-all focus:border-orange-500 focus:bg-white"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-300 hover:text-orange-500"
                          >
                            {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                          </button>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.02, boxShadow: "0px 20px 40px rgba(255,107,26,0.3)" }}
                          whileTap={{ scale: 0.98 }}
                          className="h-[64px] w-full rounded-[22px] bg-orange-500 text-lg font-black text-white shadow-xl shadow-orange-100 transition-all"
                        >
                          {authMode === "login" ? "Sign In" : "Sign Up"}
                        </motion.button>
                      </form>

                      <div className="mt-5 flex items-center gap-4">
                        <div className="h-[1px] flex-1 bg-gray-100" />
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-300">OR</span>
                        <div className="h-[1px] flex-1 bg-gray-100" />
                      </div>

                      <button className="mt-5 flex h-[60px] w-full items-center justify-center gap-3 rounded-[22px] border-2 border-gray-100 font-bold text-gray-600 transition-colors hover:bg-gray-50">
                        <FcGoogle size={24} /> Google
                      </button>

                      <button
                        onClick={() => setSelectedRole(null)}
                        className="mt-6 w-full text-sm font-bold text-orange-500/60 transition-colors hover:text-orange-500"
                      >
                        ← Back to Role Selection
                      </button>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;