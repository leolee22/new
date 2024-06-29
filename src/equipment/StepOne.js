import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import "../CalendarPage.css"; // Import custom CSS file for styling

function StepOne() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/StepTwo"); // Navigates to '/another-page'
  };

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div class="container ">
      <form class="row g-3">
        <div class="col-md-6">
          <label for="inputState" class="form-label">
            日期
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
        <div class="col-md-6">
          <label for="inputState" class="form-label">
            項目
          </label>
          <select id="inputState" class="form-select">
            <option selected>項目...</option>
            <option>房間</option>
            <option>設施</option>
            <option>器材</option>
          </select>
        </div>
        <div class="col-12">
          <label for="inputState" class="form-label">
            細項
          </label>
          <select id="inputState" class="form-select">
            <option selected>細項...</option>
            <option>洗澡間</option>
            <option>洗澡間</option>
            <option>洗澡間</option>
          </select>
        </div>

        <div class="col-12 ">
          <button
            type="submit"
            class="btn btn-info w-100"
            onClick={handleButtonClick}
          >
            提交
          </button>
        </div>
      </form>
    </div>
  );
}

export default StepOne;
