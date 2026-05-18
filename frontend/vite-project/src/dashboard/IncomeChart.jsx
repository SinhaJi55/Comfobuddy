// MonthlyRentIncome.jsx

import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
  CartesianGrid,
  ComposedChart,
} from "recharts";

import { motion } from "framer-motion";

const data = [
  { month: "Dec", income: 34000, line: 20000 },
  { month: "Jan", income: 36000, line: 24000 },
  { month: "Feb", income: 43000, line: 35000 },
  { month: "Mar", income: 51000, line: 33000 },
  { month: "Apr", income: 54000, line: 42000 },
  { month: "May", income: 59000, line: 55000 },
];

const IncomeChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full bg-white rounded-[34px] border border-[#f3f3f3] p-8 shadow-sm"
    >
      {/* Top */}
      <div className="flex items-start justify-between mb-10">
        <div>
          <h2 className="text-[34px] font-bold text-[#1a1a1a] leading-none">
            Monthly Rent Income
          </h2>

          <p className="text-gray-400 text-lg mt-2 font-medium">
            All properties combined
          </p>
        </div>

        {/* Toggle */}
        <div className="flex items-center border border-[#efefef] rounded-2xl p-1 bg-white">
          <button className="px-7 py-3 rounded-xl bg-orange-50 text-orange-500 font-semibold text-lg shadow-sm">
            6M
          </button>

          <button className="px-7 py-3 rounded-xl text-gray-500 font-semibold text-lg">
            1Y
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className="w-full h-[430px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{
              top: 20,
              right: 20,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid
              strokeDasharray="0"
              vertical={false}
              stroke="#f4f4f4"
            />

            <XAxis
              dataKey="month"
              tick={{
                fill: "#8f8f8f",
                fontSize: 16,
                fontWeight: 500,
              }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tickFormatter={(value) => `₹${value / 1000}K`}
              tick={{
                fill: "#8f8f8f",
                fontSize: 15,
                fontWeight: 500,
              }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              cursor={false}
              contentStyle={{
                borderRadius: "20px",
                border: "none",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                padding: "14px 18px",
              }}
              formatter={(value) => [`₹${value.toLocaleString()}`]}
            />

            {/* Bars */}
            <Bar
              dataKey="income"
              radius={[14, 14, 0, 0]}
              fill="#FFE6CF"
              barSize={56}
            />

            {/* Active Bar Effect */}
            <Bar
              dataKey={(entry) =>
                entry.month === "May" ? entry.income : null
              }
              radius={[14, 14, 0, 0]}
              fill="#FF8C2B"
              barSize={56}
            />

            {/* Line */}
            <Line
              type="monotone"
              dataKey="line"
              stroke="#F59B42"
              strokeWidth={3}
              dot={{
                r: 4,
                fill: "#F59B42",
                strokeWidth: 0,
              }}
              activeDot={{
                r: 6,
              }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Floating Stats */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.7,
          duration: 0.5,
        }}
        className="absolute"
      ></motion.div>
    </motion.div>
  );
};

export default IncomeChart;