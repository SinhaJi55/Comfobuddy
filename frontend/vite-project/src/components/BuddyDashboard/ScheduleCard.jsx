const ScheduleCard = ({
  time,
  title,
  user,
  status,
}) => {
  return (
    <div className="flex items-start gap-6 border-b border-orange-500/10 pb-6">
      <h2 className="text-zinc-500 font-medium min-w-[90px]">
        {time}
      </h2>

      <div className="w-3 h-3 rounded-full bg-orange-500 mt-2"></div>

      <div>
        <h2 className="text-white text-lg font-semibold">
          {title}
        </h2>

        <p className="text-zinc-500 mt-1">
          {user}
        </p>

        <p className="text-orange-500 text-sm mt-2">
          {status}
        </p>
      </div>
    </div>
  );
};

export default ScheduleCard;