import React, { useState } from "react";
import { Link } from "react-router-dom";

const timeSlots = [
  { id: 1, time: "11:00 - 12:00", available: 1 },
  { id: 2, time: "11:00 - 12:00", available: 1 },
  { id: 3, time: "11:00 - 12:00", available: 1 },
  { id: 4, time: "11:00 - 12:00", available: 1 },
  { id: 5, time: "11:00 - 12:00", available: 1 },
  { id: 6, time: "11:00 - 12:00", available: 1 },
];

const data = {
  equipment: "預約設施 : 洗澡間",
  date: "2024-06-29",
  notice: "* 會員每日最多可預約 4 次",
};

function EquipmentStepTwo() {
  const [selectedSlots, setSelectedSlots] = useState([]);

  const handleCheckboxChange = (id) => {
    setSelectedSlots((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((slotId) => slotId !== id)
        : [...prevSelected, id]
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected time slots:", selectedSlots);
    // Add your form submission logic here
  };

  return (
    <div class="container">
      <div class="card bg-info-subtle">
        <div class="card-header text-bg-info p-3">
          <h3>房間</h3>
        </div>
        <div class="card-body">
          <h5 class="card-title">{data.equipment}</h5>
          <p class="card-text mb-0">{data.date}</p>
          <p class="card-text">{data.notice}</p>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">選擇</th>
              <th scope="col">時間</th>
              <th scope="col">剩餘配額</th>
            </tr>
          </thead>
          <tbody>
            {timeSlots.map((slot) => (
              <>
                <tr>
                  <th scope="row">
                    <input
                      type="checkbox"
                      id={`slot-${slot.id}`}
                      checked={selectedSlots.includes(slot.id)}
                      onChange={() => handleCheckboxChange(slot.id)}
                    />
                  </th>
                  <td>{slot.time}</td>
                  <td>{slot.available}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>

        <button type="submit" class="btn btn-info w-100">
          <Link to="/2" class="nav-link active">
            提交
          </Link>
        </button>
      </form>
    </div>
  );
}

export default EquipmentStepTwo;
