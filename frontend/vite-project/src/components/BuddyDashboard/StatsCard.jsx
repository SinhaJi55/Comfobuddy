import { motion } from "framer-motion";

const StatsCard = ({
  title,
  value,
  subtitle,
  icon,
  bgImage,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.4 }}
      className="relative rounded-3xl overflow-hidden h-[190px]"
    >
      {/* BACKGROUND IMAGE */}
      <img
        src={bgImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]" />

      {/* ORANGE GLOW */}
      <motion.div
        animate={{
          opacity: [0.1, 0.25, 0.1],
          scale: [1, 1.3, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500 blur-3xl rounded-full"
      />

      {/* CONTENT */}
      <div className="relative z-10 p-6 h-full flex flex-col justify-center">
        <div className="text-orange-500 text-3xl mb-4">
          {icon}
        </div>

        <h2 className="text-4xl font-bold text-white">
          {value}
        </h2>

        <p className="text-zinc-300 mt-2">
          {title}
        </p>

        <p className="text-orange-400 text-sm mt-2">
          {subtitle}
        </p>
      </div>
    </motion.div>
  );
};

export default StatsCard;