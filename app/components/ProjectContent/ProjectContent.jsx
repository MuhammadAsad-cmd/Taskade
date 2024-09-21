import React from "react";
import PlusIcon from "../Icons/PlusIcon";
import AutoIcon from "../Icons/AutoIcon";
import { FaRegCircleCheck } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";

const ProjectContent = () => {
  return (
    <>
      <div className="px-4">
        <button
          type="button"
          className="flex h-8 cursor-pointer flex-row items-center bg-transparent text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <span className="text-xs font-normal uppercase">Last Modified</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-px -translate-y-px"
            stroke="currentColor"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.99595 7L10.332 11.3266L14.668 7L16 8.33198L10.332 14L4.66397 8.33198L5.99595 7Z"
            ></path>
          </svg>
        </button>
      </div>

      <div className="hover:bg-gray-100">
        <div className="flex justify-between px-4 py-[14px]">
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
                <button
                  type="button"
                  className="flex h-6 items-center justify-center gap-0.5 whitespace-nowrap rounded-full border border-gray-200 bg-gray-100 px-2 hover:border-gray-200"
                >
                  <svg
                    className="text-[#E5E5E5]"
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="#E5E5E5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 8H14M3.33333 4H12.6667C13.403 4 14 4.59695 14 5.33333V14.6667C14 15.403 13.403 16 12.6667 16H3.33333C2.59695 16 2 15.403 2 14.6667V5.33333C2 4.59695 2.59695 4 3.33333 4Z"
                      stroke="#333333"
                      stroke-width="1.44689"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>Due Date</span>
                </button>
                <button
                  type="button"
                  className="flex h-6 items-center justify-center gap-0.5 whitespace-nowrap rounded-full border border-gray-200 bg-gray-100 px-2 hover:border-gray-200"
                >
                  <svg
                    width="14"
                    height="20"
                    viewBox="0 0 14 20"
                    fill="#E5E5E5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.6667 16V14.6667C12.6667 13.9594 12.3857 13.2811 11.8856 12.781C11.3855 12.281 10.7072 12 10 12H4.66667C3.95942 12 3.28115 12.281 2.78105 12.781C2.28095 13.2811 2 13.9594 2 14.6667V16M9.99935 6.66667C9.99935 8.13943 8.80544 9.33333 7.33268 9.33333C5.85992 9.33333 4.66602 8.13943 4.66602 6.66667C4.66602 5.19391 5.85992 4 7.33268 4C8.80544 4 9.99935 5.19391 9.99935 6.66667Z"
                      stroke="#333333"
                      stroke-width="1.44689"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>Assign</span>
                </button>
                <button
                  type="button"
                  className="flex h-6 items-center justify-center gap-0.5 whitespace-nowrap rounded-full border border-gray-200 bg-gray-100 px-2 hover:border-gray-200"
                >
                  <PlusIcon />
                  <span>Tag</span>
                </button>
                <button
                  type="button"
                  className="flex h-6 items-center justify-center gap-0.5 whitespace-nowrap rounded-full border border-gray-200 bg-gray-100 px-2 hover:border-gray-200"
                >
                  <AutoIcon />
                  <span>Automate</span>
                </button>
                <span className="text-sm text-[#666666]">
                  28 minutes ago by ma6530028
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <button className="flex size-10 items-center justify-center rounded-xl">
              <FaRegCircleCheck className="text-2xl text-[#ffcf14] duration-300 ease-in-out hover:text-[#ff4d03]" />
            </button>
            <button className="ml-1.5 flex h-10 w-10 items-center justify-center rounded-xl">
              <BsThreeDots className="text-2xl text-[#ffcf14] duration-300 ease-in-out hover:text-[#ff4d03]" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectContent;
