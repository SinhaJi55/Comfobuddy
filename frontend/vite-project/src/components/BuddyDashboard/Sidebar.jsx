import { motion } from "framer-motion";
import SidebarItem from "./SidebarItems.jsx";
import { sidebarItems } from "./SidebarData.js";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-[280px] h-screen bg-white border-r border-orange-500/10 p-5"
    >
      {/* LOGO */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-black">
          Comfo<span className="text-orange-500">Buddy</span>
        </h1>

        <p className="text-orange-500 text-sm mt-1 tracking-widest">
          INSPECTION TEAM
        </p>
      </div>

      {/* MENU */}
      <div className="flex flex-col gap-3">
        {sidebarItems.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(item.path)}
          >
            <SidebarItem item={item} />
          </div>
        ))}
      </div>
    </motion.div>
  );
};
export default Sidebar;