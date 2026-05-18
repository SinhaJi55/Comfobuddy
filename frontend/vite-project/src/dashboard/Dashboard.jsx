import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import StatsCards from "./StatsCards";
import IncomeChart from "./IncomeChart";
import OccupancyCard from "./OccupancyCard";
import ActivitySection from "./ActivitySection";

import "./dashboard.css";
import RecentRentActivity from "./RecentRentActivity";
import Comfoanimation from "../pages/Comfoanimation";
import BuddyAssignments from "./BuddyAssignment";
const Dashboard = () => {
  return (
    <div className="dashboard-layout">
      <Comfoanimation />
      <Sidebar />

      <div className="dashboard-main">
        <Topbar />

        {/* VERIFY BANNER */}
        <div className="verify-banner">
          <div>
            <h3>Your profile is not CB Verified yet</h3>
            <p>
              Verified owners get priority listing placement and trust boost.
            </p>
          </div>

          <button>Get Verified ₹499 →</button>
        </div>

        {/* STATS */}
        <StatsCards />

        {/* CHARTS */}
        <div className="dashboard-grid">
          <IncomeChart />
          <OccupancyCard />
        </div>

        {/* ACTIVITIES */}
       
        <RecentRentActivity></RecentRentActivity>
        <BuddyAssignments></BuddyAssignments>
      </div>
    </div>
  );
};

export default Dashboard;