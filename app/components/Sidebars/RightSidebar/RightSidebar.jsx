"use client";
import React, { useState } from "react";
import { RiRobot2Fill } from "react-icons/ri";
import Tooltip from "../../Tooltip/Tooltip";
import Sidebar from "../../Icons/Sidebar";
import MenuIcon from "../../Icons/MenuIcon";
import AITeam from "../../Icons/AITeam";
import AgentPopup from "../../PopUps/AgentPopup";
import TeamPopup from "../../PopUps/TeamPopup";

const RightSidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState("agents");

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const [isTeamPopupOpen, setIsTeamPopupOpen] = useState(false);

  const handleOpenPopupTeam = () => {
    setIsTeamPopupOpen(true);
  };

  const handleClosePopupTeam = () => {
    setIsTeamPopupOpen(false);
  };

  return (
    <>
      <div className="flex">
        {/* Original Collapsed Sidebar */}
        <div className="w-full max-w-12">
          <div className="flex h-full w-12 min-w-12 shrink-0 flex-col items-center border-l border-solid border-gray-200">
            <Tooltip text="Toogle Agents" position="left">
              <div className="group flex w-full items-center justify-center pb-2 pt-4">
                <button className="flex">
                  <Sidebar />
                </button>
              </div>
            </Tooltip>
            <Tooltip text="Manage Agents" position="left" className="z-[9999]">
              <div className="sticky bottom-0 flex w-full flex-col items-center pb-3">
                <div
                  onClick={toggleSidebar}
                  className="duration-250 flex size-8 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-appcolor transition ease-in-out hover:scale-110 hover:text-gray-700"
                >
                  <MenuIcon />
                </div>
              </div>
            </Tooltip>
          </div>
        </div>

        {/* Expanded Sidebar */}
        {isExpanded && (
          <div className="w-80 border-l border-solid bg-white transition-all duration-300">
            <div className="flex h-full w-full flex-col">
              {/* Tab Navigation */}
              <div className="flex border-b border-gray-200">
                <div
                  onClick={() => handleTabChange("agents")}
                  className={`flex h-14 min-w-0 flex-1 cursor-pointer items-center justify-stretch ${activeTab === "agents" ? "bg-bgDrop font-semibold" : "hover:bg-bgDrop"} gap-x-2 border-b border-solid py-2 pl-5 pr-4 text-sm`}
                >
                  <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-bgDrop">
                    <RiRobot2Fill className="text-lg" />
                  </div>
                  <span className="text-textcolor-900 flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold">
                    AI Agents
                  </span>
                </div>
                <div
                  onClick={() => handleTabChange("teams")}
                  className={`flex h-14 min-w-0 flex-1 cursor-pointer items-center justify-stretch ${activeTab === "teams" ? "bg-bgDrop font-semibold" : "hover:bg-bgDrop"} gap-x-2 border-b border-solid py-2 pl-5 pr-4 text-sm`}
                >
                  <AITeam />
                  <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold">
                    AI Teams
                  </span>
                </div>
              </div>

              {/* Tab Content */}
              <div className="flex flex-col">
                {activeTab === "agents" && (
                  <div>
                    {/* Content for AI Agents */}
                    <div className="flex size-full flex-col p-2">
                      <div
                        onClick={handleOpenPopup}
                        className="text-md flex w-full cursor-pointer items-center justify-stretch gap-x-4 rounded-xl px-4 py-1 transition duration-150 ease-in-out hover:bg-bgDrop"
                      >
                        <div className="flex h-7 w-7 flex-none items-center justify-center rounded-full">
                          <RiRobot2Fill className="text-lg" />
                        </div>
                        <span className="flex-1 truncate text-sm">
                          Create agent
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "teams" && (
                  <div>
                    {/* Content for AI Teams */}

                    <div className="flex size-full flex-col p-2">
                      <div
                        onClick={setIsTeamPopupOpen}
                        className="text-md flex w-full cursor-pointer items-center justify-stretch gap-x-4 rounded-xl px-4 py-1 transition duration-150 ease-in-out hover:bg-bgDrop"
                      >
                        <div className="flex h-7 w-7 flex-none items-center justify-center rounded-full">
                          <AITeam />
                        </div>
                        <span className="flex-1 truncate text-sm">
                          Create Team
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      {isPopupOpen && <AgentPopup onClose={handleClosePopup} />}{" "}
      {isTeamPopupOpen && <TeamPopup onClose={handleClosePopupTeam} />}{" "}
    </>
  );
};

export default RightSidebar;
