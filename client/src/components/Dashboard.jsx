import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { useState } from "react";
import HoKhau from "./HoKhau";
import PhanAnh from "./PhanAnh";
import MyBreadcrumbs from "./BreadCrumb";
import ThemHoKhau from "./ThemHoKhau";

function DashBoard({ redirect }) {
  const [selectedMenu, setSelectedMenu] = useState("");

  const renderContent = () => {
    switch (redirect) {
      case "hokhau":
        return <HoKhau />;
      case "phananh":
        return <PhanAnh />;
      case "themhokhau":
        return <ThemHoKhau />;
      // Add more cases for other menu options
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-row-reverse gap-4">
      <div className="flex-1 p-4 m-4">{renderContent()}</div>
      <div className="flex-none">
        <Sidebar click={setSelectedMenu} />
      </div>
    </div>
  );
}

export default DashBoard;
