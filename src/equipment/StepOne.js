import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import "../CalendarPage.css"; // Import custom CSS file for styling
import OptionOne from "./EquipmentOptionOne";
import OptionTwo from "./EquipmentOptionTwo";
import OptionThree from "./EquipmentOptionTwo";

function EquipmentStepOne() {
  const [selectedItem, setSelectedItem] = useState("");

  const handleItem = (event) => {
    setSelectedItem(event.target.value);
  };

  const option = [
    { id: 1, item: "房間" },
    { id: 2, item: "設施" },
    { id: 3, item: "器材" },
  ];

  const roomItem = [
    "洗澡間",
    "備餐間",
    "兒童閣",
    "客廳(A)",
    "客廳(B)",
    "自修室",
    "輔導室2",
  ];
  const facilityItem = ["自助洗衣及乾衣機"];
  const equipmentItem = ["熨斗及熨板", "衣車", "閘骨車"];

  const renderComponent = () => {
    switch (selectedItem) {
      case "房間":
        return <OptionOne item={option[0].item} subItem={roomItem} />;
      case "設施":
        return <OptionTwo item={option[1].item} subItem={facilityItem} />;
      case "器材":
        return <OptionThree item={option[2].item} subItem={equipmentItem} />;
      default:
        return null;
    }
  };

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div class="container ">
      <h3>預約設施</h3>
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
          <select
            id="inputState"
            class="form-select"
            value={selectedItem}
            onChange={handleItem}
          >
            <option selected>項目...</option>
            {option.map((optionItem) => (
              <option>{optionItem.item}</option>
            ))}
          </select>
        </div>
      </form>

      {renderComponent()}
    </div>
  );
}

export default EquipmentStepOne;
