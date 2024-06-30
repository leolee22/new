import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import "../CalendarPage.css"; // Import custom CSS file for styling

function EquipmentStepOne() {
  const option = [
    { id: 1, item: "洗澡間" },
    { id: 2, item: "洗澡間" },
    { id: 3, item: "洗澡間" },
    { id: 4, item: "洗澡間" },
    { id: 5, item: "洗澡間" },
    { id: 6, item: "洗澡間" },
  ];

  const option2 = [
    { id: 1, item: "房間" },
    { id: 2, item: "設施" },
    { id: 3, item: "器材" },
  ];

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/equipment/StepTwo"); // Navigates to '/another-page'
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
            {option2.map((optionItem) => (
              <option>{optionItem.item}</option>
            ))}
          </select>
        </div>
        <div class="col-12">
          <label for="inputState" class="form-label">
            細項
          </label>
          <select id="inputState" class="form-select">
            <option selected>細項...</option>
            {option.map((optionItem) => (
              <option>{optionItem.item}</option>
            ))}
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

export default EquipmentStepOne;
