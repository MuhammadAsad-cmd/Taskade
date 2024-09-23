"use client";
import SearchIcon from "@/app/components/Icons/SearchIcon";
import StarSkelton from "@/app/components/Icons/Skeltons/StarSkelton";
import ResponsiveSidebar from "@/app/components/Sidebar/ResponsiveSidebar/ResponsiveSidebar";
import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import { RiMenuUnfold3Line } from "react-icons/ri";

const page = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleOpenSidebar = () => {
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <div className="flex min-h-screen flex-col">
        <div className="sticky top-0 flex h-12 w-full items-center justify-between rounded-t-xl border-b bg-white px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div
              onClick={handleOpenSidebar}
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md hover:bg-gray-100"
            >
              <IoMenu className="text-2xl text-gray-700" />
            </div>
            <h1 className="text-lg font-semibold text-gray-900">Starred</h1>
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
        {/* Header */}
        <div className="mt-4 flex h-12 shrink-0 items-center px-4 pr-3 text-sm">
          <button className="mr-1 block md:hidden">
            <RiMenuUnfold3Line className="text-2xl" />
          </button>

          <div className="flex items-center">
            <div className="flex items-center gap-y-2">
              <CiStar className="mr-2 text-2xl" />
              <p className="text-base font-medium">Starred </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-grow items-center justify-center">
          <div className="flex w-full max-w-[664px] flex-col items-center px-8 text-center">
            <div className="mb-6">
              <StarSkelton />
            </div>
            <div>
              <h4 className="mb-2 text-lg font-medium">
                There are no starred projects
              </h4>
              <p className="mb-4 text-base text-gray-500">
                Any projects you star will show up here.
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

export default page;
