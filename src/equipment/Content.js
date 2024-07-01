import { useNavigate } from "react-router-dom";

const DataDisplay = ({ item }) => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/equipment/StepTwo"); // Navigates to '/another-page'
  };
  return (
    <div class="container pt-3">
      <div class="card bg-info-subtle">
        <div class="card-header text-bg-info p-3">
          <h2>{item}</h2>
        </div>
        <div class="card-body">
          <p class="card-text">我的積分:23</p>
          <p class="card-text">你已換領積分</p>
          <p class="card-text">備註：換領6盒綠茶及餅乾</p>
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
      </div>
    </div>
  );
};

export default DataDisplay;
