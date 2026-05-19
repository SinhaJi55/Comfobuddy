// components/Dashboard.jsx

import ScheduleSidebar from "./ScheduleSidebar.jsx";
import ScheduleNavbar from "./ScheduleNavbar.jsx";

import ScheduleSectionHeader from "./ScheduleSectionHeader.jsx";
import ScheduleTable from "./ScheduleTable.jsx";
import ScheduleOverviewCard from "./ScheduleOverviewCard.jsx";

const Dashboard = () => {
  return (
    <div className="flex">
      <ScheduleSidebar />

      <div className="flex-1">
        <ScheduleNavbar />

        <div className="p-6 space-y-8">
          <ScheduleSectionHeader />

          <ScheduleTable />

          <ScheduleOverviewCard/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;