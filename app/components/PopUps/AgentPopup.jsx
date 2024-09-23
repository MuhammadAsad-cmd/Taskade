"use client";
import { AgentsData } from "@/app/Data";
import React, { useEffect, useRef, useState } from "react";
import { BsInfoCircle } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";

const AgentPopup = ({ onClose }) => {
  const [selectedAgent, setSelectedAgent] = useState(AgentsData[0]);
  const [isOpen, setIsOpen] = useState(true);
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
      <div className="fixed -top-12 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div
          ref={modalRef}
          className={`modal h-full max-h-[75vh] w-full max-w-[1270px] rounded-2xl bg-white shadow-lg md:m-5 ${
            isOpen ? "open" : "close"
          }`}
        >
          <button className="absolute right-2 top-2" onClick={handleClose}>
            &times; {/* Close button */}
          </button>
          {/* Header  */}
          <div className="sticky top-0 z-30 flex w-full items-center justify-between gap-x-2 rounded-t-2xl border-b border-gray-200 bg-white px-2 py-2 md:px-5">
            <div className="flex items-center gap-2 whitespace-nowrap">
              <div className="hidden md:block">
                <FaPlus />
              </div>
              <span className="text-lg font-medium">Create Agent</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="border-appcolor-300 bg-appcolor-100 duration-250 hover:border-appcolor-400 hover:bg-appcolor-300 hidden cursor-pointer items-center gap-2 whitespace-nowrap rounded-xl border border-solid px-4 py-1.5 transition ease-in-out md:flex">
                <BsInfoCircle />
                Learn More
              </div>
              <div>
                <input
                  type="search"
                  className="border-appcolor-300 bg-appcolor-100 rounded-full border border-solid px-4 py-2 text-sm outline-none"
                  placeholder="Search agents..."
                />
              </div>
            </div>
          </div>
          {/* main */}
          <div className="flex h-full w-full rounded-b-2xl bg-white">
            <div className="sticky top-0 h-[450px] w-full max-w-[210px] flex-col gap-px overflow-y-auto p-3 sm:max-w-72">
              {AgentsData.map((button, index) => (
                <div
                  key={index}
                  onClick={() => handleAgentClick(button)}
                  className={`flex w-full cursor-pointer items-center gap-x-2 whitespace-nowrap rounded-xl px-2 py-2 text-sm hover:bg-gray-100 md:px-4 ${
                    selectedAgent.label === button.label ? "bg-gray-100" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {button.icon}
                    <span className="overflow-hidden text-ellipsis whitespace-nowrap max-sm:max-w-[100px] sm:w-full">
                      {button.label}
                    </span>
                  </div>
                  <span className="border-appcolor-300 text-2xs flex h-5 items-center rounded-full border border-solid bg-gray-100 px-1.5 font-bold text-gray-500">
                    {button.count}
                  </span>
                </div>
              ))}
            </div>

            <div className="custom-scrollbar w-full overflow-y-auto px-4 py-5">
              {" "}
              <div className="mb-4 text-lg">{selectedAgent.label}</div>
              <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
                          <div className="hover:bg-hoverPrimary mt-2 w-full rounded-2xl border-solid border-primary bg-primary py-2 text-center text-sm font-medium text-white transition duration-500 ease-in-out hover:text-black">
                            {button.button}
                          </div>
                        )}
                      </div>
                    </button>
                  ))
                ) : (
                  <div>No data available for this agent</div>
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
