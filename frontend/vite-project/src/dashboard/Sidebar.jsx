// // Sidebar.jsx

// import React from "react";
// import { motion } from "framer-motion";

// import {
//   LayoutDashboard,
//   Building2,
//   IndianRupee,
//   Users,
//   UserCircle2,
//   BarChart3,
//   FileText,
//   Bell,
//   Settings,
//   ShieldCheck,
//   ChevronRight,
// } from "lucide-react";

// const menuItems = [
//   {
//     section: "OWNER PORTAL",
//     items: [
//       {
//         icon: LayoutDashboard,
//         title: "Dashboard",
//         active: true,
//       },

//       {
//         icon: Building2,
//         title: "My Listings",
//         badge: "6",
//       },

//       {
//         icon: IndianRupee,
//         title: "Rent Collection",
//         badge: "3",
//       },

//       {
//         icon: Users,
//         title: "Buddy Assign",
//       },

//       {
//         icon: UserCircle2,
//         title: "My Tenants",
//       },
//     ],
//   },

//   {
//     section: "INSIGHTS",
//     items: [
//       {
//         icon: BarChart3,
//         title: "Analytics",
//       },

//       {
//         icon: FileText,
//         title: "Inspection Reports",
//       },

//       {
//         icon: Bell,
//         title: "Notifications",
//         badge: "5",
//       },
//     ],
//   },

//   {
//     section: "ACCOUNT",
//     items: [
//       {
//         icon: Settings,
//         title: "Settings",
//       },
//     ],
//   },
// ];

// const Sidebar = () => {
//   return (
//     <motion.div
//       initial={{ x: -80, opacity: 0 }}
//       animate={{ x: 0, opacity: 1 }}
//       transition={{
//         duration: 0.7,
//         ease: "easeOut",
//       }}
//       className="w-[290px] min-h-screen bg-white border-r border-[#efefef] flex flex-col justify-between px-5 py-6"
//     >
//       {/* Top */}
//       <div>
//         {menuItems.map((section, sectionIndex) => (
//           <div key={sectionIndex} className="mb-8">
//             {/* Section Title */}
//             <motion.h3
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: sectionIndex * 0.2 }}
//               className="text-[12px] font-bold tracking-[1.5px] text-gray-300 mb-4"
//             >
//               {section.section}
//             </motion.h3>

//             {/* Menu Items */}
//             <div className="space-y-2">
//               {section.items.map((item, index) => {
//                 const Icon = item.icon;

//                 return (
//                   <motion.div
//                     key={index}
//                     whileHover={{
//                       x: 6,
//                       scale: 1.02,
//                     }}
//                     whileTap={{
//                       scale: 0.98,
//                     }}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{
//                       delay: index * 0.08,
//                     }}
//                     className={`group flex items-center justify-between px-4 py-3 rounded-2xl cursor-pointer transition-all duration-300 ${
//                       item.active
//                         ? "bg-orange-50"
//                         : "hover:bg-gray-50"
//                     }`}
//                   >
//                     {/* Left */}
//                     <div className="flex items-center gap-3">
//                       <motion.div
//                         whileHover={{
//                           rotate: 8,
//                           scale: 1.08,
//                         }}
//                         className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
//                           item.active
//                             ? "bg-orange-500 text-white shadow-lg shadow-orange-200"
//                             : "text-gray-500 group-hover:text-orange-500"
//                         }`}
//                       >
//                         <Icon size={18} />
//                       </motion.div>

//                       <span
//                         className={`font-semibold text-[15px] ${
//                           item.active
//                             ? "text-orange-500"
//                             : "text-gray-500"
//                         }`}
//                       >
//                         {item.title}
//                       </span>
//                     </div>

//                     {/* Badge */}
//                     {item.badge && (
//                       <motion.div
//                         animate={{
//                           scale: [1, 1.08, 1],
//                         }}
//                         transition={{
//                           duration: 2,
//                           repeat: Infinity,
//                         }}
//                         className="min-w-[28px] h-[28px] rounded-full bg-orange-50 text-orange-500 text-sm font-bold flex items-center justify-center"
//                       >
//                         {item.badge}
//                       </motion.div>
//                     )}
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>
//         ))}

//         {/* Verify Card */}
//         <motion.div
//           whileHover={{
//             y: -5,
//             scale: 1.02,
//           }}
//           className="mt-10 bg-gradient-to-br from-[#fff7f0] to-[#fff1e6] rounded-[28px] p-5 border border-orange-100 relative overflow-hidden"
//         >
//           {/* Glow */}
//           <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-200 blur-3xl opacity-30 rounded-full" />

//           <div className="relative z-10">
//             {/* Icon */}
//             <motion.div
//               animate={{
//                 rotate: [0, 5, -5, 0],
//               }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//               }}
//               className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center"
//             >
//               <ShieldCheck
//                 size={24}
//                 className="text-orange-500"
//               />
//             </motion.div>

//             <h2 className="text-[28px] font-bold text-[#1a1a1a] mt-5">
//               Get Verified
//             </h2>

//             <p className="text-gray-500 text-sm leading-relaxed mt-2">
//               Verified properties get 3x more tenant enquiries
//               & trust badge.
//             </p>

//             <motion.button
//               whileHover={{
//                 scale: 1.04,
//               }}
//               whileTap={{
//                 scale: 0.96,
//               }}
//               className="mt-5 w-full h-[52px] rounded-2xl bg-orange-500 hover:bg-orange-600 transition-all text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-orange-200"
//             >
//               Upgrade for ₹499
//               <ChevronRight size={18} />
//             </motion.button>
//           </div>
//         </motion.div>
//       </div>

//       {/* Bottom Profile */}
//       <motion.div
//         whileHover={{
//           scale: 1.02,
//           y: -3,
//         }}
//         className="mt-8 flex items-center justify-between bg-white rounded-2xl p-3 border border-[#f1f1f1] shadow-sm"
//       >
//         <div className="flex items-center gap-3">
//           {/* Avatar */}
//           <motion.div
//             animate={{
//               scale: [1, 1.04, 1],
//             }}
//             transition={{
//               duration: 3,
//               repeat: Infinity,
//             }}
//             className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-orange-200"
//           >
//             RK
//           </motion.div>

//           <div>
//             <h4 className="text-[15px] font-bold text-[#1a1a1a]">
//               Ramesh Kumar
//             </h4>

//             <p className="text-sm text-gray-400">
//               Property Owner · Delhi
//             </p>
//           </div>
//         </div>

//         <ChevronRight
//           size={18}
//           className="text-gray-400"
//         />
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Sidebar;
import React from "react";

import { motion } from "framer-motion";

import {
  LayoutDashboard,
  Building2,
  IndianRupee,
  Users,
  UserCircle2,
  BarChart3,
  FileText,
  Bell,
  Settings,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

import {
  Link,
  useLocation,
} from "react-router-dom";

const menuItems = [
  {
    section: "OWNER PORTAL",

    items: [
      {
        icon: LayoutDashboard,
        title: "Dashboard",
        path: "/",
      },

      {
        icon: Building2,
        title: "My Listings",
        path: "/listings",
        badge: "6",
      },

      {
        icon: IndianRupee,
        title: "Rent Collection",
        path: "/rent",
        badge: "3",
      },

      {
        icon: Users,
        title: "Buddy Assign",
        path: "/buddy",
      },

      {
        icon: UserCircle2,
        title: "My Tenants",
        path: "/tenants",
      },
    ],
  },

  {
    section: "INSIGHTS",

    items: [
      {
        icon: BarChart3,
        title: "Analytics",
        path: "/analytics",
      },

      {
        icon: FileText,
        title: "Inspection Reports",
        path: "/reports",
      },

      {
        icon: Bell,
        title: "Notifications",
        path: "/notifications",
        badge: "5",
      },
    ],
  },

  {
    section: "ACCOUNT",

    items: [
      {
        icon: Settings,
        title: "Settings",
        path: "/settings",
      },
    ],
  },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <motion.div
      initial={{
        x: -80,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.7,
      }}
      className="w-[290px] min-h-screen bg-white border-r border-[#efefef] px-5 py-6 flex flex-col justify-between"
    >
      <div>
        {menuItems.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className="mb-8"
          >
            {/* Section */}
            <h3 className="text-[12px] font-bold tracking-[1.5px] text-gray-300 mb-4">
              {section.section}
            </h3>

            {/* Items */}
            <div className="space-y-2">
              {section.items.map((item, index) => {
                const Icon = item.icon;

                const active =
                  location.pathname === item.path;

                return (
                  <Link
                    key={index}
                    to={item.path}
                  >
                    <motion.div
                      whileHover={{
                        x: 6,
                        scale: 1.02,
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                      className={`group flex items-center justify-between px-4 py-3 rounded-2xl cursor-pointer transition-all duration-300 ${
                        active
                          ? "bg-orange-50"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      {/* Left */}
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                            active
                              ? "bg-orange-500 text-white shadow-lg shadow-orange-200"
                              : "text-gray-500"
                          }`}
                        >
                          <Icon size={18} />
                        </div>

                        <span
                          className={`font-semibold text-[15px] ${
                            active
                              ? "text-orange-500"
                              : "text-gray-500"
                          }`}
                        >
                          {item.title}
                        </span>
                      </div>

                      {/* Badge */}
                      {item.badge && (
                        <div className="min-w-[28px] h-[28px] rounded-full bg-orange-50 text-orange-500 text-sm font-bold flex items-center justify-center">
                          {item.badge}
                        </div>
                      )}
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}

        {/* Verify Card */}
        <div className="mt-10 bg-gradient-to-br from-[#fff7f0] to-[#fff1e6] rounded-[28px] p-5 border border-orange-100">
          <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center">
            <ShieldCheck
              size={24}
              className="text-orange-500"
            />
          </div>

          <h2 className="text-[28px] font-bold mt-5">
            Get Verified
          </h2>

          <p className="text-gray-500 text-sm mt-2">
            Verified properties get 3x more
            enquiries.
          </p>

          <button className="mt-5 w-full h-[52px] rounded-2xl bg-orange-500 text-white font-bold flex items-center justify-center gap-2">
            Upgrade for ₹499

            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Bottom Profile */}
      <div className="mt-8 flex items-center justify-between bg-white rounded-2xl p-3 border border-[#f1f1f1] shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
            RK
          </div>

          <div>
            <h4 className="font-bold">
              Ramesh Kumar
            </h4>

            <p className="text-sm text-gray-400">
              Property Owner · Delhi
            </p>
          </div>
        </div>

        <ChevronRight
          size={18}
          className="text-gray-400"
        />
      </div>
    </motion.div>
  );
};

export default Sidebar;