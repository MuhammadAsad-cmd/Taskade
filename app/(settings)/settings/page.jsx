import SettingMainLayout from "@/app/components/SettingMainLayout/SettingMainLayout";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <SettingMainLayout>
        <div className="flex flex-col gap-y-2">
          <h1 className="text-2xl font-bold">General</h1>
        </div>
      </SettingMainLayout>
    </>
  );
};

export default page;
