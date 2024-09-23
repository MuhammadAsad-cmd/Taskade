"use client"; // Mark this as a Client Component

import { useState } from "react";
import { FiUser } from "react-icons/fi";
import { IoSend } from "react-icons/io5";

export default function ChatInput() {
  const [content, setContent] = useState("");

  const handleInput = (e) => {
    const textarea = e.target;
    textarea.style.height = "auto"; // Reset height
    textarea.style.height = textarea.scrollHeight + "px"; // Adjust height
    setContent(textarea.value); // Update state with the input value
  };

  return (
    <form className="w-full">
      <div className="flex h-auto min-h-12 w-full items-center rounded-xl border bg-white px-4 text-sm shadow-lg">
        <button
          type="button"
          className="mr-3 text-2xl focus:outline-none"
          aria-label="User Icon"
        >
          <FiUser />
        </button>
        <div className="flex-grow">
          <textarea
            className="custom-scrollbar max-h-40 w-full resize-none overflow-auto border-none bg-transparent placeholder-gray-500 outline-none focus:ring-0"
            placeholder="Ask X-TWO AI..."
            name="content"
            rows="1"
            aria-label="Chat input"
            value={content}
            onInput={handleInput}
          ></textarea>
        </div>
        <button
          type="submit"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white hover:bg-primary/85 focus:outline-none"
          aria-label="Send message"
        >
          <IoSend className="text-xl" />
        </button>
      </div>
    </form>
  );
}
