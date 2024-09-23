"use client";
import React, { useState } from "react";
import ResponsiveSidebar from "../Sidebar/ResponsiveSidebar/ResponsiveSidebar";
import { IoMenu } from "react-icons/io5";
import SearchIcon from "../Icons/SearchIcon";

const SettingPage = () => {
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
            <h1 className="text-lg font-semibold text-gray-900">Setting</h1>
          </div>
          {/* Search Bar */}
          <div className="relative w-full max-w-[320px] rounded-md shadow-sm">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search..."
              className="flex h-9 w-full rounded-md border border-gray-300 px-10 text-sm focus:border-gray-400 focus:ring-0"
            />
            <div className="absolute left-3 top-2">
              <SearchIcon className="text-gray-400" />
            </div>
          </div>
        </div>
      </div>
      {isSidebarOpen && (
        <ResponsiveSidebar
          isOpen={isSidebarOpen}
          onClose={handleCloseSidebar}
        />
      )}
    </>
  );
};

export default SettingPage;
