import React, { useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
  Home,
  Users,
} from "lucide-react";

import { FcGoogle } from "react-icons/fc";

import {
  motion,
  AnimatePresence,
  useAnimation,
} from "framer-motion";

const navItems = [
  "Home",
  "Services",
  "About",
  "Contact",
];

const roles = [
  {
    title: "Owner",
    icon: <Home size={28} />,
    desc: "List & manage properties",
  },
  {
    title: "Tenant",
    icon: <Users size={28} />,
    desc: "Find verified rooms easily",
  },
  {
    title: "Buddy",
    icon: <ShieldCheck size={28} />,
    desc: "Verification partner access",
  },
];

const Navbar = () => {
  const [mobileMenu, setMobileMenu] =
    useState(false);

  const [authOpen, setAuthOpen] =
    useState(false);

  const [authMode, setAuthMode] =
    useState("login");

  const [selectedRole, setSelectedRole] =
    useState(null);

  const [showPassword, setShowPassword] =
    useState(false);

  const iconControls = useAnimation();

  const handleLogoHover = () => {
    iconControls.start({
      rotate: [0, -8, 10, -5, 8, 0],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    });
  };

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
        className={`fixed left-0 top-0 z-50 w-full border-b border-orange-100/40 bg-white/80 backdrop-blur-xl ${
          authOpen
            ? "pointer-events-none blur-sm"
            : ""
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex h-20 items-center justify-between">
            {/* LOGO */}
            <motion.div
              whileHover={{
                scale: 1.04,
              }}
              className="flex cursor-pointer items-center gap-4"
              onHoverStart={handleLogoHover}
            >
              <div className="flex flex-col leading-none">
                <h1 className="text-3xl font-black tracking-tight text-gray-800">
                  Comfort
                  <span className="bg-gradient-to-r from-orange-500 via-orange-300 to-orange-500 bg-clip-text text-transparent">
                   Buddy
                  </span>
                </h1>

                <motion.p
                  initial={{
                    opacity: 0,
                    y: 4,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.6,
                  }}
                  className="text-[11px] font-bold uppercase tracking-[3px] text-orange-500/80"
                >
                  Your Rental Partner
                </motion.p>
              </div>
            </motion.div>

            {/* DESKTOP MENU */}
            <ul className="hidden items-center gap-10 md:flex">
              {navItems.map(
                (item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{
                      y: -3,
                    }}
                    className="cursor-pointer font-semibold text-gray-700 hover:text-orange-500"
                  >
                    {item}
                  </motion.li>
                )
              )}
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
                  setSelectedRole(null);
                }}
                className="rounded-full border border-orange-300 px-6 py-2.5 font-semibold text-orange-500"
              >
                Login
              </motion.button>

              {/* GET STARTED */}
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
                  setSelectedRole(null);
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

            {/* MOBILE */}
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
            {/* OVERLAY */}
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
              className="fixed left-1/2 top-1/2 z-[100] w-[92%] max-w-md -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[36px] border border-orange-100 bg-white/95 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.15)] backdrop-blur-xl"
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

              {/* TITLE */}
              <div className="mt-5 text-center">
                <h1 className="text-4xl font-black text-[#1b1b1b]">
                  {selectedRole
                    ? `Welcome ${selectedRole}`
                    : "Choose Role"}
                </h1>

                <p className="mt-3 text-gray-500">
                  Continue with{" "}
                  <span className="font-semibold text-orange-500">
                    ComfortBuddy
                  </span>
                </p>
              </div>

              {/* ROLE SELECTION */}
              {!selectedRole && (
                <div className="mt-10 space-y-4">
                  {roles.map(
                    (role, index) => (
                      <motion.button
                        key={index}
                        whileHover={{
                          scale: 1.03,
                          y: -2,
                        }}
                        whileTap={{
                          scale: 0.97,
                        }}
                        onClick={() =>
                          setSelectedRole(
                            role.title
                          )
                        }
                        className="flex w-full items-center gap-5 rounded-3xl border border-orange-100 bg-gradient-to-r from-white to-orange-50 p-5 shadow-sm"
                      >
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-500">
                          {role.icon}
                        </div>

                        <div className="text-left">
                          <h3 className="text-xl font-bold text-[#1b1b1b]">
                            {role.title}
                          </h3>

                          <p className="text-sm text-gray-500">
                            {role.desc}
                          </p>
                        </div>
                      </motion.button>
                    )
                  )}
                </div>
              )}

              {/* LOGIN FORM */}
              {selectedRole && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="mt-8"
                >
                  {/* GOOGLE BUTTON */}
                  <motion.button
                    whileHover={{
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="flex h-[68px] w-full items-center justify-center gap-3 rounded-2xl border border-orange-200 bg-white font-semibold text-gray-700 shadow-sm"
                  >
                    <FcGoogle size={26} />

                    Continue with Google
                  </motion.button>

                  {/* DIVIDER */}
                  <div className="my-6 flex items-center gap-3">
                    <div className="h-[1px] flex-1 bg-orange-100" />

                    <span className="text-sm text-gray-400">
                      OR
                    </span>

                    <div className="h-[1px] flex-1 bg-orange-100" />
                  </div>

                  {/* FORM */}
                  <form className="space-y-5">
                    {/* EMAIL */}
                    <div className="relative">
                      <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-500" />

                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="h-[68px] w-full rounded-2xl border border-orange-200 bg-white pl-14 text-lg outline-none"
                      />
                    </div>

                    {/* PASSWORD */}
                    <div className="relative">
                      <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-500" />

                      <input
                        type={
                          showPassword
                            ? "text"
                            : "password"
                        }
                        placeholder="Enter password"
                        className="h-[68px] w-full rounded-2xl border border-orange-200 bg-white pl-14 pr-14 text-lg outline-none"
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowPassword(
                            !showPassword
                          )
                        }
                        className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400"
                      >
                        {showPassword ? (
                          <EyeOff />
                        ) : (
                          <Eye />
                        )}
                      </button>
                    </div>

                    {/* SUBMIT */}
                    <motion.button
                      whileHover={{
                        scale: 1.03,
                        boxShadow:
                          "0px 0px 35px rgba(255,107,26,0.45)",
                      }}
                      whileTap={{
                        scale: 0.96,
                      }}
                      className="h-[68px] w-full rounded-2xl bg-gradient-to-r from-orange-500 to-[#ff7a2f] font-bold text-white"
                    >
                      {authMode ===
                      "login"
                        ? `Login as ${selectedRole}`
                        : `Create ${selectedRole} Account`}
                    </motion.button>
                  </form>

                  {/* BACK */}
                  <button
                    onClick={() =>
                      setSelectedRole(null)
                    }
                    className="mt-5 w-full text-sm font-semibold text-orange-500"
                  >
                    ← Change Role
                  </button>
                </motion.div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;