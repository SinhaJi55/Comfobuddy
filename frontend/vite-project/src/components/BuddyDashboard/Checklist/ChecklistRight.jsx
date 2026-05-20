import React from "react";

const RightPanel = () => {
  return (
    <div
      className="
      bg-white
      rounded-3xl
      border
      border-gray-200
      shadow-sm
      p-6
      h-full
    "
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-black">
          Room Condition
        </h2>

        <div className="bg-orange-100 text-orange-500 px-4 py-2 rounded-full font-semibold">
          0/6
        </div>
      </div>

      <div className="space-y-5">
        <div className="border border-gray-200 rounded-2xl p-5">
          <h3 className="font-semibold text-black">
            Wall Paint
          </h3>

          <p className="text-gray-500 mt-2">
            No cracks or visible damage.
          </p>
        </div>

        <div className="border border-gray-200 rounded-2xl p-5">
          <h3 className="font-semibold text-black">
            Flooring
          </h3>

          <p className="text-gray-500 mt-2">
            Tiles are properly aligned.
          </p>
        </div>

        <div className="border border-gray-200 rounded-2xl p-5">
          <h3 className="font-semibold text-black">
            Ceiling
          </h3>

          <p className="text-gray-500 mt-2">
            Lighting and finish are clean.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;