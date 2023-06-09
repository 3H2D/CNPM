import { useState } from "react";
import LogIn from "./components/LogIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./components/Dashboard";
import { RoleProvider } from "./components/Context/RoleContext.jsx";
import { ToastContainer, toast } from 'react-toastify';
import {IdProvider} from "./components/Context/IdContext.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <RoleProvider>
      <IdProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DashBoard/>}></Route>
            <Route
                path="/hokhau"
                element={<DashBoard redirect="hokhau"/>}
            ></Route>
            <Route
                path="/hokhau/view/:id"
                element={<DashBoard redirect="viewhokhau"/>}
            ></Route>
            <Route
                path="/nhankhau"
                element={<DashBoard redirect="nhankhau"/>}
            ></Route>
            <Route
                path="/phananh"
                element={<DashBoard redirect="phananh"/>}
            ></Route>
            <Route
                path="/thongke"
                element={<DashBoard redirect="thongke"/>}
            ></Route>
            <Route
                path="/temporary"
                element={<DashBoard redirect="temporary"/>}
            ></Route>
            <Route
                path="/account/:id"
                element={<DashBoard redirect="account"/>}
            ></Route>
            <Route path="/login" element={<LogIn/>}></Route>
            <Route
                path="/nhankhau/themnhankhau"
                element={<DashBoard redirect="themhokhau"/>}
            ></Route>
            <Route
                path="/nhankhau/edit/:id"
                element={<DashBoard redirect="editnhankhau"/>}
            ></Route>
            <Route
                path="/nhankhau/view/:id"
                element={<DashBoard redirect="viewnhankhau"/>}
            ></Route>
            <Route
                path="/nhankhau/dontamtru"
                element={<DashBoard redirect="dontamtru"/>}
            ></Route>
            <Route
                path="/nhankhau/dontamvang"
                element={<DashBoard redirect="dontamvang"/>}
            ></Route>
            <Route
                path="/phananh/phanhoi/:id"
                element={<DashBoard redirect="phanhoi"/>}
            ></Route>
          </Routes>
        </BrowserRouter>
      </IdProvider>
      <ToastContainer/>
    </RoleProvider>
  );
}

export default App;
