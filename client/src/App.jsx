import { useState } from "react";
import LogIn from "./components/LogIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./components/Dashboard";
import { RoleProvider } from "./components/Context/RoleContext.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <RoleProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoard />}></Route>
          <Route
            path="/hokhau"
            element={<DashBoard redirect="hokhau" />}
          ></Route>
          <Route
            path="/hokhau/view/:id"
            element={<DashBoard redirect="viewhokhau" />}
          ></Route>
          <Route
            path="/nhankhau"
            element={<DashBoard redirect="nhankhau" />}
          ></Route>
          <Route
            path="/phananh"
            element={<DashBoard redirect="phananh" />}
          ></Route>
          <Route path="/login" element={<LogIn />}></Route>
          <Route
            path="/nhankhau/themnhankhau"
            element={<DashBoard redirect="themhokhau" />}
          ></Route>
          <Route
            path="/nhankhau/edit/:id"
            element={<DashBoard redirect="editnhankhau" />}
          ></Route>
          <Route
            path="/nhankhau/view/:id"
            element={<DashBoard redirect="viewnhankhau" />}
          ></Route>
          <Route
            path="/nhankhau/dontamtru"
            element={<DashBoard redirect="dontamtru" />}
          ></Route>
          <Route
            path="/nhankhau/dontamvang"
            element={<DashBoard redirect="dontamvang" />}
          ></Route>
          <Route
            path="/phananh/phanhoi/:id"
            element={<DashBoard redirect="phanhoi" />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </RoleProvider>
  );
}

export default App;
