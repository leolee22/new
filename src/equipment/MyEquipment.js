const data = [
  {
    name: "大家齊跑步",
    state: "取消",
    date: "2024-06-29",
    time: "11:00 至 13:00",
  },
  {
    name: "大家齊跑步",
    state: "取消",
    date: "2024-06-29",
    time: "11:00 至 13:00",
  },
  {
    name: "大家齊跑步",
    state: "取消",
    date: "2024-06-29",
    time: "11:00 至 13:00",
  },
];

function MyActivity() {
  return (
    <div class="container">
      <h3>我的預約</h3>
      {data.map((data) => (
        <div class="pb-3">
          <div class="card bg-info-subtle">
            <div class="card-header text-bg-info p-3">
              <h3>細項：{data.name}</h3>
            </div>
            <div class="card-body">
              <p class="card-text">
                執行：{" "}
                <button type="button" class="btn btn-danger">
                  {data.state}
                </button>
              </p>

              <p class="card-text">預約日期：{data.date}</p>
              <p class="card-text">預約時間：{data.time}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyActivity;
