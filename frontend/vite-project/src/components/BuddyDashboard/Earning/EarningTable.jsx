import React from "react";

const details = [
  {
    title: "Base pay (Pro 96 × ₹450)",
    amount: "₹43,200",
  },
  {
    title: "Elite inspections (34 × ₹800)",
    amount: "₹27,200",
  },
  {
    title: "Basic inspections (12 × ₹180)",
    amount: "₹2,160",
  },
  {
    title: "Elite tier bonus (+20%)",
    amount: "+₹14,480",
    green: true,
  },
  {
    title: "Streak bonus (18 days)",
    amount: "+₹1,800",
    green: true,
  },
  {
    title: "First review bonus",
    amount: "+₹1,400",
    green: true,
  },
];

const EarningsTable = () => {
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
        Earnings Detail
      </h2>

      <div className="space-y-5">

        {details.map((item, index) => (
          <div
            key={index}
            className="
            flex
            items-center
            justify-between
            border-b
            border-gray-200
            pb-4
          "
          >
            <p className="text-gray-700 font-medium">
              {item.title}
            </p>

            <p
              className={`font-bold text-xl ${
                item.green
                  ? "text-green-500"
                  : "text-black"
              }`}
            >
              {item.amount}
            </p>
          </div>
        ))}

        {/* TOTAL */}
        <div className="flex items-center justify-between pt-4">

          <h2 className="text-2xl font-bold text-black">
            Total earnings
          </h2>

          <h1 className="text-4xl font-bold text-green-500">
            ₹1,02,240
          </h1>

        </div>

      </div>
    </div>
  );
};

export default EarningsTable;