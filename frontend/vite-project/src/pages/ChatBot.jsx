import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  Bot,
} from "lucide-react";

const ChatBot = () => {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi 👋 Welcome to ComfortBuddy. How can I help you?",
    },
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      sender: "user",
      text: input,
    };

    let botReply =
      "Our team will help you shortly 😊";

    const msg = input.toLowerCase();

    if (msg.includes("room")) {
      botReply =
        "You can search verified rooms using the Search Rooms section.";
    }

    else if (msg.includes("owner")) {
      botReply =
        "Owners can list and manage properties after login.";
    }

    else if (msg.includes("buddy")) {
      botReply =
        "Buddy verifies rooms physically for trust and safety.";
    }

    else if (msg.includes("price")) {
      botReply =
        "Room prices depend on city, area and amenities.";
    }

    else if (msg.includes("contact")) {
      botReply =
        "You can contact us on WhatsApp support anytime.";
    }

    setMessages((prev) => [
      ...prev,
      userMessage,
      {
        sender: "bot",
        text: botReply,
      },
    ]);

    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-[9999] flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-[#ff7a2f] text-white shadow-[0_0_35px_rgba(255,115,0,0.5)]"
      >
        {open ? <X size={28} /> : <MessageCircle size={28} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 100,
              scale: 0.8,
            }}
            className="fixed bottom-28 right-6 z-[9999] flex h-[550px] w-[360px] flex-col overflow-hidden rounded-[32px] border border-orange-100 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
          >
            {/* Header */}
            <div className="flex items-center gap-3 bg-gradient-to-r from-orange-500 to-[#ff7a2f] p-5 text-white">
              <div className="rounded-full bg-white/20 p-2">
                <Bot size={24} />
              </div>

              <div>
                <h2 className="text-lg font-bold">
                  ComfortBuddy AI
                </h2>

                <p className="text-sm text-white/80">
                  Online Support Assistant
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 space-y-4 overflow-y-auto bg-orange-50/30 p-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.sender === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                      msg.sender === "user"
                        ? "bg-orange-500 text-white"
                        : "bg-white text-gray-700 shadow-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="flex items-center gap-3 border-t border-orange-100 bg-white p-4">
              <input
                type="text"
                placeholder="Ask something..."
                value={input}
                onChange={(e) =>
                  setInput(e.target.value)
                }
                className="h-12 flex-1 rounded-xl border border-orange-200 px-4 outline-none"
              />

              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={handleSend}
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-white"
              >
                <Send size={18} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;