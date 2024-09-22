"use client";
import React, { useEffect, useRef, useState } from "react";
import TeamPopupIcon from "../Icons/TeamPopupIcon";
import PlusIcon from "../Icons/PlusIcon";
import AgentPopup from "./AgentPopup";

const TeamPopup = ({ onClose }) => {
  const [isAgentPopupOpen, setIsAgentPopupOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const modalRef = useRef(null);

  // Handle opening and closing of AgentPopup
  const handleOpenAgentPopup = () => {
    setIsAgentPopupOpen(true);
  };

  const handleCloseAgentPopup = () => {
    setIsAgentPopupOpen(false);
  };

  // Close TeamPopup with animation
  const handleCloseTeamPopup = () => {
    setIsOpen(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div
          //   ref={modalRef}
          className={`shadow-3xl modal h-[570px] w-full max-w-[550px] ${
            isOpen ? "open" : "close"
          }`}
        >
          <div className="flex h-full flex-col items-stretch rounded-3xl border border-solid border-gray-300 bg-white">
            <div className="flex w-full flex-1 flex-col gap-4 overflow-auto px-8 py-6">
              <div className="flex flex-col gap-1 pt-2">
                <h2 className="text-md flex items-center gap-1 font-medium">
                  Create Team
                </h2>
                <p className="text-sm">
                  Choose agents you want to include in this team for group
                  interactions.
                </p>
              </div>
              <div className="flex-wap duration-250 -ml-2 flex max-h-48 items-center gap-px rounded-xl transition ease-in-out">
                <TeamPopupIcon />
              </div>
              <div>
                <span className="uppercase">Name</span>
                <input
                  type="text"
                  maxLength="255"
                  placeholder="Untitled team"
                  className="flex w-full rounded-xl border border-solid bg-white px-3 py-2 text-sm leading-snug outline-none"
                />
              </div>
              <span className="uppercase">Add to team</span>
              <div
                onClick={handleOpenAgentPopup}
                className="no-scrollbar flex max-h-48 flex-col gap-y-px overflow-y-auto"
              >
                <button
                  type="button"
                  className="group flex items-center gap-3 rounded-xl px-2 py-2 text-sm hover:bg-gray-100"
                >
                  <div className="flex size-5 items-center justify-center">
                    <PlusIcon />
                  </div>
                  Create agent
                </button>
              </div>
            </div>
            <div className="mx-8 mb-8 mt-auto flex items-center justify-end border-t border-solid py-3">
              <button
                onClick={handleCloseTeamPopup}
                type="button"
                className="flex items-center rounded-xl px-6 py-2 text-sm font-medium hover:text-gray-700"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled=""
                className="flex items-center self-end rounded-xl bg-primary px-6 py-2 text-sm font-medium text-white hover:bg-primary/80 disabled:bg-primary/50 disabled:text-white/50"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>

      {isAgentPopupOpen && <AgentPopup onClose={handleCloseAgentPopup} />}
    </>
  );
};

export default TeamPopup;
