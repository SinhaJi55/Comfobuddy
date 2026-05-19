import { motion } from "framer-motion";

const SidebarItem = ({ item }) => {
  const Icon = item.icon;

  return (
    <motion.div
      whileHover={{
        x: 6,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.96,
      }}
      className={`flex items-center justify-between px-4 py-3 rounded-2xl cursor-pointer transition-all duration-300
      ${
        item.active
          ? "bg-orange-500 text-white shadow-[0_0_25px_rgba(255,115,0,0.4)]"
          : "text-black hover:bg-orange-500 hover:text-white"
      }`}
    >
      <div className="flex items-center gap-3">
        <Icon size={20} />
        <span className="font-medium">{item.title}</span>
      </div>

      {item.badge && (
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="bg-red-500 text-white text-xs min-w-[20px] h-5 px-1 rounded-full flex items-center justify-center"
        >
          {item.badge}
        </motion.div>
      )}
    </motion.div>
  );
};

export default SidebarItem;