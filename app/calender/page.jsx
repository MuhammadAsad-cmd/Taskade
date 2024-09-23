import React from "react";
import CalenderPage from "../components/CalenderPage/CalenderPage";
import CalendarComponent from "../components/CalenderPage/CalendarComponent";

const page = () => {
  return (
    <>
      <div className="h-full">
        <CalenderPage />
        <CalendarComponent />
      </div>
    </>
  );
};

export default page;
