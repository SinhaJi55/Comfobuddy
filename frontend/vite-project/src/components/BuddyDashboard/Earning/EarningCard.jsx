import React from "react";

const EarningsCard = ({
  title,
  amount,
  subtitle,
  color,
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
    "
    >
      <p className="text-gray-500 text-lg font-medium">
        {title}
      </p>

      <h1 className={`text-5xl font-bold mt-5 ${color}`}>
        {amount}
      </h1>

      <p className="text-gray-500 mt-4">
        {subtitle}
      </p>
    </div>
  );
};

export default EarningsCard;