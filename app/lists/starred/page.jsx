"use client";
import StarSkelton from "@/app/components/Icons/Skeltons/StarSkelton";
import ResponsiveSidebar from "@/app/components/Sidebars/ResponsiveSidebar/ResponsiveSidebar";
import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
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
        {/* Header */}
        <div className="flex h-12 shrink-0 items-center px-4 pr-3 text-sm">
          <button onClick={handleOpenSidebar} className="mr-1 block md:hidden">
            <RiMenuUnfold3Line className="text-2xl" />
          </button>

          <div className="flex items-center">
            <div className="flex items-center gap-y-2">
              <CiStar className="mr-2 text-2xl" />
              <p className="text-base">Starred </p>
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
