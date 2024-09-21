import React, { useEffect, useRef, useState } from "react";
import PlusIcon from "../Icons/PlusIcon";
import MediaIcon from "../Icons/MediaIcon";
import AutoIcon from "../Icons/AutoIcon";
import TeamIcon from "../Icons/TeamIcon";
import AgentIcon from "../Icons/AgentIcon";
import Navlink from "../Navlink/Navlink";
import { AiOutlineProject } from "react-icons/ai";

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
      <div className="flex items-center justify-between gap-3 px-4 py-2.5">
        <div className="custom-scrollbar flex w-full items-center gap-1 overflow-x-auto whitespace-nowrap">
          <Navlink href="/">
            <AiOutlineProject className="text-lg" />
            Projects
          </Navlink>
          <Navlink href="/agent">
            <AgentIcon /> AI Agents
          </Navlink>
          <Navlink href="/agent/teams">
            <TeamIcon />
            AI Teams
            <div className="flex h-5 items-center justify-center rounded-full bg-gray-100 px-2 text-[11px] font-bold uppercase text-gray-600">
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

          <div className="flex min-h-8 cursor-pointer items-center gap-1 rounded-full px-2 text-sm text-gray-600 duration-300 ease-in-out hover:text-vivid-pink"></div>
        </div>
        <div className="relative">
          <div
            onClick={toggleDropdown}
            className="flex items-center whitespace-nowrap text-sm md:mr-3"
          >
            <button className="hover:bg-hoverPrimary flex h-8 items-center justify-center gap-2 rounded-full bg-primary px-3 pr-4 text-sm text-white transition duration-300 ease-in-out hover:text-black">
              <PlusIcon />
              Create new
            </button>
          </div>
          {/* Dropdown content */}
          {isOpen && (
            <div
              ref={dropdownRef}
              className="absolute right-0 mt-2 w-[218px] rounded-lg border bg-white shadow-lg"
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
