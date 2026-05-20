import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  {
    month: "Jan",
    earning: 11000,
  },
  {
    month: "Feb",
    earning: 13200,
  },
  {
    month: "Mar",
    earning: 15400,
  },
  {
    month: "Apr",
    earning: 16900,
  },
  {
    month: "May",
    earning: 8600,
  },
];

const EarningsChart = () => {
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
        Monthly Breakdown
      </h2>

      <div className="h-[400px]">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="earning"
              stroke="#f97316"
              strokeWidth={4}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>
    </div>
  );
};

export default EarningsChart;