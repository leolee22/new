import { Link } from "react-router-dom";

function Nav() {
  return (
    <div class="mb-3">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link to="/" class="nav-link active">
            社區客廳
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/MemberPoint/StepOne" class="nav-link active">
                  我的積分
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/equipment/MyEquipment" class="nav-link active">
                  我的預約
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/equipment/StepOne" class="nav-link active">
                  預約設施
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/activity/MyActivity" class="nav-link active">
                  我的活動
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/activity/StepOne" class="nav-link active">
                  活動報名
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/" class="nav-link active">
                  登出
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
