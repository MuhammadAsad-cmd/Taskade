"use client";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import SearchIcon from "../Icons/SearchIcon";
import { RiMenuUnfold3Line } from "react-icons/ri";
import Calender from "../Icons/Calender";
import ResponsiveSidebar from "../Sidebar/ResponsiveSidebar/ResponsiveSidebar";

const CalenderPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleOpenSidebar = () => {
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <>
      <div className="sticky top-0 z-50 flex h-12 w-full items-center justify-between gap-3 rounded-t-xl border-b bg-white px-3 lg:px-8">
        <div className="flex items-center gap-2 md:gap-4">
          <div
            onClick={handleOpenSidebar}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md hover:bg-gray-100"
          >
            <IoMenu className="text-2xl text-gray-700" />
          </div>
          <h1 className="whitespace-nowrap text-lg font-semibold text-gray-900">
            Calender
          </h1>
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
      <div className="mt-2 flex h-12 shrink-0 items-center px-6 text-sm lg:px-8">
        <button className="mr-3 block md:hidden">
          <RiMenuUnfold3Line className="text-2xl text-gray-700" />
        </button>
        <div className="flex items-center">
          <Calender className="text-gray-600" />
          <p className="ml-2 text-base font-medium text-gray-800">Calender</p>
        </div>
      </div>
      {isSidebarOpen && (
        <ResponsiveSidebar
          isOpen={isSidebarOpen}
          onClose={handleCloseSidebar}
        />
      )}{" "}
    </>
  );
};

export default CalenderPage;
