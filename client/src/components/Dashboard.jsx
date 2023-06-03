import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { useState } from "react";
import HoKhau from "./HoKhau";

function DashBoard({ redirect }) {
  const [selectedMenu, setSelectedMenu] = useState("");

  return (
    <div class="flex flex-row-reverse gap-4">
      <div class="flex-1 p-4 m-4">
        {selectedMenu === "hokhau" && <HoKhau />}
      </div>
      <div class="flex-none">
        <Sidebar click={setSelectedMenu} />
      </div>
    </div>
  );
}

export default DashBoard;
