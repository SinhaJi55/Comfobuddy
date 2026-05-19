// components/ScheduleTable.jsx

import ScheduleRow from "./ScheduleRow";

const rows = [
  {
    time: "10:00 AM",
    property: "Dwarka Sec 10 · Studio",
    tenant: "Ankit Rawat",
    initials: "AR",
    plan: "Elite",
    duration: "88 min",
    status: "Completed",
    action: "View Report",
  },
  {
    time: "02:00 PM",
    property: "B-204 Saket · 2BHK",
    tenant: "Priya Mehta",
    initials: "PM",
    plan: "Pro",
    duration: "60 min",
    status: "Live Now",
    action: "Join Call",
  },
  {
    time: "04:00 PM",
    property: "Gurgaon Sec 49 · 2BHK",
    tenant: "Rohan Verma",
    initials: "RV",
    plan: "Pro",
    duration: "60 min",
    status: "Upcoming",
    action: "Prepare",
  },
];

const ScheduleTable = () => {
  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border">
      <table className="w-full">
        <thead className="bg-orange-500 text-white">
          <tr>
            <th className="text-left px-6 py-4">
              Time
            </th>

            <th className="text-left px-6 py-4">
              Property
            </th>

            <th className="text-left px-6 py-4">
              Tenant
            </th>

            <th className="text-left px-6 py-4">
              Plan
            </th>

            <th className="text-left px-6 py-4">
              Duration
            </th>

            <th className="text-left px-6 py-4">
              Status
            </th>

            <th className="text-left px-6 py-4">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row, index) => (
            <ScheduleRow
              key={index}
              row={row}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleTable;