import {
  FiGrid,
  FiCalendar,
  FiVideo,
  FiCheckSquare,
  FiFileText,
  FiFlag,
  FiMapPin,
  FiDollarSign,
  FiUser,
} from "react-icons/fi";

export const sidebarItems = [
  {
    title: "Dashboard",
    icon: FiGrid,
    active: true,
    path: "/",
  },
  {
    title: "Schedule",
    icon: FiCalendar,
    badge: 4,
    path: "/schedule",
  },
  {
    title: "Live Call",
    icon: FiVideo,
    badge: 1,
    path: "/live-call",
  },
  {
    title: "Checklist",
    icon: FiCheckSquare,
    path: "/checklist",
  },
  {
    title: "Reports",
    icon: FiFileText,
    path: "/reports",
  },
  {
    title: "Red Flags",
    icon: FiFlag,
    badge: 3,
    path: "/red-flags",
  },
  {
    title: "Area Score",
    icon: FiMapPin,
    path: "/area-score",
  },
  {
    title: "Earnings",
    icon: FiDollarSign,
    path: "/earnings",
  },
  {
    title: "Profile",
    icon: FiUser,
    path: "/profile",
  },
];