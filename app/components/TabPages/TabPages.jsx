import React from "react";

import MediaIcon from "../Icons/MediaIcon";
import AutoIcon from "../Icons/AutoIcon";
import TeamIcon from "../Icons/TeamIcon";
import AgentIcon from "../Icons/AgentIcon";
import Navlink from "../Navlink/Navlink";
import { AiOutlineProject } from "react-icons/ai";
import CreateNewDropdown from "../Dropdowns/CreateNewDropdown/CreateNewDropdown";

const TabPages = () => {
  return (
    <>
      <div className="flex items-center justify-between gap-3 px-4 py-2.5">
        <div className="custom-scrollbar flex w-full items-center gap-1 overflow-x-auto whitespace-nowrap">
          <Navlink href="/">
            <AiOutlineProject className="text-lg" />
            Projects
          </Navlink>
          <Navlink href="/">
            <AgentIcon /> AI Agents
          </Navlink>
          <Navlink href="/">
            <TeamIcon />
            AI Teams
            <div className="flex h-5 items-center justify-center rounded-full bg-gray-100 px-2 text-[11px] font-bold uppercase text-gray-600">
              new
            </div>
          </Navlink>
          <Navlink href="/">
            <AutoIcon />
            Automations
          </Navlink>
          <Navlink href="/">
            <MediaIcon />
            Media
          </Navlink>
          <div className="flex min-h-8 cursor-pointer items-center gap-1 rounded-full px-2 text-sm text-gray-600 duration-300 ease-in-out hover:text-vivid-pink"></div>
        </div>
        <CreateNewDropdown />
      </div>
    </>
  );
};

export default TabPages;
