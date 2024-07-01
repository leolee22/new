const data = [
  {
    name: "大家齊跑步",
    state: "待批核",
    date: "2024-06-29",
    time: "11:00 至 13:00",
  },
  {
    name: "大家齊跑步",
    state: "待批核",
    date: "2024-06-29",
    time: "11:00 至 13:00",
  },
  {
    name: "大家齊跑步",
    state: "待批核",
    date: "2024-06-29",
    time: "11:00 至 13:00",
  },
];

function MyActivity() {
  return (
    <div class="container">
      <h3>我的活動</h3>
      {data.map((data) => (
        <div class="pb-3">
          <div class="card bg-info-subtle">
            <div class="card-header text-bg-info p-3">
              <h3>活動名稱：{data.name}</h3>
            </div>
            <div class="card-body">
              <p class="card-text">狀態：{data.state}</p>
              <p class="card-text">日期：{data.date}</p>
              <p class="card-text">時間：{data.time}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyActivity;
