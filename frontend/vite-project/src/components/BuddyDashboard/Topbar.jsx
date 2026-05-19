import { motion } from "framer-motion";

const Topbar = () => {
  return (
    <div className="flex items-center justify-between mb-10">
      <div>
        <h1 className="text-4xl font-bold text-black">
          Welcome Back 👋
        </h1>

        <p className="text-zinc-500 mt-2">
          Manage your inspection activity.
        </p>
      </div>

      <motion.div
        animate={{
          boxShadow: [
            "0 0 0px rgba(255,115,0,0)",
            "0 0 25px rgba(255,115,0,0.6)",
            "0 0 0px rgba(255,115,0,0)",
          ],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="bg-orange-500 px-5 py-3 rounded-2xl text-white font-semibold"
      >
        LIVE
      </motion.div>
    </div>
  );
};

export default Topbar;