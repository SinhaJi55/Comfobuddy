// components/OverviewCards.jsx

import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  IndianRupee,
} from "lucide-react";

const cards = [
  {
    icon: <CalendarDays size={28} />,
    title: "12",
    subtitle: "Scheduled this week",
  },
  {
    icon: <CheckCircle2 size={28} />,
    title: "7",
    subtitle: "Completed",
  },
  {
    icon: <Clock3 size={28} />,
    title: "5",
    subtitle: "Remaining",
  },
  {
    icon: <IndianRupee size={28} />,
    title: "₹7,200",
    subtitle: "Earned this week",
  },
];

const ScheduleOverviewCards = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-black mb-5">
        This Week Overview
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-3xl shadow-lg border hover:-translate-y-2 hover:shadow-2xl transition duration-500 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-28 h-28 bg-orange-100 rounded-full blur-2xl group-hover:scale-150 transition duration-700"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:rotate-12 transition duration-300">
                {card.icon}
              </div>

              <h1 className="text-4xl font-bold text-black mb-2">
                {card.title}
              </h1>

              <p className="text-gray-500 font-medium">
                {card.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleOverviewCards;