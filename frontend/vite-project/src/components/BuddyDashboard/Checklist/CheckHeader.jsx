import React from "react";

const Header = () => {
  return (
    <div
      className="
      bg-white
      rounded-3xl
      p-6
      shadow-sm
      border
      border-gray-200
      flex
      items-center
      justify-between
      flex-wrap
      gap-5
    "
    >
      <div>
        <h1 className="text-3xl font-bold text-black">
          Inspection Checklist
        </h1>

        <p className="text-gray-500 mt-2">
          B-204 Saket · Pro Plan · 42 Items
        </p>
      </div>

      <button
        className="
        bg-black
        text-white
        px-6
        py-3
        rounded-2xl
        font-semibold
        border
        border-black
        transition-all
        duration-300
        hover:bg-orange-500
        hover:border-orange-500
      "
      >
        Generate Report
      </button>
    </div>
  );
};

export default Header;