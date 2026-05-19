import { motion } from "framer-motion";

const ActionCard = ({
  icon,
  title,
  subtitle,
  bgImage,
}) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        y: -6,
      }}
      className="relative rounded-3xl overflow-hidden h-[180px] cursor-pointer"
    >
      {/* BG IMAGE */}
      <img
        src={bgImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/85" />

      {/* GLOW */}
      <motion.div
        animate={{
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="absolute bottom-0 left-0 w-full h-24 bg-orange-500/10 blur-2xl"
      />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center">
        <div className="text-orange-500 text-4xl mb-4">
          {icon}
        </div>

        <h2 className="text-white text-2xl font-semibold">
          {title}
        </h2>

        <p className="text-zinc-400 mt-2">
          {subtitle}
        </p>
      </div>
    </motion.div>
  );
};

export default ActionCard;