import React from "react";

const scores = [
  {
    title: "Safety",
    score: "8.5",
    width: "85%",
    color: "bg-green-500",
  },
  {
    title: "Connectivity",
    score: "9.0",
    width: "90%",
    color: "bg-cyan-500",
  },
  {
    title: "Cleanliness",
    score: "7.0",
    width: "70%",
    color: "bg-orange-500",
  },
  {
    title: "Noise level",
    score: "6.5",
    width: "65%",
    color: "bg-yellow-500",
  },
  {
    title: "Amenities",
    score: "8.0",
    width: "80%",
    color: "bg-purple-500",
  },
];

const ScoreBreakdown = () => {
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
      <h2 className="text-2xl font-bold text-black mb-6">
        Score breakdown
      </h2>

      <div className="space-y-6">

        {scores.map((item, index) => (
          <div key={index}>

            <div className="flex items-center justify-between mb-2">

              <p className="font-medium text-black">
                {item.title}
              </p>

              <p className="font-bold text-black">
                {item.score}
              </p>

            </div>

            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">

              <div
                className={`h-full rounded-full ${item.color}`}
                style={{ width: item.width }}
              />

            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default ScoreBreakdown;