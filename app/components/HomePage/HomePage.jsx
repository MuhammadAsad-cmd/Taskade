"use client";
import { IoMenu } from "react-icons/io5";
import SearchIcon from "../Icons/SearchIcon";
import { CiFilter } from "react-icons/ci";
import { FaRobot } from "react-icons/fa";
import { TbLayoutList } from "react-icons/tb";
import { HiOutlineViewBoards } from "react-icons/hi";
import { FiShare2 } from "react-icons/fi";
import { LiaFileImportSolid } from "react-icons/lia";
import ProjectContent from "../ProjectContent/ProjectContent";
import ResponsiveSidebar from "../Sidebar/ResponsiveSidebar/ResponsiveSidebar";
import { useState } from "react";

const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleOpenSidebar = () => {
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <>
      <div className="flex h-full w-full flex-col">
        <div className="sticky top-0 flex h-12 w-full items-center justify-between gap-3 rounded-t-xl border-b bg-white px-2 lg:px-8">
          <div className="flex items-center gap-4">
            <div
              onClick={handleOpenSidebar}
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md hover:bg-gray-100"
            >
              <IoMenu className="text-2xl text-gray-700" />
            </div>
            <h1 className="text-lg font-semibold text-gray-900">Products</h1>
          </div>
          {/* Search Bar */}
          <div className="relative w-full max-w-[320px] rounded-md shadow-sm">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search products..."
              className="flex h-9 w-full rounded-md border border-gray-300 px-10 text-sm focus:border-gray-400 focus:ring-0"
            />
            <div className="absolute left-3 top-2">
              <SearchIcon className="text-gray-400" />
            </div>
          </div>
        </div>
        <div className="mt-6 px-4">
          <button
            className="flex h-8 cursor-pointer flex-row items-center rounded-md bg-gray-100 px-3 text-sm text-gray-600 hover:bg-gray-200 hover:text-gray-700"
            type="button"
          >
            <CiFilter className="text-xl" />
            <span>Filter</span>
          </button>
        </div>
        <div className="pb-15 mb-5 mt-3 px-4">
          <div className="custom-scrollbar mr-5 flex w-full justify-between gap-x-2 overflow-x-auto whitespace-nowrap">
            <div className="group flex w-full cursor-pointer items-center gap-x-3 rounded-md border border-gray-300 px-4 py-4 duration-1000 ease-in-out hover:bg-gray-50">
              <FaRobot className="Linear text-xl duration-1000 ease-in-out" />
              <p className="text-base font-medium">Create with AI</p>
            </div>
            <div className="group flex w-full cursor-pointer items-center gap-x-3 rounded-md border border-gray-300 px-4 py-4 duration-1000 ease-in-out hover:bg-gray-50">
              <TbLayoutList className="text-xl duration-1000 ease-in-out" />
              <p className="text-base font-medium">New List</p>
            </div>
            <div className="group flex w-full cursor-pointer items-center gap-x-3 rounded-md border border-gray-300 px-4 py-4 duration-1000 ease-in-out hover:bg-gray-50">
              <HiOutlineViewBoards className="text-xl duration-1000 ease-in-out" />
              <p className="text-base font-medium">New Board</p>
            </div>
            <div className="group flex w-full cursor-pointer items-center gap-x-3 rounded-md border border-gray-300 px-4 py-4 duration-1000 ease-in-out hover:bg-gray-50">
              <FiShare2 className="text-xl duration-1000 ease-in-out" />
              <p className="text-base font-medium">New Mind Map</p>
            </div>
            <div className="group flex w-full cursor-pointer items-center gap-x-3 rounded-md border border-gray-300 px-4 py-4 duration-1000 ease-in-out hover:bg-gray-50">
              <LiaFileImportSolid className="text-xl duration-1000 ease-in-out" />
              <p className="item-title text-base font-medium">Import</p>
            </div>
          </div>
        </div>
        <ProjectContent />
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

export default HomePage;
