import Sidebar from "./Sidebar.jsx";
import Topbar from "./Topbar.jsx";
import StatsCard from "./StatsCard.jsx";
import ActionCard from "./ActionCard.jsx";
import ScheduleCard from "./ScheduleCard.jsx";
import PerformanceChart from "./PerformanceChart.jsx";
import {
  FiCheckCircle,
  FiStar,
  FiDollarSign,
  FiZap,
  FiVideo,
  FiCheckSquare,
  FiFlag,
  FiMapPin,
} from "react-icons/fi";

const BuddyDashboard = () => {
    
  return (
    <div className="flex bg-orange-500/10 min-h-screen">
      {/* SIDEBAR */}
      <Sidebar />

      {/* CONTENT */}
      <div className="flex-1 p-8">
        <Topbar />

        {/* STATS */}
        <div className="grid grid-cols-4 gap-6">
          <StatsCard
            title="Total Inspections"
            value="142"
            subtitle="+8 this month"
            icon={<FiCheckCircle />}
          />

          <StatsCard
            title="Avg Rating"
            value="4.9"
            subtitle="Top 2% platform"
            icon={<FiStar />}
          />

          <StatsCard
            title="Total Earned"
            value="₹1.02L"
            subtitle="+₹8,640 May"
            icon={<FiDollarSign />}
          />

          <StatsCard
            title="Day Streak"
            value="18"
            subtitle="+10% bonus active"
            icon={<FiZap />}
          />
        </div>

        {/* ACTIONS */}
        <div className="grid grid-cols-4 gap-6 mt-8">
          <ActionCard
            icon={<FiVideo />}
            title="Join Live Call"
            subtitle="1 active now"
          />

          <ActionCard
            icon={<FiCheckSquare />}
            title="Open Checklist"
            subtitle="42 point form"
          />

          <ActionCard
            icon={<FiFlag />}
            title="Red Flags"
            subtitle="3 pending"
          />

          <ActionCard
            icon={<FiMapPin />}
            title="Area Score"
            subtitle="Rate locality"
          />
        </div>

        {/* SCHEDULE */}
        <div className="bg-orange-500/10 border border-orange-500/10 rounded-3xl p-8 mt-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-black">
              Today’s Schedule
            </h1>

            <button className="text-orange-500">
              View All →
            </button>
          </div>

          <div className="flex flex-col gap-8">
            <ScheduleCard
              time="10:00 AM"
              title="Dwarka Sec 10 · Studio"
              user="Ankit Rawat · Elite Plan"
              status="Completed"
            />

            <ScheduleCard
              time="02:00 PM"
              title="B-204 Saket · 2BHK"
              user="Priya Mehta · Pro"
              status="Live Now"
            />

            <ScheduleCard
              time="04:00 PM"
              title="Gurgaon Sec 49 · 2BHK"
              user="Rohan Verma · Pro"
              status="Upcoming"
            />
          </div>
            <PerformanceChart />
        </div>
        

        
      </div>
    </div>
  );
};

export default BuddyDashboard;