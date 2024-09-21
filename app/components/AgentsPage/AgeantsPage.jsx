"use client";
import React, { useState } from "react";
import AgentsIcon from "../Icons/AgentsIcon";
import PlusIcon from "../Icons/PlusIcon";
import Image from "next/image";
import AgentPopup from "../PopUps/AgentPopup";
import { FiPlus } from "react-icons/fi";

const AgeantsPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <div className="flex h-full justify-center">
        <div className="flex max-w-md flex-col items-center justify-center text-center">
          <AgentsIcon />
          <p className="BgLinear mb-2 flex cursor-pointer flex-col text-lg font-bold">
            Create your first agent!
          </p>
          <p className="text-appcolor-500 text-sm">
            Build and train your virtual team with Taskade. Craft personalized
            AI Agents, enrich them with your knowledge, and automate tasks
            through custom commands, web search, and more.{" "}
            <span className="hover:text-hoverPrimary cursor-pointer text-primary duration-200 ease-in-out">
              Learn more.
            </span>
          </p>
          <button
            className="hover:bg-hoverPrimary duration-250 mb-2 mt-8 flex h-[42px] items-center justify-center gap-2 rounded-xl bg-primary px-2 text-sm font-semibold text-white transition ease-in-out hover:text-black hover:shadow-lg"
            onClick={handleOpenPopup} // Open the popup on click
          >
            <FiPlus className="text-xl" />
            <span>Create agent</span>
          </button>

          <a
            href="https://www.youtube.com/watch?v=7-EOl0lW_4c"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              width={300}
              height={300}
              unoptimized
              className="mt-8 h-full w-full rounded-xl"
              src="/images/ai-custom-agent.gif"
              alt="Custom AI Agent"
            />
          </a>
        </div>
      </div>
      {isPopupOpen && <AgentPopup onClose={handleClosePopup} />}{" "}
    </>
  );
};

export default AgeantsPage;
