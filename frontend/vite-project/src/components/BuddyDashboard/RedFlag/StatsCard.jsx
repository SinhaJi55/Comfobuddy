import React from "react";

const StatsCard = ({
  icon,
  value,
  title,
  subtitle,
  bg,
  text,
}) => {
  return (
    <div
      className="
      bg-white
      border
      border-gray-200
      rounded-3xl
      p-6
      shadow-sm
      hover:shadow-xl
      transition-all
      duration-300
      relative
      overflow-hidden
    "
    >
      <div
        className={`absolute top-0 right-0 w-24 h-24 rounded-full opacity-10 ${bg}`}
      />

      <div
        className={`
        w-14
        h-14
        rounded-2xl
        flex
        items-center
        justify-center
        ${bg}
        ${text}
      `}
      >
        {icon}
      </div>

      <h2 className={`text-5xl font-bold mt-5 ${text}`}>
        {value}
      </h2>

      <p className="text-black font-semibold mt-2">
        {title}
      </p>

      <p className={`mt-2 font-medium ${text}`}>
        {subtitle}
      </p>
    </div>
  );
};

export default StatsCard;