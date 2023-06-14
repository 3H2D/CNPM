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
      <MyBreadcrumbs />
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
