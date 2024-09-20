import React, { useEffect, useRef, useState } from "react";
import PlusIcon from "../Icons/PlusIcon";
import MediaIcon from "../Icons/MediaIcon";
import AutoIcon from "../Icons/AutoIcon";
import TeamIcon from "../Icons/TeamIcon";
import AgentIcon from "../Icons/AgentIcon";
import ProjectIcon from "../Icons/ProjectIcon";
import Navlink from "../Navlink/Navlink";

const TabPages = () => {
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
      <div className="py-2.5 px-4 flex gap-3 items-center justify-between">
        <div className="flex gap-1 overflow-x-auto custom-scrollbar whitespace-nowrap w-full items-center">
          <Navlink href="/">
            <ProjectIcon />
            Projects
          </Navlink>
          <Navlink href="/agent">
            <AgentIcon /> AI Agents
          </Navlink>
          <Navlink href="/agent/teams">
            <TeamIcon />
            AI Teams
            <div className="px-2 h-5 text-[11px] rounded-full font-bold flex items-center justify-center text-gray-600 bg-gray-100 uppercase">
              new
            </div>
          </Navlink>
          <Navlink href="/flows">
            <AutoIcon />
            Automations
          </Navlink>
          <Navlink href="/media">
            <MediaIcon />
            Media
          </Navlink>

          <div className="hover:text-vivid-pink text-gray-600 duration-300 ease-in-out text-sm cursor-pointer flex items-center min-h-8 px-2 rounded-full gap-1"></div>
        </div>
        <div className="relative">
          <div
            onClick={toggleDropdown}
            className="flex md:mr-3 whitespace-nowrap items-center text-sm"
          >
            <button className="flex h-8 items-center justify-center gap-2 rounded-full bg-primary px-3 pr-4 text-sm text-white transition duration-250 ease-in-out hover:bg-primary/80">
              <PlusIcon />
              Create new
            </button>
          </div>
          {/* Dropdown content */}
          {isOpen && (
            <div
              ref={dropdownRef}
              className="absolute right-0 mt-2 w-[218px] bg-white shadow-lg border rounded-lg"
            >
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100">Option 1</li>
                <li className="px-4 py-2 hover:bg-gray-100">Option 2</li>
                <li className="px-4 py-2 hover:bg-gray-100">Option 3</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TabPages;
