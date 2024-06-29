import { Routes, Route } from "react-router-dom";
import StepOne from "./equipment/StepOne";
import StepTwo from "./equipment/StepTwo";
import Nav from "./Nav";

function App() {
  return (
    <nav>
      <Nav />
      <Routes>
        <Route exact path="/" element={<StepOne />}></Route>
        <Route exact path="/StepTwo" element={<StepTwo />}></Route>
      </Routes>
    </nav>
  );
}

export default App;
