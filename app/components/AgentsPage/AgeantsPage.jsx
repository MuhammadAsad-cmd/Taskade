"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FiPlus } from "react-icons/fi";
import { FaRobot } from "react-icons/fa";
import AgentPopup from "../PopUps/AgentPopup";
import { IoMenu } from "react-icons/io5";
import AgentsIcon from "../Icons/AgentsIcon";
import ResponsiveSidebar from "../Sidebar/ResponsiveSidebar/ResponsiveSidebar";

const AgeantsPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleOpenSidebar = () => {
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <div className="min-h-screen w-full pb-20">
        <div className="sticky top-0 flex h-12 w-full items-center gap-3 rounded-t-xl border-b bg-white px-8">
          <div
            onClick={handleOpenSidebar}
            className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-md hover:bg-customBlackTransparent"
          >
            <IoMenu className="text-xl" />
          </div>
          <h1 className="text-base font-semibold text-gray-900">Get started</h1>
        </div>
        <div className="mt-6 flex h-full flex-col items-center justify-center">
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
              className="duration-250 mb-2 mt-8 flex h-[42px] items-center justify-center gap-2 rounded-xl bg-primary px-2 text-sm font-semibold text-white transition ease-in-out hover:bg-primary/85 hover:shadow-lg"
              onClick={handleOpenPopup}
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
      </div>
      {isPopupOpen && <AgentPopup onClose={handleClosePopup} />}{" "}
      {isSidebarOpen && (
        <ResponsiveSidebar
          isOpen={isSidebarOpen}
          onClose={handleCloseSidebar}
        />
      )}{" "}
    </>
  );
};

export default AgeantsPage;
