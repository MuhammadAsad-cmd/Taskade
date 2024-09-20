"use client";
import React, { useState } from "react";
import PlusIcon from "../Icons/PlusIcon";
import Image from "next/image";
import AgentsIcon from "../Icons/AgentsIcon";
import TeamPopup from "../PopUps/TeamPopup";

const AiTeamPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <>
      <div className="flex h-full justify-center">
        <div className="flex max-w-md flex-col items-center text-center">
          <AgentsIcon />
          <p className="mb-2 flex flex-col text-lg font-bold text-appcolor-1000">
            Create your first agent team!
          </p>
          <p className="text-sm text-appcolor-500">
            Build and train your virtual team with Taskade. Add your agents into
            a team to chat with them!
            <span className="text-primary cursor-pointer hover:text-primary/80">
              Learn more.
            </span>
          </p>
          <button
            onClick={handleOpenPopup}
            className="mb-2 mt-8 flex items-center rounded-xl border border-solid border-appcolor-300 bg-appcolor-100 py-1 pl-2 pr-3 text-sm font-semibold text-appcolor-800 transition duration-300 ease-in-out hover:bg-appcolor-100 hover:bg-appcolor-200 hover:text-appcolor-800 hover:shadow-lg"
          >
            <div className="flex h-8 w-8 items-center justify-center transition duration-150 ease-in-out">
              <PlusIcon />
            </div>
            <span className="transition duration-150 ease-in-out">
              Create Team
            </span>
          </button>

          <a
            href="https://www.youtube.com/watch?v=7-EOl0lW_4c"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              width={300}
              height={300}
              unoptimized
              className="mt-8 w-full h-full rounded-xl"
              src="/images/ai-team.gif"
              alt="Custom AI Agent"
            />
          </a>
        </div>
      </div>
      {isPopupOpen && <TeamPopup onClose={handleClosePopup} />}{" "}
    </>
  );
};

export default AiTeamPage;
