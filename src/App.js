import { Routes, Route } from "react-router-dom";
import EquipmentStepOne from "./equipment/StepOne";
import EquipmentStepTwo from "./equipment/StepTwo";
import ActivityStepOne from "./activity/StepOne";
import MyActivity from "./activity/MyActivity";
import MyEquipment from "./equipment/MyEquipment";
import MemberPointStepOne from "./MemberPoint/StepOne";
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
          path="/activity/MyActivity"
          element={<MyActivity />}
        ></Route>
        <Route
          exact
          path="/equipment/MyEquipment"
          element={<MyEquipment />}
        ></Route>
        <Route
          exact
          path="/MemberPoint/StepOne"
          element={<MemberPointStepOne />}
        ></Route>
      </Routes>
    </nav>
  );
}

export default App;
