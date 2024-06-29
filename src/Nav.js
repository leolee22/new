import { Link } from "react-router-dom";

function Nav() {
  return (
    <div class="mb-3">
      <nav class="navbar bg-body-secondary">
        <div class="container">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/" class="nav-link active">
                預約設施
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
