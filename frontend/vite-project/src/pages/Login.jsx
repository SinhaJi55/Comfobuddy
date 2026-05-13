import React, { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";

const Login = () => {
  const [showPassword, setShowPassword] =
    useState(false);

  return (
    <section className="relative min-h-screen overflow-hidden bg-white flex items-center justify-center px-6 py-20">
      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
        className="absolute -left-20 top-10 h-96 w-96 rounded-full bg-orange-300 blur-[140px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
        }}
        className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-300 blur-[140px]"
      />

      {/* Login Card */}
      <motion.div
        initial={{
          opacity: 0,
          y: 80,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className="relative w-full max-w-md overflow-hidden rounded-[36px] border border-orange-100 bg-white/90 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.08)] backdrop-blur-xl"
      >
        {/* Animated Border */}
        <motion.div
          animate={{
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
          className="pointer-events-none absolute inset-0 rounded-[36px] border border-orange-300/40"
        />

        {/* Shine Effect */}
        <motion.div
          animate={{
            x: ["-100%", "250%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "linear",
          }}
          className="absolute top-0 h-full w-24 bg-white/20 blur-2xl"
        />

        {/* Logo */}
        <motion.div
          whileHover={{
            rotate: 8,
            scale: 1.05,
          }}
          className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-orange-500 to-[#ff7a2f] text-3xl font-black text-white shadow-[0_12px_30px_rgba(255,107,26,0.4)]"
        >
          C
        </motion.div>

        {/* Heading */}
        <div className="mt-8 text-center">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            className="text-4xl font-black text-[#1b1b1b]"
          >
            Welcome Back
          </motion.h1>

          <p className="mt-3 text-gray-500 leading-7">
            Login to continue your journey with
            <span className="font-semibold text-orange-500">
              {" "}
              ComfoBuddy
            </span>
          </p>
        </div>

        {/* Form */}
        <form className="mt-10 space-y-6">
          {/* Email */}
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
              className="h-[68px] w-full rounded-2xl border border-orange-200 bg-white pl-14 pr-5 text-lg text-black shadow-sm outline-none transition-all duration-300 focus:border-orange-400 focus:shadow-lg"
            />
          </motion.div>

          {/* Password */}
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
              placeholder="Enter your password"
              className="h-[68px] w-full rounded-2xl border border-orange-200 bg-white pl-14 pr-14 text-lg text-black shadow-sm outline-none transition-all duration-300 focus:border-orange-400 focus:shadow-lg"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-500 transition"
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          </motion.div>

          {/* Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-500">
              <input type="checkbox" />
              Remember me
            </label>

            <button
              type="button"
              className="font-medium text-orange-500 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <motion.button
            whileHover={{
              scale: 1.03,
              boxShadow:
                "0px 0px 35px rgba(255,107,26,0.45)",
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="group relative flex h-[68px] w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-orange-500 to-[#ff7a2f] text-lg font-bold text-white shadow-[0_12px_30px_rgba(255,107,26,0.35)]"
          >
            {/* Shine */}
            <motion.div
              animate={{
                x: ["-100%", "250%"],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "linear",
              }}
              className="absolute top-0 h-full w-20 bg-white/20 blur-xl"
            />

            Login

            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </motion.button>
        </form>

        {/* Divider */}
        <div className="my-8 flex items-center gap-4">
          <div className="h-[1px] flex-1 bg-gray-200"></div>

          <span className="text-sm text-gray-400">
            OR
          </span>

          <div className="h-[1px] flex-1 bg-gray-200"></div>
        </div>

        {/* Google Button */}
        <motion.button
          whileHover={{
            scale: 1.02,
            backgroundColor: "#fff7f2",
          }}
          whileTap={{
            scale: 0.96,
          }}
          className="flex h-[64px] w-full items-center justify-center gap-3 rounded-2xl border border-orange-200 bg-white font-semibold text-gray-700 shadow-sm transition-all duration-300"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt=""
            className="h-5 w-5"
          />

          Continue with Google
        </motion.button>

        {/* Bottom Text */}
        <p className="mt-8 text-center text-gray-500">
          Don’t have an account?{" "}
          <span className="cursor-pointer font-semibold text-orange-500 hover:underline">
            Sign Up
          </span>
        </p>
      </motion.div>
    </section>
  );
};

export default Login;