import React from "react";
import LiveCallSidebar from "./LiveCallNav.jsx";
import VideoSection from "./LiveCallVideo.jsx";
import InspectionDetails from "./LivecallInpection.jsx";
import ChatSection from "./LiveCallChat.jsx";
import { useNavigate } from "react-router-dom";

const LiveCallPage = () => {
    const navigate=useNavigate();
  return (
    <div className="flex bg-gray-100 min-h-screen">
      
      {/* SIDEBAR */}
      <LiveCallSidebar />

      {/* MAIN CONTENT */}
      <div className="flex-1 p-4 lg:p-6">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">

          {/* VIDEO */}
          <div className="xl:col-span-3">
            <VideoSection />
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">
            <InspectionDetails />

            <div className="h-[500px]">
              <ChatSection />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LiveCallPage;