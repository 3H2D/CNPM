import Admin from "./TableData/Admin.jsx";
import TopBar from "./TopBar";
import MyBreadcrumbs from "./BreadCrumb";
import { useContext, useState } from "react";
import ThemHoKhau from "./ThemHoKhau";
import { SearchProvider } from "./Context/SearchContext.jsx";
import { RoleContext, RoleProvider } from "./Context/RoleContext.jsx";
import User from "./TableData/User.jsx";

function HoKhau() {
  const [isAddMemberClick, setAddMemberClick] = useState(false);
  const { role } = useContext(RoleContext);

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
          <SearchProvider>
            <TopBar />
            {role === 1 ? <Admin /> : <User />}
          </SearchProvider>
        </div>
      )}
    </div>
  );
}

export default HoKhau;
