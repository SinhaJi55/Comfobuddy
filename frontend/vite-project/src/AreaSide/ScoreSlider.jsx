import React, { useState } from "react";

const ScoreSlider = () => {
  const [scores, setScores] = useState({
    safety: 8.5,
    connectivity: 9,
    cleanliness: 7,
    noise: 6.5,
    amenities: 8,
  });

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
      <h2 className="text-2xl font-bold text-black mb-8">
        Rate this area — slide to score
      </h2>

      <div className="space-y-8">

        {Object.entries(scores).map(([key, value]) => (
          <div key={key}>

            <div className="flex justify-between mb-3">

              <p className="capitalize text-black font-medium">
                {key}
              </p>

              <p className="font-bold text-black">
                {value}
              </p>

            </div>

            <input
              type="range"
              min="0"
              max="10"
              step="0.5"
              value={value}
              onChange={(e) =>
                setScores({
                  ...scores,
                  [key]: e.target.value,
                })
              }
              className="w-full accent-orange-500 cursor-pointer"
            />

          </div>
        ))}

      </div>

      {/* NOTES */}
      <div className="mt-10">

        <h3 className="text-xl font-bold text-black mb-4">
          Buddy notes
        </h3>

        <textarea
          rows="5"
          placeholder="Add your observation about this area..."
          className="
          w-full
          border
          border-gray-300
          rounded-2xl
          p-4
          outline-none
          focus:border-orange-500
          resize-none
        "
        />
      </div>
    </div>
  );
};

export default ScoreSlider;