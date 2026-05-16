import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Mail, Lock, Eye, EyeOff, ShieldCheck, Home, Users, CheckCircle2, Timer } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

// --- HELPERS ---
const playSound = (url) => {
  const audio = new Audio(url);
  audio.volume = 0.4;
  audio.play().catch(() => {}); // Catch block prevents errors if browser blocks autoplay
};

const navItems = [
  { name: "Home", id: "hero" },
  { name: "Services", id: "searching-section" },
  { name: "About", id: "comfoworks-sections" },
  {
    name: "Contact",
  
    whatsapp: "https://wa.me/916202101524", 
  },
];
const roles = [
  { title: "Owner", icon: <Home size={28} />, desc: "List & manage properties" },
  { title: "Tenant", icon: <Users size={28} />, desc: "Find verified rooms easily" },
  { title: "Buddy", icon: <ShieldCheck size={28} />, desc: "Verification partner access" },
];

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [selectedRole, setSelectedRole] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [countdown, setCountdown] = useState(5);

  const iconControls = useAnimation();
  

  // Handle Countdown Logic
  useEffect(() => {
    let timer;
    if (selectedRole && countdown > 0 && !isSuccess) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [selectedRole, countdown, isSuccess]);

  const handleLogoHover = () => {
    iconControls.start({
      rotate: [0, -8, 10, -5, 8, 0],
      transition: { duration: 0.5, ease: "easeInOut" },
    });
  };

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    playSound("https://mixkit.co"); // Success chime
    setIsSuccess(true);
    setTimeout(() => {
      setAuthOpen(false);
      setIsSuccess(false);
      setSelectedRole(null);
      setCountdown(5);
    }, 3000);
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
            <motion.div whileHover={{ scale: 1.04 }} className="flex cursor-pointer items-center gap-4" onHoverStart={handleLogoHover}>
              <div className="flex flex-col leading-none">
                <h1 className="text-3xl font-black tracking-tight text-gray-800">
                  Comfo<span className="bg-gradient-to-r from-orange-500 via-orange-300 to-orange-500 bg-clip-text text-transparent">Buddy</span>
                </h1>
                <motion.p initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="text-[11px] font-bold uppercase tracking-[3px] text-orange-500/80">
                  Your Rental Partner
                </motion.p>
              </div>
            </motion.div>

            {/* DESKTOP MENU */}
           <ul className="hidden items-center gap-10 md:flex">
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
          document.getElementById(item.id)?.scrollIntoView({
            behavior: "smooth",
          });
        }
      }}
    >
      {item.name}
    </motion.li>
  ))}
</ul>
</ul>

            <div className="hidden items-center gap-4 md:flex">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => { setAuthMode("login"); setAuthOpen(true); setSelectedRole(null); playSound("https://mixkit.co"); }}
                className="rounded-full border border-orange-300 px-6 py-2.5 font-semibold text-orange-500"
              >
                Login
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(255,107,26,0.45)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => { setAuthMode("signup"); setAuthOpen(true); setSelectedRole(null); playSound("https://mixkit.co"); }}
                className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-[#ff7a2f] px-7 py-2.5 font-semibold text-white shadow-[0_12px_30px_rgba(255,107,26,0.35)]"
              >
                Get Started <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* AUTH MODAL */}
      <AnimatePresence>
        {authOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setAuthOpen(false)} className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-md" />

            {/* CHARACTERS FOR DESKTOP (BHEEM & FRIENDS) */}
            {selectedRole && !isSuccess && (
              <div className="fixed inset-0 z-[95] pointer-events-none hidden lg:block">
                {/* Bheem with Countdown */}
                <motion.div initial={{ x: -200, opacity: 0 }} animate={{ x: 100, opacity: 1 }} className="absolute bottom-10 left-0">
                  <div className="relative">
                    <motion.div animate={{ rotate: [2, -2, 2] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute -top-32 left-10 bg-white border-4 border-orange-500 p-4 rounded-2xl shadow-xl text-center w-40">
                       <Timer className="mx-auto text-orange-500 mb-1" />
                       <p className="text-xs font-black text-gray-400">HURRY!</p>
                       <p className="text-3xl font-black text-orange-600">{countdown}s</p>
                    </motion.div>
                    <div className="h-80 w-64 bg-orange-200 rounded-3xl flex items-center justify-center font-black text-orange-800">BHEEM PNG</div>
                  </div>
                </motion.div>

                {/* Raju & Chutki Jumping */}
                <div className="absolute right-20 bottom-10 space-y-10">
                   {["Raju", "Chutki"].map((name, i) => (
                     <motion.div key={name} animate={{ y: [0, -40, 0] }} transition={{ repeat: Infinity, duration: 1.5 + i, ease: "easeInOut" }} className="flex flex-col items-center">
                        <div className="bg-orange-500 text-white px-4 py-1 rounded-full font-black text-xs mb-2">FILL IT FAST!</div>
                        <div className="h-40 w-32 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-400 font-bold">{name} PNG</div>
                     </motion.div>
                   ))}
                </div>
              </div>
            )}

            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 60 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 60 }}
              className="fixed left-1/2 top-1/2 z-[100] w-[92%] max-w-lg -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[48px] border border-orange-100 bg-white p-1 shadow-[0_40px_100px_rgba(0,0,0,0.2)]"
            >
              <div className="relative bg-white p-8 md:p-12">
                <button onClick={() => setAuthOpen(false)} className="absolute right-8 top-8 rounded-full bg-orange-50 p-2 text-orange-500 hover:rotate-90 transition-transform">
                  <X size={24} />
                </button>

                {/* SUCCESS ANIMATION OVERLAY */}
                <AnimatePresence>
                  {isSuccess && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 z-[110] flex flex-col items-center justify-center bg-white">
                      <motion.div initial={{ scale: 0 }} animate={{ scale: [0, 1.2, 1] }} transition={{ duration: 0.5 }}>
                        <CheckCircle2 size={100} className="text-green-500" />
                      </motion.div>
                      <h2 className="mt-6 text-3xl font-black text-gray-800">Success!</h2>
                      <p className="text-gray-500">Welcome to the family</p>
                      {/* Confetti Mockup */}
                      {[...Array(12)].map((_, i) => (
                        <motion.div key={i} animate={{ y: [0, 200], x: [0, (i - 6) * 30], opacity: [1, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute h-3 w-3 bg-orange-400 rounded-full" />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="text-center">
                  <h1 className="text-4xl font-black text-[#1b1b1b]">
                    {selectedRole ? `Hello ${selectedRole}!` : "Who are you?"}
                  </h1>
                  <p className="mt-2 text-gray-400">Join the orange community</p>
                </div>

                {!selectedRole ? (
                  <div className="mt-10 grid grid-cols-1 gap-4">
                    {roles.map((role, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ x: 10, backgroundColor: "#fff7f2" }}
                        onClick={() => { setSelectedRole(role.title); playSound("https://mixkit.co"); }}
                        className="flex items-center gap-5 rounded-[30px] border border-orange-100 p-5 transition-colors"
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
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="mt-8">
                    <form onSubmit={handleAuthSubmit} className="space-y-4">
                      <div className="relative group">
                        <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-500 transition-transform group-focus-within:scale-110" />
                        <input required type="email" placeholder="Email Address" className="h-[72px] w-full rounded-[24px] border-2 border-orange-50 bg-orange-50/30 pl-14 text-lg outline-none focus:border-orange-500 focus:bg-white transition-all" />
                      </div>
                      <div className="relative group">
                        <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-500 transition-transform group-focus-within:scale-110" />
                        <input required type={showPassword ? "text" : "password"} placeholder="Password" className="h-[72px] w-full rounded-[24px] border-2 border-orange-50 bg-orange-50/30 pl-14 pr-14 text-lg outline-none focus:border-orange-500 focus:bg-white transition-all" />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-300 hover:text-orange-500">
                          {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                        </button>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.02, boxShadow: "0px 20px 40px rgba(255,107,26,0.3)" }}
                        whileTap={{ scale: 0.98 }}
                        className="h-[72px] w-full rounded-[24px] bg-orange-500 font-black text-xl text-white shadow-xl shadow-orange-100 transition-all"
                      >
                        {authMode === "login" ? "Sign In" : "Sign Up"}
                      </motion.button>
                    </form>

                    <div className="mt-6 flex items-center gap-4">
                      <div className="h-[1px] flex-1 bg-gray-100" />
                      <span className="text-xs font-bold text-gray-300 uppercase tracking-widest">OR</span>
                      <div className="h-[1px] flex-1 bg-gray-100" />
                    </div>

                    <button className="mt-6 flex h-[68px] w-full items-center justify-center gap-3 rounded-[24px] border-2 border-gray-100 font-bold text-gray-600 hover:bg-gray-50 transition-colors">
                      <FcGoogle size={24} /> Google
                    </button>

                    <button onClick={() => setSelectedRole(null)} className="mt-8 w-full text-sm font-bold text-orange-500/60 hover:text-orange-500 transition-colors">
                      ← Back to Role Selection
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
