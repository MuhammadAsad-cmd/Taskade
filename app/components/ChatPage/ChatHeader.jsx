"use client";
import React, { useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import ResponsiveSidebar from "../Sidebar/ResponsiveSidebar/ResponsiveSidebar";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleOpenSidebar = () => {
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <>
      <div className="flex items-center justify-between px-4 py-3 shadow-md">
        <div
          onClick={handleOpenSidebar}
          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md hover:bg-gray-100 lg:hidden"
        >
          <IoMenu className="text-2xl text-gray-700" />
        </div>
        <div></div>
        <h1 className="text-lg font-bold">X-Two AI</h1>
        <button className="text-xl text-gray-400">
          <HiDotsHorizontal />
        </button>
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

export default Header;
