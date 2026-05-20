import React from "react";

import ReportsSidebar from "./ReportSidebar";

import ReportsHeader from "./ReportHeader";
import ReportCard from "./ReportCard";
import { useNavigate } from "react-router-dom";

const reports = [
  {
    title: "B-204 Saket — 2BHK · CBP-04817",
    name: "Priya Mehta · Pro Plan · Today",
    status: "Live",
    flags: "1 flag",
    photos: "0 photos",
    rating: "4.8",
    time: "Today · 2:00 PM",
    live: true,
  },
  {
    title: "Dwarka Sec 10 — Studio · CBP-04839",
    name: "Ankit Rawat · Elite Plan · Today",
    status: "Completed",
    flags: "2 flags",
    photos: "28 photos",
    rating: "4.8",
    time: "Today · 10:00 AM",
  },
  {
    title: "Gurgaon Sec 49 — 2BHK · CBP-04814",
    name: "Rohan Verma · Pro Plan · Yesterday",
    status: "Completed",
    flags: "0 flags",
    photos: "30 photos",
    rating: "4.9",
    time: "Yesterday",
  },
  {
    title: "Noida Sec 18 — 1BHK · CBP-04811",
    name: "Kavya Nair · Pro Plan · 3 days ago",
    status: "Completed",
    flags: "0 flags",
    photos: "22 photos",
    rating: "5.0",
    time: "3 days ago",
  },
];

const ReportsPage = () => {
    const navigate=useNavigate();
  return (
    <div className="flex bg-[#f5f5f5] min-h-screen">

      {/* SIDEBAR */}
      <div className="fixed left-0 top-0 z-50">
        <ReportsSidebar />
      </div>

      {/* MAIN */}
      <div className="flex-1 ml-[260px] p-6">

        {/* HEADER */}
        <ReportsHeader />

        {/* CARDS */}
        <div className="space-y-6 mt-8">

          {reports.map((report, index) => (
            <ReportCard
              key={index}
              {...report}
            />
          ))}

        </div>

      </div>
    </div>
  );
};

export default ReportsPage;