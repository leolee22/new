import "react-datepicker/dist/react-datepicker.css";
import "../CalendarPage.css"; // Import custom CSS file for styling
import A from "../img/1.jpg";

function Content() {
  const activity = [
    {
      id: 1,
      item: "活動1",
      describe: "活動描述活動描述活動描述活動描述活動描述",
    },
    {
      id: 2,
      item: "活動2",
      describe: "活動描述活動描述活動描述活動描述活動描述",
    },
  ];
  return (
    <div class="container mt-3">
      <div class="row">
        {activity.map((activityItem) => (
          <>
            <div class="col-12 mt-3">
              <div class="card">
                <img src={A} alt="I am A" width={"100%"} />
                <div class="card-body">
                  <h5 class="card-title">{activityItem.item}</h5>
                  <p class="card-text">{activityItem.describe}</p>
                  <button type="submit" class="btn btn-info w-100">
                    報名
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Content;
