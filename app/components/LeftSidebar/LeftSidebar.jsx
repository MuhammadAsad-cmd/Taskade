import React from "react";
import SearchIcon from "../Icons/SearchIcon";
import ClockIcon from "../Icons/ClockIcon";
import TaskIcon from "../Icons/TaskIcon";
import Calender from "../Icons/Calender";
import Star from "../Icons/Star";
import Shared from "../Icons/Shared";
import Image from "next/image";
import HomeIcon from "../Icons/HomeIcon";

const LeftSidebar = () => {
  return (
    <>
      <div className="flex">
        {/* left Sidebar */}
        <div className="relative hidden transition-all duration-300 ease-in-out lg:flex h-screen flex-shrink-0 w-[59px] flex-col overflow-auto border-r border-gray-200 bg-gray-100 py-2 pb-0">
          <div className="flex items-center flex-col gap-y-4">
            <div className="flex flex-col items-center">
              <div className="flex  size-9 items-center justify-center p-0 shadow-none cursor-pointer border-0 relative rounded-xl text-gray-600 hover:text-gray-700 transition-colors ease-in-out duration-200 bg-transparent hover:bg-gray-200">
                <SearchIcon />
              </div>
              <div className="flex  size-9 items-center justify-center p-0 shadow-none cursor-pointer border-0 relative rounded-xl text-gray-600 hover:text-gray-700 transition-colors ease-in-out duration-200 bg-transparent hover:bg-gray-200">
                <ClockIcon />
              </div>
              <div className="flex  size-9 items-center justify-center p-0 shadow-none cursor-pointer border-0 relative rounded-xl text-gray-600 hover:text-gray-700 transition-colors ease-in-out duration-200 bg-transparent hover:bg-gray-200">
                <TaskIcon />
              </div>
              <div className="flex  size-9 items-center justify-center p-0 shadow-none cursor-pointer border-0 relative rounded-xl text-gray-600 hover:text-gray-700 transition-colors ease-in-out duration-200 bg-transparent hover:bg-gray-200">
                <Calender />
              </div>
              <div className="flex size-9 items-center justify-center p-0 shadow-none cursor-pointer border-0 relative rounded-xl text-gray-600 hover:text-gray-700 transition-colors ease-in-out duration-200 bg-transparent  hover:bg-gray-200">
                <Star />
              </div>
              <div className="flex size-9 items-center justify-center p-0 shadow-none cursor-pointer border-0 relative rounded-xl text-gray-600 hover:text-gray-700 transition-colors ease-in-out duration-200 bg-transparent  hover:bg-gray-200">
                <Shared />
              </div>
            </div>
            <div className="p-0.5  rounded-2xl border-2 border-gray-600 flex items-center justify-center">
              <div className="size-9 bg-vivid-pink rounded-xl flex items-center justify-center text-white font-medium text-lg">
                W
              </div>
            </div>
          </div>
          <div className="sticky bottom-0 z-10 mt-auto flex w-full flex-col items-center gap-y-px  py-3 ">
            <button className="relative flex size-9 cursor-pointer items-center justify-center rounded-xl text-gray-600 hover:text-gray-700 shadow-none transition-colors duration-200 ease-in-out  hover:bg-gray-200">
              <svg
                fill="currentColor"
                height="20"
                width="20"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M0 8.45089C0 3.7836 3.7836 0 8.45089 0C13.1182 0 16.9018 3.7836 16.9018 8.45089C16.9018 8.86511 16.566 9.20089 16.1518 9.20089C15.7376 9.20089 15.4018 8.86511 15.4018 8.45089C15.4018 4.61202 12.2898 1.5 8.45089 1.5C4.61202 1.5 1.5 4.61202 1.5 8.45089C1.5 12.2898 4.61202 15.4018 8.45089 15.4018C8.86511 15.4018 9.20089 15.7376 9.20089 16.1518C9.20089 16.566 8.86511 16.9018 8.45089 16.9018C3.7836 16.9018 0 13.1182 0 8.45089Z"
                  fill-rule="evenodd"
                ></path>
                <path
                  d="M12.3764 5.19951C12.6998 5.45827 12.7522 5.93024 12.4935 6.25369L7.75447 12.1774C7.50141 12.4938 7.04289 12.552 6.71882 12.3089L4.34931 10.5318C4.01794 10.2833 3.95079 9.81316 4.19931 9.48179C4.44784 9.15042 4.91794 9.08326 5.24931 9.33179L7.03728 10.6728L11.3222 5.31664C11.5809 4.9932 12.0529 4.94076 12.3764 5.19951Z"
                  fill-rule="evenodd"
                ></path>
                <path
                  d="M14.7827 10.2679C15.197 10.2679 15.5327 10.6036 15.5327 11.0179V18.5476C15.5327 18.9618 15.197 19.2976 14.7827 19.2976C14.3685 19.2976 14.0327 18.9618 14.0327 18.5476V11.0179C14.0327 10.6036 14.3685 10.2679 14.7827 10.2679Z"
                  fill-rule="evenodd"
                ></path>
                <path
                  d="M10.2677 14.7831C10.2677 14.3689 10.6035 14.0331 11.0177 14.0331H18.5475C18.9617 14.0331 19.2975 14.3689 19.2975 14.7831C19.2975 15.1973 18.9617 15.5331 18.5475 15.5331H11.0177C10.6035 15.5331 10.2677 15.1973 10.2677 14.7831Z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </button>

            <button
              aria-haspopup="menu"
              role="button"
              tabindex="0"
              className="relative flex size-9 cursor-pointer items-center justify-center rounded-xl text-gray-600 hover:text-gray-700 shadow-none transition-colors duration-200 ease-in-out  hover:bg-gray-200"
            >
              <svg
                fill="currentColor"
                height="20"
                width="20"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M5.18714 3.29909C6.21554 1.98997 7.8092 1 10.0004 1C12.1913 1 13.7849 1.99 14.8133 3.29906C15.8256 4.5875 16.2968 6.18834 16.2968 7.48663C16.2968 7.85928 16.2854 8.13593 16.2766 8.34585C16.2748 8.38902 16.2732 8.42936 16.2718 8.46714C16.2632 8.69293 16.2649 8.80142 16.2826 8.90888C16.3225 9.15331 16.4492 9.45443 16.9551 10.5554C16.9602 10.5664 16.9649 10.5775 16.9694 10.5889C17.3349 11.5177 17.2531 12.3722 16.8183 13.0963C16.4035 13.7872 15.7062 14.2961 14.9525 14.6673C13.4451 15.4097 11.4525 15.7293 10.0004 15.7293C8.54787 15.7293 6.55507 15.4097 5.04775 14.6673C4.294 14.2961 3.5967 13.7872 3.18194 13.0962C2.74728 12.372 2.66572 11.5175 3.03152 10.5887C3.03594 10.5774 3.04067 10.5664 3.04571 10.5554C3.55168 9.45443 3.67831 9.15331 3.71831 8.90888C3.7359 8.80142 3.73763 8.69293 3.72907 8.46714C3.72764 8.42936 3.72597 8.38903 3.72418 8.34586C3.71548 8.13593 3.70401 7.85928 3.70401 7.48663C3.70401 6.1884 4.17493 4.58756 5.18714 3.29909ZM7.51246 16.9017C7.78599 16.6604 8.2058 16.6839 8.45013 16.9539C9.34051 17.9381 10.6662 17.929 11.5509 16.9534C11.7955 16.6836 12.2154 16.6606 12.4886 16.9022C12.7619 17.1437 12.7851 17.5583 12.5405 17.8281C11.133 19.3803 8.88318 19.4011 7.45957 17.8275C7.21524 17.5575 7.23892 17.1429 7.51246 16.9017Z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </button>

            <button
              className="my-2 flex shrink-0 rounded-full"
              aria-haspopup="menu"
              role="button"
            >
              <Image
                width={30}
                height={30}
                unoptimized
                src="https://www.taskade.com/images/avatars/avatar_placeholder_2_green.png"
                alt="User Avatar"
                className="rounded-full"
              />
            </button>
          </div>
        </div>
        <div className="w-[250px] transition-all duration-300 hidden lg:flex shrink-0 flex-col border-r border-gray-200 bg-gray-100 duration-250 ease-in-out">
          <div className="h-full overflow-y-auto p-3 no-scrollbar">
            <div className="rounded-md">
              <div className="relative mb-px flex cursor-pointer items-center gap-3 rounded-lg px-3 py-1 text-sm text-appcolor-800 hover:bg-gray-200">
                <div className="flex h-6 w-6 items-center justify-center">
                  <HomeIcon />
                </div>
                Home
              </div>
            </div>

            <button
              type="button"
              className="relative mb-px flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-1 text-sm hover:text-gray-700 text-gray-600 hover:bg-gray-200"
            >
              <div className="flex h-6 w-6 shrink-0 items-center justify-center">
                <svg
                  fill="currentColor"
                  height="20"
                  stroke-width="0"
                  width="20"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99987 4.80566C10.3585 4.80566 10.6492 5.09639 10.6492 5.45502V9.35119H14.5454C14.904 9.35119 15.1948 9.64191 15.1948 10.0005C15.1948 10.3592 14.904 10.6499 14.5454 10.6499H10.6492V14.5461C10.6492 14.9047 10.3585 15.1954 9.99987 15.1954C9.64124 15.1954 9.35051 14.9047 9.35051 14.5461V10.6499H5.45435C5.09572 10.6499 4.80499 10.3592 4.80499 10.0005C4.80499 9.64191 5.09572 9.35119 5.45435 9.35119H9.35051V5.45502C9.35051 5.09639 9.64124 4.80566 9.99987 4.80566Z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div>
              New folder
            </button>
          </div>
          <div className="shadow:md p-4 m-2 mb-3 flex flex-col gap-y-4 rounded-xl border border-solid border-gray-300 bg-gray-100">
            <h2 className="text-md flex items-center gap-x-2 font-medium">
              🎉 Try Pro!
            </h2>
            <p className="pb-2 text-sm">
              Access to advanced models, higher usage, custom agents, automation
              and more.
            </p>
            <div className="flex w-full cursor-pointer items-center justify-center gap-x-1.5 rounded-full bg-upgrade py-1.5 text-sm font-medium text-[#0c0500] hover:bg-upgrade/75">
              <svg
                fill="currentColor"
                height="20"
                stroke-width="0"
                width="20"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8333 1.66699L2.5 11.667H10L9.16667 18.3337L17.5 8.33366H10L10.8333 1.66699Z"
                  fill-rule="evenodd"
                ></path>
              </svg>
              Upgrade
            </div>
          </div>
        </div>
        {/* left Sidebar */}
      </div>
    </>
  );
};

export default LeftSidebar;
