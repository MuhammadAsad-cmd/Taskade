"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const RecentDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Owned by anyone"); // Default value
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item); // Update the selected item
    setIsOpen(false); // Close the dropdown
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

  const drop = [
    "Owned by anyone",
    "Owned by me",
    "Not owned by me",
    "Member of space",
    "Not member of space",
  ];

  return (
    <>
      <div
        onClick={toggleDropdown}
        className="flex cursor-pointer items-center"
      >
        <span className="ml-2 text-sm leading-5">{selectedItem}</span>{" "}
        {/* Show selected item */}
        <IoIosArrowDown className="ml-1 text-[#bebfc3]" />
      </div>

      {/* Dropdown content */}
      {isOpen && (
        <div
          ref={dropdownRef}
          className="bg-bgDrop absolute left-0 mt-2 flex w-[218px] items-center rounded-lg border shadow-lg"
        >
          <ul className="w-full py-2">
            {drop.map((item, index) => (
              <li
                key={index}
                onClick={() => handleSelectItem(item)} // Set selected item on click
                className={`flex h-7 w-full cursor-pointer items-center px-3 text-sm hover:bg-[#FFE4B5] ${
                  selectedItem === item ? "bg-[#FFE4B5]" : "" // Highlight selected item
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default RecentDropdown;
