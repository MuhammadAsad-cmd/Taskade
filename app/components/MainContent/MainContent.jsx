"use client";
import Image from "next/image";
import React, { useState } from "react";
import { MdChevronRight } from "react-icons/md";
import TabPages from "../TabPages/TabPages";
import Upgrade from "../Icons/Upgrade";
import HomeDropdown from "../Dropdowns/HomeDropdown/HomeDropdown";
import HomeIcon from "../Icons/HomeIcon";
import { LuPlus } from "react-icons/lu";
import { FaRobot } from "react-icons/fa";
import { TbLayoutList } from "react-icons/tb";
import { HiOutlineViewBoards } from "react-icons/hi";
import { FiShare2 } from "react-icons/fi";
import { LiaFileImportSolid } from "react-icons/lia";
import { CiFilter } from "react-icons/ci";
import ProjectContent from "../ProjectContent/ProjectContent";
import CreateFolder from "../CreateFolder/CreateFolder";

const MainContent = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <>
      <div className="flex h-full">
        <div className="duration-250 hidden w-[256px] shrink-0 flex-col border-r border-gray-200 transition-all duration-300 ease-in-out lg:flex">
          <div className="no-scrollbar h-full overflow-y-auto p-2">
            <div className="rounded-md">
              <div className="text-appcolor-800 relative mb-px flex cursor-pointer items-center gap-3 rounded-lg px-3 py-1 text-sm hover:bg-gray-100">
                <div className="flex h-6 w-6 items-center justify-center">
                  <HomeIcon />
                </div>
                Home
              </div>
            </div>

            <button
              onClick={handleOpenPopup}
              type="button"
              className="relative mb-px flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-700"
            >
              <LuPlus className="text-lg" />
              New folder
            </button>
          </div>
          {/* <div className="shadow:md m-2 mb-3 flex max-h-[180px] w-full max-w-[239px] flex-col gap-y-4 rounded-xl border border-solid border-gray-300 bg-gray-50 p-4">
            <h2 className="text-md flex items-center gap-x-2 font-medium">
              🎉 Try Pro!
            </h2>
            <p className="pb-2 text-sm">
              Access to advanced models, higher usage, custom agents, automation
              and more.
            </p>
            <div className="flex w-full cursor-pointer items-center justify-center gap-x-1.5 rounded-full bg-upgrade py-1.5 text-sm font-medium text-[#0c0500] hover:bg-upgrade/75">
              <Upgrade />
              Upgrade
            </div>
          </div> */}
        </div>

        <div className="flex h-full w-full flex-col">
          <div className="flex w-full flex-col md:pr-3">
            <div className="flex h-12 w-full items-center justify-between px-4 py-2">
              <div className="flex items-center gap-3">
                <div className="hidden items-center md:flex">
                  <div className="flex size-6 items-center justify-center rounded-lg bg-primary text-[15px] font-medium leading-6 text-white">
                    <span>W</span>
                  </div>
                  <span className="ml-2 text-sm leading-5">Workspace</span>
                </div>
                <div className="hidden size-5 items-center justify-center text-xl md:flex">
                  <MdChevronRight />
                </div>
                <HomeDropdown />
              </div>
              <div className="flex items-center">
                <button className="hidden shrink-0 rounded-full md:flex">
                  <Image
                    width={28}
                    height={28}
                    unoptimized
                    src="https://www.taskade.com/images/avatars/avatar_placeholder_2_green.png"
                    alt="User Avatar"
                    className="rounded-full"
                  />
                </button>
                <button className="text-appcolor-800 duration-250 hover:border-appcolor-500 hover:bg-appcolor-200 hover:text-appcolor-1000 aria-expanded:border-appcolor-500 aria-expanded:bg-appcolor-200 aria-expanded:text-appcolor-1000 ml-2 mr-2 flex h-8 items-center justify-center gap-1 rounded-full border border-transparent bg-transparent px-3 text-sm transition ease-in-out dark:hover:border-[#4c4d51] dark:aria-expanded:border-[#4c4d51]">
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
                <div className="flex h-5 w-px bg-appcolor md:mr-3"></div>
                <div className="duration-250 flex h-8 w-fit cursor-pointer items-center justify-center gap-x-1 rounded-full bg-upgrade px-3 pr-4 text-sm font-medium text-[#0c0500] transition ease-in-out hover:bg-upgrade/75 md:mr-3">
                  <Upgrade />
                  Upgrade
                </div>
              </div>
            </div>
            <TabPages />
          </div>
          <div className="px-4">
            <button
              className="flex h-8 cursor-pointer flex-row items-center rounded-3xl bg-gray-100 px-3 text-sm text-gray-600 hover:bg-gray-200 hover:text-gray-700"
              type="button"
            >
              <CiFilter className="text-xl" />
              <span>Filter</span>
            </button>
          </div>
          <div className="pb-15 mb-5 mt-3 px-4">
            <div className="custom-scrollbar mr-5 flex w-full justify-between gap-x-2 overflow-x-auto whitespace-nowrap">
              <div className="BgLinear group flex w-full cursor-pointer items-center gap-x-3 rounded-2xl border border-gray-300 px-4 py-4 duration-1000 ease-in-out hover:bg-gray-100">
                <FaRobot className="Linear text-xl text-[#ffcf14] duration-1000 ease-in-out group-hover:text-[#05bee2]" />
                <p className="text-base font-medium">Create with AI</p>
              </div>
              <div className="BgLinear group flex w-full cursor-pointer items-center gap-x-3 rounded-2xl border border-gray-300 px-4 py-4 duration-1000 ease-in-out hover:bg-gray-100">
                <TbLayoutList className="Linear text-xl text-[#ffcf14] duration-1000 ease-in-out group-hover:text-[#05bee2]" />
                <p className="item-title truncate text-base font-medium">
                  New List
                </p>
              </div>
              <div className="BgLinear group flex w-full cursor-pointer items-center gap-x-3 rounded-2xl border border-gray-300 px-4 py-4 duration-1000 ease-in-out hover:bg-gray-100">
                <HiOutlineViewBoards className="Linear text-xl text-[#ffcf14] duration-1000 ease-in-out group-hover:text-[#05bee2]" />
                <p className="item-title truncate text-base font-medium">
                  New Board
                </p>
              </div>
              <div className="BgLinear group flex w-full cursor-pointer items-center gap-x-3 rounded-2xl border border-gray-300 px-4 py-4 duration-1000 ease-in-out hover:bg-gray-100">
                <FiShare2 className="Linear text-xl text-[#ffcf14] duration-1000 ease-in-out group-hover:text-[#05bee2]" />
                <p className="item-title truncate text-base font-medium">
                  New Mind Map
                </p>
              </div>
              <div className="BgLinear group flex w-full cursor-pointer items-center gap-x-3 rounded-2xl border border-gray-300 px-4 py-4 duration-1000 ease-in-out hover:bg-gray-100">
                <LiaFileImportSolid className="Linear text-xl text-[#ffcf14] duration-1000 ease-in-out group-hover:text-[#05bee2]" />
                <p className="item-title truncate text-base font-medium">
                  Import
                </p>
              </div>
            </div>
          </div>
          <ProjectContent />
        </div>
      </div>
      {isPopupOpen && <CreateFolder onClose={handleClosePopup} />}{" "}
    </>
  );
};

export default MainContent;
