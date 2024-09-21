import ProjectContent from "./components/ProjectContent/ProjectContent";
import { FaRobot } from "react-icons/fa";
import { TbLayoutList } from "react-icons/tb";
import { HiOutlineViewBoards } from "react-icons/hi";
import { FiShare2 } from "react-icons/fi";
import { LiaFileImportSolid } from "react-icons/lia";
import { CiFilter } from "react-icons/ci";

export default function Home() {
  return (
    <>
      {/* <MainContent /> */}

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
            <p className="item-title truncate text-base font-medium">Import</p>
          </div>
        </div>
      </div>

      <ProjectContent />
    </>
  );
}
