import React from "react";
import { Plus } from "lucide-react";

const ReportsHeader = () => {
  return (
    <div className="flex items-center justify-between flex-wrap gap-4">

      <div>
        <h1 className="text-3xl font-bold text-black">
          Inspection Reports
        </h1>

        <p className="text-gray-500 mt-2">
          Manage and track all inspection reports
        </p>
      </div>

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
          Filter
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
          New Report
        </button>

      </div>
    </div>
  );
};

export default ReportsHeader;