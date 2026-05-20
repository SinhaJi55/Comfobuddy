import React from "react";
import {
  FileText,
  Download,
  Video,
  Star,
} from "lucide-react";

const ReportCard = ({
  title,
  name,
  status,
  flags,
  photos,
  rating,
  time,
  live,
}) => {
  return (
    <div
      className="
      bg-white
      border
      border-gray-200
      rounded-3xl
      p-6
      shadow-sm
      hover:shadow-xl
      transition-all
      duration-300
    "
    >
      <div className="flex items-start justify-between flex-wrap gap-6">

        {/* LEFT */}
        <div className="flex gap-5">

          <div
            className="
            w-14
            h-14
            rounded-2xl
            bg-orange-100
            flex
            items-center
            justify-center
            text-orange-500
          "
          >
            <FileText size={24} />
          </div>

          <div>

            <h2 className="text-2xl font-bold text-black">
              {title}
            </h2>

            <p className="text-gray-500 mt-2">
              {name}
            </p>

            {/* TAGS */}
            <div className="flex items-center gap-3 flex-wrap mt-4">

              <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                {status}
              </div>

              <div className="bg-red-100 text-red-500 px-3 py-1 rounded-full text-sm font-medium">
                {flags}
              </div>

              <div className="bg-blue-100 text-blue-500 px-3 py-1 rounded-full text-sm font-medium">
                {photos}
              </div>

              <div className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                <Star size={14} />
                {rating}
              </div>

            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col items-end gap-4">

          <p className="text-gray-500 font-medium">
            {time}
          </p>

          {live ? (
            <button
              className="
              flex
              items-center
              gap-2
              bg-orange-500
              text-white
              px-5
              py-3
              rounded-xl
              hover:bg-black
              transition-all
              duration-300
            "
            >
              <Video size={18} />
              Join
            </button>
          ) : (
            <button
              className="
              flex
              items-center
              gap-2
              border
              border-black
              text-black
              px-5
              py-3
              rounded-xl
              hover:bg-orange-500
              hover:text-white
              hover:border-orange-500
              transition-all
              duration-300
            "
            >
              <Download size={18} />
              PDF
            </button>
          )}

        </div>
      </div>
    </div>
  );
};

export default ReportCard;