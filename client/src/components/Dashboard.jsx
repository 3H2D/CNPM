import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { useState } from "react";
import HoKhau from "./HoKhau";
import PhanAnh from "./PhanAnh";

function DashBoard({ redirect }) {
  const [selectedMenu, setSelectedMenu] = useState("");

  const renderContent = () => {
    switch (selectedMenu) {
      case "hokhau":
        return <HoKhau />;
      case "phananh":
        return <PhanAnh />;
      // Add more cases for other menu options
      default:
        return null;
    }
  };

  return (
    <div class="flex flex-row-reverse gap-4">
      <div class="flex-1 p-4 m-4">{renderContent()}</div>
      <div class="flex-none">
        <Sidebar click={setSelectedMenu} />
      </div>
    </div>
  );
}

export default DashBoard;
