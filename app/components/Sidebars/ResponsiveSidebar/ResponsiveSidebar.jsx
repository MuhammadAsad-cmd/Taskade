import React from "react";
import Image from "next/image";
import { TbClockPlus } from "react-icons/tb";
import { FaBell } from "react-icons/fa";
import SearchIcon from "../../Icons/SearchIcon";
import ClockIcon from "../../Icons/ClockIcon";
import SidebarLink from "../../SidebarLink/SidebarLink";
import TaskIcon from "../../Icons/TaskIcon";
import Tooltip from "../../Tooltip/Tooltip";
import Calender from "../../Icons/Calender";
import Star from "../../Icons/Star";
import Shared from "../../Icons/Shared";

const ResponsiveSidebar = ({ isOpen, onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target.id === "overlay") {
      onClose();
    }
  };
  return (
    <>
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-1000 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          id="overlay"
          className="fixed inset-0 bg-black bg-opacity-70"
          onClick={handleOverlayClick}
        >
          <div
            className={`absolute left-0 top-0 z-50 h-screen w-[59px] transform bg-white shadow-lg transition-transform duration-500 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="relative flex h-screen w-full flex-shrink-0 flex-col py-2 pb-0 transition-all duration-300 ease-in-out">
              <div className="flex flex-col items-center gap-y-4">
                <div className="flex w-full flex-col items-center gap-1">
                  <Tooltip text="Search" position="right">
                    <SidebarLink href="/search">
                      <SearchIcon />
                    </SidebarLink>
                  </Tooltip>
                  <Tooltip text="Recent" position="right">
                    <SidebarLink href="/recent">
                      <ClockIcon />
                    </SidebarLink>
                  </Tooltip>
                  <Tooltip text="My Tasks" position="right">
                    <SidebarLink href="/my-tasks">
                      <TaskIcon />
                    </SidebarLink>
                  </Tooltip>
                  <Tooltip text="Calender" position="right">
                    <SidebarLink href="/calendar">
                      <Calender />
                    </SidebarLink>
                  </Tooltip>
                  <Tooltip text="Starred" position="right">
                    <SidebarLink href="/lists/starred">
                      <Star />
                    </SidebarLink>
                  </Tooltip>
                  <Tooltip text="Shared with me" position="right">
                    <SidebarLink href="/shared">
                      <Shared />
                    </SidebarLink>
                  </Tooltip>
                </div>
                <Tooltip text="Workspace" position="right">
                  <div className="flex items-center justify-center rounded-2xl p-0.5">
                    <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-lg font-medium text-white">
                      W
                    </div>
                  </div>
                </Tooltip>
              </div>
              <div className="sticky bottom-0 z-10 mt-auto flex w-full flex-col items-center gap-y-px py-3">
                <Tooltip text="Quick Add" position="right">
                  <button className="relative flex size-9 cursor-pointer items-center justify-center rounded-xl text-gray-600 shadow-none transition-colors duration-200 ease-in-out hover:bg-gray-100 hover:text-gray-700">
                    <TbClockPlus className="text-xl" />
                  </button>
                </Tooltip>
                <Tooltip text="Activity" position="right">
                  <button
                    aria-haspopup="menu"
                    role="button"
                    tabindex="0"
                    className="relative flex size-9 cursor-pointer items-center justify-center rounded-xl text-gray-600 shadow-none transition-colors duration-200 ease-in-out hover:bg-gray-100 hover:text-gray-700"
                  >
                    <FaBell className="text-xl" />
                  </button>
                </Tooltip>

                <button
                  className="my-2 flex shrink-0 rounded-full"
                  aria-haspopup="menu"
                  role="button"
                >
                  <Image
                    width={30}
                    height={30}
                    unoptimized
                    src="https://www.taskade.com/images/avatars/avatar_placeholder_2_green.png"
                    alt="User Avatar"
                    className="rounded-full"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResponsiveSidebar;
