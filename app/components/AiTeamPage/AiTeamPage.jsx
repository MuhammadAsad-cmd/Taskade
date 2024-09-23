"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FiPlus } from "react-icons/fi";
import AgentsIcon from "../Icons/AgentsIcon";
import TeamPopup from "../PopUps/TeamPopup";
import { IoMenu } from "react-icons/io5";
import ResponsiveSidebar from "../Sidebar/ResponsiveSidebar/ResponsiveSidebar";
import SearchIcon from "../Icons/SearchIcon";

const AiTeamPage = () => {
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
      <div className="h-full w-full">
        <div className="sticky top-0 flex h-12 w-full items-center justify-between rounded-t-xl border-b bg-white px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div
              onClick={handleOpenSidebar}
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md hover:bg-gray-100"
            >
              <IoMenu className="text-2xl text-gray-700" />
            </div>
            <h1 className="text-lg font-semibold text-gray-900">AI Teams</h1>
          </div>
          {/* Search Bar */}
          <div className="relative w-full max-w-[320px] rounded-md shadow-sm">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search teams..."
              className="flex h-9 w-full rounded-md border border-gray-300 px-10 text-sm focus:border-gray-400 focus:ring-0"
            />
            <div className="absolute left-3 top-2">
              <SearchIcon className="text-gray-400" />
            </div>
          </div>
        </div>
        <div className="custom-scrollbar flex h-[calc(100%-48px)] flex-col items-center justify-center overflow-y-auto p-4 pt-32">
          <div className="flex max-w-md flex-col items-center justify-center text-center">
            <AgentsIcon />
            <p className="text-appcolor-1000 mb-2 flex flex-col text-lg font-bold">
              Create your first agent team!
            </p>
            <p className="text-appcolor-500 text-sm">
              Build and train your virtual team with X-TWO. Add your agents into
              a team to chat with them!
              <span className="hover:text-hoverPrimary cursor-pointer text-primary duration-200 ease-in-out">
                Learn more.
              </span>
            </p>
            <button
              onClick={handleOpenPopup}
              className="duration-250 mb-2 mt-8 flex h-[42px] items-center justify-center gap-2 rounded-xl bg-primary px-2 text-sm font-semibold text-white transition ease-in-out hover:bg-primary/85 hover:shadow-lg"
            >
              <FiPlus className="text-xl" />
              <span>Create Team</span>
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
                src="/images/ai-team.gif"
                alt="Custom AI Agent"
              />
            </a>
          </div>
        </div>
      </div>
      {isPopupOpen && <TeamPopup onClose={handleClosePopup} />}{" "}
      {isSidebarOpen && (
        <ResponsiveSidebar
          isOpen={isSidebarOpen}
          onClose={handleCloseSidebar}
        />
      )}{" "}
    </>
  );
};

export default AiTeamPage;
