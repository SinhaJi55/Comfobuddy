import React from "react";
import { Send } from "lucide-react";

const ChatSection = () => {
  return (
    <div className="bg-white rounded-3xl border border-gray-200 p-5 shadow-sm h-full flex flex-col">

      {/* HEADER */}
      <div className="border-b border-gray-100 pb-4">
        <h2 className="text-2xl font-bold text-black">
          Live Chat
        </h2>
      </div>

      {/* CHAT */}
      <div className="flex-1 py-5 space-y-4 overflow-y-auto">

        <div className="bg-orange-100 text-black p-4 rounded-2xl w-fit max-w-[90%]">
          Theek hai. Kya pipe ke neeche check karoge?
        </div>

        <p className="text-sm text-gray-400">
          Priya • 2:02 PM
        </p>

        <div className="space-y-2 text-gray-500 text-sm">
          <p>📸 Photo captured</p>
          <p>🎥 Recording saved</p>
          <p>🚩 Flag raised from inspection</p>
        </div>

      </div>

      {/* INPUT */}
      <div className="flex items-center gap-3">

        <input
          type="text"
          placeholder="Message tenant..."
          className="flex-1 border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:border-orange-500"
        />

        <button className="w-14 h-14 rounded-2xl bg-orange-500 text-white flex items-center justify-center hover:bg-black transition-all duration-300">
          <Send size={22} />
        </button>

      </div>

    </div>
  );
};

export default ChatSection;