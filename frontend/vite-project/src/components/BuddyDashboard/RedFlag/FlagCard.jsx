import React from "react";

const FlagCard = ({
  icon,
  title,
  subtitle,
  time,
}) => {
  return (
    <div
      className="
      bg-white
      border
      border-red-300
      rounded-3xl
      p-6
      shadow-sm
      hover:shadow-xl
      transition-all
      duration-300
      flex
      items-start
      justify-between
      flex-wrap
      gap-5
    "
    >
      {/* LEFT */}
      <div className="flex gap-5">

        <div
          className="
          w-14
          h-14
          rounded-2xl
          bg-red-100
          text-red-500
          flex
          items-center
          justify-center
        "
        >
          {icon}
        </div>

        <div>

          <h2 className="text-2xl font-bold text-black">
            {title}
          </h2>

          <p className="text-gray-500 mt-2">
            {subtitle}
          </p>

          {/* BUTTONS */}
          <div className="flex items-center gap-3 mt-4">

            <button
              className="
              bg-red-100
              text-red-500
              px-4
              py-2
              rounded-full
              font-medium
            "
            >
              critical
            </button>

            <button
              className="
              bg-black
              text-white
              px-4
              py-2
              rounded-full
              font-medium
              hover:bg-orange-500
              transition-all
              duration-300
            "
            >
              Resolve
            </button>

          </div>
        </div>
      </div>

      {/* RIGHT */}
      <p className="text-gray-500 font-medium">
        {time}
      </p>
    </div>
  );
};

export default FlagCard;