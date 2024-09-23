import Link from "next/link";
import React from "react";

const SettingMainLayout = ({ children }) => {
  return (
    <>
      <div className="flex h-full w-full flex-col">
        {/* Sidebar */}
        <div className="flex flex-col gap-y-2">
          <h1 className="text-2xl font-bold">General</h1>
          <ul className="flex gap-1">
            <li className="flex cursor-pointer items-center justify-center rounded-full bg-gray-100 px-4 py-[5px]">
              <Link href="/settings">Account</Link>
            </li>
            <li className="flex cursor-pointer items-center justify-center rounded-full px-4 py-[5px] hover:bg-gray-100">
              <Link href="/settings/password">Password</Link>
            </li>
            <li className="flex cursor-pointer items-center justify-center rounded-full px-4 py-[5px] hover:bg-gray-100">
              <Link href="/settings/sso">Connected Accounts</Link>
            </li>
            <li className="flex cursor-pointer items-center justify-center rounded-full px-4 py-[5px] hover:bg-gray-100">
              <Link href="/settings/sessions">Sessions</Link>
            </li>
          </ul>
        </div>

        <div className="flex h-full shrink-0 flex-col gap-2 px-8 py-5">
          {children}
        </div>
      </div>
    </>
  );
};

export default SettingMainLayout;
