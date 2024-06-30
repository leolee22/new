import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import "../CalendarPage.css"; // Import custom CSS file for styling

import Content from "./Content";

function ActivityStepOne() {
  const [showComponent, setShowComponent] = useState(false);
  const handleButtonClick = () => {
    setShowComponent(true);
  };

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div class="container ">
      <form class="row g-3">
        <div class="col-6">
          <label for="inputState" class="form-label">
            活動開始日期
          </label>
          <div className="calendar-page">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select a date"
              calendarClassName="centered-calendar"
              wrapperClassName="date-picker-wrapper"
            />
          </div>
        </div>

        <div class="col-6">
          <label for="inputState" class="form-label">
            活動結束日期
          </label>
          <div className="calendar-page">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select a date"
              calendarClassName="centered-calendar"
              wrapperClassName="date-picker-wrapper"
            />
          </div>
        </div>

        <div class="col-12">
          <label for="inputState" class="form-label">
            活動名稱
          </label>
          <input
            class="form-control"
            type="text"
            placeholder="搜尋"
            aria-label="default input example"
          />
        </div>

        <div class="col-12 ">
          <button
            type="button"
            class="btn btn-info w-100"
            onClick={handleButtonClick}
          >
            搜尋
          </button>
          {showComponent && <Content />}
        </div>
      </form>
    </div>
  );
}

export default ActivityStepOne;
