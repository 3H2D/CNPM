import { useState } from "react";
import LogIn from "./components/LogIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./components/Dashboard";
import HoKhau from "./components/HoKhau";
import ThemHoKhau from "./components/ThemHoKhau";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoard />}></Route>
        <Route path="/hokhau" element={<DashBoard redirect="hokhau" />}></Route>
        <Route
          path="/phananh"
          element={<DashBoard redirect="phananh" />}
        ></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/hokhau/themnhankhau" component={ThemHoKhau} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
