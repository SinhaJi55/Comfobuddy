import React from "react";

const details = [
  ["Booking", "CBP-04817"],
  ["Plan", "Pro • 60 min"],
  ["Property", "B-204 Saket, Delhi"],
  ["Tenant", "Priya Mehta"],
  ["Duration", "04:50"],
  ["Photos", "1"],
  ["Flags", "1"],
];

const InspectionDetails = () => {
  return (
    <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm">

      <h2 className="text-2xl font-bold text-black mb-6">
        Inspection Details
      </h2>

      <div className="space-y-4">

        {details.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b border-gray-100 pb-3"
          >

            <span className="text-gray-500">
              {item[0]}
            </span>

            <span className="font-bold text-black">
              {item[1]}
            </span>

          </div>
        ))}

      </div>

    </div>
  );
};

export default InspectionDetails;