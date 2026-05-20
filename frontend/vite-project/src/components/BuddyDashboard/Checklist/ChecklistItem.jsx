import React from "react";
import { Camera, Flag } from "lucide-react";

const ChecklistItem = ({ title, subtitle }) => {
  return (
    <div
      className="
      flex
      items-center
      justify-between
      p-4
      border-b
      border-gray-100
      hover:bg-gray-50
      transition-all
      duration-300
    "
    >
      <div className="flex items-start gap-4">
        <input
          type="checkbox"
          className="w-5 h-5 accent-orange-500 mt-1"
        />

        <div>
          <h3 className="font-semibold text-black text-lg">
            {title}
          </h3>

          <p className="text-gray-500 text-sm mt-1">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          className="
          p-3
          rounded-xl
          bg-black
          text-white
          border
          border-black
          transition-all
          duration-300
          hover:bg-orange-500
          hover:border-orange-500
        "
        >
          <Flag size={18} />
        </button>

        <button
          className="
          p-3
          rounded-xl
          bg-black
          text-white
          border
          border-black
          transition-all
          duration-300
          hover:bg-orange-500
          hover:border-orange-500
        "
        >
          <Camera size={18} />
        </button>
      </div>
    </div>
  );
};

export default ChecklistItem;