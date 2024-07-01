// OptionOne.js

import React, { useState } from "react";

const OptionOne = ({ item, subItem }) => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [showDateLists, setShowDateLists] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleCheckboxChange = (event, subItemValue) => {
    const itemValue = event.target.value;
    const updatedCheckedItems = [...checkedItems];
    const updatedShowDateLists = [...showDateLists];

    if (updatedCheckedItems.includes(itemValue)) {
      // If the item is already checked, remove it from the array
      const index = updatedCheckedItems.indexOf(itemValue);
      updatedCheckedItems.splice(index, 1);
      updatedShowDateLists.splice(index, 1);
    } else {
      // If the item is not checked, add it to the array
      updatedCheckedItems.push(itemValue);
      updatedShowDateLists.push(subItemValue);
    }

    setCheckedItems(updatedCheckedItems);
    setShowDateLists(updatedShowDateLists);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    // Perform any additional actions with the selected items and date lists
  };

  return (
    <div class="pt-3">
      <h2>{item}</h2>
      <ul className="list-group">
        {subItem.map((subItem) => (
          <li key={subItem} className="list-group-item">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value={subItem}
                checked={checkedItems.includes(subItem)}
                onChange={(event) => handleCheckboxChange(event, subItem)}
              />
              <label className="form-check-label">{subItem}</label>
            </div>
          </li>
        ))}
      </ul>

      {showDateLists.length > 0 && (
        <div class="pt-3">
          <h3>可預約時段</h3>
          {showDateLists.map((subItem) => (
            <div key={subItem} className="mb-4">
              <h4>{subItem}</h4>
              <ul className="list-group">
                <li className="list-group-item">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="12/6"
                    />
                    <label className="form-check-label">12/6</label>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="13/5"
                    />
                    <label className="form-check-label">13/5</label>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="9/12"
                    />
                    <label className="form-check-label">9/12</label>
                  </div>
                </li>
              </ul>
            </div>
          ))}
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            提交
          </button>
        </div>
      )}

      {submitted && (
        <div className="mt-4 alert alert-success" role="alert">
          Form submitted successfully!
        </div>
      )}
    </div>
  );
};

export default OptionOne;
