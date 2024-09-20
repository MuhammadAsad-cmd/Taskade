"use client";
import { AgentsData } from "@/app/Data";
import React, { useEffect, useRef, useState } from "react";
import LearnIcon from "../Icons/LearnIcon";
import CreateIcon from "../Icons/CreateIcon";

const AgentPopup = ({ onClose }) => {
  const [selectedAgent, setSelectedAgent] = useState(AgentsData[0]);
  const [isOpen, setIsOpen] = useState(true); // To manage modal state
  const modalRef = useRef(null);

  const handleAgentClick = (agent) => {
    setSelectedAgent(agent);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose(); // Use handleClose for animation
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div
          ref={modalRef}
          className={`bg-white overflow-x-auto custom-scrollbar rounded-2xl shadow-lg w-full md:m-5 modal ${
            isOpen ? "open" : "close"
          }`}
        >
          <button className="absolute top-2 right-2" onClick={handleClose}>
            &times; {/* Close button */}
          </button>
          {/* Header  */}
          <div className="flex rounded-t-2xl sticky top-0 z-30 bg-white items-center justify-between w-full gap-x-2 border-b border-gray-200 px-5 py-2">
            <div className="flex gap-2 whitespace-nowrap items-center">
              <CreateIcon />
              <span className="text-lg font-medium">Create Agent</span>
            </div>
            <div className="flex gap-2 items-center">
              <div className="flex whitespace-nowrap cursor-pointer items-center gap-2 rounded-xl border border-solid border-appcolor-300 bg-appcolor-100 px-4 py-1.5 transition duration-250 ease-in-out hover:border-appcolor-400 hover:bg-appcolor-300">
                <LearnIcon />
                Learn More
              </div>
              <div>
                <input
                  type="search"
                  className="rounded-full border outline-none border-solid border-appcolor-300 bg-appcolor-100 px-4 py-2 text-sm"
                  placeholder="Search agents..."
                />
              </div>
            </div>
          </div>
          {/* main */}
          <div className="flex bg-white rounded-b-2xl">
            {/* sidebar */}
            <div className="sticky custom-scrollbar h-[420px] overflow-y-auto top-0 z-50 flex w-full max-w-[210px] sm:max-w-72 flex-col gap-px p-3 custom-scrollbar">
              {AgentsData.map((button, index) => (
                <div
                  key={index}
                  onClick={() => handleAgentClick(button)}
                  className={`flex cursor-pointer whitespace-nowrap items-center gap-x-2 rounded-xl w-full px-2 md:px-4 py-2 text-sm hover:bg-gray-100 ${
                    selectedAgent.label === button.label ? "bg-gray-100" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {button.icon}
                    <span className="text-ellipsis sm:w-full max-sm:max-w-[100px] whitespace-nowrap overflow-hidden">
                      {button.label}
                    </span>
                  </div>
                  <span className="flex h-5 items-center rounded-full text-gray-500 border border-solid border-appcolor-300 bg-gray-100 px-1.5 text-2xs font-bold">
                    {button.count}
                  </span>
                </div>
              ))}
            </div>
            {/* content */}
            <div className="w-full h-[420px] custom-scrollbar overflow-y-auto px-4 py-6">
              <div className="mb-4 text-lg">{selectedAgent.label}</div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {selectedAgent?.data && selectedAgent.data.length > 0 ? (
                  selectedAgent.data.map((button) => (
                    <button
                      key={button.id}
                      className="min-h-54 group flex w-full flex-col items-center justify-center whitespace-normal rounded-xl border px-4 py-6 pb-4 text-left transition duration-300 ease-in-out hover:scale-105 hover:shadow-sm"
                    >
                      <div className="flex w-full flex-col items-center justify-center gap-y-2">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
                          {button.icon}
                        </div>
                        <div className="flex">{button.label}</div>
                        {button.description && (
                          <p className="mb-3 line-clamp-2 text-center text-xs">
                            {button.description}
                          </p>
                        )}
                        {button.button && (
                          <div className="mt-2 w-full rounded-2xl border-solid border-primary bg-primary py-2 text-center text-sm text-white transition duration-500 ease-in-out group-hover:bg-primary/80">
                            {button.button}
                          </div>
                        )}
                      </div>
                    </button>
                  ))
                ) : (
                  <div>No data available for this agent</div> // Fallback content when there is no data
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentPopup;
