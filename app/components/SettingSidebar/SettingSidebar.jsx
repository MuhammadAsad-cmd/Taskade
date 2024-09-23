import Link from "next/link";
import React from "react";
import { FiUser } from "react-icons/fi";

const SettingSidebar = () => {
  return (
    <>
      <div className="no-scrollbar h-full w-full overflow-y-auto p-3">
        <div className="flex flex-col">
          <Link href="/settings">
            <div className="mb-1 flex min-h-8 cursor-pointer items-center gap-2 rounded-lg px-3 text-sm hover:bg-gray-100">
              <FiUser className="text-xl" />
              General
            </div>
          </Link>
          <Link href="/settings/plans">
            <div className="mb-1 flex min-h-8 cursor-pointer items-center gap-2 rounded-lg px-3 text-sm hover:bg-gray-100">
              <FiUser className="text-xl" />
              plans
            </div>
          </Link>
          <Link href="/settings/integrations">
            <div className="mb-1 flex min-h-8 cursor-pointer items-center gap-2 rounded-lg px-3 text-sm hover:bg-gray-100">
              <FiUser className="text-xl" />
              Integration
            </div>
          </Link>
          <Link href="/settings/notifications">
            <div className="mb-1 flex min-h-8 cursor-pointer items-center gap-2 rounded-lg px-3 text-sm hover:bg-gray-100">
              <FiUser className="text-xl" />
              Notification
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SettingSidebar;
