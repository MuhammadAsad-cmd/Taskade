"use client";
import React, { useEffect, useRef, useState } from "react";
import { RiArrowLeftSFill, RiArrowUpSFill } from "react-icons/ri";

const ProfileDropdown = () => {
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
      <div className="relative">
        <button
          onClick={handleDropdownToggle}
          className="flex size-8 items-center justify-center rounded-full border bg-primary text-center text-white transition-colors duration-75 hover:bg-primary/75"
        >
          <span>M</span>
        </button>

        {isDropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute right-0 z-[9999] mt-2 w-[220px] rounded-md bg-white shadow-lg"
          >
            {/* Arrow on top of dropdown */}
            <div className="absolute -top-4 right-4 text-white">
              <RiArrowUpSFill className="text-3xl" />
            </div>

            {/* Dropdown content */}
            <ul className="flex flex-col">
              <li className="block p-2 text-sm">Asad@gmail.com</li>
              <li className="block cursor-pointer border-y bg-[#eef2fe] p-2 text-sm font-medium duration-300 ease-in-out hover:bg-[#fafbfd]">
                Asad
              </li>
              <li className="block cursor-pointer p-2 text-sm font-medium duration-300 ease-in-out hover:bg-[#fafbfd]">
                Asad
              </li>
              <li className="block cursor-pointer p-2 text-sm font-medium duration-300 ease-in-out hover:bg-[#fafbfd]">
                Invite
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default ProfileDropdown;
