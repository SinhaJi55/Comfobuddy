import React from "react";
import { Save } from "lucide-react";

const AreaHeader = () => {
  return (
    <div className="flex items-center justify-between flex-wrap gap-4">

      <h1 className="text-3xl font-bold text-black">
        Area Score Calculator
      </h1>

      <button
        className="
        flex
        items-center
        gap-2
        bg-black
        text-white
        px-5
        py-3
        rounded-xl
        font-medium
        hover:bg-orange-500
        transition-all
        duration-300
      "
      >
        <Save size={18} />
        Save to Report
      </button>

    </div>
  );
};

export default AreaHeader;