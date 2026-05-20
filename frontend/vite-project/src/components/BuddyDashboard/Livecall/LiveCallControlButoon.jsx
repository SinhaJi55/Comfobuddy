import React from "react";
import {
  MicOff,
  CameraOff,
  Circle,
  Image,
  Flag,
  CheckSquare,
  PhoneOff,
} from "lucide-react";

const controls = [
  { icon: MicOff, label: "Mic" },
  { icon: CameraOff, label: "Camera" },
  { icon: Circle, label: "Record" },
  { icon: Image, label: "Snap" },
  { icon: Flag, label: "Flag" },
  { icon: CheckSquare, label: "Checklist" },
];

const ControlButtons = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-5">

      {controls.map((item, index) => {
        const Icon = item.icon;

        return (
          <button
            key={index}
            className="group flex flex-col items-center gap-2"
          >

            <div className="w-16 h-16 rounded-full border border-gray-300 bg-white flex items-center justify-center text-black shadow-sm group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
              <Icon size={24} />
            </div>

            <span className="text-sm font-medium text-gray-700 group-hover:text-orange-500">
              {item.label}
            </span>

          </button>
        );
      })}

      {/* END CALL */}
      <button className="group flex flex-col items-center gap-2">

        <div className="w-16 h-16 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-black transition-all duration-300 shadow-lg">
          <PhoneOff size={24} />
        </div>

        <span className="text-sm font-semibold text-red-500">
          End
        </span>

      </button>

    </div>
  );
};

export default ControlButtons;