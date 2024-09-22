"use client";
import React, { useState } from "react";
import SearchIcon from "../Icons/SearchIcon";
import { FaCaretDown } from "react-icons/fa";
import { HiOutlineViewGrid } from "react-icons/hi";
import TaskIcon from "../Icons/TaskIcon";
import TaskSkelton from "../Icons/Skeltons/TaskSkelton";
import { RiMenuUnfold3Line2 } from "react-icons/ri";
import ResponsiveSidebar from "../Sidebars/ResponsiveSidebar/ResponsiveSidebar";

const TaskPage = () => {
  const [isExpandedType, setIsExpandedType] = useState(false);
  const [isExpandedSpace, setIsExpandedSpace] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [selectedSpace, setSelectedSpace] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const [isSideOpen, setIsSideOpen] = useState(false);

  const handleOpenSidebar = () => {
    setIsSideOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSideOpen(false);
  };

  const toggleExpansion = () => {
    setIsExpandedType(!isExpandedType);
  };
  const toggleExpansionSpace = () => {
    setIsExpandedSpace(!isExpandedSpace);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
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
  return (
    <>
      <div className="flex h-full w-full">
        {/* sidebar */}
        {isSidebarOpen && (
          <div
            className={`transition-all duration-700 ease-in-out ${isSidebarOpen ? "w-[260px] transition-all duration-700 ease-in-out" : "w-0"} shrink-0 flex-col border-r border-gray-200`}
          >
            <div className="h-full overflow-y-auto p-3">
              <div className="flex items-center justify-between">
                <p className="mb-4 mt-0.5 px-2 text-sm font-medium">Filters</p>

                <button onClick={toggleSidebar}>
                  <RiMenuUnfold3Line2 className="text-2xl" />
                </button>
              </div>
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
                          className="h-4 w-4 border checked:bg-primary checked:ring-primary hover:border-primary hover:checked:bg-hoverPrimary focus:ring-primary"
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
        )}

        <div className="flex h-full w-full flex-col justify-center">
          <div className="flex h-12 shrink-0 items-center px-4 pr-3 text-sm">
            <button
              onClick={handleOpenSidebar}
              className="mr-1 block md:hidden"
            >
              <RiMenuUnfold3Line2 className="text-2xl" />
            </button>
            {!isSidebarOpen && (
              <button onClick={toggleSidebar} className="mr-1 hidden md:block">
                <RiMenuUnfold3Line2 className="text-2xl" />
              </button>
            )}
            <div className="flex items-center gap-2 gap-y-2">
              <TaskIcon />
              My Tasks
            </div>
          </div>
          <div className="flex h-full w-full flex-col items-center justify-center overflow-y-auto px-4 py-3 pt-0 text-center">
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="mb-6">
                <TaskSkelton />
              </div>
              <h4 className="mb-2 text-lg font-medium">No tasks to display</h4>
              <p className="mb-4 text-center text-base text-gray-500">
                Adjust the filters to see more tasks.
              </p>
            </div>
          </div>
        </div>
      </div>
      {isSideOpen && (
        <ResponsiveSidebar isOpen={isSideOpen} onClose={handleCloseSidebar} />
      )}{" "}
    </>
  );
};

export default TaskPage;
