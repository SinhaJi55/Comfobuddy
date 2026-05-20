import React from "react";

import EarningsSidebar from "./EarningSidebar.jsx";
import EarningsHeader from "./EarningHeader.jsx";
import EarningsCard from "./EarningCard.jsx";
import EarningsChart from "./EarningChart.jsx";
import EarningsTable from "./EarningTable.jsx";

const EarningsPage = () => {
  return (
    <div className="flex bg-[#f5f5f5] min-h-screen">

      {/* SIDEBAR */}
      <div className="fixed left-0 top-0 z-50">
        <EarningsSidebar />
      </div>

      {/* MAIN */}
      <div className="flex-1 ml-[260px] p-6">

        {/* HEADER */}
        <EarningsHeader />

        {/* TOP CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          <EarningsCard
            title="Total Earned"
            amount="₹1,02,240"
            subtitle="Since Jan 2024"
            color="text-green-500"
          />

          <EarningsCard
            title="This Month (May)"
            amount="₹8,640"
            subtitle="12 inspections · Elite +20%"
            color="text-orange-500"
          />

          <EarningsCard
            title="Pending Payout"
            amount="₹2,160"
            subtitle="Credited on 10 May"
            color="text-yellow-500"
          />

        </div>

        {/* BOTTOM */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

          {/* CHART */}
          <EarningsChart />

          {/* TABLE */}
          <EarningsTable />

        </div>

      </div>
    </div>
  );
};

export default EarningsPage;