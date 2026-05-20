import React from "react";
import ChecklistItem from "./ChecklistItem";

const items = [
  {
    title: "Main Gate & Entrance",
    subtitle: "Lock, lighting, security",
  },
  {
    title: "Common Area Cleanliness",
    subtitle: "Lobby, staircase, lift",
  },
  {
    title: "Lift Working",
    subtitle: "Test & safety certification",
  },
  {
    title: "Parking Confirmed",
    subtitle: "Actual spot as promised",
  },
  {
    title: "No Building Cracks",
    subtitle: "Walls & roof line",
  },
];

const ChecklistSection = () => {
  return (
    <div
      className="
      bg-white
      rounded-3xl
      shadow-sm
      border
      border-gray-200
      overflow-hidden
    "
    >
      <div className="p-5 border-b border-gray-200 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-black">
          Exterior & Entry
        </h2>

        <div className="bg-orange-100 text-orange-500 px-4 py-2 rounded-full font-semibold">
          0/5
        </div>
      </div>

      <div>
        {items.map((item, index) => (
          <ChecklistItem
            key={index}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </div>
    </div>
  );
};

export default ChecklistSection;