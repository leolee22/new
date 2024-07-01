import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import "../CalendarPage.css";
import Content from "./Content";

function EquipmentStepOne() {
  const months = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];

  const years = ["2021", "2022", "2023", "2024"];

  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <div class="container ">
      <h3>我的積分</h3>
      <div class="row g-3">
        <div class="col-md-6">
          <label for="inputState" class="form-label">
            年份
          </label>
          <select
            id="inputState"
            class="form-select"
            value={selectedYear}
            onChange={handleYearChange}
          >
            <option value="">選擇年份</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div class="col-md-6">
          <label for="inputState" class="form-label">
            月份
          </label>
          <select
            id="inputState"
            class="form-select"
            value={selectedMonth}
            onChange={handleMonthChange}
          >
            <option value="">選擇月份</option>
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>
        {selectedMonth && selectedYear && (
          <Content month={selectedMonth} year={selectedYear} />
        )}{" "}
        {/* Pass selected month and year data to DataDisplay component */}
      </div>
    </div>
  );
}

export default EquipmentStepOne;
