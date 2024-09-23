"use client";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import SearchIcon from "../Icons/SearchIcon";
import { RiHomeLine, RiMenuUnfold3Line2 } from "react-icons/ri";
import { HiOutlineUsers } from "react-icons/hi";
import ShareSkelton from "../Icons/Skeltons/ShareSkelton";
import ResponsiveSidebar from "../Sidebar/ResponsiveSidebar/ResponsiveSidebar";

const SharedPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleOpenSidebar = () => {
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <>
      <div className="sticky top-0 flex h-12 w-full items-center justify-between gap-3 rounded-t-xl border-b bg-white px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <div
            onClick={handleOpenSidebar}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md hover:bg-gray-100"
          >
            <IoMenu className="text-2xl text-gray-700" />
          </div>
          <h1 className="text-lg font-semibold text-gray-900">Shared</h1>
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
      <div className="flex h-full w-full">
        <div className="hidden h-full w-[260px] shrink-0 flex-col border-r border-gray-200 transition-all duration-300 ease-in-out lg:flex">
          <div className="h-full overflow-y-auto p-3">
            <h3 className="mb-1 flex h-8 w-full cursor-pointer items-center gap-3 rounded-lg px-3 text-base duration-200 ease-in-out hover:bg-gray-100">
              <RiHomeLine className="text-left" />
              Projects
            </h3>
          </div>
        </div>

        <div className="flex h-full w-full flex-col justify-center">
          <div className="flex h-12 shrink-0 items-center px-4 pr-3 text-sm">
            <button className="mr-1 block md:hidden">
              <RiMenuUnfold3Line2 className="text-2xl" />
            </button>
            <div className="flex items-center gap-2 gap-y-2">
              <HiOutlineUsers className="text-xl" />
              Shared with me
            </div>
          </div>
          <div className="flex h-full w-full flex-col items-center justify-center overflow-y-auto px-4 py-3 pt-0 text-center">
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="mb-6">
                <ShareSkelton />
              </div>
              <h4 className="mb-2 text-lg font-medium">
                There are no shared projects
              </h4>
              <p className="mb-4 text-center text-base text-gray-500">
                Projects where you have project-only access are displayed here.
              </p>
            </div>
          </div>
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

export default SharedPage;
