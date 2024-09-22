"use client";
import React, { useEffect, useRef, useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import HomeIcon from "../../Icons/HomeIcon";
import { IoIosArrowDown, IoIosNotifications } from "react-icons/io";
import { MdLockOutline, MdTaskAlt } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import {
  IoCheckmarkDoneSharp,
  IoCheckmarkSharp,
  IoSettingsOutline,
} from "react-icons/io5";
import { LuLayout } from "react-icons/lu";
import { CiGrid32 } from "react-icons/ci";
import { FaArchive } from "react-icons/fa";

const HomeDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div className="relative">
        <div
          onClick={toggleDropdown}
          className="flex cursor-pointer items-center"
        >
          <HomeIcon />
          <span className="ml-2 text-sm leading-5">Home</span>
          <IoIosArrowDown className="ml-1 text-[#bebfc3]" />
        </div>

        {/* Dropdown content */}
        {isOpen && (
          <div
            ref={dropdownRef}
            className="bg-bgDrop absolute left-0 mt-2 w-[218px] rounded-lg border shadow-lg"
          >
            <ul className="py-2">
              <li className="flex h-7 cursor-pointer items-center px-3 hover:bg-[#FFE4B5]">
                <button className="flex items-center gap-2">
                  <FiEdit2 className="text-lg" />
                  <span class="!overflow-visible">Edit</span>
                </button>
              </li>
              <li className="flex h-7 cursor-pointer items-center px-3 hover:bg-[#FFE4B5]">
                <button className="flex items-center gap-2">
                  <MdLockOutline className="text-lg" />
                  <span class="!overflow-visible">Security</span>
                </button>
              </li>
              <li className="flex h-7 cursor-pointer items-center px-3 hover:bg-[#FFE4B5]">
                <button className="flex items-center gap-2">
                  <AiOutlineUser className="text-lg" />
                  <span class="!overflow-visible">Members</span>
                </button>
              </li>
              <li className="flex h-7 cursor-pointer items-center px-3 hover:bg-[#FFE4B5]">
                <button className="flex items-center gap-2">
                  <IoIosNotifications className="text-lg" />
                  <span class="!overflow-visible">Notifications</span>
                </button>
              </li>
              <li className="flex h-7 cursor-pointer items-center px-3 hover:bg-[#FFE4B5]">
                <button className="flex items-center gap-2">
                  <IoCheckmarkSharp className="text-lg" />
                  <span class="!overflow-visible">Mark as Read</span>
                </button>
              </li>
              <p className="my-1 h-[1px] w-full bg-gray-200"></p>
              <li className="flex h-7 cursor-pointer items-center px-3 hover:bg-[#FFE4B5]">
                <button className="flex items-center gap-2">
                  <MdTaskAlt className="text-lg" />
                  <span class="!overflow-visible">Tasks</span>
                </button>
              </li>
              <li className="flex h-7 cursor-pointer items-center px-3 hover:bg-[#FFE4B5]">
                <button className="flex items-center gap-2">
                  <LuLayout className="text-lg" />
                  <span class="!overflow-visible">Templates</span>
                </button>
              </li>
              <li className="flex h-7 cursor-pointer items-center px-3 hover:bg-[#FFE4B5]">
                <button className="flex items-center gap-2">
                  <CiGrid32 className="text-lg" />
                  <span class="!overflow-visible">Roadmap</span>
                </button>
              </li>
              <li className="flex h-7 cursor-pointer items-center px-3 hover:bg-[#FFE4B5]">
                <button className="flex items-center gap-2">
                  <IoCheckmarkDoneSharp className="text-lg" />
                  <span class="!overflow-visible">Completed Projects</span>
                </button>
              </li>
              <p className="my-1 h-[1px] w-full bg-gray-200"></p>
              <li className="flex h-7 cursor-pointer items-center px-3 hover:bg-[#FFE4B5]">
                <button className="flex items-center gap-2">
                  <IoSettingsOutline className="text-lg" />
                  <span class="!overflow-visible">Settings</span>
                </button>
              </li>
              <li className="h-7 cursor-pointer px-3 text-[#EB6461] hover:bg-[#FFE4B5]">
                <button className="flex items-center gap-2">
                  <FaArchive className="text-lg" />
                  <span class="!overflow-visible">Archeive Workspace</span>
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default HomeDropdown;
