import React from "react";

import Sidebar from "./ChecklistSidebar.jsx";
import Header from "./CheckHeader.jsx";
import ChecklistSection from "./ChecklistSection.jsx";
import RightPanel from "./ChecklistRight.jsx";
import { useNavigate } from "react-router-dom";

const ChecklistPage = () => {
    const navigate = useNavigate();
  return (
    <div className="flex bg-[#f5f5f5] min-h-screen overflow-hidden">

      {/* SIDEBAR */}
      <div className="fixed left-0 top-0 h-screen z-50">
        <Sidebar />
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 ml-[260px] w-full">

        {/* HEADER */}
        <div className="p-4 lg:p-6 pb-0">
          <Header />
        </div>

        {/* PAGE CONTENT */}
        <div className="p-4 lg:p-6">

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

            {/* LEFT SECTION */}
            <div className="space-y-6">

              <ChecklistSection />

            </div>

            {/* RIGHT SECTION */}
            <div className="h-full">

              <RightPanel />

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ChecklistPage;