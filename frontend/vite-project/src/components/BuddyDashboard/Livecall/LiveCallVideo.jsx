import React from "react";
import ControlButtons from "./LiveCallControlButoon.jsx";
const VideoSection = () => {
  return (
    <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm h-full flex flex-col justify-between">

      {/* TOP */}
      <div className="flex items-center justify-between">

        <div className="bg-orange-100 text-orange-500 px-4 py-2 rounded-full font-semibold">
          Priya Mehta — Tenant
        </div>

        <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-bold">
          HD 720p
        </div>

      </div>

      {/* CENTER */}
      <div className="flex-1 flex items-center justify-center py-20">

        <div className="text-center">

          <div className="w-36 h-36 bg-orange-500 text-white rounded-full flex items-center justify-center text-5xl font-bold mx-auto shadow-2xl">
            PM
          </div>

          <h2 className="mt-6 text-3xl font-bold text-black">
            Priya Mehta
          </h2>

          <p className="text-gray-500 mt-2">
            Live — watching your inspection
          </p>

        </div>

      </div>

      {/* CONTROLS */}
      <ControlButtons />

    </div>
  );
};

export default VideoSection;