import React from "react";
import { Plus } from "lucide-react";

const RedFlagsHeader = () => {
  return (
    <div className="flex items-center justify-between flex-wrap gap-4">

      <h1 className="text-3xl font-bold text-black">
        Red Flags Raised
      </h1>

      <div className="flex items-center gap-4">

        <button
          className="
          px-5
          py-3
          rounded-xl
          border
          border-black
          text-black
          font-medium
          hover:bg-orange-500
          hover:text-white
          hover:border-orange-500
          transition-all
          duration-300
        "
        >
          Filter severity
        </button>

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
          <Plus size={18} />
          Raise new flag
        </button>

      </div>
    </div>
  );
};

export default RedFlagsHeader;