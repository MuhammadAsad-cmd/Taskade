"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaBell, FaRobot } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { LuChevronsUpDown } from "react-icons/lu";
import AiTeamIcon from "../Icons/AiTeamIcon";
import SidebarLink from "../SidebarLink/SidebarLink";
import ClockIcon from "../Icons/ClockIcon";
import TaskIcon from "../Icons/TaskIcon";
import Calender from "../Icons/Calender";
import Star from "../Icons/Star";
import Shared from "../Icons/Shared";
import SearchIcon from "../Icons/SearchIcon";
import { TbClockPlus } from "react-icons/tb";
import ProfileDropdown from "../Dropdowns/ProfileDropdown/ProfileDropdown";
import { RiArrowUpSFill } from "react-icons/ri";

const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown visibility
  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);
  return (
    <>
      <div className="hide-scroll-bar flex h-full flex-col bg-background-secondary">
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center justify-between gap-x-2 p-1">
            <div className="cursor-pointer transition-opacity hover:opacity-80">
              <Image
                width={32}
                height={32}
                unoptimized
                className="icon-xl shrink-0"
                src="/images/SidebarIcon.svg"
              />
            </div>
            <div className="relative">
              <div
                onClick={handleDropdownToggle}
                className="group flex cursor-pointer items-center space-x-1"
              >
                <div className="flex flex-col text-left">
                  <span className="w-[140px] text-left text-sm font-semibold">
                    Asad
                  </span>
                  <span className="w-[140px] text-left text-xs text-opacity-25 transition-colors">
                    Asad
                  </span>
                </div>
                <div>
                  <LuChevronsUpDown className="text-lg" />
                </div>
              </div>
              {isDropdownOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute left-1/2 z-10 mt-2 w-[250px] -translate-x-1/2 rounded-md bg-white p-2 shadow-lg"
                >
                  {/* Arrow on top of dropdown */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-white">
                    <RiArrowUpSFill className="text-3xl" />
                  </div>

                  {/* Dropdown content */}
                  <ul className="flex flex-col">
                    <li className="block p-2 text-sm text-gray-400">
                      Projects
                    </li>
                    <li className="block cursor-pointer rounded-lg bg-gray-100 p-2 text-sm duration-300 ease-in-out">
                      Asad
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div>
            <ProfileDropdown />
          </div>
        </div>

        <div className="mb-2.5 flex flex-col gap-0.5 px-2">
          <SidebarLink href="/">
            <FiFileText className="text-lg" />
            <p>Projects</p>
          </SidebarLink>
          <SidebarLink href="/agents">
            <FaRobot className="text-lg" />
            <p>AI Agents</p>
          </SidebarLink>
          <SidebarLink href="/agents/teams">
            <AiTeamIcon />
            <p>AI Teams</p>
          </SidebarLink>
          <p className="text-textColor px-3 py-1 text-xs font-medium">Pages</p>
          <SidebarLink href="/search">
            <SearchIcon />
            <p>Search</p>
          </SidebarLink>{" "}
          <SidebarLink href="/recent">
            <ClockIcon />
            <p>Recent</p>
          </SidebarLink>{" "}
          <SidebarLink href="/my-tasks">
            <TaskIcon />
            <p>My Tasks</p>
          </SidebarLink>{" "}
          <SidebarLink href="/calender">
            <Calender />
            <p>Calender</p>
          </SidebarLink>
          <SidebarLink href="/lists/starred">
            <Star />
            <p>Starred</p>
          </SidebarLink>
          <SidebarLink href="/shared">
            <Shared />
            <p>Shared</p>
          </SidebarLink>
          <p className="text-textColor px-3 py-1 text-xs font-medium">
            Quick Add
          </p>
          <div className="sidebarItem flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-[#1b1b23b3] hover:bg-customBlackTransparent">
            <TbClockPlus className="text-xl" />
            <p>Quick Add</p>
          </div>
          <p className="text-textColor px-3 py-1 text-xs font-medium">
            Activity
          </p>
          <SidebarLink href="/shared">
            <FaBell className="text-xl" />
            <p>Activity</p>
          </SidebarLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
