import TableData from "./TableData";
import TopBar from "./TopBar";
import MyBreadcrumbs from "./BreadCrumb";
import { useState } from "react";
import ThemHoKhau from "./ThemHoKhau";

function HoKhau() {
  const [isAddMemberClick, setAddMemberClick] = useState(false);

  const handleAddMemberClick = () => {
    setAddMemberClick(true);
  };
  return (
    <div>
      <h1 className="text-3xl font-semibold text-blue-gray-700">Hộ khẩu</h1>
      {isAddMemberClick ? (
        <ThemHoKhau />
      ) : (
        <div>
          <TopBar onAddMemberClick={handleAddMemberClick} /> <TableData />
        </div>
      )}
    </div>
  );
}

export default HoKhau;
