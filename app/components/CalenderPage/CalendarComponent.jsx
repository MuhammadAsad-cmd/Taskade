"use client";
import React, { useRef, useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { format } from "date-fns";
import { IoIosArrowDown } from "react-icons/io";
import { CiUser } from "react-icons/ci";

const CalendarComponent = () => {
  const calendarRef = useRef(null);
  const [currentMonth, setCurrentMonth] = useState("");
  const [today, setToday] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("For me");
  const dropdownRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const modalRef = useRef();

  // Function to update the current month
  const updateCurrentMonth = () => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      const currentDate = calendarApi.getDate();

      if (currentDate) {
        setCurrentMonth(
          `${currentDate.toLocaleString("default", { month: "long" })} ${currentDate.getFullYear()}`,
        );
      }
    }
  };

  // Ensure that updateCurrentMonth runs after calendar is initialized
  useEffect(() => {
    if (calendarRef.current) {
      updateCurrentMonth();
    }
  }, []);

  const handlePrev = () => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.prev();
    updateCurrentMonth();
  };

  const handleNext = () => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.next();
    updateCurrentMonth();
  };

  const handleToday = () => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.today();
    updateCurrentMonth();
    setToday(new Date());
  };

  const handleChangeView = (view) => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.changeView(view);
    updateCurrentMonth();
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item); // Update the selected item
    setIsOpen(false); // Close the dropdown
  };

  const handleDateClick = (arg) => {
    setSelectedDate(arg.date); // Set the selected date
    setIsModalOpen(true); // Open the modal
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // Close the modal
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const drop = ["For me", "For Others", "For Everyone"];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleModalClose(); // Use handleClose for animation
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="container mx-auto mt-4 overflow-auto">
      {/* Calendar Header */}
      <div className="mb-6 flex items-center justify-between gap-3 px-6 lg:px-8">
        <div className="flex items-center whitespace-nowrap">
          <div className="relative">
            <div
              onClick={toggleDropdown}
              className="flex cursor-pointer items-center rounded-lg border px-2 py-[7px]"
            >
              <CiUser className="text-lg" />
              <p className="ml-1 text-sm font-normal">{selectedItem}</p>
              <IoIosArrowDown className="ml-1 text-[#bebfc3]" />
            </div>

            {isOpen && (
              <div
                ref={dropdownRef}
                className="absolute left-0 z-[100] mt-2 flex w-[218px] items-center rounded-lg border bg-white shadow-lg"
              >
                <ul className="w-full py-2">
                  {drop.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => handleSelectItem(item)}
                      className={`flex h-7 w-full cursor-pointer items-center px-3 text-sm hover:bg-[#FFE4B5] ${
                        selectedItem === item ? "bg-[#FFE4B5]" : ""
                      }`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="hidden text-center text-2xl font-bold xl:flex">
          <span id="current-month">{currentMonth}</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center">
            <button
              className="rounded-l-lg border px-3 py-[7px] text-sm hover:bg-gray-50"
              onClick={handlePrev}
            >
              Previous
            </button>
            <button
              className="border-y px-3 py-[7px] text-sm hover:bg-gray-50"
              onClick={handleToday}
            >
              Today
            </button>
            <button
              className="rounded-r-lg border px-3 py-[7px] text-sm hover:bg-gray-50"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
          <div className="flex items-center">
            <button
              className="rounded-l-lg border px-3 py-[7px] text-sm hover:bg-gray-50"
              onClick={() => handleChangeView("dayGridMonth")}
            >
              Month
            </button>
            <button
              className="border-y px-3 py-[7px] text-sm hover:bg-gray-50"
              onClick={() => handleChangeView("timeGridWeek")}
            >
              Week
            </button>
            <button
              className="rounded-r-lg border px-3 py-[7px] text-sm hover:bg-gray-50"
              onClick={() => handleChangeView("timeGridDay")}
            >
              Day
            </button>
          </div>
        </div>
      </div>

      <div className="my-4 flex items-center justify-center text-center text-2xl font-bold xl:hidden">
        <span id="current-month">{currentMonth}</span>
      </div>

      {/* FullCalendar Component */}
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={false}
        height="auto"
        className="rounded-lg bg-white shadow-md"
        dayCellContent={(arg) => {
          const isToday =
            format(today, "yyyy-MM-dd") === format(arg.date, "yyyy-MM-dd");
          return {
            html: `<div class="${isToday ? "bg-[#fb6800] rounded-full flex justify-center items-center text-white size-8" : ""}">
            ${arg.dayNumberText}
          </div>`,
          };
        }}
        dayCellClassNames={(arg) => {
          const isToday =
            format(today, "yyyy-MM-dd") === format(arg.date, "yyyy-MM-dd");
          return [
            "cursor-pointer",
            isToday ? "bg-[#fb6800] text-white" : "",
            "hover:bg-gray-50",
          ];
        }}
        dateClick={handleDateClick} // Handle date click event
      />

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div
            ref={modalRef}
            className={`h-[431px] w-[550px] transform overflow-y-auto transition-transform duration-700 ${
              isModalOpen ? "scale-100" : "scale-0"
            } rounded-lg bg-white p-6 shadow-lg`}
          >
            <h2 className="text-xl font-semibold">Selected Date</h2>
            <p>{selectedDate && format(selectedDate, "MMMM dd, yyyy")}</p>
            <button
              className="mt-4 rounded-lg bg-[#fb6800] px-4 py-2 text-white"
              onClick={handleModalClose}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarComponent;
