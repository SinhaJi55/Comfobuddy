import React from "react";

import {
  AlertCircle,
  Flag,
  BarChart3,
  Droplets,
  Zap,
} from "lucide-react";

import RedFlagsSidebar from "./RedflagSidebar";
import RedFlagsHeader from "./RedFlagHeader";
import StatsCard from "../StatsCard";
import FlagCard from "./FlagCard";
import { useNavigate } from "react-router-dom";
const RedFlagsPage = () => {
  const navigate=useNavigate();
  return (
    
    <div className="flex bg-[#f5f5f5] min-h-screen">

      {/* SIDEBAR */}
      <div className="fixed left-0 top-0 z-50">
        <RedFlagsSidebar />
      </div>

      {/* MAIN */}
      <div className="flex-1 ml-[260px] p-6">

        {/* HEADER */}
        <RedFlagsHeader />

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

          <StatsCard
            icon={<AlertCircle size={24} />}
            value="3"
            title="Active flags"
            subtitle="Need review"
            bg="bg-red-100"
            text="text-red-500"
          />

          <StatsCard
            icon={<Flag size={24} />}
            value="15"
            title="Resolved total"
            subtitle="All time"
            bg="bg-green-100"
            text="text-green-500"
          />

          <StatsCard
            icon={<BarChart3 size={24} />}
            value="12.7%"
            title="Flag rate"
            subtitle="Industry avg: 14%"
            bg="bg-orange-100"
            text="text-orange-500"
          />

        </div>

        {/* FLAGS */}
        <div className="space-y-6 mt-8">

          <FlagCard
            icon={<Flag size={24} />}
            title="Manual flag from call"
            subtitle="CBP-04817 · B-204 Saket · During live inspection"
            time="Just now"
          />

          <FlagCard
            icon={<Droplets size={24} />}
            title="Leaking pipe — bathroom sink"
            subtitle="CBP-04817 · B-204 Saket · During live inspection"
            time="Just now"
          />

          <FlagCard
            icon={<Zap size={24} />}
            title="Exposed wiring near main switch"
            subtitle="CBP-04807 · Dwarka Sec 10 · 4 days ago"
            time="4 days ago"
          />

        </div>

      </div>
    </div>
  );
};

export default RedFlagsPage;