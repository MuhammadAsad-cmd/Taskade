"use client";
import React, { useEffect, useRef, useState } from "react";
import { LuPlus } from "react-icons/lu";
import { IoIosNotifications } from "react-icons/io";
import { RiRobot2Fill } from "react-icons/ri";
import AITeam from "../../Icons/AITeam";
import AutoIcon from "../../Icons/AutoIcon";
import { GoProjectSymlink } from "react-icons/go";
import { PiNoteBlankBold } from "react-icons/pi";
import { LiaFileImportSolid } from "react-icons/lia";
import { MdGridView } from "react-icons/md";

const CreateNewDropdown = () => {
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
          className="flex items-center whitespace-nowrap text-sm md:mr-3"
        >
          <button className="flex h-8 items-center justify-center gap-2 rounded-full bg-primary px-3 pr-4 text-sm text-white transition duration-300 ease-in-out hover:bg-hoverPrimary hover:text-black">
            <LuPlus className="text-xl" />
            Create new
          </button>
        </div>
        {/* Dropdown content */}
        {isOpen && (
          <div
            ref={dropdownRef}
            className={`bg-bgDrop absolute right-0 mt-2 w-[218px] rounded-lg border shadow-lg transition-transform duration-700 ease-in-out ${
              isOpen
                ? "translate-y-0 transform opacity-100"
                : "-translate-y-2 transform opacity-0"
            }`}
          >
            <ul className="py-2">
              <li className="flex h-7 cursor-pointer items-center px-3 hover:bg-[#FFE4B5]">
                <button className="flex items-center gap-2">
                  <RiRobot2Fill className="text-lg" />
                  <span class="!overflow-visible">AI Agent</span>
                </button>
              </li>
              <li className="flex h-7 cursor-pointer items-center px-3 hover:bg-[#FFE4B5]">
                <button className="flex items-center gap-2">
                  <AITeam />
                  <span class="!overflow-visible">AI Team</span>
                </button>
              </li>
              <li className="flex h-7 cursor-pointer items-center px-3 hover:bg-[#FFE4B5]">
                <button className="flex items-center gap-2">
                  <AutoIcon />
                  <span class="!overflow-visible">Automations</span>
                </button>
              </li>
              <li className="flex h-7 cursor-pointer items-center px-3 hover:bg-[#FFE4B5]">
                <button className="flex items-center gap-2">
                  <IoIosNotifications className="text-lg" />
                  <span class="!overflow-visible">Notifications</span>
                </button>
              </li>
              <p className="my-1 h-[1px] w-full bg-gray-200"></p>
              <li className="flex h-7 cursor-pointer items-center px-3 hover:bg-[#FFE4B5]">
                <button className="flex items-center gap-2">
                  <GoProjectSymlink className="text-lg" />
                  <span class="!overflow-visible">AI Project</span>
                </button>
              </li>
              <li className="flex h-7 cursor-pointer items-center px-3 hover:bg-[#FFE4B5]">
                <button className="flex items-center gap-2">
                  <PiNoteBlankBold className="text-lg" />
                  <span class="!overflow-visible">Start Blank</span>
                </button>
              </li>
              <li className="flex h-7 cursor-pointer items-center px-3 hover:bg-[#FFE4B5]">
                <button className="flex items-center gap-2">
                  <LiaFileImportSolid className="text-lg" />
                  <span class="!overflow-visible">Import</span>
                </button>
              </li>
              <p className="my-1 h-[1px] w-full bg-gray-200"></p>
              <span className="px-2 pb-1 pt-1 text-xs uppercase">
                Templates
              </span>
              <li className="flex h-7 cursor-pointer items-center px-3 hover:bg-[#FFE4B5]">
                <button className="flex items-center gap-2">
                  <PiNoteBlankBold className="text-lg" />
                  <span class="!overflow-visible">Create a Template</span>
                </button>
              </li>
              <li className="flex h-7 cursor-pointer items-center px-3 hover:bg-[#FFE4B5]">
                <button className="flex items-center gap-2">
                  <LuPlus className="text-lg" />
                  <span class="!overflow-visible">Browse Templates</span>
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default CreateNewDropdown;
