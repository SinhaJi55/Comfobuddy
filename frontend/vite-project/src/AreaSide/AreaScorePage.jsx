import React from "react";


import AreaSidebar from "./AreaSidebar.jsx";
import AreaHeader from "./AreaHead.jsx";
import ScoreCard from "./ScoreCard.jsx";
import ScoreBreakdown from "./ScoreBreakdown.jsx";
import ScoreSlider from "./ScoreSlider.jsx";
import { useNavigate } from "react-router-dom";

const AreaScorePage = () => {
    const naigate=useNavigate();
  return (
    <div className="flex bg-[#f5f5f5] min-h-screen">

      {/* SIDEBAR */}
      <div className="fixed left-0 top-0 z-50">
        <AreaSidebar />
      </div>

      {/* MAIN */}
      <div className="flex-1 ml-[260px] p-6">

        {/* HEADER */}
        <AreaHeader />

        {/* CONTENT */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">

          {/* LEFT */}
          <div className="space-y-6">

            <ScoreCard />

            <ScoreBreakdown />

          </div>

          {/* RIGHT */}
          <div>

            <ScoreSlider />

          </div>

        </div>

      </div>
    </div>
  );
};

export default AreaScorePage;