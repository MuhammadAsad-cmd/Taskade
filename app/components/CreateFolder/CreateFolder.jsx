"use client";
import React, { useEffect, useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaCamera } from "react-icons/fa";
import { BsEmojiSmile } from "react-icons/bs";
import dynamic from "next/dynamic";
import UploadImage from "./UploadImage";

const EmojiPicker = dynamic(() => import("emoji-picker-react"), { ssr: false });

const CreateFolder = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const modalRef = useRef(null);
  const inputRef = useRef(null);
  const emojiPickerRef = useRef(null);

  // Close modal
  const handleClosePopup = () => {
    setIsOpen(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  // Detect outside click to close emoji picker or modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside both modal and emoji picker
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target)
      ) {
        // If emoji picker is open, close it only
        setShowEmojiPicker(false);
      }

      // If emoji picker is closed and click is outside the modal, close modal
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        !showEmojiPicker // Ensure modal closes only if emoji picker is not open
      ) {
        handleClosePopup();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showEmojiPicker]);

  // Function to handle emoji selection without closing the picker
  const onEmojiClick = (emojiObject) => {
    const cursorPosition = inputRef.current.selectionStart;
    const updatedText =
      inputValue.slice(0, cursorPosition) +
      emojiObject.emoji + // Get the emoji correctly
      inputValue.slice(cursorPosition);
    setInputValue(updatedText); // Set the new value with emoji
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div
          ref={modalRef}
          className={`shadow-3xl modal h-[500px] w-full max-w-[550px] ${isOpen ? "open" : "close"}`}
        >
          <button
            className="absolute -right-4 -top-4 flex h-10 w-10 items-center justify-center rounded-full bg-bgDrop text-xl font-medium shadow-xl"
            onClick={handleClosePopup}
            type="button"
          >
            <RxCross2 />
          </button>
          <div className="flex h-full flex-col items-center rounded-xl border border-solid border-gray-300 bg-white px-[60px] py-10">
            <h1 className="text-center text-2xl">Create a folder</h1>
            <div className="flex w-full flex-col items-center justify-center">
              <UploadImage />
              <div className="mt-5 w-full space-y-1.5">
                <label htmlFor="name" className="text-sm uppercase">
                  Name
                </label>
                <div className="relative w-full">
                  <input
                    ref={inputRef}
                    type="text"
                    name="name"
                    id="name"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} // Handle text input change
                    placeholder="Ex. Acme or Acme Marketing"
                    className="flex h-11 w-full items-center rounded-lg border px-2 text-sm outline-none focus:border"
                  />
                  <div>
                    <div
                      className="absolute right-2 top-1.5 flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-white hover:bg-gray-200"
                      onClick={() => setShowEmojiPicker(!showEmojiPicker)} // Toggle emoji picker
                    >
                      <BsEmojiSmile />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Show emoji picker when toggled */}
            {showEmojiPicker && (
              <div
                ref={emojiPickerRef}
                className="absolute bottom-20 right-10 z-50"
              >
                <EmojiPicker onEmojiClick={onEmojiClick} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateFolder;
