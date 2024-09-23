import React from "react";

const ChatHistory = () => {
  const History = [
    "Chat with Support",
    "AI Project Discussion",
    "Weather Info",
    "Joke Session",
  ];

  return (
    <div className="flex h-full w-64 flex-col space-y-4 p-4 text-white">
      {/* Start New Chat Button */}
      <button className="rounded bg-blue-500 px-3 py-2 hover:bg-blue-600">
        Start New Chat
      </button>

      {/* Chat History */}
      <div className="mt-4 flex-grow overflow-y-auto">
        {History.map((chat, index) => (
          <div
            key={index}
            className="mb-2 cursor-pointer rounded bg-gray-700 p-2 hover:bg-gray-600"
          >
            {chat}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatHistory;
