"use client";
import React, { useState } from "react";
import { RiMenuUnfold3Line } from "react-icons/ri";
import ClockIcon from "../components/Icons/ClockIcon";
import RecentDropdown from "../components/Dropdowns/RecentDropdown/RecentDropdown";
import ResponsiveSidebar from "../components/Sidebars/ResponsiveSidebar/ResponsiveSidebar";

const Recent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleOpenSidebar = () => {
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <>
      <div className="flex min-h-screen flex-col">
        {/* Header */}
        <div className="flex h-12 shrink-0 items-center px-4 text-sm">
          <button onClick={handleOpenSidebar} className="mr-1 block md:hidden">
            <RiMenuUnfold3Line className="text-2xl" />
          </button>
          <div className="flex items-center">
            <div className="flex items-center gap-y-2">
              <ClockIcon />
              <p className="ml-2 text-sm">Recent </p>
            </div>
          </div>
        </div>
        <div className="px-3">
          <RecentDropdown />
        </div>
        <div class="mb-5 mt-2">
          <div className="hover:bg-gray-100">
            <div className="flex items-center justify-between px-4 py-[14px]">
              <div className="flex">
                <button
                  type="button"
                  className="mr-5 flex h-[50px] w-[50px] items-center justify-center rounded-lg text-light-gray hover:bg-gray-100"
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="#6a6b6f"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.73968 5.02905C8.59934 2.97793 11.4996 2.25 15.4875 2.25C16.3288 2.25 17.1211 2.28411 17.8585 2.35338C17.9065 2.35357 17.9534 2.35826 17.9988 2.36705C18.2217 2.38956 18.4394 2.41534 18.6518 2.44444C18.8078 2.46582 18.9532 2.53577 19.0672 2.6444L26.1547 9.3944C26.2699 9.50406 26.3472 9.64748 26.3755 9.80395C26.4165 10.0302 26.4537 10.2623 26.4875 10.5002C26.4908 10.5187 26.4934 10.5375 26.4953 10.5564C26.6604 11.7453 26.7375 13.0799 26.7375 14.5625C26.7375 18.9298 26.0876 22.0735 24.2458 24.1011C22.3843 26.1506 19.4806 26.875 15.4875 26.875C11.5003 26.875 8.5998 26.1505 6.7399 24.1009C4.89997 22.0733 4.25 18.9299 4.25 14.5625C4.25 10.2011 4.90009 7.05804 6.73968 5.02905ZM24.4932 9.88338L18.6055 4.27607V6.42963C18.6055 8.33762 20.1519 9.88338 22.0605 9.88338H24.4932ZM17.1055 3.79877V6.42963C17.1055 9.16663 19.3241 11.3834 22.0605 11.3834H25.0857C25.1875 12.3318 25.2375 13.3894 25.2375 14.5625C25.2375 18.8702 24.575 21.5078 23.1355 23.0926C21.7157 24.6556 19.3694 25.375 15.4875 25.375C11.6122 25.375 9.26895 24.6558 7.85072 23.0929C6.41253 21.508 5.75 18.8701 5.75 14.5625C5.75 10.2614 6.41241 7.62321 7.85094 6.03658C9.26941 4.47207 11.6129 3.75 15.4875 3.75C16.0563 3.75 16.5961 3.76638 17.1055 3.79877Z"
                    ></path>
                  </svg>
                </button>
                <div>
                  <p className="BgLinear text-[17px] font-medium">Untitled</p>
                  <div className="mt-0.5 flex flex-wrap items-center gap-1">
                    <span className="text-sm text-[#666666]">
                      2 days ago by ma6530028 — Workspace
                    </span>
                  </div>
                </div>
              </div>
              <div className="h-[7px] w-[120px] rounded-md bg-[#ffd014]"></div>
            </div>
          </div>
        </div>

        {/* Body */}
        {/* <div className="flex flex-grow items-center justify-center">
          <div className="flex w-full max-w-[664px] flex-col items-center px-8 text-center">
            <div className="mb-6">
              <StarSkelton />
            </div>
            <div>
              <h4 className="mb-2 text-lg font-medium">
                There are no starred projects
              </h4>
              <p className="mb-4 text-base text-gray-500">
                Any projects you star will show up here.
              </p>
            </div>
          </div>
        </div> */}
      </div>
      {isSidebarOpen && (
        <ResponsiveSidebar
          isOpen={isSidebarOpen}
          onClose={handleCloseSidebar}
        />
      )}{" "}
    </>
  );
};

export default Recent;
