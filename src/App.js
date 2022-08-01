import { Routes, Route } from "react-router-dom";

import Attendance from "./components/Attendace/Attendance";

function App() {
  return (
  <>
    <Routes>
      <Route path="" element={<Attendance />} ></Route>
    </Routes>
  
  </>
  );
}

export default App;
