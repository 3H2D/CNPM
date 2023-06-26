import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { useState } from "react";
import HoKhau from "./HoKhau";
import PhanAnh from "./PhanAnh";
import MyBreadcrumbs from "./BreadCrumb";
import ThemHoKhau from "./ThemHoKhau";
import EditNhanKhau from "./EditNhanKhau.jsx";
import ViewNhanKhau from "./ViewNhanKhau.jsx";
import DonTamVang from "./DonTamVang.jsx";
import DonTamTru from "./DonTamTru.jsx";
import FeedbackResponse from "./FeedbackResponse";

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
      case "editnhankhau":
        return <EditNhanKhau />;
      case "viewnhankhau":
        return <ViewNhanKhau />;
      case "dontamtru":
        return <DonTamTru />;
      case "dontamvang":
        return <DonTamVang />;
      case "phanhoi":
        return <FeedbackResponse />;
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
