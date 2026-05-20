import React from "react";

const ScoreCard = () => {
  return (
    <div
      className="
      bg-white
      border
      border-gray-200
      rounded-3xl
      p-6
      shadow-sm
    "
    >
      <p className="text-gray-500 font-semibold uppercase">
        Current Inspection
      </p>

      <h2 className="text-3xl font-bold text-black mt-4">
        B-204 Saket, South Delhi
      </h2>

      <p className="text-gray-500 mt-2">
        CBP-04817 · Pro Plan
      </p>

      <h1 className="text-[90px] font-bold text-orange-500 mt-8 leading-none">
        7.8
      </h1>

      <p className="text-gray-500 text-xl mt-3">
        /10 — Area Score
      </p>

      <div className="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full mt-5 font-semibold">
        Good locality
      </div>
    </div>
  );
};

export default ScoreCard;