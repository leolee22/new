import { Routes, Route } from "react-router-dom";
import EquipmentStepOne from "./equipment/StepOne";
import EquipmentStepTwo from "./equipment/StepTwo";
import ActivityStepOne from "./activity/StepOne";
import ActivityStepTwo from "./activity/StepTwo";
import Home from "./Home";
import Nav from "./Nav";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <nav>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route
          exact
          path="/equipment/StepOne"
          element={<EquipmentStepOne />}
        ></Route>
        <Route
          exact
          path="/equipment/StepTwo"
          element={<EquipmentStepTwo />}
        ></Route>

        <Route
          exact
          path="/activity/StepOne"
          element={<ActivityStepOne />}
        ></Route>
        <Route
          exact
          path="/activity/StepTwo"
          element={<ActivityStepTwo />}
        ></Route>
      </Routes>
    </nav>
  );
}

export default App;
