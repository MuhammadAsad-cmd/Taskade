"use client";
import React, { useState } from "react";
import Sidebar from "../Icons/Sidebar";
import MenuIcon from "../Icons/MenuIcon";

const RightSidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="flex">
        {/* Original Collapsed Sidebar */}
        <div className="max-w-12 w-full overflow-hidden">
          <div className="flex h-full shrink-0 flex-col items-center border-l border-solid border-gray-200 w-12 min-w-12">
            {/* Sidebar Button */}
            <div className="group flex items-center justify-center w-full pb-2 pt-4">
              <button className="flex">
                <Sidebar />
              </button>
            </div>

            {/* Bottom Menu Icon */}
            <div className="sticky bottom-0 flex w-full flex-col items-center pb-3">
              <div
                onClick={toggleSidebar}
                className="flex size-8 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-appcolor transition duration-250 ease-in-out hover:scale-110  hover:text-gray-700"
              >
                <MenuIcon />
              </div>
            </div>
          </div>
        </div>

        {/* Expanded Sidebar */}
        {isExpanded && (
          <div className="max-w-80 w-80 overflow-hidden transition-all duration-300 bg-white border-l border-solid">
            <div className="flex flex-col h-full p-4">
              <h2 className="text-xl font-bold mb-4">Expanded Sidebar</h2>
              {/* Add content for expanded sidebar here */}
              <p className="text-sm text-gray-800">
                Here is the expanded sidebar content.
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default RightSidebar;
