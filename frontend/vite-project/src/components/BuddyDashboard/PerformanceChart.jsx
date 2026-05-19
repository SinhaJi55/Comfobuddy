import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import { motion } from "framer-motion";

const data = [
  {
    month: "Jan",
    inspections: 18,
  },
  {
    month: "Feb",
    inspections: 17,
  },
  {
    month: "Mar",
    inspections: 22,
  },
  {
    month: "Apr",
    inspections: 28,
  },
  {
    month: "May",
    inspections: 12,
  },
];

const PerformanceChart = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="bg-white border border-orange-500/10 rounded-3xl p-8 h-[420px]"
    >
      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-black">
            Performance This Month
          </h1>

          <p className="text-zinc-500 mt-2">
            Monthly inspection analytics
          </p>
        </div>

        <button className="text-orange-500 font-medium">
          View Report →
        </button>
      </div>

      {/* CHART */}
      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#1f1f1f"
          />

          <XAxis
            dataKey="month"
            stroke="#777"
          />

          <YAxis stroke="#777" />

          <Tooltip
            contentStyle={{
              background: "#111",
              border: "1px solid rgba(249,115,22,0.2)",
              borderRadius: "16px",
              color: "#fff",
            }}
          />

          <Bar
            dataKey="inspections"
            radius={[12, 12, 0, 0]}
            fill="#f97316"
          />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default PerformanceChart;