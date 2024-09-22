"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { FaCamera } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const UploadImage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("tab1");
  const [uploadedImage, setUploadedImage] = useState(null);
  const dropdownRef = useRef(null);

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener to detect clicks outside the dropdown
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup the event listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result); // Store the base64 image in state
      };
      reader.readAsDataURL(file);
    }
    setDropdownOpen(false);
  };

  const handleImageDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setUploadedImage(null); // Reset the uploaded image to null
  };

  return (
    <>
      <div className="relative">
        <div
          className="mt-4 flex h-[100px] w-[100px] cursor-pointer items-center justify-center rounded-lg border border-dashed"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          {uploadedImage ? (
            <div className="relative">
              <Image
                width={100}
                height={100}
                unoptimized
                src={uploadedImage}
                alt="Uploaded"
                className="h-full w-full rounded-lg object-cover"
              />
              <div
                onClick={handleImageDelete}
                className="absolute bottom-2 right-2 flex h-[30px] w-[30px] items-center justify-center rounded-lg bg-bgDrop"
              >
                <MdDelete className="text-xl text-black" />
              </div>
            </div>
          ) : (
            <FaCamera className="text-3xl" />
          )}
        </div>

        {dropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute left-1/2 z-50 mt-2 w-[402px] -translate-x-1/2 transform rounded-lg border bg-white shadow-lg"
          >
            <div className="flex w-full items-center justify-around gap-3 border-b text-center">
              <div
                className={`w-full cursor-pointer p-2.5 ${
                  activeTab === "tab1" ? "bg-bgDrop font-medium" : "font-normal"
                }`}
                onClick={() => handleTabSwitch("tab1")}
              >
                Choose Emoji
              </div>
              <div
                className={`w-full cursor-pointer p-2.5 ${
                  activeTab === "tab2" ? "bg-bgDrop font-medium" : "font-normal"
                }`}
                onClick={() => handleTabSwitch("tab2")}
              >
                Upload
              </div>
            </div>

            <div className="p-5">
              {activeTab === "tab1" ? (
                <div>
                  <p>Content for Tab 1</p>
                </div>
              ) : (
                <div>
                  <div className="flex w-full items-center justify-center">
                    <label
                      htmlFor="dropzone-file"
                      className="flex h-[66px] w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100"
                    >
                      <div className="flex flex-col items-center justify-center pb-6 pt-5">
                        <p className="text-sm text-gray-500">
                          <span className="font-semibold">
                            Select image to upload
                          </span>
                        </p>
                      </div>
                      <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                        onChange={handleImageUpload}
                      />
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UploadImage;
