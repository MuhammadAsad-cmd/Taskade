"use client";
import React, { useState } from "react";
import HomeIcon from "../Icons/HomeIcon";
import { LuPlus } from "react-icons/lu";
import { RiMenuUnfold3Line2 } from "react-icons/ri";
import SearchIcon from "../Icons/SearchIcon";
import { FaCaretDown } from "react-icons/fa";
import { HiOutlineViewGrid } from "react-icons/hi";
import GlobalSecrchIcon from "../Icons/Skeltons/GlobalSecrchIcon";
import ResponsiveSidebar from "../Sidebar/ResponsiveSidebar/ResponsiveSidebar";
// import TeamPopup from "../PopUps/TeamPopup";
// import ResponsiveSidebar from "../Sidebars/ResponsiveSidebar/ResponsiveSidebar";

const SearchPage = () => {
  const [isExpandedType, setIsExpandedType] = useState(false);
  const [isExpandedSpace, setIsExpandedSpace] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [selectedSpace, setSelectedSpace] = useState("");

  const toggleExpansion = () => {
    setIsExpandedType(!isExpandedType);
  };
  const toggleExpansionSpace = () => {
    setIsExpandedSpace(!isExpandedSpace);
  };

  // Radio button options
  const types = [
    {
      name: "Project",
      count: 2,
    },
    {
      name: "Task",
      count: 4,
    },
    {
      name: "Comment",
      count: 7,
    },
  ];
  const workspace = [
    {
      name: "All",
      icon: <HiOutlineViewGrid />,
    },
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleOpenSidebar = () => {
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <>
      <div className="flex h-full w-full">
        <div className="duration-250 hidden w-[260px] shrink-0 flex-col border-r border-gray-200 transition-all duration-300 ease-in-out lg:flex">
          <div className="h-full overflow-y-auto p-3">
            <p className="mb-4 mt-0.5 px-2 text-sm font-medium">Filters</p>
            <form className="mb-1">
              <h3
                onClick={toggleExpansion}
                className="mb-1 flex w-full cursor-pointer items-center gap-x-1 text-xs uppercase"
              >
                <FaCaretDown
                  className={`transition-transform duration-300 ${
                    isExpandedType ? "rotate-180" : ""
                  }`}
                />
                Type
              </h3>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isExpandedType
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="mt-2 pl-2">
                  {types.map((type) => (
                    <label
                      key={type}
                      className="flex h-8 cursor-pointer items-center gap-x-2 rounded-lg px-2 text-sm duration-200 ease-in-out hover:bg-gray-100"
                    >
                      <input
                        type="radio"
                        name="type"
                        value={type}
                        checked={selectedType === type}
                        onChange={() => setSelectedType(type)}
                        className="hover:checked:bg-hoverPrimary h-4 w-4 border checked:bg-primary checked:ring-primary hover:border-primary focus:ring-primary"
                      />
                      <span>{type.name}</span>
                      <span className="ml-2 h-5 rounded-full border bg-gray-100 px-2 text-xs leading-4">
                        {type.count}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </form>
            <form className="mb-1">
              <h3
                onClick={toggleExpansionSpace}
                className="mb-1 flex w-full cursor-pointer items-center gap-x-1 text-xs uppercase"
              >
                <FaCaretDown
                  className={`transition-transform duration-300 ${
                    isExpandedSpace ? "rotate-180" : ""
                  }`}
                />
                Workspace & folders
              </h3>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isExpandedSpace
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="mt-2">
                  {workspace.map((space) => (
                    <label
                      key={space.name}
                      className="flex h-8 cursor-pointer items-center gap-x-2 rounded-lg px-2 pl-5 text-sm duration-200 ease-in-out hover:bg-gray-100"
                    >
                      <span>{space.icon}</span>
                      <span>{space.name}</span>
                    </label>
                  ))}
                </div>
                <div className="mt-1 flex h-8 cursor-pointer items-center gap-1 rounded-lg px-1 text-xs hover:bg-gray-100">
                  <FaCaretDown />
                  <div className="flex size-[22px] items-center justify-center rounded-lg bg-primary text-[15px] font-medium leading-6 text-white">
                    <span>W</span>
                  </div>
                  <span className="text-sm leading-5">Workspace</span>
                  <span className="ml-2 h-5 rounded-full border bg-gray-100 px-2 text-xs leading-4">
                    2
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="flex w-full flex-col justify-center">
          <div className="flex h-12 shrink-0 items-center px-4 pr-3 text-sm">
            <button
              onClick={handleOpenSidebar}
              className="mr-1 block md:hidden"
            >
              <RiMenuUnfold3Line2 className="text-2xl" />
            </button>
            <div className="flex items-center gap-2 gap-y-2">
              <SearchIcon />
              <p className="text-base font-medium"> Search </p>
            </div>
          </div>
          <div className="flex h-full w-full flex-col items-center justify-center overflow-y-auto px-4 py-3 pt-0 text-center">
            <div className="mb-2 mt-1 w-full">
              <input
                type="text"
                id="search-input"
                name="search-input"
                className="flex w-full whitespace-nowrap rounded-lg border bg-white px-3 py-2 text-base outline-none"
                placeholder="Search all projects, comments, and workspaces..."
              />
            </div>
            {/* Skelton  */}
            <div className="mt-10 flex h-full flex-col items-center justify-center text-center">
              <div className="mb-6">
                <GlobalSecrchIcon />
              </div>
              <h4 className="mb-2 text-lg font-medium">Global Search</h4>
              <p className="mb-4 text-center text-base text-gray-500">
                Search across all your workspaces, folders, and projects.
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

export default SearchPage;
