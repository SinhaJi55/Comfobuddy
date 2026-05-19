// components/SectionHeader.jsx

const ScheduleSectionHeader = () => {
  return (
    <div className="flex items-center justify-between flex-wrap gap-5">
      <h1 className="text-3xl font-bold text-black">
        Today's Inspections — 8 May 2025
      </h1>

      <div className="flex gap-4">
        <button className="border border-orange-500 text-orange-500 px-5 py-3 rounded-xl hover:bg-orange-500 hover:text-white transition duration-300">
          ← Yesterday
        </button>

        <button className="bg-orange-500 text-white px-5 py-3 rounded-xl hover:scale-105 shadow-lg transition duration-300">
          Tomorrow →
        </button>
      </div>
    </div>
  );
};

export default ScheduleSectionHeader;