"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { MdChevronRight } from "react-icons/md";
import TabPages from "../TabPages/TabPages";
import HomeIcon from "../Icons/HomeIcon";
import { IoIosArrowDown } from "react-icons/io";
import Upgrade from "../Icons/Upgrade";

const MainContent = () => {
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
      <div className="flex w-full items-center flex-col">
        <div className="flex w-full flex-col md:pr-3">
          <div className="flex h-12 w-full px-4 justify-between items-center py-2">
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center">
                <div className="font-medium leading-6 text-[15px] text-white size-6 bg-vivid-pink rounded-lg flex items-center justify-center">
                  <span>W</span>
                </div>
                <span className="ml-2 text-sm leading-5">Workspace</span>
              </div>
              <div className="size-5 hidden md:flex items-center justify-center text-xl">
                <MdChevronRight />
              </div>
              <div className="relative">
                <div
                  onClick={toggleDropdown}
                  className="cursor-pointer flex items-center"
                >
                  <HomeIcon />
                  <span className="ml-2 text-sm leading-5">Home</span>
                  <IoIosArrowDown className="ml-1 text-[#bebfc3]" />
                </div>

                {/* Dropdown content */}
                {isOpen && (
                  <div
                    ref={dropdownRef}
                    className="absolute left-0 mt-2 w-[218px] bg-white shadow-lg border rounded-lg"
                  >
                    <ul className="py-2">
                      <li className="px-3 py-1 hover:bg-gray-100">
                        <button className="flex items-center gap-2">
                          <svg
                            class="text-upgrade"
                            fill="currentColor"
                            height="20"
                            stroke-width="0"
                            width="20"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.1215 1.00298C11.4161 1.13087 11.5911 1.43766 11.5513 1.75633L10.8196 7.60982H17.5001C17.7808 7.60982 18.0361 7.77221 18.1552 8.02641C18.2743 8.28062 18.2355 8.58076 18.0558 8.7964L9.72249 18.7964C9.5169 19.0431 9.17326 19.1248 8.87866 18.9969C8.58406 18.869 8.40904 18.5622 8.44887 18.2435L9.18056 12.39H2.50006C2.21935 12.39 1.96398 12.2277 1.84492 11.9735C1.72586 11.7192 1.76459 11.4191 1.9443 11.2035L10.2776 1.20346C10.4832 0.956743 10.8269 0.875101 11.1215 1.00298ZM4.04464 10.9432H10.0001C10.2076 10.9432 10.4051 11.0323 10.5424 11.1878C10.6797 11.3434 10.7437 11.5504 10.7179 11.7563L10.1906 15.9745L15.9555 9.05671H10.0001C9.79256 9.05671 9.59504 8.9676 9.45771 8.81204C9.32039 8.65648 9.25647 8.44944 9.28221 8.24353L9.80948 4.02535L4.04464 10.9432Z"
                              fill-rule="evenodd"
                            ></path>
                          </svg>
                          <span class="!overflow-visible text-upgrade">
                            Upgrade
                          </span>
                        </button>
                      </li>
                      <li className="px-3 py-1 hover:bg-gray-100">
                        <button className="flex items-center gap-2">
                          <svg
                            fill="currentColor"
                            height="20"
                            stroke-width="0"
                            width="20"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.8334 2.53307C15.6188 2.53307 15.4064 2.57532 15.2082 2.65742C15.01 2.73951 14.8299 2.85984 14.6782 3.01153L3.5641 14.1257L2.69776 17.3022L5.87433 16.4359L16.9885 5.32176C17.1402 5.17007 17.2605 4.98999 17.3426 4.79179C17.4247 4.5936 17.4669 4.38117 17.4669 4.16665C17.4669 3.95212 17.4247 3.7397 17.3426 3.5415C17.2605 3.34331 17.1402 3.16322 16.9885 3.01153C16.8368 2.85984 16.6567 2.73951 16.4585 2.65742C16.2603 2.57532 16.0479 2.53307 15.8334 2.53307ZM14.6545 1.32067C15.0283 1.16586 15.4288 1.08618 15.8334 1.08618C16.2379 1.08618 16.6385 1.16586 17.0122 1.32067C17.3859 1.47548 17.7255 1.70238 18.0116 1.98843C18.2976 2.27448 18.5245 2.61406 18.6793 2.9878C18.8342 3.36155 18.9138 3.76212 18.9138 4.16665C18.9138 4.57118 18.8342 4.97175 18.6793 5.34549C18.5245 5.71923 18.2976 6.05882 18.0116 6.34487L6.76158 17.5949C6.67256 17.6839 6.56184 17.7481 6.44038 17.7813L1.85705 19.0313C1.60658 19.0996 1.33872 19.0284 1.15515 18.8449C0.971572 18.6613 0.900437 18.3934 0.968745 18.143L2.21875 13.5596C2.25187 13.4382 2.31612 13.3275 2.40515 13.2384L13.6551 1.98843C13.9412 1.70238 14.2808 1.47548 14.6545 1.32067Z"
                              fill-rule="evenodd"
                            ></path>
                          </svg>
                          <span class="!overflow-visible text-upgrade">
                            Upgrade
                          </span>
                        </button>
                      </li>
                      <li className="px-3 py-1 hover:bg-gray-100">
                        <button className="flex items-center gap-2">
                          <svg
                            class="text-upgrade"
                            fill="currentColor"
                            height="20"
                            stroke-width="0"
                            width="20"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.1215 1.00298C11.4161 1.13087 11.5911 1.43766 11.5513 1.75633L10.8196 7.60982H17.5001C17.7808 7.60982 18.0361 7.77221 18.1552 8.02641C18.2743 8.28062 18.2355 8.58076 18.0558 8.7964L9.72249 18.7964C9.5169 19.0431 9.17326 19.1248 8.87866 18.9969C8.58406 18.869 8.40904 18.5622 8.44887 18.2435L9.18056 12.39H2.50006C2.21935 12.39 1.96398 12.2277 1.84492 11.9735C1.72586 11.7192 1.76459 11.4191 1.9443 11.2035L10.2776 1.20346C10.4832 0.956743 10.8269 0.875101 11.1215 1.00298ZM4.04464 10.9432H10.0001C10.2076 10.9432 10.4051 11.0323 10.5424 11.1878C10.6797 11.3434 10.7437 11.5504 10.7179 11.7563L10.1906 15.9745L15.9555 9.05671H10.0001C9.79256 9.05671 9.59504 8.9676 9.45771 8.81204C9.32039 8.65648 9.25647 8.44944 9.28221 8.24353L9.80948 4.02535L4.04464 10.9432Z"
                              fill-rule="evenodd"
                            ></path>
                          </svg>
                          <span class="!overflow-visible text-upgrade">
                            Upgrade
                          </span>
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center">
              <button className="hidden md:flex shrink-0 rounded-full">
                <Image
                  width={28}
                  height={28}
                  unoptimized
                  src="https://www.taskade.com/images/avatars/avatar_placeholder_2_green.png"
                  alt="User Avatar"
                  className="rounded-full"
                />
              </button>
              <button className="ml-2 mr-2 flex h-8 items-center justify-center gap-1 rounded-full border border-transparent bg-transparent px-3 text-sm text-appcolor-800 transition duration-250 ease-in-out hover:border-appcolor-500 hover:bg-appcolor-200 hover:text-appcolor-1000 aria-expanded:border-appcolor-500 aria-expanded:bg-appcolor-200 aria-expanded:text-appcolor-1000 dark:hover:border-[#4c4d51] dark:aria-expanded:border-[#4c4d51]">
                <svg
                  className="block"
                  fill="currentColor"
                  height="20"
                  stroke-width="0"
                  width="20"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.1776 6.21747C4.17821 4.09479 5.89926 2.375 8.0212 2.375C10.1435 2.375 11.8648 4.0954 11.8648 6.21859C11.8648 8.34099 10.1436 10.0622 8.0212 10.0622H7.99622C5.8807 10.0546 4.17058 8.33306 4.1776 6.21747ZM4.1776 6.21747C4.1776 6.21709 4.17761 6.21671 4.17761 6.21634L4.8026 6.21859H4.1776C4.1776 6.21822 4.1776 6.21784 4.1776 6.21747ZM8.0212 3.625C6.58907 3.625 5.4276 4.78593 5.4276 6.21859V6.22085C5.42246 7.64602 6.57436 8.80644 7.99961 8.81219H8.0212C9.45324 8.81219 10.6148 7.65064 10.6148 6.21859C10.6148 4.78593 9.45333 3.625 8.0212 3.625ZM14.5599 6.62031C14.905 6.62031 15.1849 6.90013 15.1849 7.24531V8.04349H16.0128C16.358 8.04349 16.6378 8.32332 16.6378 8.66849C16.6378 9.01367 16.358 9.29349 16.0128 9.29349H15.1849V10.0926C15.1849 10.4377 14.905 10.7176 14.5599 10.7176C14.2147 10.7176 13.9349 10.4377 13.9349 10.0926V9.29349H13.1087C12.7636 9.29349 12.4837 9.01367 12.4837 8.66849C12.4837 8.32332 12.7636 8.04349 13.1087 8.04349H13.9349V7.24531C13.9349 6.90013 14.2147 6.62031 14.5599 6.62031ZM4.82311 13.2556C3.99745 13.7772 3.62476 14.3925 3.62476 14.9083C3.62476 15.1533 3.70436 15.3319 3.85365 15.4869C4.01776 15.6573 4.2887 15.8199 4.69362 15.9557C5.5098 16.2294 6.68036 16.3331 8.02113 16.3331C9.36825 16.3331 10.5381 16.2256 11.3517 15.9489C11.7551 15.8116 12.0251 15.6476 12.1886 15.4762C12.3378 15.3198 12.4175 15.1395 12.4175 14.8934C12.4175 14.3805 12.0442 13.7688 11.2156 13.2497C10.4067 12.743 9.26825 12.4013 8.02113 12.4013C6.76726 12.4013 5.62964 12.7461 4.82311 13.2556ZM4.15554 12.1988C5.17895 11.5523 6.55201 11.1513 8.02113 11.1513C9.48209 11.1513 10.8544 11.5484 11.8791 12.1904C12.8842 12.82 13.6675 13.7667 13.6675 14.8934C13.6675 15.4669 13.4599 15.9546 13.093 16.3391C12.7406 16.7085 12.2657 16.9583 11.7542 17.1323C10.7378 17.478 9.397 17.5831 8.02113 17.5831C6.65383 17.5831 5.3137 17.482 4.29621 17.1408C3.78429 16.9692 3.30766 16.7219 2.9534 16.3541C2.58432 15.971 2.37476 15.4833 2.37476 14.9083C2.37476 13.7838 3.15125 12.8332 4.15554 12.1988Z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
                <span className="hidden md:block">Share</span>
              </button>
              <div className="md:mr-3 flex h-5 w-px bg-appcolor"></div>
              <div className="md:mr-3 flex h-8 w-fit cursor-pointer items-center justify-center gap-x-1 rounded-full bg-upgrade px-3 pr-4 text-sm font-medium text-[#0c0500] transition duration-250 ease-in-out hover:bg-upgrade/75">
                <Upgrade />
                Upgrade
              </div>
            </div>
          </div>

          <TabPages />
        </div>
      </div>
    </>
  );
};

export default MainContent;
