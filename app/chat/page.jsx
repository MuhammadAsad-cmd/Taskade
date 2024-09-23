import React from "react";
import ChatHistory from "../components/ChatPage/ChatHistory";
import Header from "../components/ChatPage/ChatHeader";
import ChatSuggestions from "../components/ChatPage/ChatSuggestions";
import ChatInput from "../components/ChatPage/ChatInput";

const page = () => {
  return (
    <>
      <div className="flex h-full w-full">
        {/* <ChatHistory /> */}

        {/* Main Content Area */}
        <div className="flex flex-grow flex-col">
          {/* Header */}
          <Header />

          {/* Suggestions or Chat Window */}
          <main className="flex flex-grow items-center justify-center">
            <ChatSuggestions />
          </main>

          <div className="px-2">
          <ChatInput />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
