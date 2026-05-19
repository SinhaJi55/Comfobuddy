// components/ScheduleRow.jsx

const ScheduleRow = ({ row }) => {
  return (
    <tr className="border-b hover:bg-orange-50 transition duration-300">
      <td className="px-6 py-5 font-semibold text-black">
        {row.time}
      </td>

      <td className="px-6 py-5 font-bold text-black">
        {row.property}
      </td>

      <td className="px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold hover:rotate-12 transition duration-300">
            {row.initials}
          </div>

          <span className="font-medium text-black">
            {row.tenant}
          </span>
        </div>
      </td>

      <td className="px-6 py-5">
        <div className="bg-orange-500 text-white inline-block px-4 py-2 rounded-full text-sm font-bold">
          {row.plan}
        </div>
      </td>

      <td className="px-6 py-5 font-medium text-black">
        {row.duration}
      </td>

      <td className="px-6 py-5">
        <div className="bg-black text-white inline-block px-4 py-2 rounded-full text-sm">
          {row.status}
        </div>
      </td>

      <td className="px-6 py-5">
        <button className="bg-orange-500 text-white px-5 py-3 rounded-xl hover:scale-105 hover:shadow-xl transition duration-300">
          {row.action}
        </button>
      </td>
    </tr>
  );
};

export default ScheduleRow;